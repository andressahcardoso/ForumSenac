import React, { useEffect, useState } from "react";
import { Header, HomeContainer, Main, Nav } from "./styled";
import HeaderComponent from "../Header/Header";
import { Sidebar } from "../SideBar/SideBar";
import { useParams } from "react-router";
import axios from "axios";

export const EditQuestion = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newTitlePost, setNewTitlePost] = useState("");
  const [newContentPost, setNewContentPost] = useState("");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(
          `http://localhost:3008/api/posts/${id}`
        );
        const responseComments = await axios.get(
          `http://localhost:3008/api/comments/post/${id}`
        );

        setPost(response.data);
        setNewTitlePost(response.data.post_titulo);
        setNewContentPost(response.data.post_conteudo);
        setComments(responseComments.data);
      } catch (error) {
        console.error("Erro ao buscar o post:", error);
      }
    }
    fetchPost();
  }, [id]);

  const handleSubmmit = async (e) => {
    e.preventDefault();

    try {
      const response = axios.put(
        `http://localhost:3008/api/posts/update/${id}`,
        {
          titulo: newTitlePost,
          conteudo: newContentPost,
          autor_id: userId,
        }
      );

      if ((await response).status === 200) {
        alert("Post atualizado com sucesso!");
      } else {
        alert("Não foi possivel atualizar o post!");
      }
    } catch (error) {
      console.error("Não foi possivel atualizar o post:", error);
    }
  };

  const handleDelete = async (e) => {
    try {
      const response = axios.delete("");
      
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
          {post ? (
            <form
              onSubmit={handleSubmmit}
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
              }}
            >
              <input
                type="text"
                value={newTitlePost}
                onChange={(e) => setNewTitlePost(e.target.value)}
              />

              <textarea
                value={newContentPost}
                onChange={(e) => setNewContentPost(e.target.value)}
              />

              <button type="submit">Atualizar</button>

              <button onClick={""}>Deletar post</button>
            </form>
          ) : (
            ""
          )}
        </div>

        <div>
          <h2>Comentarios</h2>
          {comments ? (
            comments.map((comment, index) => (
              <div key={index}>{comment.comentario_texto}</div>
            ))
          ) : (
            <div>
              <h2>Ainda não comentarios para este post</h2>
            </div>
          )}
        </div>
      </Main>
    </HomeContainer>
  );
};
