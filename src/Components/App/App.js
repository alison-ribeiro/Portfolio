import { BrowserRouter as Router } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';
import {ligthTheme, darkTheme} from '../../Theme/';
import { GlobalStyle } from '../../GlobalStyle';



import NavBar from '../NavBar';
import {Container} from './styles';


import UserContext from '../../Context/ShowMoreContext';
import LoaderContext from '../../Context/Loader';
import axios from 'axios';

import { BsToggleOff, BsToggleOn} from 'react-icons/bs'
import AnimatedRoutes from '../AnimatedRouter/AnimatedRoutes';

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
             <AnimatedRoutes apii={apiGitHub}/>
                
          </Container>
        </Router>
      </ThemeProvider>
    </UserContext.Provider>
    </LoaderContext.Provider>
  );
}

export default App;
