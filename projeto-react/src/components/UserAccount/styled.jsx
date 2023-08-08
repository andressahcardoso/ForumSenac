import styled from "styled-components";

export const HomeContainer = styled.div`
    display: grid;
    grid-template-columns: 16vw 84vw;
    grid-template-rows: 10vh 45vh 45vh;
    grid-template-areas: 'Header Header'
                            'Nav Main'
                            'Nav Main';
`

export const Header = styled.div`
    grid-area: Header;


    background-color: #FFFF;
    box-shadow: 0px 4px 4px #00000046;
    
    box-sizing: content-box;
    overflow:hidden;

    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: 1rem;
    }
`


export const AreaLogo = styled.img`

    width: 4.5vw;
    margin-left: 2vw;
       @media (max-width: 768px) {
        position:relative;
        right:325px;
    }

    @media (width < 768px) {
        position: relative;
        right:145px;
    }
`

export const InputStyled = styled.input`
    background-color: var(--laranja);
    border-radius: 20px;
    border: none;

    color: #FFFF;
    font-size: var(--fonte-texto);
    font-weight: var(--fonte-largura-negrito);
    letter-spacing: 2px;

    height: 56px;
    width: 719px;
    padding: 0px 10px;

    font-family: var(--fonte-montserrat);

    &::placeholder {
        color: white;
        border: transparent;
        font-size: 20px;
        font-weight: 700;
        font-family: var(--fonte-montserrat);
    }

    &:focus {
        outline: none;
    }

    &::-webkit-search-cancel-button {
        display: none;
    }

    @media (max-width: 768px) {
        position: relative;
        top:20px;
        right:20px;

        width: 80%;
        margin: 1rem 0;
    }
`;
export const AreaImageUser = styled.img`
   border-radius: 50%;
   width: 3vw;
   height: 3vw;
   margin-right: 2vw;

   @media (max-width: 768px ) {
       position: relative;
       bottom:9rem;
       left: 20rem;
    }

    @media (width < 768px) {
        position: relative;
        bottom:9rem;
        left: 9rem;
    }
`;

export const Nav = styled.div`
    grid-area: Nav;
    background-color: #c9c9c9;
`

export const Main = styled.div`
    grid-area: Main;
    display: flex;
    justify-content: center;
    padding-top: 10vh;

`

export const PersonImg = styled.img`
    height: 22vh;
    width: 22vh;
    border-radius: 100px;
`

export const TextArea = styled.div`
    height: 70vh;
    width: 40vw;
    margin-left: 8vw;
    border-radius: 10px;
    border: 1px solid #acacac;
    box-shadow: 2px 2px 2px 2px #dbdbdb;
`

export const Title = styled.p`
    margin-left: 2vw;
    font-size: 22px;
    color: #F79535;
    font-weight: bold;
`

export const InputTexts = styled.div`
    border-bottom: 1px solid #acacac;
    margin-left: 2vw;
    margin-right: 2vw;
    margin-top: 4vh;
`

export const InputTextsImg = styled.div`
    border-bottom: 1px solid #acacac;
    margin-left: 2vw;
    margin-top: 6vh;
    margin-right: 2vw;
`

export const Input = styled.input`
    border: none;
    width: 34vw;
    margin-top: 1vh;
`

export const pText = styled.p`
    color: grey;
`

export const NameText = styled.p`
    text-align: center;
`

export const ButtonsDiv = styled.div`
    width: 38vw;
    margin-top: 9vh;
    display: flex;
    align-items: end;
    justify-content: end;
`

export const OutButton = styled.button`
    background-color: #F79535;
    border: none;
    border-radius: 5px;
    padding: 8px 30px 8px 30px;
    color: white;
    margin-right: 1vw;
`

export const SaveButton = styled.button`
    background-color: #336CFF;
    border: none;
    border-radius: 5px;
    padding: 8px 30px 8px 30px;
    color: white;
`