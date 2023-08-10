import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

import {LoginContainer, LoginImg, SignInDiv, Logo, Input, Button, Line, Text, SubText, TextDiv, TextSection} from "./styled"
import LogoSenac from '../../assets/logoSenac.png'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Login() {

    const [user, setUser] = useState({});
    const navigate = useNavigate();

    function handleCallbackResponse(response){
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwtDecode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
        navigate('/Home', { state: userObject });
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
            <Input placeholder="Senha"/>
           <Link to={'/Home'}><Button type="submit">Enviar</Button></Link>


            <TextSection>
                <TextDiv>
                    <Text>Não possui conta?</Text>
                    <Link to="/Register"><SubText>Cadastre-se</SubText></Link>
                </TextDiv>
                <TextDiv>
                    <Text>Esqueceu a senha?</Text>
                    <SubText>Recupere aqui</SubText>
                </TextDiv>
            </TextSection>

            <Line></Line>


            <div id="signInDiv"></div>

            { Object.keys(user).length !== 0 && 
            <>  
                {/* <Navigate to="/Home" UserTest={user}/> */}
                <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
            </>
            }
             {/* {user && 
            <div>
            <img src={user.picture}></img>
            <h3>{user.name}</h3>
            </div>  */}
      
           
        </SignInDiv>
        
      </LoginContainer>
    );
  }
  
  export default Login;
  