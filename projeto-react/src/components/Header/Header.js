import { useLocation } from 'react-router-dom';
import LogoSenac from '../../assets/logoSenac.png'
import {AreaLogo, AreaImageUser} from './styled'
import {Link} from 'react-router-dom'
import test from '../../assets/loginImg.jpg'

function HeaderComponent() {
    const location = useLocation();
    const user = location.state;

  return (
    <>
        <AreaLogo src={LogoSenac} alt='Logo senac' />
        
        <Link to={'/UserAccount'}>
          <AreaImageUser
            src={test}
            alt='Imagem do usuário' /></Link>
            
    </>
  );
};

export default HeaderComponent;
