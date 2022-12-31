
import { ContainerPag } from "./styles";
import UserContext from "../../data/ShowMoreContext";
import { useContext, useEffect } from "react";



function Section({title, children, seeAll}){

  const { showMore, setShowMore } = useContext(UserContext);
  
  useEffect(() => {
    setShowMore(3);
  },[setShowMore])

  function toggleSeeAll(){
    if(showMore !== 3 ) 
      setShowMore(3); 
    else
      setShowMore(100);
  } 


  return(
    <ContainerPag 
    >
        <div className="container"
          
        >
           {title 
              ?
              <h2>{title}</h2>
              :
              <></>
            }
          <div className="container-info">
            {children}
            {seeAll 
              ?
              <div className="seeAll" onClick={toggleSeeAll}> 
                {showMore === 3 ? 'Ver tudo' : 'Esconder'} 
              </div>
            
            :
              <></>
            }
          </div>
      </div>
    </ContainerPag>
      
   
  )
}
 export default Section;