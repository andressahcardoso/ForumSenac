import styled from "styled-components";

export const HomeContainer = styled.div`
    display: grid;
    grid-template-columns: 16vw 71vw 13vw;
    grid-template-rows: 10vh 45vh 45vh;
    grid-template-areas: 'Header Header Header'
                            'Nav Main TopicNav'
                            'Nav Main TopicNav';
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
