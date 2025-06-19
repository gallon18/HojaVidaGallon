const Educacion = () => {
    const formacionAcademica = [
      {
        year: "2023",
        titulo: "Basica Secundaria",
        institucion: "Colegio Técnico Carlos J Huelgos - Ibagué-Tolima"
      },
      {
        year: "2017",
        titulo: "Basica Primaria",	
        institucionn: "Colegio Técnico Carlos J Huelgos - Ibagué-Tolima"
      },
    ];
  
    return (
      <section className="section">
        <h2>ESTUDIOS</h2>
        <div className="education-list">
          {formacionAcademica.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="year">{edu.year}</div>
              <div className="education-details">
                <h3>{edu.titulo}</h3>
                <p>{edu.institucion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Educacion;