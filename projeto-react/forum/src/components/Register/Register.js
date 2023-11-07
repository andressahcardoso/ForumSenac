import { LoginContainer, LoginImg, SignInDiv, Logo, Input, Button, Line, Text, TextDiv, TextSection } from './styled';

// React
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Axios
import axios from 'axios';

// Image
import LogoSenac from '../../assets/logoSenac.png';


function Register() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/user/create', userData);
      if (response.data.success) {
        navigate('/');
      } else {
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
            <Text><Link to="/">Entre aqui</Link></Text>
          </TextDiv>
        </TextSection>

        <Line />
      </SignInDiv>
    </LoginContainer>
  );
}

export default Register;
