import React, { useEffect, useState } from "react";
import { HomeContainer, Header, Nav, Main } from "./styled";
import axios from "axios";
import { Sidebar } from "../SideBar/SideBar";
import HeaderSearch from "../HeaderSearch/HeaderSearch";

function MyAnswers() {
  const [comments, setComments] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = axios.get(
          `http://localhost:3008/api/comments/${userId}/responses`
        );

        setComments((await response).data);
      } catch (error) {}
    }

    fetchComments();
  }, [userId]);

  return (
    <HomeContainer>
      <Header>
        <HeaderSearch />
      </Header>
      <Nav>
        <Sidebar />
      </Nav>
      <Main>
        {comments ? (
          <div>
            {comments.map((props, index) => (
              
              <div key={index}>
                {console.log(props)}
                <h2>Post: {props.post_titulo}</h2>
                <span>Minha resposta: {props.comentario_texto}</span>
              </div>
            ))}
          </div>
        ) : (
          <>
            <span>Carregando posts...</span>
          </>
        )}
      </Main>
    </HomeContainer>
  );
}

export default MyAnswers;
