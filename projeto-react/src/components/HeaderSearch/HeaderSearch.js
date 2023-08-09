import { useLocation } from 'react-router-dom';
import LogoSenac from '../../assets/logoSenac.png'
import {AreaLogo, InputStyled, AreaImageUser} from './styled'
import {Link} from 'react-router-dom'

import test from '../../assets/loginImg.jpg'


function HeaderSearch() {
    const location = useLocation();
    const user = location.state;

  return (
    <>
        <AreaLogo src={LogoSenac} alt='Logo senac' />
        <InputStyled type='search' placeholder='Pesquisar...' />
        <Link to={'/UserAccount'}>
          <AreaImageUser
            src={test}
            alt='Imagem do usuário' /></Link>
        {/* <AreaImageUser
            src={user?.picture}
            alt='Imagem do usuário' /> */}
    </>
  );
};

export default HeaderSearch;
