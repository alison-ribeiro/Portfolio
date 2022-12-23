
import { useState } from "react";

import { Link } from "react-router-dom";
import {Nav, ContainerHeader, Container, Ul, Footer }  from "./styles";
import { AiOutlineClose } from 'react-icons/ai';

import Perfil from './Perfil.png';

import { HiMenu } from 'react-icons/hi';

function NavBar() {

  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    menu === true ? setMenu(false) : setMenu(true);
  }

  return (
    <>
      <HiMenu onClick={handleMenu}/>
      
      <Nav sideBar={menu}>
        <AiOutlineClose onClick={handleMenu} />
      <ContainerHeader>

        
          <img src={Perfil} alt="Foto de perfil"></img>
        
      </ContainerHeader>

      <Container>
        <Ul>
          <li>
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/Sobre">
              <p>Sobre</p>
            </Link>
          </li>
          <li>
            <Link to="/Habilidades">
              <p>Habilidades</p>
            </Link>
          </li>
          <li>
            <Link to="/Projetos">
              <p>Projetos</p>
            </Link>
          </li>
          <li>
            <Link to="/Contatos">
              <p>Contatos</p>
            </Link>
          </li>

        </Ul>
      </Container>
      <Footer>
        © 2022  
        <a href="https://github.com/alison-ribeiro" target="blank"> Alison</a>
      </Footer>
    </Nav>
      
    </>
   
  );
}
 export default NavBar;