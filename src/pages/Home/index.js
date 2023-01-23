import { Container } from './styles';
import { FiFacebook, FiLinkedin, FiGithub } from 'react-icons/fi';
import Section from '../../Components/Section';



function Home(){
  const icons = [
    {
      id: 1,
      href: 'https://www.facebook.com/people/Alison-Alves/100007897695252/',
      icon: <FiFacebook/>,
    },
    {
      id: 2,
      href: 'https://github.com/alison-ribeiro',
      icon: <FiGithub/>,
    },
    {
      id: 3,
      href: 'https://www.linkedin.com/in/alison5253/',
      icon: <FiLinkedin/>,
    },
  ]
  return(
    <Section >
      <Container>
        <h1>
          Olá, eu sou  <span> Alison Alves</span>
        </h1>
        <p>
          Meu foco é desenvolvimento front-end, criando código limpo e responsivo sempre seguindo as boas práticas.
        </p>
        <div className='container-icon'>
          <ul>
            {icons.map(({href, icon,id }) =>(
              <li key={id}>
                <a href={href} target='blank'>
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      </Section>
  )
}

export default Home;
