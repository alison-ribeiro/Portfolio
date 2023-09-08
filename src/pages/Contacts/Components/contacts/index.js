import { Container } from "./styles";
import { contacts } from '../../../../mock';
import React, { useRef } from "react";
import { AiOutlineCopy } from "react-icons/ai";

function Contacts(){
    const contactRefs = useRef([]);
    contactRefs.current = contacts.map(() => React.createRef());
    const handleCopy = async (content) => {
        try {
          await navigator.clipboard.writeText(content);
          alert('Conteúdo copiado para a área de transferência.');
        } catch (error) {
          console.error('Erro ao copiar o conteúdo:', error);
        }
      };
    return(
        <Container>
            {contacts.map(({id,title,contact, icon, link}, index) => (
              <div className='container-contacts' key={id}>
                <a href={link} target="blank">{icon}</a>
                <div className='contacts'>
                  <p>{title}</p>
                  <a href={link} target="blank" ref={contactRefs.current[index]}>{contact}</a>          
                </div>
                <button className="copyContent"  onClick={() => handleCopy(contactRefs.current[index].current.textContent)}>
                    <AiOutlineCopy /> 
                </button>
              </div>
            ))}  
        </Container>
    )
}
export default Contacts;