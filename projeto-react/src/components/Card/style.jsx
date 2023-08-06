import styled from "styled-components";
import ImagemComputador from '../../assets/computador-card.png'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 5vh;
`;

export const CardForum = styled.button`
  max-width: 50%;
  background-color: var(--branco);
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 1vw 2vw;
  border: 0.1vw solid var(--laranja);
  margin-top: 4vh;
  background-image: url(${ImagemComputador});
  background-size: 15vw 100%; 
  background-position: right;
  background-repeat: no-repeat;
  cursor: pointer;
 
  h1{
    font-size: var(--fonte-titulo);
    font-family: var(--fonte-montserrat);
    padding-right: 20vw;
  }

  p{
    text-align: justify;
    max-width: 20vw;
    font-size: var(--fonte-texto);
    font-family: var(--fonte-montserrat);
  }

  hr{
    border: 1px solid var(--laranja);
    margin-right: 13vw; 
    align-items: left;
    justify-content: left;
    text-align: left;
  }

`;

export const InformacoesCard = styled.div`
  display: flex;
  gap: 3vw;
  padding-top: 0.5vw;

  span {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 20px;
  }
`;