import styled from "styled-components";

export const Principal = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    min-width: 90%;
    min-height: 100%;



& .principalDaHome{
    display: flex;
    flex-direction: column;
    width: 50%;
    min-height: 100%;
   
}

& .texto-home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    min-height: 90%;
    padding: 50px;
    

     h1 {
        display: flex;
        font-family: "Inter", serif;
        font-weight: 400;
        align-self: flex-start;
    }
     h2 {
        align-self: flex-start;
        font-weight: 400;
        
    }
     span {
        color: #037143;
        font-weight: 800;
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


& .copos-cores {
    display: flex;
    background-color: #037143;
    border-radius: 50%;
    position: fixed;
    top: 30%;
    right: -20%;
    width: 900px;
    height: 980px;
    

    img {
        position: absolute;
        bottom: 60%;
        right: 42%;
        width: 50%;
    }
}

& .copinhos {
    display: flex; 
    width: 200px;
    align-items: center;
    height: 20%;
    

    img:hover {
        transform: translateY(-7px);
        rotate: 17deg;
        transition: 0.7s;
    }
}
`
// https://meet.google.com/zvh-ymnu-htt