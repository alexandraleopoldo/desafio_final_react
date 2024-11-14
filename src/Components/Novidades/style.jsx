import styled from "styled-components";

export const Fundo = styled.section`
    display: flex;
    background-color: #1E3932;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;



& .caixa-novidades {
    display: flex;
    flex-direction: column;
    width: 45%;
}

& .caixa-imagem-cafe{
    display: flex;
    flex-direction: column;
    width: 45%;

    img {
        width: 60%;
    }
}
`
