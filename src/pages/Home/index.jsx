import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContainerMovie, MovieList, Movie, MovieSearchBar } from "./styles";
import { api_key } from "../../keys/api_key";
import SearchBar from "../../components/SearchBar";
import SearchResultsList from "../../components/SearchResultsList";

export default function Home() {
    const [movieResults, setMovieResults] = useState([]);
    const [movies, setMovies] = useState([]);
    const image_movie = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=pt-BR&page=1`)
            .then(resp => resp.json())
            .then(data => setMovies(data.results));
    }, []);

    return (
        <ContainerMovie>
            <MovieSearchBar>
                <SearchBar setResults={setMovieResults}/>
                <SearchResultsList results={movieResults} />
            </MovieSearchBar>

            <h1>Lançamentos</h1>

            <MovieList>
                {movies.map(movie => {
                    return (
                    <Movie key={movie.id}>
                        <Link to={`/details/${movie.id}`}><img src={`${image_movie}${movie.poster_path}`} alt={movie.title} /></Link>
                        <span>{movie.title}</span>
                    </Movie>
                )})}
            </MovieList>
        </ContainerMovie>
    );
}