import { styled } from "styled-components";

export const LinkText = styled.div`
    margin-left: 2vh;
`

// export const ContainerSidebar = styled.section`
//     height: 100%;
//     margin:1rem 0;
// `
export const SidebarNavigationContainer = styled.nav`
    margin: 0;
    padding: 0;
`

export const SidebarNavList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 18px;
    padding-top: 5vh;
    z-index: 2;    
`;
export const SidebarNavItem = styled.li`
    padding: 0.5rem;
    margin: 0.5rem 0;
    padding-left: 1vw;
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
        color:var(--preto);
    }
    
    &:hover, &:active {
        background-color: var(--azul-claro);
        width: 16vw;
        height: 8vh;
        border-radius: 0px 10px 10px 0px;

        display:flex;
        align-items: center;

        color: var(--branco);
        padding: 0 0.5rem;

        a {
        text-decoration: none;
        color: var(--branco);
        }
    }
`