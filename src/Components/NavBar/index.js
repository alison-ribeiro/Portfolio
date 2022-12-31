
import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";
import {Nav}  from "./styles";
import { AiOutlineClose } from 'react-icons/ai';



import { HiMenu } from 'react-icons/hi';
import Loader from "../Loader";

import axios from "axios";

function NavBar() {
  
  const  [loading, setLoading]  = useState(true);

  const [menu, setMenu] = useState(false);

  const [apiGitHub, setApiGitHub] = useState();

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
  


  useEffect(() => {
   
    axios.get("https://api.github.com/users/alison-ribeiro/repos")
    .then((resp) => {
        setLoading(true);
        setApiGitHub(resp.data);
        setLoading(false);
     
      
    })
    .catch((e) => {
      console.log("Error:", e)
    })
    
  },[setApiGitHub, setLoading])

  return (
    <>
     
      <HiMenu onClick={handleMenu}/>
      
      <Nav sideBar={menu}>
        
        <div className="container-head">
          <AiOutlineClose onClick={handleMenu} />
          {loading
          
          ? 
          <Loader/>
          :
          <>
            <img src={apiGitHub[0].owner.avatar_url} alt="Foto de perfil"></img>
          </>
          
          }

        </div>

        <div className="container">
          <ul>
            
            {links.map(({path, label}) =>(
              <li key={path}>
                <NavLink to={path} onClick={handleMenu}>
                <p>{label}</p>
              </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <footer>
          © 2022  
          <a href="https://github.com/alison-ribeiro" target="blank"> Alison</a>
        </footer>
      </Nav>
      </>
     
    
    
   
  );
}
 export default NavBar;