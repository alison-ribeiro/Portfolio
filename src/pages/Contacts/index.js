
import Section from '../../Components/Section';
import { Container, FormGroup, Input, Textarea } from './styles';
import Loader from '../../Components/Loader';
import Toast from '../../Components/Toast';
import Contacts from './Components/contacts';
import useContact from './useContact';


export default function Contact(){

  const {
    name,
    email,
    assunto,
    message,
    loading,
    isFormValid,
    toastMessage,
    setAssunto,
    handleSubmit,
    handleNameChange,
    handleEmailChange,
    handleMessageChange,
    getErrorMessageByFieldName,
  } = useContact();

  return(
      <Section title={'Contatos'} seeAll={false}>

        <Container >
            <form method='post' onSubmit={handleSubmit}>
              <Loader isLoading={loading}/>
              {toastMessage.isLoading && <Toast message={toastMessage.message} bg={toastMessage.bg} icon={toastMessage.icon}/>}
              <FormGroup >
                <Input
                  type="text"
                  placeholder="*Digite seu Nome"
                  onChange={handleNameChange}
                  value={name}
                  error={getErrorMessageByFieldName('name')}
                />
                {getErrorMessageByFieldName('name') &&(
                  <span>{getErrorMessageByFieldName('name')}</span>
                )}
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
                {getErrorMessageByFieldName('email') &&(
                  <span>{getErrorMessageByFieldName('email')}</span>
                )}

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
          <Contacts/>
        </Container >
      </Section>
  )
}