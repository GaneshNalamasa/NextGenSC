import "./Home.css";
import heroImage from "../assets/images/hero-image.png";

function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero-section">
        <div className="container hero-container">

          <div className="hero-left">

            <p className="tagline">
              NEXTGEN SOLUTIONS CORPORATION
            </p>

            <h1 className="title">
              Empowering Businesses
              <span> with Technology & Talent</span>
            </h1>

            <p className="subtitle">
              We deliver AI, Cloud, Cyber Security, Data Analytics and IT Staffing
              solutions across the USA with innovation and excellence.
            </p>

            <div className="buttons">
              <button className="btn primary">Explore Services</button>
              <button className="btn outline">Contact Us</button>
            </div>

          </div>

          <div className="hero-right">
            <img src={heroImage} alt="IT Solutions" />
          </div>

        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="why-section">
        <h2 className="section-title">Why Choose Us</h2>

        <div className="container grid">

          <div className="card">
            <h3>Innovation</h3>
            <p>Modern technology solutions that drive business growth.</p>
          </div>

          <div className="card">
            <h3>Expert Team</h3>
            <p>Highly skilled IT professionals and consultants.</p>
          </div>

          <div className="card">
            <h3>Trusted Partner</h3>
            <p>Reliable solutions for government and enterprise clients.</p>
          </div>

          <div className="card">
            <h3>Quality Delivery</h3>
            <p>High-performance execution with scalable systems.</p>
          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats-section">
        <div className="container stats-container">

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

        </div>
      </section>

      {/* ================= CTA (UPGRADED PREMIUM VERSION) ================= */}
      <section className="cta-section">

        <div className="cta-glow"></div>
        <div className="cta-glow-2"></div>

        <div className="container cta-container">

          <h2>Ready to Transform Your Business?</h2>

          <p>
            Partner with NextGen Solutions Corporation to accelerate your
            digital transformation journey with AI, Cloud & Modern IT Solutions.
          </p>

          <button className="btn primary cta-btn">
            Get Started
          </button>

        </div>

      </section>
    </>
  );
}

export default Home;