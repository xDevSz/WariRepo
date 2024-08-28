import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import styles from './register.module.css';
import logo from '../../assets/images/logo.png';
import imageLeft from '../../assets/images/image-left.png';
import imageRight from '../../assets/images/image-right.png';
import chatIcon from '../../assets/images/chat-icon.png';
import helpIcon from '../../assets/images/help-icon.png';

const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar qualquer lógica adicional de cadastro, como enviar os dados para um servidor.

        // Após a lógica de cadastro, redirecionar para a página de login
        navigate('/');
    };

    const handleHelpClick = (message) => {
        alert(message); // Exibe uma mensagem de ajuda para o usuário
    };

    return (
        <div className={styles.registerContainer}>
            <img src={imageLeft} alt="Left Decoration" className={`${styles.registerCornerImage} ${styles.registerLeftCorner}`} />
            <img src={imageRight} alt="Right Decoration" className={`${styles.registerCornerImage} ${styles.registerRightCorner}`} />
            <img src={logo} alt="Logo" className={styles.registerLogo} />
            <form className={styles.registerForm} onSubmit={handleSubmit}>
                <div className={styles.inputWrapper}>
                    <select className={styles.registerInput} required>
                        <option value="">Lingua</option>
                        <option value="etnia1">Lingua Portuguesa (Brasil)</option>
                        <option value="etnia2">Lingua Espanhola</option>
                        <option value="etnia3">Wari</option>
                    </select>
                    <img
                        src={helpIcon}
                        alt="Help Icon"
                        className={styles.helpIcon}
                        onClick={() => handleHelpClick("Selecione sua etnia.")}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <input type="text" placeholder="Nome" className={styles.registerInput} required />
                    <img
                        src={helpIcon}
                        alt="Help Icon"
                        className={styles.helpIcon}
                        onClick={() => handleHelpClick("Digite seu nome completo.")}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <input type="email" placeholder="E-mail" className={styles.registerInput} required />
                    <img
                        src={helpIcon}
                        alt="Help Icon"
                        className={styles.helpIcon}
                        onClick={() => handleHelpClick("Informe seu endereço de e-mail.")}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <input type="password" placeholder="Senha" className={styles.registerInput} required />
                    <img
                        src={helpIcon}
                        alt="Help Icon"
                        className={styles.helpIcon}
                        onClick={() => handleHelpClick("Crie uma senha segura.")}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <input type="date" placeholder="Data de nascimento" className={styles.registerInput} required />
                    <img
                        src={helpIcon}
                        alt="Help Icon"
                        className={styles.helpIcon}
                        onClick={() => handleHelpClick("Informe sua data de nascimento.")}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <InputMask 
                        mask="(99) 99999-9999" 
                        className={styles.registerInput} 
                        placeholder="(XX) XXXXX-XXXX" 
                        required 
                    />
                    <img
                        src={helpIcon}
                        alt="Help Icon"
                        className={styles.helpIcon}
                        onClick={() => handleHelpClick("Informe seu número de telefone.")}
                    />
                </div>
                <button type="submit" className={styles.registerButton}>CADASTRAR</button>
            </form>
            <div className={styles.registerFooterContainer}>
                <div className={styles.registerLine}></div>
                <div className={styles.registerFooterLinks}>
                    <div className={styles.registerHelpLink}>
                        PRECISA DE AJUDA?
                    </div>
                    <div className={styles.registerChatLink} onClick={() => navigate('/chat')}>
                        ENVIE SUA DÚVIDA!
                        <img src={chatIcon} alt="Chat Icon" className={styles.registerChatIcon} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
