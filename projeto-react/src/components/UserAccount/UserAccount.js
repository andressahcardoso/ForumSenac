import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  HomeContainer,
  Header,
  Nav,
  Main,
  PersonImg,
  TextArea,
  InputTexts,
  Input,
  InputTextsImg,
  Title,
  ButtonsDiv,
  OutButton,
  SaveButton,
  NameText,
} from "./styled";

import { GrEdit } from "react-icons/gr";
import { BsEyeSlashFill, BsFillEmojiNeutralFill } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";

import { Sidebar } from "../SideBar/SideBar";
import HeaderComponent from "../Header/Header";
import axios from "axios";
import UserImgTest from "../../assets/loginImg.jpg";

function Home(props) {
  const location = useLocation();
  const user = location.state;
  const IdUser = localStorage.getItem("userId");

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate()

  const handleSubmmit = async (e) => {
    e.preventDefault()

    try {
      const response = axios.put(`http://localhost:3008/api/user/${IdUser}`, {
        nome: name,
        senha: password,
        email: email,
      });
    } catch (error) {}
  };

  return (
    <HomeContainer>
      <Header>
        <HeaderComponent />
      </Header>
      <Nav>
        <Sidebar />
      </Nav>
      <Main>
        <div>
          <PersonImg src={UserImgTest}></PersonImg>
          <NameText>{user?.name || "Guest"}</NameText>
        </div>

        <form onSubmit={handleSubmmit}>
          <TextArea>
            <Title>Informações</Title>

            <InputTexts>
              <pText>Nome do usuário</pText>
              <Input
                placeholder={user?.name || "Guest"}
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Input>

              <GrEdit />
            </InputTexts>

            <InputTexts>
              <pText>Email</pText>
              <Input
                placeholder={user?.email || "Guest"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
              <GrEdit />
            </InputTexts>

            <InputTexts>
              <pText>Senha</pText>
              <Input
                placeholder="Insira sua nova senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Input>
              <BsEyeSlashFill />
            </InputTexts>

            <InputTextsImg>
              <pText>Alterar Imagem</pText>
              <Input placeholder={user?.picture || "Guest"}></Input>
              <BiImageAdd />
            </InputTextsImg>

            <ButtonsDiv>
              <Link to={"/Home"}>
                <OutButton onClick={() => navigate('/Home')}>SAIR</OutButton>
              </Link>
              <SaveButton type="submit">SALVAR</SaveButton>
            </ButtonsDiv>
          </TextArea>
        </form>
      </Main>
    </HomeContainer>
  );
}

export default Home;
