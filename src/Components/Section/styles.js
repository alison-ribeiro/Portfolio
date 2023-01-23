import styled from "styled-components";
import { devices } from "../../styles/responsive";

export const Container = styled.div`
  display: flex;
  position: absolute;
  width: calc(100vw - 400px);
  height: 100%;
  right: 0;


  .container-info{
    width: 90%;
    margin: auto;
    h2{
      display: inline-flex;
      font-size: 3rem;
      margin: 50px 0 15px;
      border-bottom: 4px solid ${props => props.theme.colors.blue};
    }
    .seeAll{
      cursor: pointer;
      width: 100%;
      padding: 5px 0;
      font-size: 2rem;
      text-align: center;
      color: white;
      background-color: ${props => props.theme.colors.blue};;
      :hover{
        opacity: .5;
      }
    }
  }
  @media ${devices.tablet} {
    width: 100%;
    h2{
      font-size: 2.5rem;
    }
    .seeAll{
      margin-bottom: 56px;
    }
  }
`


