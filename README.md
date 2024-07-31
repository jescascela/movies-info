# Movies Info
![image](https://github.com/user-attachments/assets/98c425fc-2acd-4b42-8c8d-dfe8a525d16d)

## Sobre
Projeto desenvolvido em React que consome API do [TMDB](https://developer.themoviedb.org/reference/intro/getting-started) para exibir informações de filmes

## Executando o Projeto
1. Clone o Projeto
```
git clone https://github.com/jescascela/movies-info.git
```
2. Instale as dependências
```
npm install
```
3. Crie o arquivo `.env` na raiz com a seguinte estrutura
```
# Coloque aqui sua api_key
REACT_APP_API_KEY=sua_api_key

# https://developer.themoviedb.org/reference/movie-popular-list
REACT_APP_POPULAR_URL=https://api.themoviedb.org/3/movie/popular

# https://developer.themoviedb.org/reference/movie-top-rated-list
REACT_APP_TOP_RATED_URL=https://api.themoviedb.org/3/movie/top_rated

# https://developer.themoviedb.org/reference/movie-details
REACT_APP_MOVIE_URL=https://api.themoviedb.org/3/movie
```
4. Executar
```
npm start
```
