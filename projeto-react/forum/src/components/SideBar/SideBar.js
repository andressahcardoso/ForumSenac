import { SidebarNavigationContainer, SidebarNavList, SidebarNavItem, LinkText } from './styled';

// React
import { RiHome2Line } from 'react-icons/ri';
import { RiQuestionnaireLine } from 'react-icons/ri';
import { BiCommentDetail } from 'react-icons/bi';
import {Link} from 'react-router-dom'

const ItemsMenu = [
    {
        title: 'Home',
        icon: <RiHome2Line />,
        link: '/Home'
    },
    {
        title: 'Criar post',
        icon: <RiQuestionnaireLine />,
        link: '/createPost'
    },
    {
        title: 'Minhas respostas',
        icon: <BiCommentDetail />,
        link: '/MyAnswers'
    },
    {
        title: 'Meus Posts',
        icon: <BiCommentDetail />,
        link: '/EditPost'
    },

]

export const Sidebar = () => {
    return (
        
            <SidebarNavigationContainer>
                <SidebarNavList>
                    {ItemsMenu.map((item, index) => {
                        return (
                            <Link to={item.link}>
                                <SidebarNavItem key={index}>
                                    {item.icon}
                                    <LinkText>
                                        {item.title}
                                    </LinkText>
                                </SidebarNavItem>
                            </Link>
                        )
                    })}
                </SidebarNavList>
            </SidebarNavigationContainer>
        
    )
}