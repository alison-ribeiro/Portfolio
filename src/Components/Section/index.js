import { ContainerPag, ContainerInfo, Container } from "./styles";

function Section({title, children}){

  return(
    <ContainerPag>
      <Container>
        <h2>{title}</h2>
        <ContainerInfo>
            {children}
        </ContainerInfo>
      </Container>
    </ContainerPag>
  )
}
 export default Section;