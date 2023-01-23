
import { Container } from "./styles";


function Toast({message, bg, icon}){
  return(
    <Container bg={bg}>
        {icon}
        <h1>{message}</h1>
    </Container>
  )
}
export default Toast;
