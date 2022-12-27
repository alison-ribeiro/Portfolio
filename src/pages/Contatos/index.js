import { useState } from 'react';
import Section from '../../Components/Section';
import { Container, Input } from './styles';
import emailjs from '@emailjs/browser'
import {AiOutlineWhatsApp} from 'react-icons/ai'


function Contato(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [message, setMessage] = useState('');


  function sendEmail(e){
    
    if(!name || !email || !message){
      alert("Preencha todos os capos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_c5rnf9p","template_hlc170k",templateParams,"MTv2tdrZId1-7m-Jz")
    .then(() => {

      setName('');
      setEmail('');
      setAssunto('');
      setMessage('');

    },(err) => {
      console.log(" Error: ", err)
    })
  }


  return(
    <Container>
      
      <Section title={'contato'} seeAll={false}>
        <form action='https://api.staticforms.xyz/submit' method='post'>
          <Input 
            type="text" 
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Input 
            type="text" 
            placeholder="Digite seu Email"
            name="name" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input 
            type="text" 
            name="name" 
            onChange={(e) => setAssunto(e.target.value)}
            value={assunto}
          />
          <textarea 
            type="text" 
            name="name" 
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <div onClick={sendEmail}>Submit</div>
        </form>
        <a href='https://wa.me/5551986168178' target="blank"><AiOutlineWhatsApp/></a>
      </Section>
     

     
      
    </Container>
  )
}

export default Contato;