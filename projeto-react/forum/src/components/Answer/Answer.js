import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderComponent from '../Header/Header';
import { Sidebar } from '../SideBar/SideBar';
import { Header, HomeContainer, Nav } from '../UserAccount/styled';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Main, TitleDiv, PostInfo, Image, Content, Textarea, Button, CommentDiv, Title, EditBtn } from './styled';

import ImagemComputador from '../../assets/computador-card.png'

function Answer() {
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    const nameUser = localStorage.getItem("name");

    // Função para formatar a data em "quanto tempo atrás"
    function formatRelativeDate(date) {
        return formatDistanceToNow(new Date(date), { addSuffix: true, locale: ptBR });
    }

    // Função para adicionar novo comentario
    const handleSubmmit = useCallback(
        async (e) => {
          e.preventDefault();
          const postID = post.post_id;
          const userId = localStorage.getItem("userId");

      try {
        const response = await axios.post(
          `http://localhost:3001/api/createComment`,
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
    },
    [newComment, post]
  );

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/posts/${id}`
        );
        const responseComments = await axios.get(
          `http://localhost:3001/api/getCommentsForPost/${id}`
        );

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
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {post ? (
                            <TitleDiv>
                                <PostInfo>
                                    <Image src={ImagemComputador}></Image>
                                    <Content>
                                        <Title>{post.post_titulo}</Title>
                                        <p>{post.post_conteudo}</p>
                                        <span>Postado por: {post.autor_nome}</span>
                                        <span>Data de criação: {formatRelativeDate(post.post_data_criacao)}</span>
                                    </Content>
                                </PostInfo>
                            </TitleDiv>
                        ) : (
                            <>
                                <p>Carregando o post...</p>
                            </>
                        )}

                        <h2>Respostas para esta publicação</h2>
                        {comments.map((item, index) => {
                            return (
                                <div key={index}>
                                    <CommentDiv>
                                        <span>{item.autor_nome + ' | ' + formatRelativeDate(item.comentario_data_criacao)}</span>
                                        <p>{item.comentario_texto}</p>
                                        {item.autor_nome === nameUser && <EditBtn onClick={() => navigate(`/MyAnswers/${item.comentario_id}`)}>Editar</EditBtn>}
                                    </CommentDiv>
                                </div>
                            );
                        })}

                        <h2>Participe da discussão</h2>
                        <form onSubmit={handleSubmmit} style={{ display: 'flex', flexDirection: 'column' }}>
                            <Textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                            ></Textarea>
                            <Button
                                type='submit'
                                style={{ margin: '20px 0' }}>Adicionar comentário</Button>
                        </form>
                    </div>
                </Main>
            </HomeContainer>
        </>
    );
}

export default Answer;
