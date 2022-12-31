import {  Routes, Route } from 'react-router-dom';

import  Home  from '../pages/Home';
import  Sobre  from '../pages/Sobre';
import  Habilidades  from '../pages/Habilidades';
import  Projetos  from '../pages/Projetos';
import  Contatos  from '../pages/Contatos';




function Rotas(){

  return (
   
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Sobre" element={<Sobre/>}/>
        <Route path="/Habilidades" element={<Habilidades/>}/>
        <Route path="/Projetos" element={<Projetos/>}/>
        <Route path="/Contatos" element={<Contatos/>}/>
       </Routes>
   
  )
}

export default Rotas;