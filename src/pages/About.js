import Container from 'react-bootstrap/Container';

const About = () => {
    return (
        <Container>
            <h2 className="text-center pt-4">Bem Vindo!</h2>
            <p>Este site foi criado como um projeto de estudo para aprimorar minhas habilidades em React e no consumo de APIs REST. Utilizando a biblioteca do The Movie Database (TMDB), o Movies Info oferece informações detalhadas sobre uma ampla variedade de filmes.</p>
            <p>O objetivo principal deste projeto é explorar e aplicar conceitos de desenvolvimento front-end utilizando React, assim como a integração com APIs para obter e exibir dados dinâmicos de forma eficiente. Além disso, o uso do Bootstrap no design garante uma interface amigável e responsiva, proporcionando uma melhor experiência ao usuário.</p>
            <p>Espero que você aproveite a navegação e encontre informações interessantes sobre seus filmes favoritos!</p>
        </Container>
    )
}

export default About;