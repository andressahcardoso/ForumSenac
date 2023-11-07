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
`


export const DivLogOut = styled.div`
    width: 10vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

export const BtnLogOut = styled.button`
    height: 4vh;
    width: 4vw;
    color: #F79535;
    background-color: white;
    border: 1px solid #d5700b;
    border-radius: 20px;
    cursor: pointer;
`