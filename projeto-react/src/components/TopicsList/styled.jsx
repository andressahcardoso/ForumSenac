import styled from "styled-components";

export const TopicContainer = styled.section`
   
`
export const BotaoAdd = styled.button`
    position: absolute;
    display: flex;
    justify-content: center;
    right: 1vw;
    top: 20vh;
    gap: 1vw;
    padding: 1vw;
    width: 12vw;
    background-color: var(--azul-claro);
    border: none;
    border-radius: 15px;
    color: var(--branco);
    text-align: center;
    cursor: pointer;
    font-size: var(--fonte-subtitulo);
    font-weight: var(--fonte-largura-negrito);
`

export const TopicContent = styled.div`
   position: absolute;
    display: flex;
    justify-content: start;
    text-align: start;
    right: 0;
    top: 30vh;
    width: 12vw;
    height: auto;
    padding: 0.5vw;
    padding-left: 1vw;
    border-radius: 15px 0 0 15px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: 1px solid #d8d8d8;
    flex-direction: column;

    span {
    font-size: 20px;
    font-weight: var(--fonte-largura-negrito);
    padding: 1vh;
  }
`