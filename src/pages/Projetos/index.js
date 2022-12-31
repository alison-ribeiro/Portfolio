
import Section from '../../Components/Section';
import { Container } from './styles';
import Loader from '../../Components/Loader/'
import { useEffect, useState } from 'react';

import UserContext from '../../data/ShowMoreContext';
import axios from 'axios';



function Projetos(){

  const  [loading, setLoading]  = useState(true);
  const { showMore } = useState(UserContext);
  const [apiGitHub, setApiGitHub] = useState();
  
  useEffect(() => {
   
    axios.get("https://api.github.com/users/alison-ribeiro/repos")
    .then((resp) => {
        setLoading(true);
        setApiGitHub(resp.data);
        setLoading(false);
     
      
    })
    .catch((e) => {
      console.log("Error:", e)
    })
    
  },[setApiGitHub, setLoading])

 
  return(
    
    <Section title={"Projetos"} seeAll={true}>
     {loading
          ? 
          <Loader/>
          :
        <Container>
         {apiGitHub.slice(0,showMore).map(({id,description, name, html_url}) => (
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