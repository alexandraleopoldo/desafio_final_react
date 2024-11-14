import styled from "styled-components";

export const Principal = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    



& .principalDaHome{
    display: flex;
    width: 50%;
    min-width: 90%;
}

& .texto-home {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    & h1 {
        font-family: "Inter", serif;
        font-weight: 400;
    }
    & h2 {
        font-weight: 400;
    }
    & span {
        color: #037143;
        font-weight: 800;
    }
    

}


& .copos-cores {
    display: flex;
    background-color: #037143;
    border-radius: 50%;
    position: fixed;
    top: 50%;
    right: -20%;
    width: 800px;
    height: 800px;

    & img {
        position: absolute;
        bottom: 60%;
        right: 40%;
        width: 50%;
    }
}
`
// https://meet.google.com/zvh-ymnu-htt