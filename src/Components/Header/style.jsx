import styled from "styled-components";

export const HeaderStyle = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 100%;

     img {

    }

     nav {
        display: flex;
        width: 60%;
        height: 100%;
        justify-content: center;
        
    }
     ul {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: space-evenly;
        list-style: none;
    }
    
     li a {
        color: #1E3932;
        text-decoration: none;
        font-size: 20px;
    }
`