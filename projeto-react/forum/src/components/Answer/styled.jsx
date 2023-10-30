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
    display: flex;
    flex-direction: row;
    border-radius: 20px;
`

export const Image = styled.img`
    border-radius: 20px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 2vh;
`

export const Textarea = styled.textarea`
    border: 2px solid var(--azul-claro);
    border-radius: 10px;
    width: 78.5vw;
`

export const Button = styled.button`
    border: 2px solid var(--azul-claro);
    background-color: #4f74ee;
    color: white;
    height: 6vh;
    font-size: 16px;
    width: 79vw;
    border-radius: 10px;
`

export const CommentDiv = styled.div`
    background-color: #ecedf0;
    border-radius: 20px;
    width: 77vw;
    margin-top: 2vh;
    padding: 2vh;
    padding-bottom: 1vh;
`