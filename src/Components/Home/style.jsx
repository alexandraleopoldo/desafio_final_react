import styled from "styled-components";

export const SectionHome = styled.section`
    flex: 1;
    height: 100%;
   
   
.principalDaHome{
    display: flex;
    flex-direction: row;
    width: 90%;
    flex: 1;
    height: 100%;
    position: relative;
   
   
}

.texto-home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    padding: 0 70px;
    margin: 0 60px;
    

     h1 {
        display: flex;
        font-family: "Inter", serif;
        font-weight: 300;
        align-self: flex-start;
        font-size: 3.5rem;
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

.bolas-cores {
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

.copinhos {
    display: flex; 
    width: 280px;
    justify-content: end;
    height: 16%;
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
