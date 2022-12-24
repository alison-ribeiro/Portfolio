import { Container,TheBack,TheCard,TheFront } from './styles'
import {AiFillHtml5} from 'react-icons/ai'

function FlipCard(){
  return(
    <Container>
    
        <TheCard>
          <TheFront>
            <div className='container'>
              <div className="card-header"></div>
              <div className='card-header-body'></div>
              <AiFillHtml5/>
            </div>        
            <div className="card-body">
              <h5>Title</h5>
              <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
           
          </TheFront>
          <TheBack>
            <div className='container-back-header'>
              <AiFillHtml5/>
            </div>
            <h5>Conhecimentos HTML</h5>
            <div className='scroll'>
              <ul>
                <li>asdjaksdj jjfff fffffasdu djaisjdi kkkd ddas s sasd</li>
                <li>blbsakad asdkajs ddd</li>
                <li>sdfsdfsdf</li>
                <li>sdfsa ddd ss a asdas w eqsad</li>
                <li>asdda dwqd ccasdd d  asdasdasd</li>
                <li>asdjaksdj jjfff fffffasdu djaisjdi kkkd ddas s sasd</li>
                <li>blbsakad asdkajs ddd</li>
                <li>sdfsdfsdf</li>
                <li>sdfsa ddd ss a asdas w eqsad</li>
                <li>asdda dwqd ccasdd d  asdasdasd</li>
              </ul>
            </div>
          </TheBack>
        </TheCard>
        
        
      
    </Container>
    
  );
}

export default FlipCard;
