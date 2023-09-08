import { BrowserRouter as Router } from 'react-router-dom';
import Rotas from "../../utils/routes";
import {  useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../styles/global';
import {ligthTheme, darkTheme} from '../../styles/themes/default';
import {Container} from './styles';

import SidBar from '../SidBar';

import UserContext from '../../utils/ShowMoreContext';


import { BsToggleOff, BsToggleOn} from 'react-icons/bs'


function App() {
  const [theme, setTheme]       = useState("light");
  const [showMore, setShowMore] = useState();

  function handleTheme() {
    theme === "light" ? setTheme('dark') : setTheme('light');
  }
  return (

    <UserContext.Provider value={{showMore, setShowMore}}>
      <ThemeProvider theme={theme === 'dark' ? ligthTheme : darkTheme}>
        <GlobalStyle/>
        <Router>
          <Container>
            <SidBar/>
              <div className='container-Toogle'> 
                <button onClick={handleTheme} className='toogle'>
                  {theme === "light"
                    ?
                     <BsToggleOn/>
                    :
                     <BsToggleOff/>
                  }
                </button>
              </div>
                
                <Rotas/>
          </Container>
        </Router>
      </ThemeProvider>
    </UserContext.Provider>

  );
}

export default App;
