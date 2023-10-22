import React from 'react';
import { CardForum, Container, InformacoesCard } from "./Card.jsx";
import { BiMessageAltDetail } from 'react-icons/bi';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link } from 'react-router-dom';

export const Card = ({ posts }) => {
    return (
        <>
            {posts.map((item) => {
             
                const dataCriacao = new Date(item.post_data_criacao);
                const dataCriacaoFormatada = formatDistanceToNow(dataCriacao, { locale: ptBR });

                return (
                    <>
                        {/* Use o valor de item.post_id para criar links dinâmicos */}
                        <Link to={`/Answer/${item.post_id}`}>
                            <CardForum>
                                <h1>{item.post_titulo}</h1>
                                <p>{item.post_conteudo}</p>

                                <hr />
                                <InformacoesCard>
                                    <span>
                                        <img
                                            src='https://github.com/eduardofronzav4company.png'
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
                                    <span>
                                        <BiMessageAltDetail />
                                        5
                                    </span>
                                </InformacoesCard>
                            </CardForum>
                        </Link>
                    </>
                );
            })}
        </>
    );
};
