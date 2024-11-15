import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

    body {
        display: flex;
        flex-direction: column;
        width: 100vw;
        min-height: 100vh;
        height: 100%;
        overflow-x: hidden;
        overflow-y: hidden;
        
       
        
    }

    button {
        width: 200px;
        height: 50px;
        color: white;
        background-color: #037143;
        font-family: "Inter", serif;
        font-weight: 700;
        font-size: 16px;
        border-radius: 50px;
        border: solid #037143;
        align-self: flex-start;
        
     }

     
`;
