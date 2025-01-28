import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from "../assets"

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
          ${styles.paddingX}
          w-full flex items-center py-5 fixed top-0 z-20
          ${scrolled ? "bg-black/70 backdrop-blur-[2px]" : "bg-transparent"}
        `}
    >
      <div className="w-full flex mx-auto justify-between items-center max-w-7xl">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setToggle(false);
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img className="w-9 h-9" src={logo} alt="Logo" />
          <p className="font-bold">
            Arpan <span className="sm:inline-block hidden">| Web Developer</span>
          </p>
        </Link>
        <ul className="hidden sm:flex gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`
                ${
                  active === link.title
                  ? "text-white"
                  : "text-gray-400"
                }
                hover:text-white font-medium text-sm
              `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`
              ${!toggle ? 'hidden' : 'flex'}
              absolute top-20 right-6 p-6 bg-gradient-to-r from-gray-800 to-gray-950 w-32 z-10 rounded
            `}
          >
            <ul className="flex flex-col gap-4 justify-end items-start">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`
                    ${
                      active === link.title
                      ? "text-white"
                      : "text-gray-400"
                    }
                    hover:text-white font-medium text-sm
                  `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar