import React, { useEffect, useState } from "react";
import { CardForum,InformacoesCard } from "./Card.jsx";
import { BiMessageAltDetail } from "react-icons/bi";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import axios from "axios";
import { ptBR } from "date-fns/locale";

export const Card = ({ posts }) => {
  return (
    <>
      {posts.map((item) => (
        <PostCard key={item.post_id} post={item} />
      ))}
    </>
  );
};

const PostCard = ({ post }) => {
  const [numberComments, setNumberComments] = useState(null);
  const id = post.post_id;

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(
          `http://localhost:3008/api/getCommentsForPost/${id}`
        );

        setNumberComments(response.data.length);
      } catch (error) {
        console.error("Erro ao buscar os comentários:", error);
      }
    }
    fetchPost();
  }, [id]); // Certifique-se de que o efeito seja acionado quando o 'id' muda.

  const dataCriacao = new Date(post.post_data_criacao);
  const dataCriacaoFormatada = formatDistanceToNow(dataCriacao, {
    locale: ptBR,
  });

  return (
    <Link to={`/Answer/${post.post_id}`}>
      <CardForum>
        <h1>{post.post_titulo}</h1>
        <p>{post.post_conteudo}</p>

        <hr />
        <InformacoesCard>
          <span>
            <img
              src="https://github.com/eduardofronzav4company.png"
              alt="Imagem do usuário"
              style={{
                width: "40px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
            {post.autor_nome}
          </span>
          <span>{dataCriacaoFormatada} atrás</span>
          <span>
            <BiMessageAltDetail />
            {numberComments}
          </span>
        </InformacoesCard>
      </CardForum>
    </Link>
  );
};
