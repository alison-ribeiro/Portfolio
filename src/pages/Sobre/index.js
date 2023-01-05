
import { Container } from './styles';
import Section from '../../Components/Section';




function Sobre(){

/*
  function idade(ano_aniversario, mes_aniversario, dia_aniversario) {
    const d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),

        ano_aniversario = +ano_aniversario,
        mes_aniversario = +mes_aniversario,
        dia_aniversario = +dia_aniversario,

        quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual === mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }

    return quantos_anos < 0 ? 0 : quantos_anos;
}
const idadee = idade(1999, 3, 2)
*/








  return(

      <Section title={"Sobre"}>
        <Container>
          <div className='photo'>
            <img src='https://webtech.pt/wp-content/uploads/2022/06/O-que-faz-afinal-um-programador-web.png' alt='Foto de codigo'></img>
          </div>
          <div className='about'>
            <h3>Eu sou <span>Alison Alves</span></h3>
            <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
            <p><span>Nome Completo:</span> Alison Ribeiro Alves</p>
            <p><span>Idade:</span> 23</p>
            <p><span>Nacionalidade:</span> Brasileiro</p>
            <p><span>Idioma:</span> Português/BR</p>
            <p><span>Cidade:</span> Gravatai</p>
            <p><span>Freelance:</span> Disponível</p>
          </div>
        </Container>


     </Section>
  )
}

export default Sobre;

