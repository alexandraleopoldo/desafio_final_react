import styled from "styled-components";

export const FundoNovidades = styled.section`
    display: flex;
    background-color: #1E3932;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    @media (max-width: 780px) {
        flex-direction: column;
        min-height: 100vh;
        overflow-y: auto;
       
    }
    @media (max-width: 1180px) {
        min-height: 100vh;
        overflow-y: auto;
       && h2 {
            font-size: 3rem;
        }
    }

`;

export const TextosNovidades = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: white;
    
    @media (max-width: 1180px) {
        width: 60%;
        margin-left: 50px;
    }
    @media (max-width: 780px) {
        width: 80%;
        height: 60%;
        margin: 0;
     

        &&  h3 {
                font-size: 0.8rem;
            }

           && h2 {
                font-size: 1.5rem;
                margin-top: 10px;
            }

           && p {
                font-size: 0.8rem;
                margin-top: 16px;
            }
            button {
              width: 100%;
            }
    }

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
`;

export const CaixaImagemCafe = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    min-height: 100%;
    justify-content: center;
    align-items: center;

    @media (max-width: 1180px) {
        width: 30%;
    }
    @media (max-width: 780px) {
        width: 180px;
        min-height: 150px;

        && img {
            width: 100%;
        }
    }

    img {
        width: 60%;
    }
`;
