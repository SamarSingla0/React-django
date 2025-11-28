import './NotFound.css';

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-text">
          The page you are looking for does not exist!
        </p>
        <a href="/login" className="notfound-btn">Go Home</a>
      </div>
    </div>
  );
}

export default NotFound;
