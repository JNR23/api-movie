import React from "react";
import SearchResult from "../SearchResult";
import { ContainerSearchResultsList } from "./styles";

export default function SearchResultsList({ results }) {
    return (
        <ContainerSearchResultsList>
            <div className="results-list">
                {results.map((result, id) => {
                    return <SearchResult result={result} key={id} />
                })}
            </div>
        </ContainerSearchResultsList>
    );
}