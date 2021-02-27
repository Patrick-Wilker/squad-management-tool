import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        min-height: 100%;
    }

    body{
        background: #EEEEEE;
        -webkit-font-smoothing: antialiased !important;
    }

    ::-webkit-scrollbar {
        width:3px;
    }
    
    ::-webkit-scrollbar-thumb{
        background:#93939D;
    }
 
    body, input, button {
        font-size: 14px;
        font-family: 'Arial', sans-serif;
        overflow-x: hidden;
    }

    a{
        text-decoration: none;
    }

    button{
        cursor: pointer;
    }

    :root{
        --white: #fff;
        --background: #EEEEEE;
        --gray-line: #dcdde0;
        --text: #666666;
        --pink: #E31965;
        --purple: #8B2479;
    }
`;

export default GlobalStyle;