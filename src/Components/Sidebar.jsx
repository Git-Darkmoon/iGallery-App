import logo from "../assets/iGallery_favicon.svg"
import { LiaTimesSolid } from "react-icons/lia"
import { useGlobalContext } from "../context"

function Sidebar() {
  const { isSideOpen, closeSidebar } = useGlobalContext()

  return (
    <section className={`sidebar-overlay ${isSideOpen && "showSidebar"}`}>
      <LiaTimesSolid onClick={closeSidebar} />
      <aside className="sidebar">
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
      </aside>
    </section>
  )
}

export default Sidebar
