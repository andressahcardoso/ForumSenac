import React from 'react';
// import { useLocation } from 'react-router-dom';
import {HomeContainer, Header, Nav, Main} from './styled'
import {Link} from 'react-router-dom'

import { Sidebar } from '../SideBar/SideBar';
import HeaderSearch from '../HeaderSearch/HeaderSearch';



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
        Home

        <Link to={'/CreatePost'}>Novo Tópico</Link>
      </Main>
     
    </HomeContainer>
  );
};

export default Home;
