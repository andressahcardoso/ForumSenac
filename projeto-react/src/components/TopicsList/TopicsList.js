import { TopicContent, BotaoAdd, TopicContainer } from "./styled";
import { AiOutlinePlus } from 'react-icons/ai';
import { BsCarFrontFill } from 'react-icons/bs';
import { Link } from "react-router-dom";

const EstiloIcon = {
    fontSize: '20px'
};

export const TopicsList = () => {
    return (
        <TopicContainer>
             <Link to={'/CreatePost'}><BotaoAdd>
                <AiOutlinePlus style={EstiloIcon} />
                Novo tópico
            </BotaoAdd></Link>

            <TopicContent>
                <h3>Melhores Tópicos</h3>
                <span>
                    <BsCarFrontFill style={EstiloIcon} /> 
                    ⠀Viagem
                </span>
                <span>
                    <BsCarFrontFill style={EstiloIcon} /> 
                    ⠀Viagem
                </span>
                <span>
                    <BsCarFrontFill style={EstiloIcon} /> 
                    ⠀Viagem
                </span>
            </TopicContent>
        </TopicContainer>
    );
};