
import FlipCard from '../../Components/FlipCard';
import Section from '../../Components/Section';
import { Container, ContainerCards  } from './styles';
import  cardsSkils  from '../../mock';





function Habilidades(){
  
 
  return(
    <Container>
      <Section title="Habilidade" >
        <ContainerCards>
          <FlipCard cards={cardsSkils}/> 
        </ContainerCards>       
      </Section>
    </Container>
  )
}

export default Habilidades;