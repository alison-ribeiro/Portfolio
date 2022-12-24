import Card from '../../Components/Cards';
import { Container, ContainerAbout, Photo , About, Services, Cards  } from './styles';



function Sobre(){
  return(
    <Container>
      
      
      
      <ContainerAbout>
        <h1>Sobre mim</h1>
        <div className='container'>
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
        </div>
      </ContainerAbout>

      <Services>
        <h2>Serviços</h2>
        <Cards>
          <Card/>
        </Cards>
      </Services>
      
      
    </Container>
  )
}

export default Sobre;