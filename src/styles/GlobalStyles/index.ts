import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    :root {
        --color-black: #000000;
        --color-gray-1: #ECECEC;
        --color-gray-2: #7070708F;
        --color-pink: #D22688;
        --color-white: #FFFFFF;
    }

    html { 
        font-size: 62.5%;
    }

    html, body, #root {
        min-height: 100vh;
    }

    body {
        background-color: var(--color-gray-1);
        font-family: arial, sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }
    
    span { 
        font-weight: 500;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
    }

    strong { 
        font-weight: 700;
    }


    a {
        color: inherit;
    }

    // Bootstrap overrides

    .header-icons {
        color: var(--color-white);
    }

    .text-pink {
        color: var(--color-pink);
    }

    .fs-1 {
        font-size: 3 rem !important;
    }

    .fs-2 {
        font-size: 1.9 rem !important;
    }

    .fs-3 {
        font-size: 1.8 rem !important;
    }

    .fs-4 {
        font-size: 1.7 rem !important;
    }

    .fs-5 {
        font-size: 1.6 rem !important;
    }

    .fs-6 {
        font-size: 1.4 rem !important;
    }

    .fs-7 {
        font-size: 1.2 rem !important;
    }

    .fs-8 {
        font-size: 1 rem !important;
    }

    .fs-700 {
        font-size: 1.1 rem !important;
    }

    .disabled {
        pointer-events: none;
        cursor: default;
        opacity: 0.4;
    }

`;
