
import Section from '../../Components/Section';
import { Container } from './styles';



function Projetos({api}){

 
  
  return(
    
    <Container>
      {api === undefined &&(
          <div>Carregandooo .........</div>
        )
      }
      <Section title={"Projetos"} seeAll={true}>
        <div className='container'>
        {api.map(({id,description, name, html_url}) =>(
             <figure key={(id)}>
             <img src={`https://raw.githubusercontent.com/alison-ribeiro/${name}/main/backgroud.webp`}  alt="imagem backgroud projeto"></img>
             <div className='overlay'>
               <div className='content'>
                 <p>{}</p>
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
            ))}
          
          
        </div>
      </Section>
        
    </Container>
  )
}

export default Projetos;