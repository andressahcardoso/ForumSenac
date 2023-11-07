import {AreaLogo, InputStyled, AreaImageUser, BtnLogOut, DivLogOut} from './styled'

// React
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// Images
import LogoSenac from '../../assets/logoSenac.png'
import userImage from '../../assets/userImage.PNG'


function HeaderSearch() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!token) {
            navigate('/')
        }
    }, [navigate])

    const handleLogout = () => {
        localStorage.clear()
        navigate('/')
    }


  return (
    <>
        <AreaLogo src={LogoSenac} alt='Logo senac' />
        <InputStyled type='search' placeholder='Pesquisar...' />

        <DivLogOut>
          <BtnLogOut onClick={handleLogout}>Sair</BtnLogOut>
        <Link to={'/UserAccount'}>
          <AreaImageUser
            src={userImage}
            alt='Imagem do usuário' /></Link>
        </DivLogOut>
    </>
  );
};

export default HeaderSearch;
