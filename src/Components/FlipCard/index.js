import { Container } from './styles'

import UserContext from "../../Context/ShowMoreContext";
import { useContext } from "react";

function FlipCard({cards}){

  const { showMore } = useContext(UserContext);
  
  return(
    <>
        {cards.slice(0,showMore).map(({title, icon, resume, list}) =>(
          <Container>
            <div className='the-card'>
              <div className='the-front'>
                <div className='container-header'>
                  <div className="card-header"></div>
                  <div className='card-header-body'></div>
                  {icon}
                </div>        
                <div className="card-body">
                  <h5>{title}</h5>
                  <p className="card-text">{resume}</p>
                </div>
              
              </div>
          <div className='the-back'>
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
          </div >
        </div>
      </Container>
          
              
    ))}
    </>
  );
}

export default FlipCard;
