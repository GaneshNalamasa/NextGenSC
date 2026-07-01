import "./Home.css";
import heroImage from "../assets/images/hero-image.png";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="home">

        <div className="hero-left">

          <p className="welcome-text">
            WELCOME TO NEXTGEN SOLUTIONS CORPORATION
          </p>

          <h1 className="hero-title">
            Empowering Businesses
            <br />
            <span>Through Technology & Talent</span>
          </h1>

          <p className="hero-description">
            NextGen Solutions Corporation is a trusted IT Staffing and Technology
            Consulting company delivering innovative solutions in Artificial
            Intelligence, Cloud Computing, Cyber Security, Data Analytics,
            Project Management, and IT Consulting for government and commercial
            organizations across the United States.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Services
            </button>

            <button className="secondary-btn">
              Contact Us
            </button>
          </div>

        </div>

        <div className="hero-right">
          <img src={heroImage} alt="IT Solutions" />
        </div>

      </section>

      {/* Why Choose Us */}

      <section className="why-us">

        <h2>Why Choose NextGen Solutions Corporation?</h2>

        <div className="why-grid">

          <div className="why-card">
            <h3>Innovation</h3>
            <p>
              Delivering modern technology solutions that help organizations
              grow faster and smarter.
            </p>
          </div>

          <div className="why-card">
            <h3>Experienced Professionals</h3>
            <p>
              Highly skilled consultants with expertise across multiple
              technologies and industries.
            </p>
          </div>

          <div className="why-card">
            <h3>Government Expertise</h3>
            <p>
              Supporting federal, state, and local government agencies with
              trusted IT solutions.
            </p>
          </div>

          <div className="why-card">
            <h3>Client-Centric Approach</h3>
            <p>
              Building long-term partnerships by delivering quality, innovation,
              and exceptional customer service.
            </p>
          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="stats">

        <div className="stat-box">
          <h1>100+</h1>
          <p>IT Professionals</p>
        </div>

        <div className="stat-box">
          <h1>50+</h1>
          <p>Projects Delivered</p>
        </div>

        <div className="stat-box">
          <h1>20+</h1>
          <p>Technology Domains</p>
        </div>

        <div className="stat-box">
          <h1>95%</h1>
          <p>Client Satisfaction</p>
        </div>

      </section>

      {/* CTA */}

      <section className="cta">

        <h2>Ready to Transform Your Business?</h2>

        <p>
          Partner with NextGen Solutions Corporation to accelerate your
          digital transformation journey with innovative technology
          solutions and trusted IT staffing services.
        </p>

        <button className="primary-btn">
          Get Started
        </button>

      </section>

    </>
  );
}

export default Home;