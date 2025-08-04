import { useState } from "react";
import "../styles/Form.css";

function Form() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone_no: formData.phone,
      message: formData.message,
    };

    fetch("https://api.creoradevelopers.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Form submitted successfully:", data);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <section className="demo-section">
      <div className="demo-card">
        <h2 className="demo-title">Book a Demo</h2>
        <p className="demo-subtitle">
          Book a demo and step into the immersive world we’re creating.
        </p>

        <form className="demo-form" onSubmit={handleSubmit}>
          <div className="demo-row">
            <div className="demo-field">
              <input
                type="text"
                name="firstName"
                placeholder="First name*"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="demo-field">
              <input
                type="text"
                name="lastName"
                placeholder="Last name*"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="demo-row">
            <div className="demo-field">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="demo-field">
              <input
                type="text"
                name="phone"
                placeholder="Phone no"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="demo-field full">
            <input
              type="text"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="submit-wrap">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;
