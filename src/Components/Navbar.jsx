// import logo from "../assets/iGallery_logo.webp"
import logo from "../assets/iGallery_favicon.svg"
import { BsGithub, BsFillSunFill, BsFillMoonFill } from "react-icons/bs"
import { useGlobalContext } from "../context"

function Navbar() {
  const { isDarkTheme, toggleDarkMode } = useGlobalContext()

  return (
    <nav className="navbar">
      <div className="primary-nav">
        <picture className="logo-container">
          <img src={logo} alt="" id="logo" />
          <h1>iGallery App</h1>
        </picture>
        <ul>
          <li>
            <a
              href="https://unsplash.com/documentation#search-photos"
              target="_blank"
              rel="noopener noreferrer"
            >
              API Documentation
            </a>
          </li>
          <li>
            <a
              href="https://unsplash.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Site
            </a>
          </li>
        </ul>
      </div>
      <div className="secondary-nav">
        <div className="socials">
          <a
            href="https://github.com/Git-Darkmoon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="icon" />
          </a>
          <button className="toggle-btn" onClick={toggleDarkMode}>
            {isDarkTheme ? (
              <BsFillSunFill className="icon" />
            ) : (
              <BsFillMoonFill className="icon" />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
