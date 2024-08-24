import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a server)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Clear form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "600px",
        margin: "auto",
        backgroundColor: "#343a40", // Dark background for the container
        color: "#ffffff", // White text color
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1>Contact Us</h1>
      {submitted && (
        <p>Thank you for your message! We will get back to you soon.</p>
      )}
      <form onSubmit={handleSubmit}>
        <div
          style={{
            marginBottom: "1rem",
          }}
        >
          <label
            htmlFor="name"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              color: "#ffffff",
            }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "4px",
              border: "1px solid #ced4da",
              backgroundColor: "#ffffff",
              color: "#495057",
            }}
          />
        </div>
        <div
          style={{
            marginBottom: "1rem",
          }}
        >
          <label
            htmlFor="email"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              color: "#ffffff",
            }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "4px",
              border: "1px solid #ced4da",
              backgroundColor: "#ffffff",
              color: "#495057",
            }}
          />
        </div>
        <div
          style={{
            marginBottom: "1rem",
          }}
        >
          <label
            htmlFor="message"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              color: "#ffffff",
            }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "4px",
              border: "1px solid #ced4da",
              backgroundColor: "#ffffff",
              color: "#495057",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "0.75rem 1.25rem",
            backgroundColor: "#007BFF",
            color: "#ffffff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};
export default ContactUs;
