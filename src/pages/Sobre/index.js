
import { Container } from './styles';
import Section from '../../Components/Section';




function Sobre(){

  function getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

return(

      <Section title={"Sobre"}>
        <Container>
          <div className='photo'>
            <img src='https://webtech.pt/wp-content/uploads/2022/06/O-que-faz-afinal-um-programador-web.png' alt='Foto de codigo'></img>
          </div>
          <div className='about'>
            <h3>Me chamo <span>Alison Alves</span></h3>
            <p>Sou formado em análise e desenvolvimento de sistema pela universidade Uninter, e estou cursando pós gradução em desenvolvimento orientado a objeto em java.</p>
            <p><span>Nome Completo:</span> Alison Ribeiro Alves</p>
            <p><span>Idade:</span> {getAge("1999/03/02")}</p>
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

