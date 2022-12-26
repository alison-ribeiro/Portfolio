

import { Container,TheBack,TheCard,TheFront } from './styles'

import UserContext from "../../Context/ShowMoreContext";
import { useContext } from "react";

function FlipCard({cards }){

  const { showMore } = useContext(UserContext);
  
  return(
    
    <>
        {cards.slice(0,showMore).map(({title, icon, resume, list}) =>(
          <Container>
              <TheCard>
          <TheFront>
            <div className='container-header'>
              <div className="card-header"></div>
              <div className='card-header-body'></div>
              {icon}
            </div>        
            <div className="card-body">
              <h5>{title}</h5>
              <p className="card-text">{resume}</p>
            </div>
          
          </TheFront>
          <TheBack>
            <div className='container-back-header'>
              {icon}
            </div>
            <h5>Conhecimentos {title}</h5>
            <div className='scroll'>
              <ul>
                {list.map((c,i) =>(
                    <li key={i}>{c}</li>
                  ))}
              </ul>
            </div>
          </TheBack>
        </TheCard>
      </Container>
          
              
    ))}
    </>
    
        
        
        
   
    
  );
}

export default FlipCard;
