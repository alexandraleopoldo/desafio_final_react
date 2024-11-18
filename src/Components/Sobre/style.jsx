import styled from "styled-components";

export const FundoSobre = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    padding: 0 30px;

    @media (max-width: 1180px) {
       p {
        font-size:  0.9rem;
       }

    }
    @media (max-width: 780px) {
        flex-direction: column;
        overflow-y: auto;
    }

    img {
        width: 24%;

        @media (max-width: 780px) {
            width: 60%;
            border-radius: 20px;
            margin-top: 30px; 
        }

    }
`
export const TextoSobre = styled.div `
    
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 100%;
    justify-content: center;
    align-items: center;

    @media (max-width: 1180px) {
        width: 60%;
        margin-left: 50px;
    }
    @media (max-width: 780px) {
        width: 80%;
        height: 80%;
        margin: 0;
        
          &&  h3 {
                font-size: 0.6rem;
                margin-left: 14px;
                
            }

           && h2 {
                font-size: 1.4rem;
                margin-left: 14px;
                margin-top: 10px;
            }

           && p {
                font-size: 0.8rem;
                width: 90%;
                margin-top: 10px;
            }
            button {
                align-self: center;
                margin-bottom: 20px;
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
` 