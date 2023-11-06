import React from 'react';
import { CardForum, Container, InformacoesCard, Button } from "./Card.jsx";
import { BiMessageAltDetail } from 'react-icons/bi';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link, useNavigate } from 'react-router-dom';
import userImage from '../../assets/userImage.PNG'

export const Card = ({ posts, user }) => {
    const navigate = useNavigate()

    console.log('props.user', user)
    return (
        <>
            {posts.map((item) => {
             
                const dataCriacao = new Date(item.post_data_criacao);
                const dataCriacaoFormatada = formatDistanceToNow(dataCriacao, { locale: ptBR });

                return (
                    <>
                        {/* Use o valor de item.post_id para criar links dinâmicos */}
                            <CardForum>
                                <h1>{item.post_titulo}</h1>
                                <p>{item.post_conteudo}</p>

                                <hr />
                                <InformacoesCard>
                                    <span>
                                        <img
                                            src={userImage}
                                            alt='Imagem do usuário'
                                            style={{
                                                width: '40px',
                                                borderRadius: '50%',
                                                marginRight: '10px'
                                            }}
                                        />
                                        {item.autor_nome}
                                    </span>
                                    <span>
                                        {dataCriacaoFormatada} atrás
                                    </span>
                                    {user === true  && <Button onClick={() => navigate(`/EditUserPost/${item.post_id}`)}>Editar</Button>}
                                    <Link to={`/Answer/${item.post_id}`}>
                                    <span>
                                        <BiMessageAltDetail />
                                        5
                                    </span></Link>
                                </InformacoesCard>
                            </CardForum>
                        
                    </>
                );
            })}
        </>
    );
};
