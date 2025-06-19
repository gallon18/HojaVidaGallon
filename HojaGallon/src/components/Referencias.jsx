const Referencias = () => {
    const references = [
      {
        name: "Elizabeth Lozada González",
        position: "Familiar",
        phone: "3223218271",
      },
      {
        name: "Silvia María Gallón",
        position: "Familiar",
        phone: "302 4633279"
      }
    ];
  
    return (
      <section className="section">
        <h2>REFERENCIAS PROFESIONALES</h2>
        <div className="references-list">
          {references.map((ref, index) => (
            <div key={index} className="reference-item">
              <h3>{ref.name}</h3>
              <p>{ref.position}</p>
              {ref.description && <p>{ref.description}</p>}
              <p>Teléfono: {ref.phone}</p>
              {ref.email && <p>Email: {ref.email}</p>}
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Referencias;