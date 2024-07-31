// global variables
let canvas;
let ctx;
let flowField;
let flowFieldAnimation;

window.onload = function(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth + 10;
    canvas.height = window.innerHeight + 10;
    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate(0);
}

window.addEventListener('resize', function(){
    cancelAnimationFrame(flowFieldAnimation);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate(0);
});

// interact with mouse position
const mouse = {
    x: 0,
    y: 0,
}
window.addEventListener('mousemove', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
})

class FlowFieldEffect {
    // declare variables
    #ctx;
    #width;
    #height;

    // assign values to private variables using a constructor
    constructor(ctx, width, height){
        this.#ctx = ctx;
        this.#ctx.lineWidth = 1;
        this.#width = width;
        this.#height = height;
        this.lastTime = 0;
        this.interval = 1000/60;
        this.timer = 0;
        this.cellSize = 20;
        this.#createGradient;
        this.#createGradient();
        this.#ctx.strokeStyle = this.gradient;
        this.radius = 0;
        this.vr = 0.006;
    }
    #createGradient(){
        this.gradient = this.#ctx.createLinearGradient(0, this.#height, this.#width, 0);
        this.gradient.addColorStop("0.1","#ff5c33");
        this.gradient.addColorStop("0.2","#ff66b3");
        this.gradient.addColorStop("0.4","#ccccff00");
        this.gradient.addColorStop("0.6","#b3ffff00");
        this.gradient.addColorStop("0.8","#9f44b1");
        this.gradient.addColorStop("0.9","#847be6");
    }
    #drawLine(angle, x, y){
        let positionX = x;
        let positionY = y;
        let dx = mouse.x - positionX;
        let dy = mouse.y - positionY;
        let distance = dx * dx + dy * dy;

        // max length
        if (distance > 300000) distance = 300000

        // min length
        else if (distance < 40000) distance = 40000

        let length = distance*0.00005;
        this.#ctx.beginPath();
        this.#ctx.moveTo(x, y);
        this.#ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
        this.#ctx.stroke();
    }
    animate(timeStamp){
        const deltaTime = timeStamp - this.lastTime;
        this.lastTime = timeStamp;
        if (this.timer > this.interval){
            this.#ctx.clearRect(0, 0, this.#width, this.#height);
            this.radius += this.vr;
            if (this.radius > 4 || this.radius < -4) this.vr *= -1;

            for (let y = 0; y < this.#height; y += this.cellSize){
                for (let x = 0; x < this.#width; x += this.cellSize){
                    const angle = (Math.cos(x * .01) + Math.sin(y * .01)) * this.radius;
                    this.#drawLine(angle, x, y);
                }
            }
            this.timer = 0;
        } else {
            this.timer += deltaTime;
        }
        flowFieldAnimation = requestAnimationFrame(this.animate.bind(this));
    }
}