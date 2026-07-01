import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you. Whether you have a question about our
          services, staffing solutions, or technology consulting, our team is
          ready to help.
        </p>
      </div>

      <div className="contact-container">

        {/* Company Details */}

        <div className="company-info">

          <h2>Get In Touch</h2>

          <div className="info-box">
            <h3>📍 Office Address</h3>
            <p>
              NextGen Solutions Corporation
              <br />
              1301 K Street NW, Suite 300W, Washington DC 20005
              <br />
              United States
            </p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+1 (202) 869-8670</p>
          </div>

          <div className="info-box">
            <h3>✉ Email</h3>
            <p>SLED@NextGenSC.com</p>
          </div>

          <div className="info-box">
            <h3>🕒 Business Hours</h3>
            <p>
              Monday - Friday
              <br />
              9:00 AM - 6:00 PM
            </p>
          </div>

        </div>

        {/* Contact Form */}

        <div className="contact-form">

          <h2>Send Us a Message</h2>

          <form>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;