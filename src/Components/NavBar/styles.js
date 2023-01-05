import styled from "styled-components";
import { devices } from "../../Responsive";



export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width:35%;
  height: 100%;
  background-color: ${props => props.theme.colors.bgColor};
  border-right: 1px solid ${props => props.theme.colors.secundary};
  overflow: hidden;
  overflow-y: auto;



  .container-head {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colors.secundary};
    width: 100%;
    position: relative;
    flex: 4;

  img{
    margin: 15px 0;
    border-radius: 50%;
    border: 8px solid ${props => props.theme.colors.secundary};
    background-color: white;
  }

}
.container{
  display: grid;
  align-items: center;
  flex:12;
  ul{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 70%;
    li{
      padding: 20px 0;
      font-weight: bold;
      width: 100%;
      position: relative;

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
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${props => props.theme.colors.secundary};
  flex:1;
  padding: 5px 0;
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
}
  @media ${devices.tablet} {
    position: absolute;
    width: 72%;
    left: ${props => props.sideBar ? '0px' : '-100%'};
    transition: all .8s linear;
    z-index: 99;

     p{
        font-size: 1.5rem !important;

      }

    svg{
      display: flex;
      position: absolute;
      font-size: 50px;
      top: 10px;
      right: 0;
    }
  }
  @media ${devices.mobileL} {
    p{
      font-size: 1.1rem !important;
    }
  }

`







