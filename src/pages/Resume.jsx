// resume page
import { FilePdfIcon } from "@phosphor-icons/react"

function Resume() {
    return (
        <main className="resume-page">
            <section>
                <div className="page-title">
                    <h1>Resume</h1>
                    <p>Review my resume here. Download the PDF file below.</p>
                </div>
                <a href="./ElijahCResume.pdf" target="_blank"><button><span>Download </span><FilePdfIcon/></button></a>
                
                <div className="resume-container">
                    <div className="resume-top">
                        <h1>Elijah Creighton</h1>
                        <span>Tampa, FL • (813)543-6531 • <a href="mailto:elijahcreighton@gmail.com">Email</a> • <a href="https://github.com/CreightonEli/">GitHub</a> • <a href="http://www.linkedin.com/in/creightone">LinkedIn</a></span>
                    </div>

                    <div className="resume-section">
                        <h2>Education</h2>
                        <div className="resume-item">
                            <h3>University of South Florida</h3>
                            <p>B.S.I.S. conc. Web Development Technologies</p>
                            <span className="date-span">AUGUST 2021 - DECEMBER 2023, TAMPA</span>
                        </div>
                        <div className="resume-item">
                            <h3>Hillsborough Community College</h3>
                            <p>A.A. Computer Information Systems</p>
                            <span className="date-span">AUGUST 2018 - MAY 2021, PLANT CITY</span>
                        </div>
                    </div>

                    <div className="resume-section">
                        <h2>Projects</h2>
                        <div className="resume-item">
                            <h3>Nullflix</h3>
                            <span className="date-span">JANUARY 2025 - PRESENT</span>
                            <p>Responsive React app that lets users search, filter and explore movies, TV shows and creators using The Movie Database (TMDB) API.</p>
                            <span className="stack-span">React, React Router, Vite, TMDB API, SCSS/CSS custom properties, Phosphor Icons.</span>
                            <ul>
                                <li>Built client-side search, genre and media-type filters that surface trending content and detailed item pages (synopsis, reviews, cast/crew).</li>
                                <li>Implemented API-key onboarding flow storing the user’s TMDB key in localStorage to enable authenticated API calls.</li>
                            </ul>
                            <span><a href="https://nullflix.vercel.app/">Live Site</a> • <a href="https://github.com/CreightonEli/notflix">Github</a></span>
                        </div>
                        <div className="resume-item">
                            <h3>IP Address Tracker</h3>
                            <span className="date-span">AUGUST 2024</span>
                            <p>Responsive IP lookup and mapping app that shows the user’s IP/location on load and lets users search any IP or domain to display location and key network info.</p>
                            <span className="stack-span">HTML5, CSS (custom properties), Flexbox, JavaScript, IP Geolocation API, Leaflet.js.</span>
                            <ul>
                                <li>Integrated IP Geolocation API and Leaflet for its interactive maps, to display initial user IP on a map and update results for searched IPs/domains.</li>
                            </ul>
                            <span><a href="http://creightoneli.github.io/ip-tracker">Live Site</a> • <a href="https://github.com/CreightonEli/ip-tracker">Github</a></span>
                        </div>
                    </div>
                    
                    <div className="resume-section">
                        <h2>Job Experience</h2>
                        <div className="resume-item">
                            <h3>Bright Ice Scoop Shop</h3>
                            <span className="date-span">JULY 2025 - PRESENT, TAMPA</span>
                            <ul>
                                <li>Managed high-volume customer lines efficiently during peak events, maintaining a positive attitude and reducing wait times.</li>
                                <li>Educated customers on product offerings, including detailed flavor profiles and potential allergen cross-contamination risks.</li>
                                <li>Operated POS systems to process cash, credit, and mobile transactions accurately.</li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <h3>King Corona Cigars</h3>
                            <span className="date-span">JULY 2024 - APRIL 2025, TAMPA</span>
                            <ul>
                                <li>Maintained and enhanced Shopify storefront; developed custom front-end components and added product pages to improve catalog accuracy and browsing.</li>
                                <li>Improved page structure and front-end performance through asset optimization and selective script loading.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Resume