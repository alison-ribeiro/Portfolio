import {  useState } from 'react';
import Section from '../../Components/Section';
import { Container, FormGroup, Input, Textarea } from './styles';
import emailjs from '@emailjs/browser'
import { contacts } from '../../mock';
import Loader from '../../Components/Loader';
import isEmailValid from '../../utils/isEmailValid';
import useErrors from '../../hooks/useErrors';

function Contato(){
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [assunto, setAssunto] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const {setError, removeError, getErrorMessageByFieldName, errors} = useErrors();

  const isFormValid = (name && email && message && errors.length === 0);

  function handleSubmit(event){
    event.preventDefault();
    setLoading(true);


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
  function handleNameChange(event){

    setName(event.target.value);
    if(!event.target.value){
      setError({field: 'name', message: 'Nome é obrigatório.'});
    }else{
      removeError('name');
    }

  }
  function handleEmailChange(event){

    setEmail(event.target.value);


    if(event.target.value && !isEmailValid(event.target.value)){

      setError({field: 'email', message: 'E-mail inválido.'});

    }else{
      removeError('email');
    }

  }
  function handleMessageChange(event){

    setMessage(event.target.value);
    if(!event.target.value){
      setError({field: 'message', message: 'Mensagem é obrigatório.'});
    }else{
      removeError('message');
    }

  }

  return(
      <Section title={'Contatos'} seeAll={false}>
        <Loader isLoading={loading}/>
        <Container >

            <form method='post' onSubmit={handleSubmit}>
              <FormGroup >
                <Input
                  type="text"
                  placeholder="*Digite seu Nome"
                  onChange={handleNameChange}
                  value={name}
                  error={getErrorMessageByFieldName('name')}
                />
                <span>{getErrorMessageByFieldName('name')}</span>
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Digite o Assunto"
                  onChange={(e) => setAssunto(e.target.value)}
                  value={assunto}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="email"
                  placeholder="*Digite seu Email"
                  onChange={handleEmailChange}
                  value={email}
                  error={getErrorMessageByFieldName('email')}
                />
                <span>{getErrorMessageByFieldName('email')}</span>
              </FormGroup>

            <FormGroup>
              <Textarea
                type="text"
                onChange={handleMessageChange}
                value={message}
                placeholder="*Digite a Mensagem"
                rows={5}
                error={getErrorMessageByFieldName('message')}
              />
                <span>{getErrorMessageByFieldName('message')}</span>
            </FormGroup>


            <button type="submit" disabled={!isFormValid}>Enviar Email</button>
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
        </Container >
      </Section>
  )
}

export default Contato;
