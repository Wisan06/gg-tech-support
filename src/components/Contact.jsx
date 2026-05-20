function Contact() {

  return (

    <section className="contact" id="contact">

      <div className="contact-left">

        <span>
          Contacto
        </span>

        <h2>
          ¿Necesitas soporte tecnológico?
        </h2>

        <p>
          Estamos listos para ayudarte con soluciones profesionales para hogar, oficina y gaming.
        </p>

        <div className="contact-info">

          <div className="contact-item">
            <strong>WhatsApp</strong>
            <p>+57 305 411 6100</p>
          </div>

          <div className="contact-item">
            <strong>Correo</strong>
            <p>ggtechsoporte@outlook.com</p>
          </div>

          <div className="contact-item">
            <strong>Horario</strong>
            <p>Lunes a Sábado • 8:00 AM - 6:00 PM</p>
          </div>

        </div>

      </div>

      <div className="contact-right">

        <form className="contact-form">

          <input
            type="text"
            placeholder="Nombre"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
          />

          <textarea
            placeholder="Describe tu problema o solicitud"
          ></textarea>

          <button type="submit">
            Solicitar soporte
          </button>

        </form>

      </div>

    </section>

  )
}

export default Contact