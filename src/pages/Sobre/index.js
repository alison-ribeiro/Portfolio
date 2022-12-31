
import { Container } from './styles';
import Section from '../../Components/Section';




function Sobre(){
  
  return(
    
      <Section title={"Sobre"}>
        <Container>
          <div className='photo'>
            <img src='https://webtech.pt/wp-content/uploads/2022/06/O-que-faz-afinal-um-programador-web.png' alt='Foto de codigo'></img>
          </div>
          <div className='about'>
            <h3>Eu sou <span>Alison Alves</span></h3>
            <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
            <p><span>Nome Completo:</span> Alison Ribeiro Alves</p>
            <p><span>Idade:</span> 23</p>
            <p><span>Nacionalidade:</span> Brasileiro</p>
            <p><span>Idioma:</span> Português/BR</p>
            <p><span>Cidade:</span> Gravatai</p>
            <p><span>Freelance:</span> Disponível</p>
          </div>
        </Container>
     
     
     </Section>
  )
}

export default Sobre;

