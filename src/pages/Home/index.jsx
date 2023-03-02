import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContainerMovie, MovieList, Movie } from "./styles";
import { api_key } from "../../keys/api_key";

export default function Home() {

    const [movies, setMovies] = useState([]);
    const image_movie = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
            .then(resp => resp.json())
            .then(data => setMovies(data.results));
    }, []);

    return (
        <ContainerMovie>
            <h1>API Filmes</h1>
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