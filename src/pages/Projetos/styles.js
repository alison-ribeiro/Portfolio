import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  overflow-y: auto;
  .container{
    display: flex;
    flex-wrap: wrap;
    .container-projeto{
      margin-top: 25px;
    }
  }
  figure{
    width: 300px;
    height: 200px;
    position: relative;
    padding: 5px;
    img{
      opacity: 1;
      display: block;
      width: 100%;
      height: 100%;
      transition: .5s ease;
    }
    .content{
      width: 100%;
      height: 100%;

      position: absolute;
      text-align: center;
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
    
  }
  
`
