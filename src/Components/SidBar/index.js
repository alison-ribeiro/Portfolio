
import { useState } from "react";
import {  NavLink } from "react-router-dom";
import {Container, Nav}  from "./styles";
import { AiOutlineClose } from 'react-icons/ai';



import { HiMenu } from 'react-icons/hi';
import Loader from "../Loader";
import { useFetch } from "../../hooks/useFetch";




function SidBar() {
  const [menu, setMenu]           = useState(false);
  const path="";

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

 const {data, loading} = useFetch(path);



  return (
    <>
    <Container/>
    <HiMenu onClick={handleMenu}/>
      <Nav sideBar={menu} >
        <div className="container-head">
          <AiOutlineClose onClick={handleMenu} />
          <Loader isLoading={loading}/>
          <img src={data.avatar_url} alt="Foto de perfil"></img>
        </div>

        <div className="container-body">
          <ul>
            {links.map(({path, label}) =>(
              <li key={path}>
                <NavLink to={path} onClick={handleMenu}>
                <p>{label}</p>
              </NavLink>
              </li>
            ))}

          </ul>
          <footer>
              © 2022
              <a href="https://github.com/alison-ribeiro" target="blank"> Alison</a>
            </footer>
        </div>
      </Nav>
    </>
  );
}
 export default SidBar;
