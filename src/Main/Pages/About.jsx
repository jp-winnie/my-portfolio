export default function About () {
    return (
        <section id="About Section" className="about--section">
            <div className="about--section--image">
                <img src="./images/grad3.jpg" alt="About Me" />
            </div>
            <div className="about--container--box">
                <div className="about--section--content">
                    <h1 className="about--section--heading">About Me</h1>
                    <p className="about--section-description">I am Winfreid Jullian M. Palacio, a recent graduate of De La Salle University – Dasmariñas with a Bachelor’s Degree in Computer Science, specializing in Intelligent Systems.  I currently reside in Bacoor, Cavite, and I am seeking an opportunity to begin my professional career in the technology field. My passion for technology developed during the pandemic through extensive hands-on computer use, which sparked a deep interest in how systems work and the impact technology can have on society. This interest led me to pursue continuous learning, building, and improving my technical skills.</p>
                    <p className="about--section-description">During my On-the-Job Training at Larga International Logistics Inc., I gained hands-on experience working in a professional environment and collaborating closely with team members. I was able to apply my academic knowledge to real-world tasks, learn from experienced professionals, and develop practical skills in teamwork, communication, and problem-solving. This reinforced my desire to grow as a professional and build a strong, sustainable career in the industry.</p>
                    <div>
                    <a href="/my-portfolio/resume/palacio_resume.pdf" 
                    download="Palacio_CV.pdf" 
                    className="about--button-resume"
                    >                
                    Download CV               
                    </a>
                </div>
            </div>
        </div>
    </section>
    );
}

