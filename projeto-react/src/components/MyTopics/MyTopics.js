import React from 'react';
import { useLocation } from 'react-router-dom';
import {HomeContainer, Header, Nav, Main} from './styled'

import { Sidebar } from '../SideBar/SideBar';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import { TopicsList } from '../TopicsList/TopicsList';
import { TopicNav } from '../Home/styled';


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
      <TopicNav>
          <TopicsList/>
      </TopicNav>
     
    </HomeContainer>
  );
};

export default MyTopics;
