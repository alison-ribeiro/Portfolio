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
    flex-direction: column;
    width: 68vw;
 
  h1{
   position: relative;
   width: 10ch ;
   font-size: 1.8rem;
   margin-top: 30px;
  
    &::after{
      content: " ";
      height: 4px;
      width: 9ch;
      background-color:${props => props.theme.colors.blue};
      border-radius: 5px;
      position: absolute;
      bottom:0;
      left: 0;
    }
    
  }

  .container{
    display: flex;
    margin-top: 50px;
  }

  @media ${devices.tablet} {
    .container{
      flex-direction: column;
      width: 70vw;
    }
    h1{
      margin: 50px 0;
    }
  }
 
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
  
 
  @media ${devices.tablet} {
    margin: 0;
  }
`
export const Services = styled.div`
  display: flex;
  flex-direction: column;
  width: 68vw;
  align-items: flex-start;
  padding: 0 30px;
  
  h2{
    font-size: 1.4rem;
    margin: 50px 0;
    position: relative;
    margin-bottom: 50px;
    
    &:after{
      content: " ";
      height: 4px;
      width: 100%;
      background-color:${props => props.theme.colors.blue};
      border-radius: 5px;
      position: absolute;
      bottom: -8px;
      right: 0;
    }
  }
  @media ${devices.tablet} {
    flex-direction: column;
    width: 70vw;
    h2{
      margin: 0;
    }
  }
  
`
export const Cards = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
 
  @media ${devices.tablet} {
    padding: 15px;
    flex-wrap: wrap;
  }
  @media ${devices.mobileL} {
    flex-direction: column;
    padding: 0;
  }
`
