import styled from "styled-components";

export const FundoSobre = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    padding: 0 30px;

    img {
        width: 24%;
    }

    .texto-sobre {
        display: flex;
        flex-direction: column;
        width: 40%;
        height: 100%;
        justify-content: center;
        align-items: center;


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

`