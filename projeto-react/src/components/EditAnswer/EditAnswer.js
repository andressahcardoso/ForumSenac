import { useParams } from "react-router"
import HeaderComponent from "../Header/Header"
import { Sidebar } from "../SideBar/SideBar"
import { Header, HomeContainer, Main, Nav } from "./styled"
import { useEffect, useState } from "react";
import axios from "axios";

function EditAnswer() {
    const { id } = useParams();
    const [comment, setComment] = useState([])

    useEffect(() => {
        async function fecthComment() {
            try {
                const response = await axios.get(`http://localhost:3008/api/comments/post/${id}`)

                console.log(response.data)

            } catch (error) {
                
            }
        }
        fecthComment()
    }, [id])

    return(
        <HomeContainer>
        <Header>
          <HeaderComponent />
        </Header>
        <Nav>
          <Sidebar />
        </Nav>
        <Main>
           
        </Main>
      </HomeContainer>
    )
}

export default EditAnswer