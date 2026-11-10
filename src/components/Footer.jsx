// Footer for the website
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className='footer-top'>
                <div className='text-group'>
                    <span>
                        Elijah Creighton
                    </span>
                    <p>Building digital products with clarity, care, and a little personality.</p>

                </div>
                <div className='link-group'>
                    <div className='link-top'>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/projects"}>Projects</Link></li>
                            <li><Link to={"/resume"}>Resume</Link></li>
                            <li><Link to={"/contact"}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className='link-bottom'>
                        <ul>
                            <li><a href="">GitHub</a></li>
                            <li><a href="">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <span className='text-left'>© 2026 ELIJAH CREIGHTON</span>
                <span className='text-right'>DESIGNED WITH INTENT</span>
            </div>
        </footer>
    )
}

export default Footer