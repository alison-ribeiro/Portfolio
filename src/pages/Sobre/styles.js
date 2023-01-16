import styled from "styled-components";
import { devices } from "../../styles/responsive";


export const Container = styled.div`
  display: flex;
  position: relative;


 .photo{
    flex: 1;
    height: 380px;
    border-radius: 5px;
    background-color: blue;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .about{
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 45px;
  h3{
    font-size: 2rem;
    color: ${props => props.theme.colors.black};
    span{
      color: ${props => props.theme.colors.blue};
      font-size: inherit;
    }
  }

  p{
    margin-top: 15px;
    font-size: 1.3rem;
    line-height: 24px;
    span{
      font-weight: bolder;
      color: ${props => props.theme.colors.black};
      font-size: inherit;
    }
  }

  h3 + p{
    margin: 20px 0;
    }
  }
  @media ${devices.tablet} {
    flex-direction: column;
    .about{
      margin: 25px 0;
      p{
        margin-top: 30px;
      }
    }

  }
`

