import {  useState } from 'react';
import Section from '../../Components/Section';
import { Container } from './styles';
import emailjs from '@emailjs/browser'
import { contacts } from '../../mock';
import Loader from '../../Components/Loader';



function Contato(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [message, setMessage] = useState('');

   const  [loading, setLoading]  = useState(false);

  function sendEmail(){
    setLoading(true)
    if(!name || !email || !message){
      alert("Preencha todos os capos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      subject: assunto
    }

    emailjs.send("service_c5rnf9p","template_hlc170k",templateParams,"MTv2tdrZId1-7m-Jz")
      .then(() => {
      setName('');
      setEmail('');
      setAssunto('');
      setMessage('');
      setLoading(false);

    },(err) => {
      console.log(" Error: ", err)
    })
  }


  return(
    
      
      <Section title={'Contatos'} seeAll={false}>
        <Container>
          {loading  
          
          ?
            <Loader/>
          :
          <>
            <form method='post'>
            <input 
              type="text" 
              placeholder="Digite seu Nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input 
              type="text" 
              placeholder="Digite o Assunto"
              name="name" 
              onChange={(e) => setAssunto(e.target.value)}
              value={assunto}
            />
            <input 
              type="email" 
              placeholder="Digite seu Email"
              name="name" 
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            
            <textarea  
              type="text" 
              name="name" 
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="Digite a Menssagem"
              rows={5}
            />
            <div className='button' onClick={sendEmail}>Enviar Email</div>
          </form>
          <div className='container'>
            {contacts.map(({id,title,contact, icon}) => (
              <div className='container-icon' key={id}>
                {title === "Email" 
                  ?
                    <a href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCJfqchWScwjptrwqxqGQVtGnHKFsvtZFdnzgsScCPBmHLQGnKpwHvlKwBvBMJpTLBTdkBqV" target="blank">{icon}</a>
                  :
                  <a href='https://wa.me/5551986168178' target="blank">{icon}</a>
                }
                
              <div className='container-info'>
                <p>{title}</p> 
                {title === "Email" 
                  ?
                    <a href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCJfqchWScwjptrwqxqGQVtGnHKFsvtZFdnzgsScCPBmHLQGnKpwHvlKwBvBMJpTLBTdkBqV" target="blank">{contact}</a>
                  :
                    <a href={`tel:${contact}`} target="blank">{contact}</a>
                }
                
              </div>
            </div>
            ))}
          </div>
        </>
          }
         
        
        </Container>
        
        
        
      </Section>
     

     
      
   
  )
}

export default Contato;