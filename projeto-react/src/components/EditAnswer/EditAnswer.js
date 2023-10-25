import { useParams } from "react-router";
import HeaderComponent from "../Header/Header";
import { Sidebar } from "../SideBar/SideBar";
import { Header, HomeContainer, Main, Nav } from "./styled";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

function EditAnswer() {
  const { id } = useParams();
  const [commentText, setCommentText] = useState("");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    async function fetchComment() {
      try {
        const response = await axios.get(`http://localhost:3008/api/comments/${id}`);
        setCommentText(response.data.comentario_texto);
      } catch (error) {
        console.error("Erro ao buscar o comentário:", error);
      }
    }
    fetchComment();
  }, [id]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:3008/api/comments/post/update/${id}`,
        {
          texto: commentText,
          autor_id: userId,
        }
      );

      if (response.status === 200 || response.status === 204) {
        alert("Comentário atualizado com sucesso!");
      } else {
        alert("Não foi possível atualizar o comentário.");
      }
    } catch (error) {
      console.error("Não foi possível atualizar o comentário:", error);
    }
  }, [id, commentText, userId]);

  return (
    <HomeContainer>
      <Header>
        <HeaderComponent />
      </Header>
      <Nav>
        <Sidebar />
      </Nav>
      <Main>
        <form onSubmit={handleSubmit}>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          ></textarea>
          <button type="submit">Atualizar comentário</button>
        </form>
      </Main>
    </HomeContainer>
  );
}

export default EditAnswer;
