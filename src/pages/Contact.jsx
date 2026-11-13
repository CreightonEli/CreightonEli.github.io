// contact page
import { LinkedinLogoIcon, GithubLogoIcon, AtIcon, ArrowSquareOutIcon } from "@phosphor-icons/react"


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
            <div className="logo-group">
              <div className="logo"><LinkedinLogoIcon/></div>
            </div>
            <div className="card-text">
              <h2>LinkedIn</h2>
              <a href="https://linkedin.com/in/creightone">
                <img src="https://media.licdn.com/dms/image/v2/D4E35AQFXUrd2-L9hjg/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1698892687165?e=1795125600&v=beta&t=6PDIuKnmStqC8JEXqYaAN8ZvIrl1KsRX_IB5mpfNiZM" alt="linkedin profile picture" />
                <h3>CreightonE <ArrowSquareOutIcon /></h3>
              </a>
            </div>
          </div>

          <div className="card">
            <div className="logo-group">
              <div className="logo"><GithubLogoIcon/></div>
            </div>
            <div className="card-text">
              <h2>GitHub</h2>
              <a href="https://github.com/CreightonEli">
                <img src="https://avatars.githubusercontent.com/u/89100976" alt="GitHub profile picture" />
                <h3>CreightonEli <ArrowSquareOutIcon /></h3>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-bottom">
          <div className="card">
            <div className="logo-group">
              <div className="logo"><AtIcon/></div>
            </div>
            <div className="card-text">
              <h2>Email</h2>
              <a href="mailto:elijahcreighton@gmail.com">
                <img src="https://lh3.googleusercontent.com/ogw/AF2bZygFAhT__hYbch_8FfheWFKwld0gKzivCNYUam7DibEnGpo=s64-c-mo" alt="Gmail profile picture" />
                <h3>elijahcreighton@gmail.com <ArrowSquareOutIcon /></h3>
              </a>
            </div>
          </div>
        </div>
        
      </section>
    </main>  
  )
}

export default Contact