import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css'; // Importando como CSS Module
import logo from '../../assets/images/logo.png';
import imageLeft from '../../assets/images/image-left.png';
import imageRight from '../../assets/images/image-right.png';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/register');
    };

    return (
        <div className={styles.loginContainer}>
            <img src={imageLeft} alt="Left Decoration" className={`${styles.cornerImage} ${styles.leftCorner}`} />
            <img src={imageRight} alt="Right Decoration" className={`${styles.cornerImage} ${styles.rightCorner}`} />

            <div className={styles.logoContainer}>
                <img src={logo} alt="Logo" className={styles.logo} />
            </div>
            <div className={styles.inputContainer}>
                <input type="email" placeholder="E-MAIL" className={styles.loginInput} />
                <input type="password" placeholder="SENHA" className={styles.loginInput} />
            </div>
            <button className={styles.loginButton} onClick={handleLogin}>ENTRAR</button>
            <div className={styles.registerContainer}>
                <div className={styles.registerLine}></div>
                <div className={styles.registerLink}>
                    Ainda não é cadastrado? <a href="/register">Clique aqui</a> para criar sua conta!
                </div>
            </div>
        </div>
    );
};

export default Login;
