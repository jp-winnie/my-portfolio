export default function Contact () {
    return (
        <section id="Contact Section" className="contact--section">
            <div>
                <p className="contact--sub--title">Get In Touch</p>
                <h2 className="sub--contact--title">Contact Me</h2>
            </div>
            <form className="contact--form--container">
                <div className="contact--container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-info">First Name</span>
                        <input type="text" className="contact--input text-info" name="first-name"  id="first-name" required />
                    </label>

                     <label htmlFor="last-name" className="contact--label">
                        <span className="text-info">Last Name</span>
                        <input type="text" className="contact--input text-info" name="last-name"  id="last-name" required />
                    </label>

                      <label htmlFor="email" className="contact--label">
                        <span className="text-info">Email</span>
                        <input type="email" className="contact--input text-info" name="email"  id="email" required />
                    </label>

                       <label htmlFor="phone-number" className="contact--label">
                        <span className="text-info">Phone-Number</span>
                        <input type="number" className="contact--input text-info" name="phone-number"  id="phone-number" required />
                    </label>

                      <label htmlFor="choose-topic" className="contact--label">
                        <span className="text-info">Choose a Topic</span>
                        <select id="choose-topic" className="contact--input text-info">
                            <option>Select One..</option>
                            <option>Item 1</option>
                            <option>Item 2</option>
                            <option>Item 3</option>
                        </select>
                    </label>

                     <label htmlFor="message" className="contact--label">
                        <span className="text-info">Message</span>
                        <textarea className="contact--input text-info" id="message" rows="8" placeholder="Type your message..."/>
                    </label>

                    <label htmlFor="checkbox" className="checkbox--label">
                        <input type="checkbox" required name="checkbox" id="checkbox" />
                        <span className="footer--text">I accept the terms</span>
                    </label>
                    <div>
                        <button className="submit--button">Submit</button>
                    </div>
                </div>
            </form>
            
        </section>
    );
}