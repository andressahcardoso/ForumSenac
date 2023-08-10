import { CardForum, Container, InformacoesCard } from "./Card.jsx";
import { BiMessageAltDetail } from 'react-icons/bi'

export const Card = () => {
    return (
       <>
            <CardForum>
                <h1>Título da pergunta</h1>
                <p>texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto </p>
                <hr />
                <InformacoesCard>
                    <span >
                        <img
                            src='https://github.com/eduardofronzav4company.png'
                            alt='Imagem do usuário'
                            style={{
                                width: '40px',
                                borderRadius: '50%',
                                marginRight: '10px'
                            }} />
                        Nome usuário
                    </span>
                    <span>

                        12h
                    </span>
                    <span>
                        <BiMessageAltDetail />
                        5
                    </span>
                </InformacoesCard>
            </CardForum>
            <CardForum>
                <h1>Título da pergunta</h1>
                <p> texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
                </p>
                <hr />
                <InformacoesCard>
                    <span >
                        <img
                            src='https://github.com/eduardofronzav4company.png'
                            alt='Imagem do usuário'
                            style={{
                                width: '40px',
                                borderRadius: '50%',
                                marginRight: '10px'
                            }} />
                        Nome usuário
                    </span>
                    <span>
                        12h
                    </span>
                    <span>
                        <BiMessageAltDetail />
                        5
                    </span>
                </InformacoesCard>
            </CardForum>
      </>
    );
}