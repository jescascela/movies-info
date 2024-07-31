import {useSearchParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MovieCard from '../components/MovieCard';

const Search = () => {
    const [searchParam] = useSearchParams()
    const [movies, setMovies] = useState([])
    const searchURL = "https://api.themoviedb.org/3/search/movie"
    const query = searchParam.get("q")

    function getSearchedMovies(url) {
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => setMovies(data.results))
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getSearchedMovies(`${searchURL}?query=${query}&api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`)
    }, [query])

    return (
        <Container>
            <div className="d-flex justify-content-center">
                <h1 className="pb-3">Buscas para {query}</h1>
            </div>
            {movies.length === 0 && <p>Carregando...</p>}
            {movies.length > 0 && 
                <Row>
                    {movies.map((movie, index) => {
                        return (
                        <Col xs={4} key={index} className="d-flex">
                            <MovieCard key={movie.id} movie={movie} popularity={false} />
                        </Col>)
                    })}
                </Row>
                
            }
        </Container>
    )
}

export default Search;