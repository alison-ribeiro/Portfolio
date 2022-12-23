import styled from "styled-components";
import { devices } from "../../Responsive";



export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 380px;
  background-color: ${props => props.theme.colors.bgColor};
  border-right: 1px solid ${props => props.theme.colors.secundary};
  overflow: hidden;
  overflow-y: auto;
  >svg{
    display: none;
  }

  @media ${devices.mobileL} {
    width: 250px;
    height: 100vh;
    position: absolute;
    left: ${props => props.sideBar ? '0px' : '-100%'};;
    transition: all .8s linear;
    >svg{
      display: flex;
      position: absolute;
      font-size: 50px;

      right: 10px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 300px;
 
`

export const Ul = styled.ul`
  
  margin: 100px 0;
  width: 100%;


  li{
    text-align: center;
    margin: 18px 0;
    padding: 8px 0;
    font-size: .81rem;
    font-weight: bold;
    width: 100%;
    border: 1px solid black;
    position: relative;
    
    &:before {
      content: '';
      position: absolute;
      width: 20px;
      height: inherit;
      background-color: black;
      border-radius: 50%;
      top: 0;
      left: 1em;
      transition: 0.5s ease-out;
      z-index: -1;
     }
     &:hover:before{
        transform: scale(7);
       
      }
  }
  @media ${devices.mobileL} {
    margin: 80px 0;
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
  @media ${devices.mobileL} {
    margin-top: 16px;
    font-size: .8rem;
	
  }
  
`


export const Teste = styled.div`


.teste{
  
  @media ${devices.mobileL} {
    display: flex!important;
	
  }
}
`