import styled from "styled-components";

export const ContainerSearchBar = styled.div`
    
    .input-wrapper {
        background-color: white;
        width: 100%;
        border-radius: 10px;
        height: 2.5rem;
        padding: 0 15px;
        box-shadow: 0px 0px 8px #ddd;
        display: flex;
        align-items: center;
    }

    input {
        background-color: transparent;
        border: none;
        height: 100%;
        font-size: 1.25rem;
        width: 100%;
        margin-left: 5px;
    }

    input:focus {
        outline: none;
    }

    #search-icon {
        color: royalblue;
    }
`;