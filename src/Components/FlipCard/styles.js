import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    position: relative;
    width: 200px;
    height: 270px;
    margin: 0 10px;
    margin: 25px 0;
     
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
    height: 142px;
    position: relative;
    width: 100%;
    
    .card-header{
      position: absolute;
      background: rgb(2,0,36);
      background: linear-gradient(277deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 36%, rgba(0,212,255,1) 100%);
      top: 0;
      border-radius: 20px 20px 0 0;
      width: 100%;
      height: 50%;
    }
    .card-header-body{
      position: absolute;
      width: 100%;
      height: 50%;
      background: rgb(2,0,36);
      
      border-radius:100% 0% 100% 0% / 0% 50% 50% 100%;
      bottom: 0;
      right: 0;
      
    }
    svg{
      color: white;
      font-size: 80px;
      position: absolute;
    }
  }
  .card-body{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h5{
      font-size: 1.3rem;
    }
    p{
      display: flex;
      text-align: center;
      margin-top: 5px;
      width: 68%;
      font-size: 1rem;
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