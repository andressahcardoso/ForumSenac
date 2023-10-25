import React, { useEffect, useState } from "react";
import { HomeContainer, Header, Nav, Main } from "./styled";
import axios from "axios";
import { Sidebar } from "../SideBar/SideBar";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import { useNavigate } from "react-router";

function MyAnswers() {
  const [comments, setComments] = useState([]);
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

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
            <h2>Minhas respostas</h2>
            {comments.map((props, index) => (
              <div
                key={index}
                style={{ display: "flex", flexDirection: "column" }}
              >
                {console.log(props)}
                <h3>Post: {props.post_titulo}</h3>
                <span>Minha resposta: {props.comentario_texto}</span>
                <button
                  onClick={() => navigate(`/myanswers/${props.comentario_id}`)}
                >
                  Editar comentário
                </button>
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
