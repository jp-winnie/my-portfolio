import Home from "../Home";
import Skills from "../Skills";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import Footer from "../Footer";
import Theme from "../Theme";
import Title from "../Title";

export default function Pages () {
  Title (); 
    return (
        <>
            <Home />
            <Skills />
            <About />
            <Projects />
            <Contact />
            <Footer />
            <Theme />     
        </>
    );
}







