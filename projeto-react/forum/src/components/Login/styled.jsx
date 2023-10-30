import styled from "styled-components";
import ImageLogin from '../../assets/image.jpg'

export const LoginContainer = styled.div`
    display: grid;
    grid-template-columns: 50vw 50vw;
    grid-template-areas: 'ImageL SignIn';
`

export const LoginImg = styled.div`
    grid-area: ImageL;
    height: 100vh;
    background-image: url(${ImageLogin});
    background-size: cover;
`

export const  SignInDiv = styled.div`
    grid-area: SignIn;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;   
    margin: 5vw;
    
`

export const Logo = styled.img`
    width: 7vw;
`

export const Input = styled.input`
    width: 29vw;
    height: 6vh;
    border: 1px solid #F79535;
    border-radius: 10px;
    padding-left: 1vw;
`

export const Button = styled.button`
    width: 30vw;
    height: 6vh;
    color: white;
    background-color: #336CFF;
    border: 1px solid #336CFF;
    border-radius: 10px;
    cursor: pointer;
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
    text-decoration: none;
`

export const TextDiv = styled.div`
    display: flex;
    height: 4vh;
    width: 30vw;
`

export const TextSection = styled.section`
    margin-top: -6vh;
`

export const Form = styled.form`
    height: 30vh;
    width: 30vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

export const ErrorMsg = styled.p`
    padding: 20px;
    background-color: red;
`