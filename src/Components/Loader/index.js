import { Container } from "./styles";

function Loader({isLoading}){
  if(!isLoading){
    return null
  }
  return(
      <Container>
        <div></div>
        <div></div>
        <div></div>
     </Container>
  )
}
export default Loader;
