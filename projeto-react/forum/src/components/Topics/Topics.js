import {HomeContainer, Header, Nav, Main } from './styled'

// React
import React from 'react';

// Components
import { Sidebar } from '../SideBar/SideBar';
import HeaderSearch from '../HeaderSearch/HeaderSearch';


function Topics() {
  return (
    <HomeContainer>
      <Header>
        <HeaderSearch/>
      </Header>
      <Nav>
        <Sidebar/>
      </Nav>
      <Main>
        Tópicos
      </Main>  
    </HomeContainer>
  );
};

export default Topics;
