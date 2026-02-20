import { useState, useEffect} from "react";
import {Link} from "react-scroll";

function NavBar () {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive)
    };

    const closeMenu = () => {
        setNavActive(false);
    };

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    }, []);


    useEffect(() => {
    if (navActive) {
        document.body.classList.add("menu-open");
    } else {
        document.body.classList.remove("menu-open");
    }
    }, [navActive]);

    return (
        <nav className={`navbar ${navActive? "menu-open" : ""}`}>
            <div className="website--logo">
                <img src="./images/logo1.svg" alt="Palacio" />
            </div>
            <a className={`nav--hamburger ${navActive? "active" : ""}`} onClick={toggleNav}>
                <span className="nav--hamburger--line"></span>
                <span className="nav--hamburger--line"></span>
                <span className="nav--hamburger--line"></span>
                </a>
                <div className={`navbar--items ${navActive ? "active" : ""}`}>
                    <ul>
                        <li> 
                            <Link onClick={closeMenu} activeClass = "navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="Home Section" className="navbar--content">Home</Link>
                        </li>
                        <li>
                            <Link onClick={closeMenu} activeClass = "navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="Skills Section" className="navbar--content">Skills</Link>
                        </li>
                          <li>
                            <Link onClick={closeMenu} activeClass = "navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="About Section" className="navbar--content">About</Link>                            
                        </li>
                         <li>
                           <Link onClick={closeMenu} activeClass = "navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="Projects Section" className="navbar--content">Projects</Link>
                        </li>                                         
                    </ul>                    
                </div>
                <Link onClick={closeMenu} activeClass = "navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="Contact Section" className="contact--button">Contact Me</Link>
        </nav>
    );
}

export default NavBar;

