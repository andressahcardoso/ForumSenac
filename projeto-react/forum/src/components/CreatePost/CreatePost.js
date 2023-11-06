import React, { useState } from 'react';
import { HomeContainer, Header, Nav, Main, Title, TextDiv, TextDiv2, Input, TextArea, Button, ButtonDiv} from './styled';
import axios from 'axios';
import { Sidebar } from '../SideBar/SideBar';
import HeaderComponent from '../Header/Header';
import { useNavigate } from 'react-router';

function CreatePost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState(''); // Inicialize o estado com uma string vazia
  const [content, setContent] = useState(''); // Inicialize o estado com uma string vazia

  async function handleSubmit(e) {
    e.preventDefault(); // Evite o comportamento padrão de envio do formulário

    try {
      const response = await axios.post('http://localhost:3001/api/createPost', {
        titulo: title,
        conteudo: content,
        autor_id: 3
      });


      console.log('Post criado com sucesso:', response.data);
      navigate('/Home')
    } catch (error) {
      console.error('Erro ao criar o post:', error);
    }

  }

  return (
    <HomeContainer>
      <Header>
        <HeaderComponent />
      </Header>
      <Nav>
        <Sidebar />
      </Nav>
      <Main>
        <form onSubmit={handleSubmit}>
          <TextDiv>
            <Title>Título do post</Title>
          </TextDiv>
          <Input
            placeholder='Digite o título do post...'
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Corrija o evento onChange
          ></Input>

          <TextDiv2>
          <Title>Conteúdo do post</Title>
          </TextDiv2>
          <TextArea
            placeholder='Digite o conteúdo do post'
            value={content}
            onChange={(e) => setContent(e.target.value)} // Corrija o evento onChange
          ></TextArea>
          <ButtonDiv>
            <Button type='submit'>Criar post</Button>
          </ButtonDiv>
        </form>
      </Main>
    </HomeContainer>
  );
}

export default CreatePost;
