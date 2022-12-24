import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    position: relative;
    width: 250px;
    height: 350px;
    margin: 0 10px;
    
     
`
export const TheCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all .5s linear;
  border-radius:20px;
  box-shadow: 0px 15px 15px 1px rgba(0,255,255,0.7);  
  &:hover{
    transform: rotateY(180deg);
  }
  
`
export const TheFront = styled.div`
  border:5px solid white;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: ${props => props.theme.colors.secundary};
  border-radius:20px;
  left: 0;
  top: 0;
  h5{
    margin-top: 15px;
  }
  .container-header{
    display: grid;
    place-items: center;
    height: 200px;
    position: relative;
    width: 100%;
    
    .card-header{
      display: grid;
      place-items: center;
      position: relative;
      background-color: ${props => props.theme.colors.blue};
      top: 0;
      border-radius: 20px 20px 0 0;
      width: 100%;
      height: 100px;
      z-index: 0;
       
    }
    .card-header-body{
      position: relative;
      width: 100%;
      height: 100px;
      background-color: ${props => props.theme.colors.blue};
      border-radius:100% 0% 100% 0% / 0% 50% 50% 100%;
      bottom: 0;
      right: 0;
      
    }
    svg{
      color: white;
      font-size: 100px;
      position: absolute;
    }
  }
  .card-body{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2{
      font-size: 1rem;
    }
    p{
      display: flex;
      text-align: center;
      margin-top: 5px;
      width: 68%;
      font-size: .6rem;
    }
  }
  
`
export const TheBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  backface-visibility: hidden;
  background-color: ${props => props.theme.colors.secundary};
  border: 5px solid white;
  border-radius: 20px;
  color: #333;
  transform: rotateY(180deg);
  
  .container-back-header{
    display: flex;
    place-content: center;
    
    svg{
      margin-top: 20px;
      font-size: 75px;
      color: white;
      background-color: ${props => props.theme.colors.blue};
      border: 3px solid white;
      border-radius: 50%;
      padding: 5px;

    }
  }
  .scroll{
    height: 180px;
    overflow-y: auto;
  }
  h5{
    margin: 10px 0;
    text-align: center;
    font-size: .7rem;
  }
  ul{
    display: flex;
    flex-direction: column;
    width: 100%;
    
    align-items: center;
    li{
      font-size: .6rem;
      width: 80%;
      margin: 8px 0 0 20px ;
      list-style: disc;
    }
  }
  
`