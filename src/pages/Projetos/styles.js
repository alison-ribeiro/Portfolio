import styled from "styled-components";
import { devices } from "../../Responsive";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;



  .container{
    
    margin: 20px 5px;
    width: auto;


    p{
      margin-bottom: 10px;
      font-size: 1.5rem;
    }
    figure{
    width: 280px;
    height: 200px;
    position: relative;
    border: 1px solid ${props => props.theme.colors.black};
    img{
      opacity: 1;
      display: block;
      width: 100%;
      height: 100%;
      transition: .5s ease;
    }
    .content{
      display: flex;
      width: 100%;
      height: 100%;
      position: absolute;
      justify-content: center;
      text-align: center;
      align-items: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      p{
        color: white;
      }
      li{
        color: white;
      }
    }
    .overlay{
      opacity: 0;
    }
    &:hover img{
      opacity: .5;
    }
    &:hover .overlay{
      opacity: 1;
    }
    &:hover .content{
      background-color: ${props => props.theme.colors.blue};
    }

  }
  }
  @media ${devices.mobileL} {
    figure{
      width: 100% !important;
    }
  }

`
