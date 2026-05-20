function WhyUs() {

  const benefits = [
    {
      title: "Atención Personalizada",
      text: "Cada cliente recibe soluciones adaptadas a sus necesidades tecnológicas."
    },

    {
      title: "Soluciones Rápidas",
      text: "Diagnóstico eficiente y resolución profesional de problemas."
    },

    {
      title: "Seguridad y Confianza",
      text: "Protección y estabilidad para tus dispositivos y redes."
    },

    {
      title: "Soporte Remoto y Presencial",
      text: "Asistencia flexible para hogares, oficinas y negocios."
    },

    {
      title: "Tecnología Moderna",
      text: "Herramientas y procesos actualizados para un mejor rendimiento."
    }
  ]

  return (

    <section className="why-us">

      <h2>
        ¿Por Qué Elegir GG Tech Support?
      </h2>

      <div className="why-grid">

        {benefits.map((benefit, index) => (

          <div className="why-card" key={index}>

            <h3>
              {benefit.title}
            </h3>

            <p>
              {benefit.text}
            </p>

          </div>

        ))}

      </div>

    </section>

  )
}

export default WhyUs