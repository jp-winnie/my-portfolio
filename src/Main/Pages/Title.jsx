import { useEffect } from "react";

export default function Title() {
  useEffect(() => {
    const sections = [
      { id: "Home Section", title: "Portfolio | Home" },
      { id: "Skills Section", title: "Portfolio | Skills" },
      { id: "About Section", title: "Portfolio | About Me" },
      { id: "Projects Section", title: "Portfolio | Projects" },
      { id: "Contact Section", title: "Portfolio | Contact" },
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; 
      for (let section of sections) {
        const el = document.getElementById(section.id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          document.title = section.title;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
