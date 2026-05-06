import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Container,
  Row,
  Col,
  Spinner,
  Alert,
  ListGroup,
} from "react-bootstrap";

const MovieDetails = function () {
  const { movieId } = useParams(); // legge il codice del film dall'url
  const [movie, setMovie] = useState(null); // salvo i dati del film
  const [comments, setComments] = useState([]); // salvo i commenti
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzM2E2NGYwNDIwZDAwMTUxNTVhNjEiLCJpYXQiOjE3Nzc1NDc4NzYsImV4cCI6MTc3ODc1NzQ3Nn0.qQzs0E2KpWLjJyx3prcC6DD4L4xxHoGe2Pfk9ct8G6o";

  useEffect(() => {
    //faccio prima la fetch per i dettagli film da omdb
    fetch(`http://www.omdbapi.com/?apikey=861b98e6&i=${movieId}`)
      .then((response) => {
        if (response.ok) return response.json();
        else {
          throw new Error("Errore nella fetch film", response.status);
        }
      })
      .then((data) => {
        setMovie(data);
      })
      .catch(() => {
        setIsError(true);
      });

    // fetch numero 2 per i commenti da striveschool
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${movieId}`, {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        if (response.ok) return response.json();
        else {
          throw new Error("errore nella fetch commenti", response.status);
        }
      })
      .then((data) => {
        setComments(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [movieId]);
  if (isLoading)
    return (
      <Spinner
        animation="border"
        variant="danger"
        className="d-block mx-auto mt-5"
      />
    );
  if (isError) return <Alert variant="danger">Si è verificato un errore</Alert>;
  return (
    <Container className="text-white mt-5">
      {movie && (
        <Row>
          {/* locandina a sinistra */}
          <Col md={4}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="img-fluid rounded shadow "
            />
          </Col>
          {/* informazioni a destra */}
          <Col md={8}>
            <h1>{movie.Title}</h1>
            <p className="text-secondary">
              {movie.Year} | {movie.Genre} |{movie.Runtime}
            </p>
            <p>{movie.Plot}</p>
            <hr className="text-secondary" />

            <h4>Commenti degli utenti:</h4>
            {comments.length > 0 ? (
              <ListGroup>
                {comments.map((c) => (
                  <ListGroup.Item
                    key={c._id}
                    className="bg-dark text-white border-secondary"
                  >
                    <strong>Voto: {c.rate}/5</strong> - {c.comment}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            ) : (
              <p>Nessun commento per questo film.</p>
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MovieDetails;
