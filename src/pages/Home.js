import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {useEffect, useState} from 'react';

import MovieCard from '../components/MovieCard';

const Home = () => {

    const [movies, setMovies] = useState([])

    function getPopularMovies(url) {
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => setMovies(data.results))
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getPopularMovies(`${process.env.REACT_APP_POPULAR_URL}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`)
    }, [])

    return (
        <Container>
            <div className="d-flex justify-content-center">
                <h1 className="pb-3">Filmes mais Populares</h1>
            </div>
            {movies.length === 0 && <p>Carregando...</p>}
            {movies.length > 0 && 
                <Row>
                    {movies.map((movie, index) => {
                        return (
                        <Col xs={4} key={index} className="d-flex">
                            <MovieCard key={movie.id} movie={movie} />
                        </Col>)
                    })}
                </Row>
                
            }
        </Container>
    )
}

export default Home;