import styled from "styled-components";
import { devices } from "../../Responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;

`
export const ContainerAbout = styled.div`
  display: flex;
  margin-top: 25px;
 
`
export const Photo = styled.div`
  width: 100%;
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
  flex-direction: column;
  align-items: flex-start;
  margin-left: 45px;
  h3{
    color: ${props => props.theme.colors.black};
    span{
      color: ${props => props.theme.colors.blue};
    }
  }

  p{
    margin-top: 15px;
    font-size: .7rem;
  }
  
  h3 + p{
    margin: 20px 0;
  }
  
 
`

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
`
