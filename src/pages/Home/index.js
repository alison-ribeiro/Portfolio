import { Container } from './styles';
import { FiFacebook, FiLinkedin, FiGithub } from 'react-icons/fi';
import Section from '../../Components/Section';

import { motion } from 'framer-motion';

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
    <Section>
      <Container as={motion.div}
          initial={{ top: "-100vh"}}
          animate={{ top: 0}}
          exit={{top: "-100vh",  } }
      
      >
        <h1>
          Olá, eu sou  <span> Alison Alves</span>
        </h1>
        <p>
          I am a frontend web developer. I can provide clean code and pixel perfect design.
          I also make website 
          more & more interactive with web animations.
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