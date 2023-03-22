import { Link } from "react-router-dom";
import { SearchMovieResult } from "./styles";

export default function SearchResult({ result }) {
    return (
        <SearchMovieResult>
            <Link to={`/details/${result.id}`}>
                <div className="search-result">
                    {result.title}
                </div>
            </Link>
        </SearchMovieResult>
    );
}