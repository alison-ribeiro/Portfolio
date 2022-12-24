import { Container, Title,Paragraph, ContainerIcon } from './styles';
import { FiFacebook, FiLinkedin, FiGithub } from 'react-icons/fi';

function Home(){

  const icons = [
    {
      href: 'https://www.facebook.com/people/Alison-Alves/100007897695252/',
      icon: <FiFacebook/>,
    },
    {
      href: 'https://github.com/alison-ribeiro',
      icon: <FiGithub/>,
    },
    {
      href: 'https://www.linkedin.com/in/alison5253/',
      icon: <FiLinkedin/>,
    },
  ]
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
          {icons.map(({href, icon}) =>(
            <li>
              <a href={href} target='blank'>
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </ContainerIcon>
    </Container>
  )
}

export default Home;