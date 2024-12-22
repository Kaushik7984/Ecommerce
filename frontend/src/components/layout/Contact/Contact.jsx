import { useState } from "react";
import "./Contact.css";
import MetaData from "../MetaData";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }
    return newErrors;
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors before submitting.");
      return;
    }

    setErrors({});
    toast.success("Mail Sent Successfully");
    // Optionally clear the form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contactContainer">
      <MetaData title={"Contact Us"} />
      <h2>Contact Us</h2>
      <div className="contactContent">
        <form className="contactForm" onSubmit={formSubmitHandler}>
          <div className="formGroup">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="formGroup">
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="formGroup">
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="formGroup">
            <textarea
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <button type="submit" className="submitButton">
            Send Message
          </button>
        </form>
        <div className="contactInfo">
          <h3>Get in Touch</h3>
          <a href="mailto:kaushiktapaniya07@gmail.com">
            Email: kaushiktapaniya07@gmail.com
          </a>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Main St, City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
