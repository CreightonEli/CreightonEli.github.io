// Nav bar for the website
import { Link } from 'react-router-dom';
import { SunIcon } from '@phosphor-icons/react';

function Header() {
  return (
    <header>
        <nav>
            <div className='logo'>
              <Link to={"/"}>
                {/* <img src="../src/assets/hero-placeholder.png" alt="" /> */}
                EC
              </Link>
            </div>
            <ul>
                <Link to={"/"}><li>Home</li></Link>
                <Link to={"/projects"}><li>Projects</li></Link>
                <Link to={"/resume"}><li>Resume</li></Link>
                <Link to={"/contact"}><li>Contact</li></Link>
            </ul>
            <button className='dark-mode-btn'>
              {/* <span>
                Dark mode
              </span> */}
              <SunIcon size={24} />
            </button>
        </nav>
    </header>
  )
}

export default Header