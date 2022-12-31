import  Home  from '../../pages/Home';
import  Sobre  from '../../pages/Sobre';
import  Habilidades  from '../../pages/Habilidades';
import  Projetos  from '../../pages/Projetos';
import  Contatos  from '../../pages/Contatos';
import {  Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes(apii){
  const location = useLocation();
  return (
    <AnimatePresence>
       <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/>
        <Route path="/Sobre" element={<Sobre/>}/>
        <Route path="/Habilidades" element={<Habilidades/>}/>
        <Route path="/Projetos" element={<Projetos api={apii}/>}/>
        <Route path="/Contatos" element={<Contatos/>}/>
       </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;