import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";

function MyHeroSection() {
  return (
    <Container fluid className="px-4 py-3">
      <Row className="align-items-center">
        {/* Parte Sinistra Titolo e Dropdown Generi */}
        <Col className="d-flex align-items-center">
          <h1 className="mb-0 me-4 text-white fw-bold">TV Shows</h1>

          <Dropdown>
            <Dropdown.Toggle
              variant="dark"
              className="border-white text-white rounded-0 btn-sm mt-3"
              id="dropdown-genres"
            >
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark" className="effetto-zoom">
              <Dropdown.Item href="#" className="effetto-zoom text-white">
                Action
              </Dropdown.Item>
              <Dropdown.Item href="#" className="effetto-zoom text-white">
                Comedy
              </Dropdown.Item>
              <Dropdown.Item href="#" className="effetto-zoom text-white">
                Drama
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        {/* Parte Destra: Pulsanti Visualizzazione (Lista/Griglia) */}
        <Col xs="auto" className="d-none d-md-block">
          <Button
            variant="dark"
            className="border-secondary effetto-zoom rounded me-0 ms-0"
          >
            <i className="bi bi-list"></i>
          </Button>
          <Button
            variant="dark"
            className="border-secondary effetto-zoom  rounded me-0 ms-2"
          >
            <i className="bi bi-grid"></i>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MyHeroSection;
