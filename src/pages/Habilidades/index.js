import FlipCard from '../../Components/FlipCard';
import Section from '../../Components/Section';
import { Container } from './styles';
import  {cardsSkils}  from '../../mock';



function Habilidades(){
  
 
  return(
    
      <Section title="Habilidade" seeAll={true}>
        <Container >
          <FlipCard cards={cardsSkils}/> 
        </Container>       
      </Section>
    
  )
}

export default Habilidades;