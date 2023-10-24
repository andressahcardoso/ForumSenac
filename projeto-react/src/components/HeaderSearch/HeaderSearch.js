import { useLocation } from 'react-router-dom';
import LogoSenac from '../../assets/logoSenac.png'
import {AreaLogo, InputStyled, AreaImageUser, BtnLogOut, DivLogOut} from './styled'
import {Link} from 'react-router-dom'

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import test from '../../assets/loginImg.jpg'


function HeaderSearch() {
    const location = useLocation();
    const user = location.state;

    
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!token) {
            navigate('/')
        }
    }, [navigate])

    const handleLogout = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        localStorage.removeItem('userId');
        localStorage.removeItem('name');
        
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
            src={test}
            alt='Imagem do usuário' /></Link>
        </DivLogOut>
        {/* <AreaImageUser
            src={user?.picture}
            alt='Imagem do usuário' /> */}
    </>
  );
};

export default HeaderSearch;
