import { HomeContainer, Header, Nav, Main } from './styled'

// React
import React, { useEffect, useState } from 'react';

// Axios
import axios from 'axios';

// Components
import { Sidebar } from '../SideBar/SideBar';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import { Card } from '../Card/Card';


function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get('http://localhost:3001/api/posts');
        setPosts(response.data);
        
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
        <Card posts={posts} user={false} />
      </Main>
    </HomeContainer>
  );
};

export default Home;
