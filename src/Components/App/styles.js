import styled from "styled-components";
import { devices } from "../../Responsive";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  
  button{
    all: unset;
    position: absolute;
    font-size: 3rem;
    right: 10px;
    cursor: pointer;
    z-index: 99;
   
  }
  >svg{
    display: none;
  }
  
  
  @media ${devices.tablet} {
    >svg{
      display: flex;
      position: absolute;
      top: 5px;
      font-size: 85px;
      z-index: 98;
    }
  }

  @media ${devices.mobileL} {
    >svg{
        font-size: 60px;
     
    }
  }
  
`