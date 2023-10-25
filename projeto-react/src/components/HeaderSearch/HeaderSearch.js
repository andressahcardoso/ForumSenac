import LogoSenac from "../../assets/logoSenac.png";
import {
  AreaLogo,
  InputStyled,
  AreaImageUser,
  BtnLogOut,
  DivLogOut,
} from "./styled";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import test from "../../assets/loginImg.jpg";
import axios from "axios";

function HeaderSearch() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("name");
    navigate("/");
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:3008/api/posts");
      console.log("Posts:", response.data);
      setPosts(response.data);
      searchPosts();
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
    }
  };

  const searchPosts = () => {
    const searchTerm = search.toLowerCase();
    const foundPosts = posts.filter((post) => {
      return (
        post.post_titulo.toLowerCase().includes(searchTerm) ||
        post.post_conteudo.toLowerCase().includes(searchTerm)
      );
    });

    if (foundPosts.length > 0) {
      console.log("Posts encontrados:", foundPosts);
    } else {
      console.log("Nenhum post encontrado.");
    }
  };

  return (
    <>
      <AreaLogo src={LogoSenac} alt="Logo senac" />
      <div>
        <InputStyled
          type="search"
          placeholder="Pesquisar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Pesquisar</button>
      </div>

      <DivLogOut>
        <BtnLogOut onClick={handleLogout}>Sair</BtnLogOut>
        <Link to="/UserAccount">
          <AreaImageUser src={test} alt="Imagem do usuário" />
        </Link>
      </DivLogOut>
    </>
  );
}

export default HeaderSearch;
