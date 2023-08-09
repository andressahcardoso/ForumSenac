import React from 'react';
import { useLocation } from 'react-router-dom';
import {HomeContainer, Header, Nav, Main} from './styled'

import { Sidebar } from '../SideBar/SideBar';
import HeaderSearch from '../HeaderSearch/HeaderSearch';


function MyTopics() {
    // const location = useLocation();
    // const user = location.state;

  return (
    <HomeContainer>
      <Header>
        <HeaderSearch/>
      </Header>
      <Nav>
        <Sidebar/>
      </Nav>
      <Main>
        Meus Tópicos
      </Main>
     
    </HomeContainer>
  );
};

export default MyTopics;
