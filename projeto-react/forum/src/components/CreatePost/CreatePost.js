import React, { useState } from 'react';
import { HomeContainer, Header, Nav, Main } from './styled';
import axios from 'axios';
import { Sidebar } from '../SideBar/SideBar';
import HeaderComponent from '../Header/Header';

function CreatePost() {
  const [title, setTitle] = useState(''); // Inicialize o estado com uma string vazia
  const [content, setContent] = useState(''); // Inicialize o estado com uma string vazia

  async function handleSubmit(e) {
    e.preventDefault(); // Evite o comportamento padrão de envio do formulário

    try {
      const response = await axios.post('http://localhost:3008/api/createPost', {
        titulo: title,
        conteudo: content,
        autor_id: 3
      });


      console.log('Post criado com sucesso:', response.data);
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
          <label>Título do post</label>
          <input
            placeholder='Digite o título do post...'
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Corrija o evento onChange
          ></input>

          <label>Conteúdo do post</label>
          <textarea
            placeholder='Digite o conteúdo do post'
            value={content}
            onChange={(e) => setContent(e.target.value)} // Corrija o evento onChange
          ></textarea>
          <button type='submit'>Criar post</button>
        </form>
      </Main>
    </HomeContainer>
  );
}

export default CreatePost;
