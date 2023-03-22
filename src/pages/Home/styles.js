import styled from "styled-components";

export const ContainerMovie = styled.div`
    height: 100vh;
    width: 100vw;

    h1 {
        text-align: center;
        margin: 4rem;
    }
`;

export const MovieSearchBar = styled.div`
    padding-top: 20vh;
    width: 40%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 200px;
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 3rem;
    row-gap: 4rem;
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 200px;
        border-radius: 0.3rem;
        margin-bottom: 2rem;
    }

    span {
        font-weight: bold;
        font-size: 100%;
        text-align: center;
    }

    a {
        transition: all 0.3s;
    }

    a:hover {
        transform: scale(1.1);
    }
`;