import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

import {LoginContainer, LoginImg, SignInDiv, Logo, Input, Button, Line, Text, SubText, TextDiv, TextSection} from "./styled"
import LogoSenac from '../../assets/logoSenac.png'
import { Link, useNavigate } from 'react-router-dom';


function Register() {

    const [user, setUser] = useState({});
    const navigate = useNavigate();

    function handleCallbackResponse(response){
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwtDecode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
        navigate('/UserAccount', { state: userObject });
    }

    function handleSignOut(event){
        setUser({});
        document.getElementById("signInDiv").hidden = false;
    }

    useEffect(() => {
        /* global google */

        google.accounts.id.initialize({
        client_id: "283394545884-s4aqguk91fpectug2di69sngp4af40v8.apps.googleusercontent.com",
        callback: handleCallbackResponse
        })

        google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {theme: "outline", size: "large"}
        )

        google.accounts.id.prompt();
    }, []);

    return (
      <LoginContainer>
        <LoginImg/>
        <SignInDiv>
            <Logo src={LogoSenac}/>
            <Input placeholder="Nome de usuário"/>
            <Input placeholder="E-mail"/>
            <Input placeholder="Senha"/>
            <Link to='/Home'><Button type="submit">Cadastre-se</Button></Link>


            <TextSection>
                <TextDiv>
                    <Text>Já possui conta?</Text>
                    <Link to='/'><SubText>Entre aqui</SubText></Link>
                </TextDiv>
            </TextSection>

            <Line></Line>


            <div id="signInDiv"></div>
            { Object.keys(user).length !== 0 && 
                <>
                    <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
                </>
            }
           
        </SignInDiv>
        
      </LoginContainer>
    );
  }
  
  export default Register;
  