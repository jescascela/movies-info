import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router-dom";

import { LinkContainer } from 'react-router-bootstrap';

import {useState} from 'react';

const NavbarMenu = () => {

    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    function handleChange(e) {
        setSearch(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        navigate(`/search?q=${search}`)
        setSearch("")
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Movies Info</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link>Sobre</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Form className="d-flex" onSubmit={handleSubmit}>
                    <Form.Control
                    type="search"
                    placeholder="Digite o nome do filme"
                    className="me-2"
                    aria-label="Search"
                    value={search}
                    onChange={handleChange}
                    />
                    <Button type="submit" variant="outline-success">Buscar</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarMenu;