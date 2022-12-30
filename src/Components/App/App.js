import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useEffect, useState } from 'react';

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

import UserContext from '../../Context/ShowMoreContext';
import LoaderContext from '../../Context/Loader';
import axios from 'axios';

import { BsToggleOff, BsToggleOn} from 'react-icons/bs'

function App() {

  const [theme, setTheme] = useState("light");
  const [showMore, setShowMore] = useState(3);
 

  const [loading, setLoading] = useState(true);

  const [apiGitHub, setApiGitHub] = useState([]);

  const handleTheme = () => {
    theme === "light" ? setTheme('dark') : setTheme('light');
  }
  console.log(apiGitHub);
  useEffect(() => {
   
    axios.get("https://api.github.com/users/alison-ribeiro/repos")
    .then((resp) => {
        setLoading(true);
        setApiGitHub(resp.data);
        setLoading(false);
     
      
    })
    .catch(() => {
      console.log("deu errado")
    })
    
  },[setApiGitHub])
  
  return (
    <LoaderContext.Provider value={{loading, setLoading}}>

    
    <UserContext.Provider value={{showMore, setShowMore}}>
      <ThemeProvider theme={theme === 'light' ? ligthTheme : darkTheme}>
        <Router>
          <GlobalStyle/> 
          <Container>
            <NavBar photo={apiGitHub}/>
                <button onClick={handleTheme}>
                  {theme === "light"
                    ?
                     <BsToggleOn/>
                    :
                     <BsToggleOff/>
                  }
                  
                  
                </button>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Sobre" element={<Sobre/>}/>
                <Route path="/Habilidades" element={<Habilidades/>}/>
                <Route path="/Projetos" element={<Projetos api={apiGitHub}/>}/>
                <Route path="/Contatos" element={<Contatos/>}/>
              </Routes>
                
          </Container>
        </Router>
      </ThemeProvider>
    </UserContext.Provider>
    </LoaderContext.Provider>
  );
}

export default App;
