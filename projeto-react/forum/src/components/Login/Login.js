import { LoginContainer, LoginImg, SignInDiv, Logo, Input, Button, Line, Text, SubText, TextDiv, TextSection, Form } from './styled';

// React
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Axios
import axios from 'axios';

// Images
import LogoSenac from '../../assets/logoSenac.png';


function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/auth/login', {
        email,
        senha: password, // 'senha' deve corresponder ao nome do campo no backend
      });

      if (response.data.success) {
        // Armazena o token no localStorage
        const token = response.data.data[0].token;
        const userId = response.data.data[0].id;
        const name = response.data.data[0].nome;

        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('name', name);

        // Define o token no cabeçalho das solicitações Axios
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        alert('Login bem-sucedido');
        navigate('/Home');
      } else {
        alert('Falha no login. Verifique suas credenciais.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login. Por favor, tente novamente.');
    }
  };

  return (
    <LoginContainer>
      <LoginImg />
      <SignInDiv>
        <Logo src={LogoSenac} />
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Enviar</Button>
        </Form>

        <TextSection>
          <TextDiv>
            <Text>Não possui conta?</Text>
            <Link to="/Register">
              <SubText>Cadastre-se</SubText>
            </Link>
          </TextDiv>
          <TextDiv>
            <Text>Esqueceu a senha?</Text>
            <SubText>Recupere aqui</SubText>
          </TextDiv>
        </TextSection>

        <Line />
      </SignInDiv>
    </LoginContainer>
  );
}

export default Login;
