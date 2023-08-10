import React from 'react';
// import { useLocation } from 'react-router-dom';
import {HomeContainer, Header, Nav, Main, TopicNav} from './styled'
import {Link} from 'react-router-dom'

import { Sidebar } from '../SideBar/SideBar';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import { TopicsList } from '../TopicsList/TopicsList';
import { Card } from '../Card/Card';



function Home() {
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
      
        <Card/>
      </Main>
      <TopicNav>
          <TopicsList/>
      </TopicNav>
     
    </HomeContainer>
  );
};

export default Home;
