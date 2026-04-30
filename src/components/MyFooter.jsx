import { Container, Row, Col, Button } from "react-bootstrap";

function MyFooter() {
  return (
    <footer className="pt-5 pb-3 text-secondary">
      <Container>
        {/* Row per centrare tutto il blocco dei contenuti */}
        <Row className="justify-content-center">
          <Col xs={12} lg={8}>
            {/* Icone Social */}
            <div className="d-flex mb-4">
              <i className="bi bi-facebook me-3 fs-5 cursor-pointer"></i>
              <i className="bi bi-instagram me-3 fs-5 cursor-pointer"></i>
              <i className="bi bi-twitter-x me-3 fs-5 cursor-pointer"></i>
              <i className="bi bi-youtube fs-5 cursor-pointer"></i>
            </div>

            {/* Griglia Link */}
            <Row className="row-cols-2 row-cols-md-4 g-2 mb-4">
              <Col className="d-flex flex-column">
                <a href="#!" className="footer-link">
                  Audio and Subtitles
                </a>
                <a href="#!" className="footer-link">
                  Media Center
                </a>
                <a href="#!" className="footer-link">
                  Privacy
                </a>
                <a href="#!" className="footer-link">
                  Contact Us
                </a>
              </Col>

              <Col className="d-flex flex-column">
                <a href="#!" className="footer-link">
                  Audio Description
                </a>
                <a href="#!" className="footer-link">
                  Investor Relations
                </a>
                <a href="#!" className="footer-link">
                  Legal Notices
                </a>
              </Col>

              <Col className="d-flex flex-column">
                <a href="#!" className="footer-link">
                  Help Center
                </a>
                <a href="#!" className="footer-link">
                  Jobs
                </a>
                <a href="#!" className="footer-link">
                  Cookie Preferences
                </a>
              </Col>

              <Col className="d-flex flex-column">
                <a href="#!" className="footer-link">
                  Gift Cards
                </a>
                <a href="#!" className="footer-link">
                  Terms of Use
                </a>
                <a href="#!" className="footer-link">
                  Corporate Information
                </a>
              </Col>
            </Row>

            {/* Bottone e Copyright */}
            <div className="d-flex flex-column align-items-start">
              <Button
                variant="dark"
                size="sm"
                className="mb-3 text-secondary border-secondary"
                style={{ borderRadius: "0px", fontSize: "0.8rem" }}
              >
                Service Code
              </Button>
              <p style={{ fontSize: "0.7rem" }}>© 1997-2026 Netflix, Inc.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;
