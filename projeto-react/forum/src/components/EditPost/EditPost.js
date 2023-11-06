import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { HomeContainer, Header, Nav, Main, TopicNav } from './styled'
import { Link } from 'react-router-dom'

import { Sidebar } from '../SideBar/SideBar';
import HeaderSearch from '../HeaderSearch/HeaderSearch';

import { Card } from '../Card/Card';
import axios from 'axios';



function Home() {
  const [posts, setPosts] = useState([]); // Estado para armazenar os posts
  const id = localStorage.getItem('userId');
  console.log('============id :', id);

  useEffect(() => {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    async function fetchPosts() {
      try {
        const response = await axios.get(`http://localhost:3001/api/posts/user/${id}`); // Atualize a URL conforme necessário
        setPosts(response.data); // Armazena os posts no estado
        
      } catch (error) {
        console.error('Erro ao recuperar os posts:', error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <HomeContainer>
      <Header>
        <HeaderSearch />
      </Header>
      <Nav>
        <Sidebar />
      </Nav>
      <Main>
        <Card posts={posts} user={true} />
      </Main>
    </HomeContainer>
  );
};

export default Home;
