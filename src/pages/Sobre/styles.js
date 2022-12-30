import styled from "styled-components";
import { devices } from "../../Responsive";


export const Container = styled.div`
  display: flex;
  margin-top: 25px;
 
`
export const Photo = styled.div`
  flex: 1;
  height: 380px;
  border-radius: 5px;
  background-color: blue;
  img{
    width: 100%;
    height: 100%;
  }
  @media ${devices.tablet} {
    margin: 0;
    width: 100%;
    margin-bottom: 30px;
  }
`
export const About = styled.div`
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
    span{
      font-weight: bolder;
      color: black;
      font-size: inherit;
    }
  }
  
  h3 + p{
    margin: 20px 0;
  }
  
 
`
