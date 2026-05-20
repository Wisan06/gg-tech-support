function Commitment() {

  const commitments = [

    {
      title: "Atención Profesional",
      text: "Cada servicio es realizado con enfoque técnico, responsabilidad y atención al detalle."
    },

    {
      title: "Soluciones Confiables",
      text: "Trabajamos para ofrecer estabilidad, rendimiento y seguridad en cada implementación."
    },

    {
      title: "Soporte Transparente",
      text: "Comunicación clara, diagnósticos honestos y soluciones adaptadas a cada necesidad."
    }

  ]

  return (

    <section className="commitment">

      <h2>
        Nuestro Compromiso
      </h2>

      <div className="commitment-grid">

        {commitments.map((item, index) => (

          <div className="commitment-card" key={index}>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.text}
            </p>

          </div>

        ))}

      </div>

    </section>

  )
}

export default Commitment