// actual home page. This is the first page that users will see when they visit my website. It will have a brief introduction about me and links to my other pages.
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@phosphor-icons/react';
import { useTypewriter } from "../hooks/useTypewriter";

const WORDS = ["cool", "fun", "smart", "beautiful"];

function Home() {
  const typedText = useTypewriter(WORDS);

  return (
    <>
      <main>
        <section>

          {/* <div className="cool-border"></div> */}
          <div className='home-text'>
            <div className="home-intro">

              <div className="intro-title">
                <span>WEB DEVELOPMENT & DESIGN</span>
                <h1>Elijah Creighton<span>.</span></h1>
              </div>
              
              <div className="intro-summary">
                <p>I design and build thoughtful digital experiences that turn complex ideas into useful products.</p>
              </div>
              
            </div>

            <div className='button-container'>
              <Link to={"/projects"}>
                <button className='alt-btn'>View projects <ArrowRightIcon weight='bold'/></button>
              </Link>
              <Link to={"/contact"}>
                <button>Contact me <ArrowRightIcon weight='bold'/></button>
              </Link>
            </div>
          </div>
          
          <div className="home-hero-container">
            <div className="home-hero">
              {/* <div className='hero-circle'></div> */}
              <div className='product-card'>
                <span>PRODUCT</span>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className='dev-card'>
                <div className='dev-card-top'>
                  <span>DEVELOPMENT</span>
                  <div></div>
                </div>
                <p>Create something {typedText}
                <span className="cursor">█</span></p>
              </div>
            </div>
          </div>

        </section>
      </main>
    </>
  )
}

export default Home