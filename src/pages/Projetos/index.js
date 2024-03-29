
import Section from '../../Components/Section';
import { Container } from './styles';
import Loader from '../../Components/Loader/'
import {  useContext } from 'react';

import UserContext from '../../utils/ShowMoreContext';
import { useFetch } from '../../hooks/useFetch';


function Projetos(){
  const path = "/repos"

  const { showMore }    = useContext(UserContext);

  const {data, loading} = useFetch(path);
 
  return(

    <Section title={"Projetos"} seeAll={true} >
        <Container>
        <Loader isLoading={loading}/>
         {data.slice(0,showMore).map(({id,description, name, html_url,language}) => 
    
            !name.startsWith('not') ?
              <div className='container' key={id}>
                
                  <p>{name}</p>
                  <figure>
                  <Loader isLoading={loading}/>
                    <img src={`https://raw.githubusercontent.com/alison-ribeiro/${name}/main/background.png`}  alt="imagem backgroud projeto"></img>
                    <div className='overlay'>
                      <div className='content'>
                        <ul>
                          <li>{name}</li>
                          <li>{description}</li>
                          <li>Linguagem : {language} </li>
                          <li className='button'><a href={html_url} alt="sda" target='blank'>Ir para Repositório </a></li>
                        </ul>
                      </div>
                    </div>
                  </figure>
              </div>
              : null
            
          
            )
          }
        </Container>
    </Section>
  )
}

export default Projetos;
