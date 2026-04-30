import { Container, Row, Col, Image } from "react-bootstrap";

function MySettingsPage() {
  return (
    <Container className="py-5">
      {/* SEZIONE SETTINGS */}
      <hr className="border-secondary mt-0" />
      <Row className="py-3 mx-0">
        {/* Titolo a sinistra */}
        <Col xs={12} md={3}>
          <h6 className="text-secondary fw-bold">SETTINGS</h6>
        </Col>

        {/* Link a destra */}
        <Col xs={12} md={6}>
          <Row className="row-cols-1">
            <Col>
              <a
                href="#!"
                className="text-decoration-none small text-primary d-block mb-1 setting-link"
              >
                Parental controls
              </a>
            </Col>
            <Col>
              <a
                href="#!"
                className="text-decoration-none small text-primary d-block mb-1 setting-link"
              >
                Test participation
              </a>
            </Col>
            <Col>
              <a
                href="#!"
                className="text-decoration-none small text-primary d-block mb-1 setting-link"
              >
                Manage download devices
              </a>
            </Col>
            <Col>
              <a
                href="#!"
                className="text-decoration-none small text-primary d-block mb-1 setting-link"
              >
                Activate a device
              </a>
            </Col>
            <Col>
              <a
                href="#!"
                className="text-decoration-none small text-primary d-block mb-1 setting-link"
              >
                Recent device streaming activity
              </a>
            </Col>
            <Col>
              <a
                href="#!"
                className="text-decoration-none small text-primary d-block mb-1 setting-link"
              >
                Sign out of all devices
              </a>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Sezione Profile */}
      <hr className="border-secondary mt-0" />
      <Row className="py-3 mx-0">
        {/* Titolo a sinistra */}
        <Col xs={12} md={3}>
          <h6 className="text-secondary fw-bold">MY PROFILE</h6>
        </Col>

        {/* Contenuto a destra */}
        <Col xs={12} md={9}>
          {/* Parte alta Avatar e nome */}
          <div className="d-flex justify-content-between align-items-start mb-4 ">
            <div className="d-flex align-items-center">
              <Image
                src="./public/avatar.png"
                width="30"
                rounded
                className="me-2"
                alt="avatar"
              />
              <strong className="text-white">Strive Student</strong>
            </div>
            <div className="text-end">
              <a
                href="#!"
                className="d-block text-decoration-none small text-primary mb-1 setting-link"
              >
                Manage profiles
              </a>
              <a
                href="#!"
                className="d-block text-decoration-none small text-primary setting-link"
              >
                Add profile email
              </a>
            </div>
          </div>

          {/* Parte bassa link su due colonne */}
          <Row>
            <Col xs={12} md={6}>
              <a
                href="#!"
                className="d-block text-decoration-none small text-primary mb-1 setting-link"
              >
                Language
              </a>
              <a
                href="#!"
                className="d-block text-decoration-none small text-primary mb-1 setting-link"
              >
                Playback settings
              </a>
              <a
                href="#!"
                className="d-block text-decoration-none small text-primary mb-1 setting-link"
              >
                Subtitle appearance
              </a>
            </Col>
            <Col xs={12} md={6}>
              <a
                href="#!"
                className="d-block text-decoration-none small text-primary mb-1 setting-link"
              >
                Viewing activity
              </a>
              <a
                href="#!"
                className="d-block text-decoration-none small text-primary mb-1 setting-link"
              >
                Ratings
              </a>
            </Col>
          </Row>
        </Col>
      </Row>

      <hr className="border-secondary mt-0" />
    </Container>
  );
}

export default MySettingsPage;
