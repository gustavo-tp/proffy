import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

const TeacherList: React.FC = () => (
  <article className="teacher-item">
    <header>
      <img src="https://avatars2.githubusercontent.com/u/22661674?s=460&u=e89424d0faad1572b7d4a47ed90df0f762327966&v=4" alt="Avatar"/>
      <div>
        <strong>Gustavo</strong>
        <span>Mitão de tudo</span>
      </div>
    </header>

    <p>
      Muito mito
      <br /><br />
      mito demais
    </p>
    
    <footer>
      <p>
        Preço/hora
        <strong>R$ 999,99</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="WhatsApp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
);

export default TeacherList