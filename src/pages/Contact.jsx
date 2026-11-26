// contact page
import { LinkedinLogoIcon, GithubLogoIcon, AtIcon, ArrowSquareOutIcon } from "@phosphor-icons/react"
import linkedInPFP from '../assets/linkedinpfp.jpg'
import mailPFP from '../assets/mailpfp.jpg'

function Contact() {
  return (
    <main className="contact-page">
      <section>
        <div className="page-title">
          <h1>Contact</h1>
          <p>Reach out using the links below.</p>
        </div>
        <div className="contact-top">

          <div className="card">
            <div className="card-text">
              <h2>LinkedIn</h2>
              <a href="https://linkedin.com/in/creightone">
                <img src={linkedInPFP} alt="linkedin profile picture" />
                <h3>CreightonE <ArrowSquareOutIcon weight='bold' /></h3>
              </a>
            </div>
            <div className="logo-group">
              <div className="logo"><LinkedinLogoIcon/></div>
            </div>
          </div>

          <div className="card">
            <div className="card-text">
              <h2>GitHub</h2>
              <a href="https://github.com/CreightonEli">
                <img src="https://avatars.githubusercontent.com/u/89100976" alt="GitHub profile picture" />
                <h3>CreightonEli <ArrowSquareOutIcon weight='bold' /></h3>
              </a>
            </div>
            <div className="logo-group">
              <div className="logo"><GithubLogoIcon/></div>
            </div>
          </div>
        </div>

        <div className="contact-bottom">
          <div className="card">
            <div className="card-text">
              <h2>Email</h2>
              <a href="mailto:elijahcreighton@gmail.com">
                <img src={mailPFP} alt="Gmail profile picture" />
                <h3>elijahcreighton@gmail.com <ArrowSquareOutIcon weight='bold' /></h3>
              </a>
            </div>
            <div className="logo-group">
              <div className="logo"><AtIcon/></div>
            </div>
          </div>
        </div>
        
      </section>
    </main>  
  )
}

export default Contact