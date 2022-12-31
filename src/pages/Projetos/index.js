
import Section from '../../Components/Section';
import { Container } from './styles';
import Loader from '../../Components/Loader/'
import { useContext } from 'react';
import LoaderContext from '../../Context/Loader';
import UserContext from '../../Context/ShowMoreContext';



function Projetos({api}){

  const { loading } = useContext(LoaderContext);
  const { showMore } = useContext(UserContext);
  
  return(
    
    <Section title={"Projetos"} seeAll={true}>
     {loading
          
          ? 
          <Loader/>
          :
          
      
        <Container>
         {api.slice(0,showMore).map(({id,description, name, html_url}) => (
          <div className='container'>
              <p>{name}</p>
             <figure key={(id)}>
                
              <img src={`https://raw.githubusercontent.com/alison-ribeiro/${name}/main/backgroud.png`}  alt="imagem backgroud projeto"></img>

              <div className='overlay'>
                  
                <div className='content'>
                  
                  <ul>
                    <li>{name}</li>
                    <li>{description}</li>
                    <li>Linguagem : Javascript dasdasd </li>
                    <ul >
                      <li>Tecnologias usadas</li>
                      <li>Tecnologias usadas</li>
                      <li><a href={html_url} alt="sda" target='blank'>Botaao</a></li>
                    </ul>
                  </ul>
                </div>
              </div>
           </figure>
           </div>
            ))
          
          }
        </Container>  
      }
      
     
        
    </Section>
  )
}

export default Projetos;