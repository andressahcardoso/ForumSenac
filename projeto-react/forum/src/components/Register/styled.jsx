import styled from "styled-components";
import ImageLogin from '../../assets/image.jpg'

export const LoginContainer = styled.div`
    display: grid;
    grid-template-columns: 50vw 50vw;
    grid-template-areas: 'ImageL SignIn';
`

export const LoginImg = styled.div`
    height: 100vh;
    grid-area: ImageL;
    background-image: url(${ImageLogin});
    background-size: cover;
`

export const  SignInDiv = styled.div`
    grid-area: SignIn;
    height: 70vh;
    margin: 6vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;   
`

export const Logo = styled.img`
    width: 7vw;
`

export const Input = styled.input`
    height: 6vh;
    width: 29vw;
    padding-left: 1vw;
    border: 1px solid #F79535;
    border-radius: 10px;
`

export const Button = styled.button`
    width: 30vw;
    height: 6vh;
    color: white;
    background-color: #336CFF;
    border: 1px solid #336CFF;
    border-radius: 10px;
`

export const Line = styled.div`
    border-top: 1px solid #F79535;
    width: 30vw;
`

export const Text = styled.p`
    font-size: 14px;
`

export const SubText = styled.p`
    color: #336CFF;
    font-size: 14px;
    margin-left: 0.5vw;
`

export const TextDiv = styled.div`
    height: 4vh;
    width: 30vw;
    display: flex;
`

export const TextSection = styled.section`
    margin-top: -6vh;
`