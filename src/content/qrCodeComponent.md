## Overview

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H).

### Links

- [Frontend Mentor Challenge Page](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H)
- [Frontend Mentor Solution Page](https://www.frontendmentor.io/solutions/qr-code-component-edNJb4j1JN)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Google Fonts](https://fonts.google.com/specimen/Outfit)

### What I learned

Just looking at the screenshots on the challenge page, it looked like it was as simple as an image and some text wrapped in a centered div. However, I was horribly mistaken. When I tried that it just didn't look right. The text elements were the same width as the image element which just didn't match the original screenshots.

So I threw another div in there to surround the text elements, allowing the image element to be wider than the text below it and maintaining the original margins for those text elements. This made the component look a lot closer to the original screenshots.

Some code snippets because [markdown](https://www.markdownguide.org/) is cool:

```html
<div class="card">
  <img src="images/image-qr-code.png" alt="QR code">
  <div class="textContainer">
    <h1>Improve your front-end skills by building projects</h1>
    <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
  </div>
</div>
```
```css
.card {
  border-radius: 1.3em;
  max-width: 335px;
  background-color: var(--background-color-2);
  margin: 120px auto 50px;
}
```

### Continued development

Going forward I want to begin using a CSS preprocessor like Sass to better organize my styles. I don't think it would've been necessary for a project as small as this, but for a larger project it would be a life saver. I'm so tired of endlessly scrolling up and down through a single CSS file to find the element I'm looking for and make changes to it.