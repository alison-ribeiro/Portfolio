
import FlipCard from '../../Components/FlipCard';
import Section from '../../Components/Section';
import { Container, ContainerCards  } from './styles';

function Habilidades(){
  
  return(
    <Container>
      <Section title="Habilidade">
        <ContainerCards>
          <FlipCard/>
        </ContainerCards>
      </Section>
      
    </Container>
  )
}

export default Habilidades;