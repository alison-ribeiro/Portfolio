import styled from "styled-components";
import { devices } from "../../Responsive";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
  button{
    all: unset;
    position: absolute;
    font-size: 3rem;
    right: 10px;
    cursor: pointer;
  }
  >svg{
    display: none;
  }
  
  
  @media ${devices.tablet} {
    >svg{
      display: flex;
      position: absolute;
      top: 30px;
      font-size: 100px;
    }
  }

  @media ${devices.mobileL} {
    >svg{
      display: flex;
      position: absolute;
      top: 30px;
      font-size: 60px;
    }
  }
  
`