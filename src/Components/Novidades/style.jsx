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
        overflow-y: auto;
        justify-content: flex-start;
        gap: 30px;
       
    }
    @media (max-width: 1180px) {
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
        width: 90%;
        height: auto;
        margin: 0;
      
     

        &&  h3 {
                font-size: 0.8rem;
                margin-top: 100px;
                margin-left: 16px;
            }

           && h2 {
                font-size: 1.5rem;
                margin-top: 10px;
                margin-left: 16px;
            }

           && p {
                width: 90%;
                font-size: 0.8rem;
                margin: 24px 0;
            }
            button {
              width: 90%;
              margin-bottom: 20px;
              margin-top: 20px;
              align-self: center;
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
        width: 200px;
        min-height: 180px;
        justify-content: flex-start;
      

        && img {
            width: 100%;
            margin-top: 20px;
        }
    }

    img {
        width: 60%;
    }
`;
