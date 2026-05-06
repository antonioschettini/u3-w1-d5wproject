import {
  Container,
  Row,
  Col,
  Dropdown,
  Button,
  Carousel,
} from "react-bootstrap";

function MyHeroSection() {
  const featuredShows = [
    {
      id: 1,
      title: "Interstellar",
      desc: "Un team di esploratori attraversa un buco nero per salvare l'umanità.",

      img: "https://external-preview.redd.it/beautiful-new-interstellar-banner-v0-MY0HsBqCfvQPuYkBon2ZFk96aGfKcGI-pARtS_SHk-Q.jpg?auto=webp&s=ecf781637218f3a700d7e0e745caba4cd2a013db",
    },
    {
      id: 2,
      title: "Breaking Bad",
      desc: "Un professore di chimica inizia una doppia vita per salvare la sua famiglia.",
      img: "https://preview.redd.it/breaking-bad-banner-fan-art-v0-3mhwdyqohql41.png?auto=webp&s=6955c942f414729f4a6e229285219d2f1b2fac54",
    },
    {
      id: 3,
      title: "Stranger Things",
      desc: "Un gruppo di amici scopre segreti soprannaturali a Hawkins.",
      img: "https://cdn.awsli.com.br/2500x2500/1982/1982647/produto/116252583/captura-de-tela-2024-03-06-115603-4bl349b5o2.png",
    },
  ];
  return (
    <Container fluid className="px-4 py-3">
      <Carousel
        controls={false}
        indicators={false}
        interval={5000}
        pause={false}
      >
        {featuredShows.map((show) => (
          <Carousel.Item
            key={show.id}
            style={{ height: "60vh", position: "relative" }}
          >
            <img
              className="d-block w-100 h-100"
              src={show.img}
              alt={show.title}
              style={{ objectFit: "cover" }}
            />
            {}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)",
              }}
            ></div>

            <Carousel.Caption
              className="text-start pb-5"
              style={{ left: "5%", bottom: "10%" }}
            >
              <h2 className="display-3 fw-bold">{show.title}</h2>
              <p
                className="fs-5 d-none d-md-block"
                style={{ maxWidth: "600px" }}
              >
                {show.desc}
              </p>
              <div className="mt-3">
                <Button variant="light" className="me-2 px-4 fw-bold">
                  Riproduci
                </Button>
                <Button
                  variant="secondary"
                  className="px-4 fw-bold bg-opacity-50"
                >
                  Altre Info
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
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
        <Col
          xs="auto"
          className="d-none d-md-block ps-0"
          style={{ paddingRight: 9.5 }}
        >
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
