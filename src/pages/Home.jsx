// actual home page. This is the first page that users will see when they visit my website. It will have a brief introduction about me and links to my other pages.
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@phosphor-icons/react';

function Home() {

  return (
    <>
      <main>
        <section>

          {/* <div className="cool-border"></div> */}
          <div className='home-text'>
            <div className="home-intro">

              <div className="intro-title">
                <span>WEB DEVELOPER & DIGITAL DESIGNER</span>
                <h1>Elijah Creighton<span>.</span></h1>
              </div>
              
              <div className="intro-summary">
                <p>I design and build thoughtful digital experiences that turn complex ideas into clear, useful products.</p>
              </div>
              
            </div>

            <div className='button-container'>
              <Link to={"/projects"}>
                <button className='alt-btn'>View projects <ArrowRightIcon/></button>
              </Link>
              <Link to={"/contact"}>
                <button>Contact me <ArrowRightIcon/></button>
              </Link>
            </div>
          </div>
          
          <div className="home-hero-container">
            <canvas id="home-hero"></canvas>
          </div>

        </section>
      </main>
    </>
  )
}

export default Home