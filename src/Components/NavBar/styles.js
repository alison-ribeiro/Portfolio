import styled from "styled-components";

import { devices } from "../../styles/responsive";


export const Container = styled.nav`
  position: fixed;
  width: 400px;
  left: 0;
  top: 0;
`
export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width:400px;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.colors.bgColor};
  border-right: 1px solid ${props => props.theme.colors.secundary};
  .container-head {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colors.secundary};
    width: 100%;
    position: relative;
    img{
      margin: 15px 0;
      border-radius: 50%;
      border: 8px solid ${props => props.theme.colors.secundary};
    }
}
.container-body{
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  ul{
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   li{
      padding: 20px 0;
      font-weight: bold;
      width: 100%;
      position: relative;
      margin: 10px 0;
      >a{
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: center;
        width: 100%;
        right: 0;
        top: 0;
        height: 100%;
        z-index: 1;
        p{
          font-size: 1rem;
        }
        &.active {
          background-color: ${props => props.theme.colors.blue};
        }

        &:hover p{
          color: ${props => props.theme.colors.blue};
        }
        &.active p{
          color: white;
        }
      }
      &::before {
        content: " ";
        position: absolute;
        width:0%;
        height: 100%;
        background-color: ${props => props.theme.colors.blue};
        opacity: .5;
        left: 0;
        top: 0;
        transition: 0.5s ease-out;

      }
      &:hover::before{
        width:100%;
      }
    }

  }
}

footer{
  border-top: 1px solid ${props => props.theme.colors.secundary};
  width: 100%;
  text-align: center;
  padding: 10px 0;
  >a{
    text-decoration: underline;
    font-weight: bolder;
    margin-left: 5px;
    :hover{
      color: ${props => props.theme.colors.blue};
    }
  }
}
svg{
    display: none;
    position: absolute;
    font-size: 60px;
    z-index: 99;
    top: 0;
    right: 0;
}
  @media ${devices.tablet} {
    left: ${props => props.sideBar ? '0px' : '-100%'};
    transition: all .8s linear;
    z-index: 99;
    width: 80%;
    .container-head{
      svg{
        display: flex;
      }
    }
    .container-body{
      li{
        margin: 23px 0 !important;
      }
    }
     p{
        font-size: 1.5rem !important;
      }
   }
  @media ${devices.mobileL} {
    p{
      font-size: 1.3rem !important;
    }
  }

`







