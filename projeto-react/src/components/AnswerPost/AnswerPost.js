import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderComponent from "../Header/Header";
import { Sidebar } from "../SideBar/SideBar";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Header, HomeContainer, Main, Nav } from "./styled";

function AnswerPost() {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { id } = useParams();

  // Função para formatar a data em "quanto tempo atrás"
  function formatRelativeDate(date) {
    return formatDistanceToNow(new Date(date), {
      addSuffix: true,
      locale: ptBR,
    });
  }

  // Função para adicionar novo comentario
  const handleSubmmit = useCallback(async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    const postID = post.post_id;

    try {
      const response = await axios.post(
        `http://localhost:3008/api/createComment`,
        {
          texto: newComment,
          autor_id: userId,
          post_id: postID,
        }
      );

      setNewComment("");
      console.log("Comentário criado com sucesso:", response.data);
    } catch (error) {
      return alert("Não foi possível adicionar o comentário!", error);
    }
  }, [newComment, post]);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(`http://localhost:3008/api/posts/${id}`);
        const responseComments = await axios.get(`http://localhost:3008/api/comments/post/${id}`);

        setPost(response.data);
        setComments(responseComments.data);
      } catch (error) {
        console.error("Erro ao buscar o post:", error);
      }
    }

    fetchPost();
  }, [id, handleSubmmit]);

  return (
    <>
      <HomeContainer>
        <Header>
          <HeaderComponent />
        </Header>
        <Nav>
          <Sidebar />
        </Nav>
        <Main>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {post ? (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h1>{post.post_titulo}</h1>
                <p>{post.post_conteudo}</p>
                <span>Postado por: {post.autor_nome}</span>
                <span>
                  Data de criação: {formatRelativeDate(post.post_data_criacao)}
                </span>
              </div>
            ) : (
              <>
                <p>Carregando o post...</p>
              </>
            )}

            <h2>Respostas para esta publicação</h2>
            {comments.map((item, index) => {
              return (
                <div key={index}>
                  <span>
                    {item.autor_nome +
                      " | " +
                      formatRelativeDate(item.comentario_data_criacao)}
                  </span>
                  <p>{item.comentario_texto}</p>
                </div>
              );
            })}

            <h2>Participe da discussão</h2>
            <form
              onSubmit={handleSubmmit}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              >
              </textarea>

              <button type="submit" style={{ margin: "20px 0" }}>
                Adicionar comentário
              </button>
            </form>
          </div>
        </Main>
      </HomeContainer>
    </>
  );
}

export default AnswerPost;
