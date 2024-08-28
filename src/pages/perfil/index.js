import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imageRight from '../../assets/images/image-right2.png';
import styles from './perfil.module.css';
import logo from '../../assets/images/logo.png';
import chatIcon from '../../assets/images/chat-icon.png'; // Ícone do chat
import footerLeftImage from '../../assets/images/footer-left.png'; // Nova imagem do canto inferior esquerdo


const Perfil = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('Seu Nome');
  const [email, setEmail] = useState('seu@email.com');
  const [senha, setSenha] = useState('******');

  const [idioma, setIdioma] = useState('pt-BR'); // Idioma padrão
  const idiomas = [
    { value: 'pt-BR', label: 'Português (Brasil)' },
    { value: 'en-US', label: 'English (US)' },
    // Adicione mais idiomas aqui
  ];


  // Funções para lidar com as alterações nos campos
  const handleUsuarioChange = (e) => {
    setUsuario(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };
  const handleIdiomaChange = (e) => {
    setIdioma(e.target.value);
    // Aqui você pode implementar a lógica para trocar o idioma da aplicação
  };



  const handleChatClick = () => {
      navigate('/chat'); // Substitua '/chat' pela rota desejada para o chat
  };
  const handleHomeClick = () => {
      navigate('/home'); // Substitua '/chat' pela rota desejada para o chat
  };
  const handleNotifyClick = () => {
    navigate('/notify'); // Substitua '/chat' pela rota desejada para o chat
};
  
  return (


    <div className={styles.profileContainer}>
      {/* Parte superior com navegação (já implementada) */}
      <div className={styles.navbar}>
                <img src={logo} alt="Logo" className={styles.navbarLogo} />
                <div className={styles.navLinks}>
                    <span onClick={handleHomeClick}>Página Inicial</span>
                    <span className={styles.activeLink}>Perfil</span>
                    <span onClick={handleNotifyClick}>Notificação</span>
                </div>
                <img src={imageRight} alt="Right Decoration" className={styles.navbarRightImage} />
            </div>

      {/* Seção central com informações do usuário */}
      <div className={styles.menuperfil}>
        <div className={styles.fotoholder}> 
        <img src={logo} alt="Logo" className= {styles.fotoperfil}/>
        </div>
      <div className="perfil-info">
        <h2>Meu Perfil</h2>

        <label>Idioma:</label>
      <select className = {styles.usuario} value={idioma} onChange={handleIdiomaChange}>
        {idiomas.map((idioma) => (
          <option key={idioma.value} value={idioma.value}>
            {idioma.label}
             </option>
        ))}
      </select>

        <label>Usuário:</label>
        <input type="text" className = {styles.usuario} value={usuario} onChange={handleUsuarioChange} />

        <label>Email:</label>
        <input type="email" className = {styles.usuario} value={email} onChange={handleEmailChange} />

        <label>Senha:</label>
        <input type="password" className = {styles.usuario} value={senha} onChange={handleSenhaChange} />

 
        <button className = {styles.UpdateButton}>Salvar Alterações</button>
      </div>
      </div>
      <div className={styles.footer}>
                <a onClick={handleChatClick} className={styles.chatLink}>
                    Dúvidas? use o chat!
                    <img src={chatIcon} alt="Chat Icon" className={styles.chatIcon} />
                </a>
                <img src={footerLeftImage} alt="Footer Left Decoration" className={styles.footerLeftImage} />
            </div>
    </div>
  );
};

export default Perfil;