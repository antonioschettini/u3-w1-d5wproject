import { Container, Row, Col, Button, Dropdown, Form } from "react-bootstrap";

function MyProfilePage() {
  return (
    <Container className="py-5 text-center text-md-start mb-5">
      {/* Intestazione */}
      <div className="mb-4">
        <h1 className="display-4 fw-normal">Edit Profile</h1>
        <hr className="border-secondary" />
      </div>

      <Row className="mx-0">
        {/* Colonna Sinistra + Avatar */}
        <Col xs={12} md={4} className="mb-4 mb-md-0 position-relative">
          <img
            src="./public/avatar.png"
            className="img-fluid rounded-1"
            alt="avatar"
            style={{ width: "100%" }}
          />
        </Col>

        {/* Colonna Destra Impostazioni */}
        <Col xs={12} md={8}>
          <div className="text-white">
            {/* Nome Utente */}
            <Button
              variant="dark"
              className="border-danger btn-sm mb-3 text-secondary w-100 text-md-start"
              style={{ borderRadius: "0" }}
            >
              Strive Student
            </Button>

            <p className="mb-1">Language:</p>

            {/* Menu a tendina Lingua */}
            <Dropdown className="mb-4">
              <Dropdown.Toggle variant="dark" className="border-danger btn-sm">
                Select Language
              </Dropdown.Toggle>
              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#">English</Dropdown.Item>
                <Dropdown.Item href="#">Italian</Dropdown.Item>
                <Dropdown.Item href="#">Japanese</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <hr className="border-secondary mb-4" />

            {/* Impostazioni Maturità */}
            <p className="mb-1">Maturity Settings:</p>
            <Button
              variant="dark"
              className="border-danger btn-sm mb-3 text-secondary"
              style={{ borderRadius: "0" }}
            >
              ALL MATURITY RATING
            </Button>
            <p className="small mb-3">
              Show titles of all maturity ratings for this profile.
            </p>
            <Button
              variant="dark"
              size="sm"
              className="mb-4 px-4 text-secondary border-secondary"
              style={{ borderRadius: "0" }}
            >
              EDIT
            </Button>

            <hr className="border-secondary mb-4" />

            {/* Controlli Autoplay */}
            <p className="mb-2">Autoplay controls</p>

            <Form.Check
              type="checkbox"
              id="autoplay-next"
              label={
                <small>Autoplay next episode in a series on all devices.</small>
              }
              className="d-flex align-items-center justify-content-center justify-content-md-start mb-2"
            />

            <Form.Check
              type="checkbox"
              id="autoplay-previews"
              label={
                <small>Autoplay previews while browsing on all devices.</small>
              }
              className="d-flex align-items-center justify-content-center justify-content-md-start"
            />
          </div>
        </Col>
      </Row>

      {/* Bottoni Finali */}
      <hr className="border-secondary my-3" />
      <div className="d-flex flex-wrap justify-content-center gap-3">
        <Button
          variant="light"
          className="px-4 fw-bold"
          style={{ borderRadius: "0" }}
        >
          SAVE
        </Button>

        <Button
          variant="dark"
          className="px-4 text-secondary border-secondary"
          style={{ borderRadius: "0" }}
        >
          CANCEL
        </Button>

        <Button
          variant="dark"
          className="px-4 text-secondary border-secondary"
          style={{ borderRadius: "0" }}
        >
          DELETE PROFILE
        </Button>
      </div>
    </Container>
  );
}

export default MyProfilePage;
