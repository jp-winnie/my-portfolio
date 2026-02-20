export default function Home () {
    return (
    <section id="Home Section" className="home--section">
        <div className="home--section--content--box">
            <div className="home--section--content">
                <p className="home--name">Hi, I am Winfreid Jullain M. Palacio</p>
                <h1 className="home--section--title">
                    <span>Frontend Developer</span>         
                </h1>
                <p className="home--section--description"> Graduated from De La Salle University – Dasmariñas 
                    <br /><br />
                    In the Philippines                  
                </p>
                 <button className="home--button">Get in Touch</button>
            </div>           
        </div>
        <div className="home--image">
            <img src="./images/grad.png" alt="Home Section" />
        </div>
    </section>
    );    
}

