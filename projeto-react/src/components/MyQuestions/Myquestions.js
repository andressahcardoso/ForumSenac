import { useEffect, useState } from 'react'
import HeaderSearch from '../HeaderSearch/HeaderSearch'
import { Sidebar } from '../SideBar/SideBar'
import { HomeContainer, Header, Nav, Main, } from './styled'
import axios from 'axios'
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNavigate } from 'react-router'

function MyQuestions() {
  const id = localStorage.getItem("userId")
  const [userPost, setUserPost] = useState([])
  const navigate = useNavigate()

  // Função para formatar a data em "quanto tempo atrás"
  function formatRelativeDate(date) {
    return formatDistanceToNow(new Date(date), {
      addSuffix: true,
      locale: ptBR,
    });
  }

  useEffect(() => {
    async function fetchpost() {
      try {
        const response = await axios.get(`http://localhost:3008/api/posts/user/${id}`);
        //console.log(response)
        setUserPost(response.data)


      } catch (error) {
        console.log("Erro ao fazer a solicitação:", error)
      }

    }
    fetchpost();
  }, [id])

  return (
    <HomeContainer>
      <Header>
        <HeaderSearch />
      </Header>
      <Nav>
        <Sidebar />
      </Nav>
      <Main>
        <h2>Minhas perguntas</h2>
        {userPost.map((post) => {
          return (
            <div style={{display: "flex", flexDirection: 'column'}}>
              <h3>{post.post_titulo}</h3>
              <p>{post.post_conteudo}</p>
              <span>{post.autor_nome + ' | ' + formatRelativeDate(post.post_data_criacao)}</span>
              <button onClick={() => navigate(`/Question/${post.post_id}`)}>Editar post</button>
            </div>
          )
        })}
      </Main>


    </HomeContainer>
  )
}

export default MyQuestions