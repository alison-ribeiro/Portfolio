import { BrowserRouter as Router } from 'react-router-dom';

import {  useState } from 'react';

import { ThemeProvider } from 'styled-components';
import {ligthTheme, darkTheme} from '../../Theme/';
import { GlobalStyle } from '../../GlobalStyle';



import NavBar from '../NavBar';
import {Container} from './styles';


import UserContext from '../../data/ShowMoreContext';



import { BsToggleOff, BsToggleOn} from 'react-icons/bs'



import Rotas from '../../data/routes';

function App() {

  const [theme, setTheme] = useState("light");
  const [showMore, setShowMore] = useState(3);
 

 


  const handleTheme = () => {
    theme === "light" ? setTheme('dark') : setTheme('light');
  }
 
 
  


  return (
    

    
    <UserContext.Provider value={{showMore, setShowMore}}>
      <ThemeProvider theme={theme === 'light' ? ligthTheme : darkTheme}>
        <Router>
          <GlobalStyle/> 
          <Container>
            <NavBar/>
                <button onClick={handleTheme}>
                  {theme === "light"
                    ?
                     <BsToggleOn/>
                    :
                     <BsToggleOff/>
                  }
                </button>
                <Rotas/>
                
          </Container>
        </Router>
      </ThemeProvider>
    </UserContext.Provider>
    
  );
}

export default App;
