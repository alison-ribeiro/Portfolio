import styled from "styled-components";
import { devices } from "../../styles/responsive";

export const Container = styled.div`

  .container-Toogle{
    background-color: red;
  }
  .toogle{
    all: unset;
    position: absolute;
    font-size: 3rem;
    right: 10px;
    top: 5px;
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
      top: 1.5px;
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
