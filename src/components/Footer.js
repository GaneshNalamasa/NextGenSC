import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-column">
          <h2>Capability Statement</h2>
          <ul>
            <li>Artificial Intelligence & Machine Learning</li>
            <li>Cloud Computing</li>
            <li>Cyber Security</li>
            <li>IT Staff Augmentation</li>
            <li>Direct Hire</li>
            <li>IT Project Management</li>
            <li>Data Analysis</li>
          </ul>
        </div>

        <div className="footer-column">
          <h2>Contact Info</h2>

          <div className="contact-block">
            <p className="label">Office Address</p>
            <p>NextGen Solutions Corporation</p>
            <p>1301 K Street NW, Suite 300W</p>
            <p>Washington DC 20005</p>
          </div>

          <div className="contact-block">
            <p className="label">Call Us</p>
            <p>202-869-8640 / 202-869-8670</p>
          </div>

          <div className="contact-block">
            <p className="label">Mail Us</p>
            <p>sales@nextgensc.com</p>
          </div>
        </div>

        <div className="footer-column newsletter">
          <h2>Stay Connected</h2>
          <p>Subscribe to get latest updates about our services and technology solutions.</p>

          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 NextGen Solutions Corporation. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;