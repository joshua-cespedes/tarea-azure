'use client';

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">Landing</div>
          <ul className="nav-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section id="inicio" className="hero">
        <div className="container">
          <h1>Bienvenido...</h1>
          <p>Landing basico</p>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="servicios">
        <div className="container">
          <h2>Servicios</h2>
          <div className="servicios-grid">
            <div className="servicio-card">
              <h3>Servicio 1</h3>
              <p>...</p>
            </div>
            <div className="servicio-card">
              <h3>Servicio 2</h3>
              <p>...</p>
            </div>
            <div className="servicio-card">
              <h3>Servicio 3</h3>
              <p>...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="contacto">
        <div className="container">
          <h2>Ponte en Contacto</h2>
          <form className="contacto-form">
            <input type="text" placeholder="Tu nombre" required />
            <input type="email" placeholder="Tu email" required />
            <textarea placeholder="Tu mensaje" rows={5} required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Footer</p>
      </footer>
    </>
  );
}