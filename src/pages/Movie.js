import {useParams} from 'react-router-dom';

import {useState, useEffect} from 'react';

import {BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill} from 'react-icons/bs'

import {FaStar} from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const Movie = () => {

    const {id} = useParams();
    const movieURL = process.env.REACT_APP_MOVIE_URL;
    const [movie, setMovie] = useState([])

    function getMovie(id) {
        const url = `${movieURL}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`

        fetch(url)
        .then((resp) => resp.json())
        .then((data) => setMovie(data))
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getMovie(id)
    })

    function formatCurrence(number) {
        return number ? number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'N/A'
    }

    return (
        <Container>
            <div className="d-flex justify-content-center pt-3 mb-3">
                <Card style={{ width: '28rem' }}>
                    <Card.Body>
                        <Card.Title className="text-center"><h1>{movie.title}</h1></Card.Title>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                        <Card.Text className="pt-2">
                            <p className="fs-4 text text-center">
                                <FaStar className="text-warning pb-1" /><span className="ps-2">{movie.vote_average}</span>
                            </p>
                            <span className="fs-5 text">
                                <BsWallet2 className="text-warning" /> Orçamento:
                            </span>
                            <p>{movie.budget}</p>
                            <span className="fs-5 text">
                                <BsGraphUp className="text-warning" /> Receita:
                            </span>
                            <p>{formatCurrence(movie.revenue)}</p>
                            <span className="fs-5 text">
                                <BsHourglassSplit className="text-warning" /> Duração:
                            </span>
                            <p>{movie.runtime} minutos</p>
                            <span className="fs-5 text">
                                <BsFillFileEarmarkTextFill className="text-warning" /> Descrição:
                            </span>
                            <p>{movie.overview}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div> 
        </Container>
    )
}

export default Movie;