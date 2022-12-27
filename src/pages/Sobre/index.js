import Card from '../../Components/Cards';
import { Container, ContainerAbout, Photo , About, Cards  } from './styles';
import { BiDesktop } from 'react-icons/bi';
import { BsBrush } from 'react-icons/bs';
import { DiReact } from 'react-icons/di';
import Section from '../../Components/Section';


function Sobre(){
  const cards = [
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
    <Container>
      <Section title={"Sobre"} seeAll={false}>
        <ContainerAbout>
          <Photo>
            <img src='https://webtech.pt/wp-content/uploads/2022/06/O-que-faz-afinal-um-programador-web.png' alt='Foto de codigo'></img>
          </Photo>
          <About>
            <h3>Eu sou <span>Alison Alves</span></h3>
            <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
            <p>Nome Completo :Alis Ribeiro Alves</p>
            <p>Idade :23</p>
            <p>Nacionalidade :Brasileiro</p>
            <p>Idioma :Português/BR</p>
            <p>Cidade :Gravatai</p>
            <p>Freelance :Disponível</p>
          </About>
        
        </ContainerAbout>
      </Section>
      <Section title={"Serviços"} seeAll={false}>
          <Cards>
            <Card info={cards}/>
          </Cards>
      </Section>
      
     
      
    </Container>
  )
}

export default Sobre;

