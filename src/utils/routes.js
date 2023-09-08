import {  Routes, Route } from 'react-router-dom';

import  Home  from '../pages/Home';
import  About  from '../pages/About';
import  Habilidades  from '../pages/Habilidades';
import  Projetos  from '../pages/Projetos';
import  Contacts  from '../pages/Contacts';




function Rotas(){

  return (
   
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Sobre" element={<About/>}/>
        <Route path="/Habilidades" element={<Habilidades/>}/>
        <Route path="/Projetos" element={<Projetos/>}/>
        <Route path="/Contatos" element={<Contacts/>}/>
       </Routes>
   
  )
}

export default Rotas;