import data from "../../information/index.json";

export default function Skills () {
    return (
        <section className="skills--section" id="Skills Section">
            <div className="portfolio--container">
                <p className="section--title">My Skills</p>
                <h2 className="skills--main--heading">My Expertise</h2>
            </div>
            <div className="skills--container">
                {data?.skills?.map((item, index) => (
                    <div key={index} className="skills--section--card">
                        <div className="skills--section--image">
                            <img src={item.src} alt="Product Chain" />
                        </div>    
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">{item.title}</h3>  
                            <p className="skills--section--description">{item.description}</p>                     
                        </div>          
                    </div>
                ))}
            </div>
        </section>
    );
}