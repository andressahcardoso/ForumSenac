import { ContainerHeader, InputStyled } from './style'
import LogoSenac from '../../assets/logo-senac.png'


export const Header = () => {
    return (
        <ContainerHeader>
            <img src={LogoSenac} alt='Logo senac' />
            <InputStyled type='search' placeholder='Pesquisar' />
            <img
                src='https://github.com/eduardofronzav4company.png'
                alt='Imagem do usuário'
                style={{
                    borderRadius: '50%',
                    width: '65px',
                    height: '65px',
                    padding: '2vw'
                }} />
        </ContainerHeader>

    )
}