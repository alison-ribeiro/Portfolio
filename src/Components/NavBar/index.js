import {Nav, HeaderImage, ContainerHeader, Container, Ul, Footer }  from "./styles";

function NavBar() {
  return (
    <Nav>
      <ContainerHeader>
        <HeaderImage/>
      </ContainerHeader>

      <Container>
        <Ul>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Sobre</p>
          </li>
          <li>
            <p>Habilidades</p>
          </li>
          <li>
            <p>Projetos</p>
          </li>
          <li>
            <p>Contato</p>
          </li>

        </Ul>
      </Container>
      <Footer>
        Rodape
      </Footer>
    </Nav>
      
  );
}
 export default NavBar;