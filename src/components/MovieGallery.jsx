import { Component } from "react";
import { Row, Col, Carousel, Spinner, Alert } from "react-bootstrap";

class MovieGallery extends Component {
  // Stato iniziale del componente
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  };
  // Fetch
  fetchMovies = () => {
    fetch("http://www.omdbapi.com/?apikey=861b98e6&s=" + this.props.movieTitle)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella fetch");
        }
      })
      .then((data) => {
        this.setState({
          movies: data.Search,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log("Errore nel server", err);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };
  // Quando il componente viene caricato, chiamo la fetch
  componentDidMount() {
    this.fetchMovies();
  }
  render() {
    const firstSlide = this.state.movies.slice(0, 5);
    const secondSlide = this.state.movies.slice(5, 10);
    return (
      <div className="container-fluid px-4 mb-5">
        <h4 className="text-white mb-3">
          Most watched movies:{" "}
          <strong>{this.props.movieTitle.toUpperCase()}</strong>
        </h4>
        {/* Mostro lo Spinner se i dati si stanno caricando */}
        {this.state.isLoading && (
          <Spinner animation="border" variant="danger" />
        )}
        {/* Mostro un messaggio di errore se qualcosa va storto */}
        {this.state.isError && (
          <Alert variant="danger">Errore caricamento..</Alert>
        )}
        {/* Inizio della struttura del Carosello */}
        {!this.state.isLoading && !this.state.isError && (
          <Carousel indicators={false} interval={null}>
            {/* PRIMA SLIDE */}
            <Carousel.Item>
              <Row className="g-1 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                {firstSlide.map((movie) => (
                  <Col key={movie.imdbID}>
                    <img
                      src={movie.Poster}
                      className="img-fluid effetto-zoom w-100"
                      alt={movie.Title}
                      style={{ height: "350px", objectFit: "cover" }}
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>

            {/* SECONDA SLIDE */}
            {secondSlide.length > 0 && (
              <Carousel.Item>
                <Row className="g-1 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                  {secondSlide.map((movie) => (
                    <Col key={movie.imdbID}>
                      <img
                        src={movie.Poster}
                        className="img-fluid effetto-zoom w-100"
                        alt={movie.Title}
                        style={{ height: "350px", objectFit: "cover" }}
                      />
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            )}
          </Carousel>
        )}
      </div>
    );
  }
}

export default MovieGallery;
