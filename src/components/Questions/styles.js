import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    input{
        margin-top: 10%;
        margin-bottom: 10%;
        width: 15rem;
        height: 2rem;
        font-size: 1.3rem;
        border-radius: 5px;
        border: none;
        text-align: center;
        color: #011627;
    }

    button{
        width: 15rem;
        border-radius: 5px;
        background: transparent;
        padding: 6px;
        border: 2px solid #FF9F1C;
        font-size: 1.2rem;
        font-weight: 550;
        color: #FF9F1C;
    }



`

export const GroupQuestion = styled.div`

margin-top: 10%;

h3{
    font-size: 1.6rem;
    margin-bottom: 3%;
}
li{
    font-size: 1.3rem;
    font-weight: 550;
}

`