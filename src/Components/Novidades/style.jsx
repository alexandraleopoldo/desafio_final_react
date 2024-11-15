import styled from "styled-components";

export const Fundo = styled.section`
    display: flex;
    background-color: #1E3932;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;



& .textos-novidades {
    display: flex;
    flex-direction: column;
    width: 40%;
    min-height: 100%;
    justify-content: center;
    align-items: center;
    color: white;

    h3 {
        align-self: flex-start;
        font-family: "Inter", serif;
        font-weight: 600;
        font-size: 1rem;
    }
    h2 {
        align-self: flex-start;
        font-weight: 400;
        font-size: 4rem;
    }
    p {
        margin-bottom: 20px;
        font-weight: 400;
    }
}

& .caixa-imagem-cafe{
    display: flex;
    flex-direction: column;
    width: 45%;
    min-height: 100%;
    justify-content: center;
    align-items: center;
   
    

    img {
        width: 60%;
    }
}
`
