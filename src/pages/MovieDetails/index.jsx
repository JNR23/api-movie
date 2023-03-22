import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "./styles";
import { api_key } from "../../keys/api_key";

export default function MovieDetails() {

    const { id } = useParams();
    const [movie, setMovie] = useState({});

    const image_movie = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=pt-BR&page=1`)
        .then(resp => resp.json())
        .then(data => {
            const { title, poster_path, overview, release_date } = data;

            const movie = {
                id,
                title: title,
                sinopse: overview,
                image: `${image_movie}${poster_path}`,
                releaseDate: release_date
            }
            setMovie(movie);
        });
    }, [id]);

    return (
        <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.sinopse} />
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span> 
                        {
                            movie.sinopse === "" ? "Oops... Sinopse não encontrada!" : `Sinopse: ${movie.sinopse}`                           
                        }
                    </span>
                    <span className="release-date">Data de lanaçamento: {movie.releaseDate}</span>
                    <Link to="/"><button>Voltar</button></Link>
                    <Link to=""><button>Trailer</button></Link>
                </div>
            </div>
        </Container>
    );
}