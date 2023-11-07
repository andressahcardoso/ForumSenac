import styled from "styled-components";

export const Main = styled.section`
    padding: 4vh;
    height: 82vh;
    overflow: scroll;
    &::-webkit-scrollbar-track {
        background-color: white;
    }
    &::-webkit-scrollbar {
        width: 6px;
        background: white;
    }
    &::-webkit-scrollbar-thumb {
        background: white;
    }
`

export const TitleDiv = styled.div`
    display: 'flex';
    flex-direction: 'column';
`

export const PostInfo = styled.div`
    height: 25vh;
    width: 79vw;
    border: 2px solid var(--azul-claro); 
    border-radius: 20px;
    display: flex;
    flex-direction: row;
`

export const Image = styled.img`
    border-radius: 20px;
`

export const Content = styled.div`
    margin-top: -2vh;
    padding-left: 2vh;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    margin-bottom: 0vh;
`

export const Textarea = styled.textarea`
    width: 78.5vw;
    border: 2px solid var(--azul-claro);
    border-radius: 10px;
`

export const Button = styled.button`
    height: 6vh;
    width: 79vw;
    font-size: 16px;
    color: white;
    background-color: #4f74ee;
    border: 2px solid var(--azul-claro);
    border-radius: 10px;
`

export const CommentDiv = styled.div`
    width: 77vw;
    margin-top: 2vh;
    padding: 2vh;
    padding-bottom: 1vh;
    background-color: #ecedf0;
    border-radius: 20px;
`

export const EditBtn = styled.button`
    width: 10vw;
    margin-top: 2vh;
    margin-left: 67vw;
    padding: 2vh;
    color: white;
    background-color: var(--laranja);
    border: 0px;
    border-radius: 20px;
`