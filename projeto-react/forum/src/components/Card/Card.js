import { CardForum, InformacoesCard, Button } from "./Card.jsx";

// Date
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

// React
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiMessageAltDetail } from "react-icons/bi";

// Images
import userImage from "../../assets/userImage.PNG";

export const Card = ({ posts, user }) => {
  const navigate = useNavigate();
    console.log(posts)
  return (
    <>
      {posts.map((item) => {
        const dataCriacao = new Date(item.post_data_criacao);
        const dataCriacaoFormatada = formatDistanceToNow(dataCriacao, {
          locale: ptBR,
        });

        function goToAnswer() {
          navigate(`/Answer/${item.post_id}`);
        }

        return (
          <>
            <Link to={`/Answer/${item.post_id}`}>
              <CardForum>
                <h1>{item.post_titulo}</h1>
                <p>{item.post_conteudo}</p>

                <hr />
                <InformacoesCard>
                  <span>
                    <img
                      src={userImage}
                      alt="Imagem do usuário"
                      style={{
                        width: "40px",
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                    />
                    {item.autor_nome}
                  </span>

                  <span>{dataCriacaoFormatada} atrás</span>

                  {user === true && (
                    <Button
                      onClick={() => navigate(`/EditUserPost/${item.post_id}`)}
                    >
                      Editar
                    </Button>
                  )}

                  <span onClick={goToAnswer}>
                    <BiMessageAltDetail />
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
