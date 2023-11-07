import { Header, HomeContainer, Main, Nav, Form, TextArea, Button, TextDiv, Title } from "./styled";

// React
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

// Axios
import axios from "axios";

// Components
import HeaderComponent from "../Header/Header";
import { Sidebar } from "../SideBar/SideBar";

function EditAnswer() {
  const navigate = useNavigate();

  const [commentText, setCommentText] = useState("");
  const userId = localStorage.getItem("userId");

  const { id } = useParams();

  useEffect(() => {
    async function fetchComment() {
      try {
        const response = await axios.get(`http://localhost:3001/api/comments/${id}`);
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
        `http://localhost:3001/api/comments/post/update/${id}`,
        {
          texto: commentText,
          autor_id: userId,
        }
      );

      if (response.status === 200 || response.status === 204) {
        alert("Comentário atualizado com sucesso!");
        navigate('/Home')
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
      <TextDiv>
            <Title>Edite seu comentário</Title>
          </TextDiv>
        <Form onSubmit={handleSubmit}>
          <TextArea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          ></TextArea>
          <Button type="submit">Atualizar comentário</Button>
        </Form>
      </Main>
    </HomeContainer>
  );
}

export default EditAnswer;