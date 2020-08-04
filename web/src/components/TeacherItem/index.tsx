import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/42684837?s=460&u=0f190cbcb78f578cd51e290cba97fc621054dbb5&v=4" alt="Jessé Satlei" />
        <div>
          <strong>Jessé Satlei</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Apaixonado pelas melhorias tecnologias do mercado.
        <br />
        Sempre em busco do auto-aperfeiçoamento e sempre tentando ajudar o máximo de pessoas.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="submit">
          <img src={whatsappIcon} alt="Imagem do Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
