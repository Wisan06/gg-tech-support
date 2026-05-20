import {
  FaTools,
  FaNetworkWired,
  FaShieldAlt,
  FaGamepad,
  FaVideo,
  FaBuilding
} from 'react-icons/fa'

function Services() {

  const services = [
    {
      title: "Soporte Técnico",
      icon: <FaTools />,
      items: [
        "Optimización y mantenimiento",
        "Formateo de sistemas",
        "Instalación de software",
        "Diagnóstico de fallas"
      ]
    },

    {
      title: "Redes y Conectividad",
      icon: <FaNetworkWired />,
      items: [
        "Configuración WiFi",
        "Routers y switches",
        "Optimización de señal",
        "Seguridad de red"
      ]
    },

    {
      title: "Ciberseguridad",
      icon: <FaShieldAlt />,
      items: [
        "Protección contra malware",
        "Antivirus",
        "Respaldo de información",
        "Prevención digital"
      ]
    },

    {
      title: "Optimización Gamer",
      icon: <FaGamepad />,
      items: [
        "Mejora de FPS",
        "Control de temperaturas",
        "Drivers gráficos",
        "Optimización streaming"
      ]
    },

    {
      title: "Videovigilancia",
      icon: <FaVideo />,
      items: [
        "Instalación de cámaras",
        "Monitoreo remoto",
        "Apps móviles",
        "Mantenimiento"
      ]
    },

    {
      title: "Hogar y Oficina",
      icon: <FaBuilding />,
      items: [
        "Soporte integral",
        "Asesoría tecnológica",
        "Optimización empresarial",
        "Soluciones personalizadas"
      ]
    }
  ]

  return (

    <section className="services" id="services">

      <h2>
        Servicios Profesionales
      </h2>

      <div className="services-grid">

        {services.map((service, index) => (

          <div className="service-card"
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          >

            <span className="service-icon">
              {service.icon}
            </span>

            <h3>
              {service.title}
            </h3>

            <ul>

              {service.items.map((item, i) => (
                <li key={i}>
                  {item}
                </li>
              ))}

            </ul>

          </div>

        ))}

      </div>

    </section>

  )
}

export default Services