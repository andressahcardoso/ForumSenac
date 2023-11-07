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


export const Nav = styled.div`
    grid-area: Nav;
    

    border-right: 5px solid var(--azul-claro);
    background-color: var(--branco);
    z-index: 0;

    @media (width < 768px ) {
        grid-column: 2 / 3;
    }
`

export const Main = styled.div`
    grid-area: Main;
    display: flex;
    justify-content: center;
    padding-top: 10vh;

`


export const Title = styled.h2`
    color: var(--azul-claro);
`

export const TextDiv = styled.div`
    height: 6vh;
    width: 80vw;
    border-bottom: 1px solid var(--azul-claro);
    margin-top: -5vh;

`

export const TextDiv2 = styled.div`
    height: 6vh;
    width: 80vw;
    border-bottom: 1px solid var(--azul-claro);
    margin-top: 10vh;

`

export const Input = styled.input`
    border: 1.5px solid var(--azul-claro);
    margin-top: 2vh;
    height: 6vh;
    width: 30vw;
    padding-left: 1vw;
    border-radius: 5px;
`

export const TextArea = styled.textarea`
 border: 1.5px solid var(--azul-claro);
    margin-top: 2vh;
    height: 10vh;
    width: 50vw;
    padding-left: 1vw;
    padding-top: 1vh;
    border-radius: 5px;
    
`

export const Button = styled.button`
    border: 1.5px solid var(--laranja);
    background-color: var(--laranja);
    color: white;
    border-radius: 15px;
    margin-top: 10vh;
    height: 6vh;
    width: 10vw;
`

export const ButtonDiv = styled.div`
    width: 79vw;
    height: 28vh;
    display: flex;
    flex-direction: end;
    align-items: end;
    justify-content: end;
`