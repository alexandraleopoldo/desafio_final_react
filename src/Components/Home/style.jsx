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
    min-height: 100%;
    position: relative;
    
    
}

& .texto-home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    min-height: 90%;
    padding: 50px;
    

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


& .bolas-cores {
    display: flex;
    background-color: #037143;
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
    width: 200px;
    justify-content: center;
    height: 20%;
    align-self: flex-end;
    justify-self: end;
    

    img:hover {
        transform: translateY(-7px);
        rotate: 17deg;
        transition: 0.7s;
    }
}
`
// https://meet.google.com/zvh-ymnu-htt