import styled from "styled-components";
import { devices } from "../../Responsive";



export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 10px;
  width: 390px;
  height: calc(100vh - 25px);
  background-color: ${props => props.theme.colors.bgColor};
  border-right: 1px solid ${props => props.theme.colors.secundary};
  overflow: hidden;
  overflow-y: auto;
  position: relative;

  >svg{
    display: none;
  }



  @media ${devices.tablet} {
    width: 450px;
    position: absolute;
    left: ${props => props.sideBar ? '0px' : '-100%'};
    transition: all .8s linear;
    z-index: 1;
    height: calc(100vh - 80px);
    >svg{
      display: flex;
      position: absolute;
      font-size: 50px;
      right: 0;
    }
  } 

  @media ${devices.mobileL} {
    
    width: 250px; 
    >svg{    
      font-size: 50px;
    }
  } 
    
`
export const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${props => props.theme.colors.secundary};
  width: 100%;
  
  img{
    border-radius: 50%;
    border: 8px solid ${props => props.theme.colors.secundary};
    margin: 30px;
    background-color: white;
  }
`

export const Container = styled.div`
  max-height: 90vh;
  height: 320px;

  @media ${devices.tablet} {

    height: 385px;
  }
  @media ${devices.mobileL} {

    height: 450px;

  }
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 15px;
  height: 100%;
  li{
    text-align: center;
    padding: 20px 0;
    font-size: .81rem;
    font-weight: bold;
    width: 100%;
    position: relative;

    a{
      display: flex;
      position: absolute;
      align-items: center;
      justify-content: center;
      width: 100%;
      right: 0;
      top: 0;
      height: 100%;
      z-index: 1;
      &.active{
        background-color: ${props => props.theme.colors.blue};
      }
      
    }
    &::before {
      content: " ";
      position: absolute;
      width:0%;
      height: 100%;
      background-color: ${props => props.theme.colors.blue};
      left: 0;
      top: 0;
      transition: 0.5s ease-out;
      
    }
    &:hover::before{
      width:100%;
      
    }
    

  }
  
  @media ${devices.tablet} {
    
    li{
      font-size: 1rem;
    }
	
  }

 

  
`
export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  font-size: .5rem;
  padding: 15px 0;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.secundary};
  a{
    text-decoration: underline;
    font-weight: bolder;
    margin-left: 5px;
  }
  

  @media ${devices.tablet}{
    
    font-size: .8rem;
  }
 
`