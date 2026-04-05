import './Login.css';

export default function Login({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="login-screen">
      <div className="login-content">
        <p className="login-greeting">¡Hola, Navegante!</p>
        <h1 className="login-title">¡Vamos a comenzar!</h1>
        <p className="login-subtitle">
          Estás a punto de aventurarte en un océano de lecturas. Podrás elegir entre audios, textos y videos.
        </p>
      </div>

      <div className="login-buttons">
        <button className="btn-register" disabled>Registrarse</button>
        <button className="btn-enter" onClick={onEnter}>Entrar</button>
      </div>

      <footer className="login-footer">
        <p>Navegante® app demo</p>
        <p className="footer-small">Todos los derechos reservados 2024</p>
      </footer>
    </div>
  );
}
