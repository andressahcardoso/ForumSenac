import styled from 'styled-components';

export const ContainerHeader = styled.header`
    background-color: #FFFF;
    box-shadow: 0px 4px 4px #00000046;

    width: 100%;
    height: 8.5rem;

    /* position: fixed; */
    
    box-sizing: content-box;
    overflow:hidden;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
`

export const InputStyled = styled.input`
    background-color:var(--laranja);
    border-radius: 20px;
    border: none;

    color: #FFFF;
    font-size: var(--fonte-texto);
    font-weight: var(--fonte-largura-negrito);

    height: 56px;
    width: 719px;
    padding: 0px 10px;

    font-family: var(--fonte-montserrat);


    &::placeholder{
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
                
    }
`