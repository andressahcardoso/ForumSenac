import React from 'react';
// import { useLocation } from 'react-router-dom';
import {HomeContainer, Header, Nav, Main} from './styled'

import { Sidebar } from '../SideBar/SideBar';
import HeaderComponent from '../Header/Header';


function CreatePost() {
    // const location = useLocation();
    // const user = location.state;

  return (
    <HomeContainer>
      <Header>
        <HeaderComponent/>
      </Header>
      <Nav>
        <Sidebar/>
      </Nav>
      <Main>
        Criar Post
      </Main>
     
    </HomeContainer>
  );
};

export default CreatePost;
