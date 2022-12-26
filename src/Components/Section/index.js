
import { ContainerPag, ContainerInfo, Container } from "./styles";
import UserContext from "../../Context/ShowMoreContext";
import { useContext } from "react";


function Section({title, children}){

  const { showMore, setShowMore } = useContext(UserContext);

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
           <div onClick={toggleSeeAll}> 
            {showMore === 3 ? 'Ver tudo' : 'Esconder'} 
           </div>
        </ContainerInfo>
      </Container>
    </ContainerPag>
  )
}
 export default Section;