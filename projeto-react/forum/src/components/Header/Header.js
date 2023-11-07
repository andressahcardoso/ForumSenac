import {AreaLogo, AreaImageUser, BtnLogOut, DivLogOut} from './styled'

// React
import { useEffect } from 'react';
import { useNavigate, Link} from 'react-router-dom';

// Images
import LogoSenac from '../../assets/logoSenac.png'
import userImage from '../../assets/userImage.PNG'


function HeaderComponent() {
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
            src={userImage}
            alt='Imagem do usuário' /></Link>
        </DivLogOut>
    </>
  );
};

export default HeaderComponent;
