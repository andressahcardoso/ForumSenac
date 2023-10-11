import { SidebarNavigationContainer, SidebarNavList, SidebarNavItem, LinkText } from './styled';
import { RiHome2Line } from 'react-icons/ri';
import { HiOutlineLightBulb } from 'react-icons/hi';
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
        title: 'Tópicos',
        icon: <HiOutlineLightBulb />,
        link: '/Topics'
    },
    {
        title: 'Meus Tópicos',
        icon: <RiQuestionnaireLine />,
        link: '/MyTopics'
    },
    {
        title: 'Minhas respostas',
        icon: <BiCommentDetail />,
        link: '/MyAnswers'
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