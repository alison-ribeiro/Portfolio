import { Container, Title,Paragraph, ContainerIcon } from './styles';
import { FiFacebook, FiLinkedin, FiGithub } from 'react-icons/fi';

function Home(){
  return(
    <Container>
      <Title>
        Olá, eu sou o <span> Alison Alves</span>
      </Title>
      <Paragraph>
        I am a frontend web developer. I can provide clean code and pixel perfect design.
         I also make website 
        more & more interactive with web animations.
      </Paragraph>
      <ContainerIcon>
        <ul>
          <li>
            <a href='https://www.facebook.com/people/Alison-Alves/100007897695252/' target='blank'>
              <FiFacebook/>
            </a>
          </li>
          <li>
            <a href='https://github.com/alison-ribeiro' target='blank'>
              <FiGithub/>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/alison5253/' target='blank'>
              <FiLinkedin/>
            </a>
          </li>
         
        </ul>
      </ContainerIcon>
    </Container>
  )
}

export default Home;