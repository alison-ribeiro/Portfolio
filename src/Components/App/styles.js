import styled from "styled-components";
import { devices } from "../../Responsive";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  button{
    position: absolute;
    background-color: red;
    right: 0;
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