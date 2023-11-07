import styled from "styled-components";

export const HomeContainer = styled.div`
    display: grid;
    grid-template-columns: 16vw 71vw 13vw;
    grid-template-rows: 10vh 45vh 45vh;
    grid-template-areas: 'Header Header Header'
                            'Nav Main Main'
                            'Nav Main Main';
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
    align-items: center;
    flex-direction: column;
    padding-top: 10vh;
`

export const Form = styled.form`
    height: 60vh;
    width: 40vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const TextArea = styled.textarea`
    height: 10vh;
    margin-top: 2vh;
    padding-left: 1vw;
    padding-top: 1vh;
    border: 1.5px solid var(--azul-claro);
    border-radius: 5px;
`

export const Button = styled.button`
    height: 6vh;
    margin-top: 10vh;
    color: white;
    background-color: var(--azul-claro);
    border: 1.5px solid var(--azul-claro);
    border-radius: 10px;
`

export const Title = styled.h2`
    color: var(--azul-claro);
`

export const TextDiv = styled.div`
    height: 10vh;
    width: 80vw;
    margin-top: -5vh;
    border-bottom: 1px solid var(--azul-claro);
`