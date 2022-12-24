import { Container,MainContainer,TheBack,TheCard,TheFront } from './styles'


function FlipCard(){
  return(
    <Container>
      <MainContainer>
        <TheCard>
          <TheFront>Front</TheFront>
          <TheBack>back</TheBack>
        </TheCard>
        
        
      </MainContainer>
    </Container>
    
  );
}

export default FlipCard;
