import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    :root {
    --color-primary: #6959CD;
    --color-secundary: #C0C0C0;
    --color-grey-4: #121214;
    --color-grey-3: #212529;
    --color-grey-2: #343B41;
    --color-grey-1: #868E96;
    --color-grey-0: #F8F9FA;
    --color-white: #ffffff;
    --color-sucess: #3FE864;
    --color-negative: #E83F5B;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    body {
        overflow-x: hidden;
        background-color: var(--color-grey-2);
        color: #251d2d;
    }
    button {
        cursor: pointer;
        border: 0;
        background-color: transparent;
    }
    ul, ol, li {
        list-style: none;
    }
    section, aside, div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
    a {
        text-decoration: none;
    }
    .container {
        max-width: 1000px;
        width: 100%;
        margin: 0 auto;
    }
    .full-screen {
        width: 100vw;
    }
`;
