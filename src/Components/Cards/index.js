import { Container } from './styles'
import { BiDesktop } from 'react-icons/bi'
import { BsBrush } from 'react-icons/bs'
import { DiReact } from 'react-icons/di'

function Card(){
  const Cards = [
    {
      icon: <DiReact/>,
      title: "Front-End",
      resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
    {
      icon: <BsBrush/>,
      title: "Web-Designer",
      resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
    {
      icon: <BiDesktop/>,
      title: "Desenvolvedor Desktop",
      resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
  ]
  return(
    <>
     {Cards.map(({icon, title, resume}) =>(
            <Container>
              {icon}
              <h3>{title}</h3>
              <p>{resume}</p>
            </Container>
          ))}
    </>
    
  );
}

export default Card;
