import styled from "styled-components";

export const HeaderStyle = styled.header `
    display: flex;
    align-items: center;
    padding: 20px;
    width: 100%;
    height: 160px;
    

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
`