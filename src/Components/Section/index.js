
import { ContainerPag, ContainerInfo, Container } from "./styles";
import UserContext from "../../Context/ShowMoreContext";
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
    <ContainerPag>
        <Container>
        <h2>{title}</h2>
        <ContainerInfo>
           {children}
           {seeAll 
            ?
            <div className="seeAll" onClick={toggleSeeAll}> 
              {showMore === 3 ? 'Ver tudo' : 'Esconder'} 
            </div>
           
           :
            <></>
           }
           
        </ContainerInfo>
      </Container>
    </ContainerPag>
      
   
  )
}
 export default Section;