import React from 'react';
// import { useLocation } from 'react-router-dom';
import {HomeContainer, Header, Nav, Main, TopicNav} from './styled'

import { Sidebar } from '../SideBar/SideBar';
import HeaderSearch from '../HeaderSearch/HeaderSearch';



function MyAnswers() {
  return (
    <HomeContainer>
      <Header>
        <HeaderSearch/>
      </Header>
      <Nav>
        <Sidebar/>
      </Nav>
      <Main>
        Minhas repostas
      </Main>
 
     
    </HomeContainer>
  );
};

export default MyAnswers;
