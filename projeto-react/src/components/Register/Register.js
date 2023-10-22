import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import {
  LoginContainer,
  LoginImg,
  SignInDiv,
  Logo,
  Input,
  Button,
  Line,
  Text,
  SubText,
  TextDiv,
  TextSection,
} from './styled';

import LogoSenac from '../../assets/logoSenac.png';

function Register() {
  const [userData, setUserData] = useState({
    nome: '',
    email: '',
    senha: '',
  });
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3008/api/user/create', userData);
      // Verifique se o registro foi bem-sucedido
      if (response.data.success) {
        // Redirecione o usuário para a página de login ou para onde desejar
        console.log(response)
        navigate('/');
      } else {
        // Lidar com erros de registro
        console.error('Erro no registro:', response.data.message);
      }
    } catch (error) {
      console.error('Erro ao registrar o usuário:', error);
    }
  };

  return (
    <LoginContainer>
      <LoginImg />
      <SignInDiv>
        <Logo src={LogoSenac} />
        <Input
          placeholder="Nome de usuário"
          onChange={(e) => setUserData({ ...userData, nome: e.target.value })}
        />
        <Input
          placeholder="E-mail"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setUserData({ ...userData, senha: e.target.value })}
        />
        <Button type="button" onClick={handleRegister}>
          Cadastre-se
        </Button>

        <TextSection>
          <TextDiv>
            <Text>Já possui conta?</Text>
            <Link to="/">Entre aqui</Link>
          </TextDiv>
        </TextSection>

        <Line />
      </SignInDiv>
    </LoginContainer>
  );
}

export default Register;
