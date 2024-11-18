import styled from "styled-components";

export const HeaderStyle = styled.header `
    display: flex;
    align-items: center;
    padding: 20px;
    width: 100%;
    height: 20vh;
    

     & .caixaHeader {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 90%;

     nav {
        display: flex;
        width: 60%;
        height: 100%;
        
        
    }
     ul {
        display: flex;
        width: 100%;
        height: 100%;
        list-style: none;
        justify-content: flex-end;
        gap: 80px;
    }
    
     li a {
        color: #1E3932;
        text-decoration: none;
        font-size: 20px;
    }
     }
     @media (max-width: 1224px) {
        height: 15vh; 
        padding: 10px;

        & .caixaHeader {
            nav {
                width: 70%;
            }

            ul {
                gap: 40px; 
            }

            li a {
                font-size: 18px; 
            }
        }
    }


    @media (max-width: 780px) {
        height: auto;
        padding: 10px;

        & .caixaHeader {
         img{
            width: 16%;
            margin-left: 20px;
         }
            nav {
                width: 100%;
            }

            ul {
                flex-direction: row;
                gap: 15px;
            }

            li a {
                font-size: 14px; 
            }
        }
      }
`