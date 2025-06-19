const Habilidades = () => {
    const habilidad = [
      "Trabajo en equipo",
      "Seguimiento de órdenes",
      "Gestión de Proyectos informáticos",
      "Habilidades de análisis",
      "Adaptabilidad",
      "Comunicación efectiva",
      "Organización y planificación",
    ];
  
    return (
      <section className="section">
        <h2>HABILIDADES</h2>
        <ul className="skills-list">
          {habilidad.map((habilidad, index) => (
            <li key={index}>{habilidad}</li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Habilidades;