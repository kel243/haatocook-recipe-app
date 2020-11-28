import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-width: thin;
        scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
    }

    *::-webkit-scrollbar {
        width: 5px;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: rgba(155, 155, 155, 0.5);
        border-radius: 20px;
        border: transparent;
    }

    body {
        background: #171C23;
    }

    html {
        font-family: 'Nunito', sans-serif;
    }

    .active {
        background: #f2ebea;
    }

    .barHidden {
        transform: translateX(0%);
    }

    @media (max-width: 768px) {
        .barHidden {
            transform: translateX(-100%);
        }

        .barShow {
            transform: translateX(0%);
        }
    }
`;
export default GlobalStyles;
