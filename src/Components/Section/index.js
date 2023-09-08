
import { Container } from "./styles";
import UserContext from "../../utils/ShowMoreContext";
import { useContext, useEffect } from "react";



function Section({title, children, seeAll, align}){

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
    <Container  align={align}>
          <div className="container-info">
            {title &&(
              <h2>{title}</h2>
              )
            }
            {children}
            {seeAll && (
              <div className="seeAll" onClick={toggleSeeAll}>
                {showMore === 3 ? 'Ver tudo' : 'Esconder'}
              </div>
              )
            }
          </div>
    </Container>
  )
}
 export default Section;
