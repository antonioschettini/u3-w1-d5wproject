import { Container, Button } from "react-bootstrap";
import { Link } from "react-router";

function NotFound() {
  return (
    <Container
      fluid
      className="text-white text-center d-flex flex-column align-items-center justify-content-center bg-dark"
      style={{ minHeight: "80vh" }}
    >
      <h1 style={{ fontSize: "6rem", fontWeight: "bold", color: "#E50914" }}>
        404
      </h1>
      <h2 className="mb-4">Ti sei perso?</h2>
      <p className="mb-5 text-secondary" style={{ maxWidth: "500px" }}>
        Purtroppo non riusciamo a trovare quella pagina. Troverai molte altre
        cose da esplorare nella pagina principale.
      </p>

      <Link to="/">
        <Button
          variant="danger"
          size="lg"
          className="px-4 fw-bold border-0"
          style={{ backgroundColor: "#E50914" }}
        >
          Netflix Home
        </Button>
      </Link>

      <div className="mt-5 pt-4 ps-3">
        <span className="text-secondary">
          Codice Errore <strong>404</strong>
        </span>
      </div>
    </Container>
  );
}

export default NotFound;
