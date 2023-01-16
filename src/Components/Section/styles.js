import styled from "styled-components";
import { devices } from "../../styles/responsive";

export const ContainerPag = styled.div`
  width: 100%;
  overflow: hidden;
  overflow-y: auto;


  .container{
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    width: 80%;
    height: 100%;
    align-items: flex-start;


    h2{
      font-size: 3rem;
      margin: 45px 0;
      border-bottom: 4px solid ${props => props.theme.colors.blue};
    }

    .container-info{
      height: 100%;
      width: 100%;
      

    .seeAll{
      cursor: pointer;
      width: 100%;
      padding: 5px 0;
      font-size: 2rem;
      text-align: center;
      margin: 30px 0;
      color: white;
      background-color: ${props => props.theme.colors.blue};;
      :hover{
        opacity: .5;
      }
    }
  }



  }
  @media ${devices.tablet} {
    margin-top: 30px;
   .seeAll{
      margin-bottom: 100px !important;
   }
  }
`


