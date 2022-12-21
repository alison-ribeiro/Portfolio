import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {ligthTheme, darkTheme} from './Components/Theme';
import { GlobalStyle } from './GlobalStyle/';


import NavBar from './Components/NavBar';
import {Container, Bodi} from './styles';


function App() {

  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
    theme === "light" ? setTheme('dark') : setTheme('light');
  }


  return (
    <ThemeProvider theme={theme === 'light' ? ligthTheme : darkTheme}>

      <GlobalStyle/> 
        <Container>
          <NavBar>
            <button onClick={handleTheme}>Trocar tema</button>
          </NavBar>
          <Bodi>
            
          </Bodi>
        </Container>
        
    </ThemeProvider>
    
  );
}

export default App;
