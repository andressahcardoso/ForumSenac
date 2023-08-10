import React from 'react';
// import { useLocation } from 'react-router-dom';
import {HomeContainer, Header, Nav, Main, TopicNav} from './styled'

import { Sidebar } from '../SideBar/SideBar';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import { TopicsList } from '../TopicsList/TopicsList';


function MyAnswers() {
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
        Minhas repostas
      </Main>
      <TopicNav>
          <TopicsList/>
      </TopicNav>
     
    </HomeContainer>
  );
};

export default MyAnswers;
