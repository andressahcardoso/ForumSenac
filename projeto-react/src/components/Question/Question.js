import React, { useEffect, useState } from 'react'
import { Header, HomeContainer, Main, Nav } from "./styled";
import HeaderComponent from '../Header/Header';
import { Sidebar } from '../SideBar/SideBar';
import { useParams } from 'react-router';
import axios from 'axios';

export const Question = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await axios.get(`http://localhost:3008/api/posts/${id}`);
                const responseComments = await axios.get(`http://localhost:3008/api/getCommentsForPost/${id}`);

                setPost(response.data);
                setComments(responseComments.data);
            } catch (error) {
                console.error("Erro ao buscar o post:", error);
            }
        }

        fetchPost();
    }, [id]);

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

                    {post ?
                        (
                            <form>
                                <input value={post.post_titulo}></input>
                                <textarea>{post.post_conteudo}</textarea>
                            
                                <button>Atualizar</button>
                            </form>
                        )
                        : ''
                    }
                </div>

                <h2>Comentarios</h2>
                <div>
                    {
                        comments ? (
                            comments.map((comment, index) => (
                                <div key={index}>
                                    {comment.comentario_texto}
                                </div>
                            ))
                        ) : ''
                    }
                </div>
            </Main>
        </HomeContainer>
    )
}
