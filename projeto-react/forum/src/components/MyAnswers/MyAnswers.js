import {HomeContainer, Header, Nav, Main} from './styled'

// React
import React from 'react';

// Components
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
