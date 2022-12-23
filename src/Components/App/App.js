import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import {ligthTheme, darkTheme} from '../../Theme/';
import { GlobalStyle } from '../../GlobalStyle';



import NavBar from '../NavBar';
import {Container} from './styles';
import  Home  from '../../pages/Home';
import  Sobre  from '../../pages/Sobre';
import  Habilidades  from '../../pages/Habilidades';
import  Projetos  from '../../pages/Projetos';
import  Contatos  from '../../pages/Contatos';

function App() {

  const [theme, setTheme] = useState("light");
  
  const handleTheme = () => {
    theme === "light" ? setTheme('dark') : setTheme('light');
  }



  return (
    <ThemeProvider theme={theme === 'light' ? ligthTheme : darkTheme}>
      <Router>

      
        <GlobalStyle/> 
        <Container>
          
          <NavBar>
            
          </NavBar>
              <button onClick={handleTheme}>Trocar tema</button>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Sobre" element={<Sobre/>}/>
              <Route path="/Habilidades" element={<Habilidades/>}/>
              <Route path="/Projetos" element={<Projetos/>}/>
              <Route path="/Contatos" element={<Contatos/>}/>
            </Routes>
              
        </Container>
      </Router>
    </ThemeProvider>
    
  );
}

export default App;
