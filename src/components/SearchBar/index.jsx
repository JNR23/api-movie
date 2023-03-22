import { useState } from "react";
import {FaSearch} from "react-icons/fa";
import { ContainerSearchBar } from "./styles";
import { api_key } from "../../keys/api_key";

export default function SearchBar({ setResults }) {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=pt-BR&page=1`)
            .then(resp => resp.json())
            .then(data => {
                const resultsMovies = data.results.filter((movie) => {
                    return value && movie && movie.title && movie.title.toLowerCase().includes(value);
                });
                setResults(resultsMovies);
            });
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <ContainerSearchBar>
            <div className="input-wrapper">
                <FaSearch id="search-icon" />
                <input 
                    placeholder="Procurar filme..." 
                    value={input} 
                    onChange={(e) => handleChange(e.target.value)} 
                />
            </div>
        </ContainerSearchBar>
    );
}