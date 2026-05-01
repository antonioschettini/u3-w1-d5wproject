import { Container, Row, Col, Image, Button } from "react-bootstrap";

function MySettingsPage() {
  return (
    <Container className="py-5">
      {/* TITOLO PRINCIPALE */}
      <h1 className="text-white mb-4">Account Settings</h1>
      <hr className="border-secondary mb-0" />

      {/* MEMBERSHIP & BILLING */}
      <Row className="py-3 mx-0">
        {/* Parte sinistra: Titolo e Bottone */}
        <Col xs={12} md={3}>
          <h6 className="text-secondary fw-bold mb-3">MEMBERSHIP & BILLING</h6>
          <Button
            variant="dark"
            className="rounded-0 btn-sm text-secondary border-secondary shadow-sm"
          >
            Cancel Membership
          </Button>
        </Col>

        {/* Dati account e pagamenti */}
        <Col xs={12} md={9}>
          <div className="d-flex justify-content-between mb-2">
            <div>
              <strong className="d-block text-white">
                student@strive.school
              </strong>
              <span className="text-secondary small">Password: ********</span>
              <br />
              <span className="text-secondary small">Phone: 321 044 1279</span>
            </div>
            <div className="text-end">
              <a
                href="#!"
                className="d-block text-decoration-none small text-primary mb-1 setting-link"
              >
                Change account email
              </a>
              <a
                href="#!"
                className="d-block text-decoration-none small text-primary mb-1 setting-link"
              >
                Change password
              </a>
              <a
                href="#!"
                className="d-block text-decoration-none small text-primary setting-link"
              >
                Change phone number
              </a>
            </div>
          </div>

          <hr className="border-secondary my-3" />

          {/* Paypal e Info pagamento */}
          <div className="d-flex justify-content-between mb-2">
            <div>
              <span className="text-white fw-bold">
                <i className="fab fa-paypal m-0 p-0"></i>Paypal
                admin@strive.school
              </span>
            </div>
            <div className="text-end">
              <a
                href="#!"
                className="d-block text-decoration-none small text-primary mb-1 setting-link"
              >
                Update payment info
              </a>
              <a
                href="#!"
                className="d-block text-decoration-none small text-primary setting-link"
              >
                Billing details
              </a>
            </div>
          </div>

          <hr className="border-secondary my-3" />

          {/* Gift cards */}
          <div className="d-flex justify-content-end">
            <div className="text-end">
              <a
                href="#!"
                className="d-block text-decoration-none small text-primary mb-1 setting-link"
              >
                Redeem gift card or promo code
              </a>
              <a
                href="#!"
                className="d-block text-decoration-none small text-primary setting-link"
              >
                Where to buy gift cards
              </a>
            </div>
          </div>
        </Col>
      </Row>

      <hr className="border-secondary mt-0" />

      {/* PLAN DETAILS */}
      <Row className="py-3 mx-0">
        <Col xs={12} md={3}>
          <h6 className="text-secondary fw-bold">PLAN DETAILS</h6>
        </Col>
        <Col xs={12} md={9}>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span className="text-white fw-bold me-2">Premium</span>
              <span className="border border-white px-2 py-0 small text-white fw-bold">
                ULTRA HD
              </span>
            </div>
            <div className="text-end">
              <a href="#!" className="text-decoration-none small text-primary setting-link">
                Change plan
              </a>
            </div>
          </div>
        </Col>
      </Row>
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
