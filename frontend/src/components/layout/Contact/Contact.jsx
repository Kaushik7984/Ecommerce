import React from "react";
import "./Contact.css";
import MetaData from "../MetaData";
import toast from "react-hot-toast";


const Contact = () => {
    const formSubmitHandler =()=>{
        toast.success("Mail Sent Successfully")
    }
    return (
        <div className="contactContainer">
            <MetaData title={"Contact Us"} />
            <h2>Contact Us</h2>
            <div className="contactContent" onSubmit={formSubmitHandler}>
                <form className="contactForm">
                    <input type="text" placeholder="Your Name" name="name" required />
                    <input type="email" placeholder="Your Email" name="email" required />
                    <input type="text" placeholder="Subject" name="subject" />
                    <textarea placeholder="Your Message" name="message" required></textarea>
                    <button type="submit" className="submitButton">Send Message</button>
                </form>
                <div className="contactInfo">
                    <h3>Get in Touch</h3>
                    <a href="mailto:kaushiktapaniya07@gmail.com">Email: kaushiktapaniya07@gmail.com</a>
                    <p>Phone: +123 456 7890</p>
                    <p>Address: 123 Main St, City, Country</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
