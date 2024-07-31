import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { GrDocumentPerformance } from "react-icons/gr";

import { LinkContainer } from 'react-router-bootstrap'

const MovieCard = ({movie, popularity = true}) => {
    return (
        <Card style={{ width: '18rem' }} className="mb-3" border="success">
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>

                {popularity && <><GrDocumentPerformance className="text-warning" /> {movie.popularity}</>}
                </Card.Text>
                <div className="d-grid mt-auto">
                    <LinkContainer to={`/movie/${movie.id}`}>
                        <Button variant="primary">Detalhes</Button>
                    </LinkContainer>
                </div>
            </Card.Body>
        </Card>
    )
}

export default MovieCard;