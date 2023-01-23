import { Container } from "./styles";

function Loader({isLoading}){
  if(isLoading)
  return(
      <Container>
        <div></div>
        <div></div>
        <div></div>
     </Container>
  )
}
export default Loader;
