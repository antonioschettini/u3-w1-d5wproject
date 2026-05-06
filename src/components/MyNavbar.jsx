import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router";

function MyNavbar() {
  const location = useLocation();
  return (
    <Navbar bg="dark" variant="dark" expand="md" fluid="true">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="../public/netflix_logo.png"
            className="effetto-zoom"
            alt="Netflix Logo"
            style={{ width: "100px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link
              as={Link}
              to="/"
              className={
                location.pathname === "/"
                  ? "nav-link active effetto-zoom"
                  : "nav-link effetto-zoom"
              }
            >
              Home
            </Nav.Link>
            <Nav.Link href="#" className="effetto-zoom">
              Tv Show
            </Nav.Link>

            {/* Menu a tendina Impostazioni */}
            <NavDropdown
              title="Setting"
              id="setting-dropdown"
              active={location.pathname === "/settings"}
              className="effetto-zoom"
            >
              <NavDropdown.Item as={Link} to="/settings">
                Setting
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Subscribe</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className="effetto-zoom">
              My List
            </Nav.Link>
          </Nav>

          {/* Icone di destra + Profilo */}
          <div className="d-flex align-items-center gap-2">
            <Button variant="dark" className="border-danger effetto-zoom">
              <i className="bi bi-search"></i>
            </Button>
            <img
              src="../public/kids_icon.png"
              className="effetto-zoom"
              alt="kids logo"
              style={{ width: "38px", borderRadius: "7px" }}
            />
            <Button variant="dark" className="border-danger effetto-zoom">
              <i className="bi bi-bell"></i>
            </Button>

            {/* Menu a tendina del Profilo */}
            <NavDropdown
              align="end"
              title={
                <img
                  src="../public/avatar.png"
                  className="profile effetto-zoom"
                  alt="avatar"
                  style={{ width: "38px" }}
                />
              }
              id="profile-dropdown"
            >
              <NavDropdown.Item as={Link} to="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="./setting.html">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Log out</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
