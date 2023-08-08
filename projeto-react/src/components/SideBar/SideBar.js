import { ContainerSidebar, SidebarNavigationContainer, SidebarNavList, SidebarNavItem, LinkText } from './styled';
import { RiHome2Line } from 'react-icons/ri';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { RiQuestionnaireLine } from 'react-icons/ri';
import { BiCommentDetail } from 'react-icons/bi';
import {Link} from 'react-router-dom'

const ItemsMenu = [
    {
        title: 'Home',
        icon: <RiHome2Line />,
        link: '/'
    },
    {
        title: 'Tópicos',
        icon: <HiOutlineLightBulb />,
        link: '/Tópicos'
    },
    {
        title: 'Meus Tópicos',
        icon: <RiQuestionnaireLine />,
        link: '/MeusTópicos'
    },
    {
        title: 'Minhas respostas',
        icon: <BiCommentDetail />,
        link: '/MinhasRespostas'
    },

]

export const Sidebar = () => {
    return (
        
            <SidebarNavigationContainer>
                <SidebarNavList>
                    {ItemsMenu.map((item, index) => {
                        return (
                            <SidebarNavItem key={index}>
                                {item.icon}
                                <LinkText><Link to={item.link}>
                                    {item.title}
                                </Link></LinkText>
                            </SidebarNavItem>
                        )
                    })}
                </SidebarNavList>
            </SidebarNavigationContainer>
        
    )
}