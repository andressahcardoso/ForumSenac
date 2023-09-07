import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

import {LoginContainer, LoginImg, SignInDiv, Logo, Input, Button, Line, Text, SubText, TextDiv, TextSection, Form} from "./styled"
import LogoSenac from '../../assets/logoSenac.png'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {

    // Validação de Login API

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const saveUserInfoLocalStorage = (token) => {
        localStorage.setItem('email', email)
        localStorage.setItem('token', token)
    }

    console.log(email)
    console.log(password)

    const handleSubmit = (e) =>{
        e.preventDefault()

        const credentials = {email, password}

        axios.post('http://localhost:8000/login', credentials, {
            headers:{
                'Content-Type': 'application/json', 
            },
        })
        .then(response =>{
            alert(response.data.message)
            saveUserInfoLocalStorage(response.data.token)
            navigate('Home')
        })
        .catch(error => console.log(error))

    }



    // Validação de Login Google

    const [user, setUser] = useState({});

    function handleCallbackResponse(response){
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwtDecode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
        navigate('Home')
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
            <Form onSubmit={handleSubmit}>
            <Input placeholder="E-mail" value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
            <Input placeholder="Senha" value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
           <Button type="submit" value="Entrar">Enviar</Button>
           </Form>

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
  