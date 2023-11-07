import { Header, HomeContainer, Main, Nav, TextArea, Button, TextDiv, Title, ButtonDiv, TextDiv2, Input } from "./styled";

// React
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

// Axios
import axios from "axios";

// Components
import HeaderComponent from "../Header/Header";
import { Sidebar } from "../SideBar/SideBar";


function EditUserPost() {
  const navigate = useNavigate();

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const userId = localStorage.getItem("userId");
  const { id } = useParams();

  useEffect(() => {
    async function fetchComment() {
      try {
        const response = await axios.get(`http://localhost:3001/api/posts/${id}`);
        setTitle(response.data.post_titulo)
        setContent(response.data.post_conteudo);
      } catch (error) {
        console.error("Erro ao buscar o post:", error);
      }
    }
    fetchComment();
  }, [id]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:3001/api/posts/update/${id}`,
        {
          conteudo: content,
          titulo: title,
          autor_id: userId,
        }
      );

      if (response.status === 200 || response.status === 204) {
        alert("Post atualizado com sucesso!");
        navigate('/EditPost')
      } else {
        alert("Não foi possível atualizar o post.");
      }
    } catch (error) {
      console.error("Não foi possível atualizar o post:", error);
    }
  }, [id, content, title, userId]);

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
          <TextDiv>
            <Title>Edite o título do post</Title>
          </TextDiv>
          <Input
            placeholder={title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></Input>

          <TextDiv2>
          <Title>Edite o conteúdo do post</Title>
          </TextDiv2>
          <TextArea
            placeholder={content}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></TextArea>
          <ButtonDiv>
            <Button type='submit'>Editar post</Button>
          </ButtonDiv>
        </form>
      </Main>
    </HomeContainer>
  );
}

export default EditUserPost;