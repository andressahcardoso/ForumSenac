import styled from "styled-components";

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
    /* font-size: var(--fonte-texto);
    font-weight: var(--fonte-largura-negrito); */

    letter-spacing: 2px;
    
    height: 6vh;
    width: 40vw;
    padding: 0px 10px;

    font-family: var(--fonte-montserrat);

    &::placeholder {
        color: white;
        border: transparent;
        font-size: 16px;
        padding-left: 1vw;
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

export const DivLogOut = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 10vw;
`
export const BtnLogOut = styled.button`
    height: 4vh;
    border: 1px solid #d5700b;
    background-color: white;
    color: #F79535;
    border-radius: 20px;
    width: 4vw;
    height: 4vh;
`