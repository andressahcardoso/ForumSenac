import React from 'react';
import { useLocation } from 'react-router-dom';
import {HomeContainer, Header, Nav, Main, PersonImg, TextArea, InputTexts, Input, InputTextsImg, Title, ButtonsDiv, OutButton, SaveButton, NameText } from './styled'

import { GrEdit } from "react-icons/gr";
import {BsEyeSlashFill} from 'react-icons/bs'
import {BiImageAdd} from 'react-icons/bi'

import { Sidebar } from '../SideBar/SideBar';
import HeaderComponent from '../Header/Header';

import UserImgTest from '../../assets/loginImg.jpg'


function Home(props) {
    const location = useLocation();
    const user = location.state;

  return (
    <HomeContainer>
      <Header>
        <HeaderComponent/>
      </Header>
      <Nav>
        <Sidebar/>
      </Nav>
      <Main>
        <div>
          <PersonImg src={UserImgTest}></PersonImg>
          <NameText>{user?.name || 'Guest'}</NameText>
        </div>


        <TextArea>
          <Title>Informações</Title>

          <InputTexts>
            <pText>Nome do usuário</pText>
            <Input placeholder={user?.name || 'Guest'}></Input>
            <GrEdit/>
          </InputTexts>

          <InputTexts>
            <pText>Email</pText>
            <Input placeholder={user?.email || 'Guest'}></Input>
            <GrEdit/>
          </InputTexts>

          <InputTexts>
            <pText>Senha</pText>
            <Input placeholder='*************'></Input>
            <BsEyeSlashFill/>
          </InputTexts>

          <InputTextsImg>
            <pText>Alterar Imagem</pText>
            <Input placeholder={user?.picture || 'Guest'}></Input>
            <BiImageAdd/>
          </InputTextsImg>

          <ButtonsDiv>
            <OutButton>SAIR</OutButton>
            <SaveButton>SALVAR</SaveButton>
          </ButtonsDiv>

        </TextArea>
      </Main>
     
    </HomeContainer>
  );
};

export default Home;
