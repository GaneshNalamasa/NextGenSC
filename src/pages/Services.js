import "./Services.css";

const services = [
  "Capability Statement",
  "Artificial Intelligence and Machine Learning",
  "Cloud Computing",
  "Cyber Security",
  "IT Staff Augmentation and Consulting",
  "Direct Hire",
  "IT Project Management",
  "Data Analysis",
];

function Services() {
  return (
    <section className="services-section">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          We provide innovative technology solutions and staffing services that
          help businesses achieve digital transformation and operational
          excellence.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <span className="check-icon">✔</span>
            <h3>{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;