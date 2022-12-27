
import {   useContext, useState } from "react";

import {  NavLink } from "react-router-dom";
import {Nav, ContainerHeader, Container, Ul, Footer }  from "./styles";
import { AiOutlineClose } from 'react-icons/ai';



import { HiMenu } from 'react-icons/hi';
import Loader from "../Loader";
import LoaderContext from "../../Context/Loader";

function NavBar({photo}) {
  
  const { loading } = useContext(LoaderContext);

  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    menu === true ? setMenu(false) : setMenu(true);
  }
  const links = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/Sobre',
      label: 'Sobre',
    },
    {
      path: '/Habilidades',
      label: 'Habilidades',
    },
    {
      path: '/Projetos',
      label: 'Projetos',
    },
    {
      path: '/Contatos',
      label: 'Contatos',
    },
  ]
  
  return (
    <>
     
      <HiMenu onClick={handleMenu}/>
      
      <Nav sideBar={menu}>
        <AiOutlineClose onClick={handleMenu} />
        <ContainerHeader>
          {loading
          
          ? 
          <Loader/>
          :
          <><Loader/>
          <img src={photo[0].owner.avatar_url} alt="Foto de perfil"></img></>
          
          }
        
          
        

        
          
        </ContainerHeader>

        <Container>
          <Ul>
            {links.map(({path, label}) =>(
              <li key={path}>
                <NavLink to={path} onClick={handleMenu}>
                <p>{label}</p>
              </NavLink>
              </li>
            ))}
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