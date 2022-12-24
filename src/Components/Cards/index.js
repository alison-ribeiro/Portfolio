import { Container } from './styles'


function Card({info}){
  return(
    <>
     {info.map(({icon, title, resume}) =>(
            <Container>
              {icon}
              <h3>{title}</h3>
              <p>{resume}</p>
            </Container>
          ))}
    </>
    
  );
}

export default Card;
