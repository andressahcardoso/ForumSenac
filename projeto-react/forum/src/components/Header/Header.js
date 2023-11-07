import { useLocation } from 'react-router-dom';
import LogoSenac from '../../assets/logoSenac.png'
import {AreaLogo, AreaImageUser, BtnLogOut, DivLogOut} from './styled'
import {Link} from 'react-router-dom'
import test from '../../assets/userImage.PNG'

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function HeaderComponent() {
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
        navigate('/')
    }


  return (
    <>
        <AreaLogo src={LogoSenac} alt='Logo senac' />
        
        <DivLogOut>
          <BtnLogOut onClick={handleLogout}>Sair</BtnLogOut>
        <Link to={'/UserAccount'}>
          <AreaImageUser
            src={test}
            alt='Imagem do usuário' /></Link>
        </DivLogOut>
    </>
  );
};

export default HeaderComponent;
