
import useToastMessage from '../../hooks/useToastMessage';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiError } from "react-icons/bi";
import isEmailValid from '../../utils/isEmailValid';
import useErrors from '../../hooks/useErrors';
import emailjs from '@emailjs/browser'
import {useState } from 'react';



export default function useContact(){

  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [assunto, setAssunto] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  


  const {toastMessage, handleToastMessage} = useToastMessage();


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
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;
    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);
    console.log("User ID:", userId);

    emailjs.send( 
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_USER_ID)
      .then(() => {
      setName('');
      setEmail('');
      setAssunto('');
      setMessage('');
      setLoading(false);
      handleToastChange('success')

    },(err) => {
      setName('');
      setEmail('');
      setAssunto('');
      setMessage('');
      handleToastChange('err');
      setLoading(false);
      console.log(" Error: ", err);
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
  function handleToastChange(type){
    type === 'success' && handleToastMessage('green', 'Email enviado', true,<IoMdCheckmarkCircleOutline/>, 3000)
    type === 'err' && handleToastMessage('red', 'Erro ao enviar o email', true,<BiError/>, 3000)
  }
  return {
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
  }
}