import "./Clients.css";

const clients = [
  "DC Department of Human Services (DHS)",
  "DC Office of Chief Financial Officer (OCFO)",
  "DC Office of Chief Technology Officer (OCTO)",
  "DC Department of Public Works (DPW)",
  "DCNet",
  "DC Department of Motor Vehicles (DMV)",
  "DC Office of Contracting and Procurement (OCP)",
  "DC Office of the State Superintendent of Education (OSSE)",
  "DC Child and Family Services Agency (CFSA)"
];

function Clients() {
  return (
    <section className="clients-section">

      <div className="clients-header">
        <h1>Our Clients</h1>

        <p>
          We are proud to support government agencies and public sector
          organizations by delivering innovative technology solutions,
          IT consulting, and staffing services with excellence and integrity.
        </p>
      </div>

      <div className="clients-grid">

        {clients.map((client, index) => (

          <div className="client-card" key={index}>

            <div className="client-number">
              {index + 1}
            </div>

            <h3>{client}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Clients;