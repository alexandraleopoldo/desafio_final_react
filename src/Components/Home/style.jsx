import styled from "styled-components";

export const Principal = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    


& .principalDaHome{
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 100%;
    position: relative;
    
   
}

& .texto-home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    min-height: 100%;
    padding: 70px;
    

     h1 {
        display: flex;
        font-family: "Inter", serif;
        font-weight: 300;
        align-self: flex-start;
        font-size: 4rem;
    }
     h2 {
        align-self: flex-start;
        font-weight: 400;
        font-size: 4rem;
        
    }
     span {
        color: #037143;
        font-weight: 800;
    }

    p {
        font-weight: 500;
        margin-bottom: 20px;
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
        border: solid;
        align-self: flex-start;
        
     }
}

.fundo-verde {
    background-color: #037143;
}

.fundo-vermelho {
    background-color: #97090C;
    
}

.fundo-amarelo {
    background-color: #DECD13;
}

& .bolas-cores {
    display: flex;
    border-radius: 50%;
    position: fixed;
    top: 30%;
    right: -30%;
    width: 1000px;
    aspect-ratio: 1;
    z-index: 1;
    

    img {
        position: absolute;
        bottom: 54%;
        right: 50%;
        width: 46%;
       
    }
}

& .copinhos {
    display: flex; 
    width: 280px;
    justify-content: end;
    height: 20%;
    align-self: flex-end;
    position: absolute;
    bottom: 0; 
    left: 0;
    right: 0;
    margin: auto;
    

    img:hover {
        transform: translateY(-7px);
        rotate: 17deg;
        transition: 0.9s;
    }
}
`
// https://meet.google.com/zvh-ymnu-htt