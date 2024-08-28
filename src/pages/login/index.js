import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importação necessária
import './login.css';
import logo from '../../assets/images/logo.png';
import imageLeft from '../../assets/images/image-left.png';
import imageRight from '../../assets/images/image-right.png';

const Login = () => {
    const navigate = useNavigate(); // Hook para navegação

    const handleLogin = () => {
        navigate('/register'); // Redireciona para a página de registro
    };

    return (
        <div className="login-container">
            <img src={imageLeft} alt="Left Decoration" className="corner-image left-corner" />
            <img src={imageRight} alt="Right Decoration" className="corner-image right-corner" />

            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="input-container">
                <input type="email" placeholder="E-MAIL" className="login-input" />
                <input type="password" placeholder="SENHA" className="login-input" />
            </div>
            <button className="login-button" onClick={handleLogin}>ENTRAR</button>
            <div className="register-container">
                <div className="register-line"></div>
                <div className="register-link">
                    Ainda não é cadastrado? <a href="/register">Clique aqui</a> para criar sua conta!
                </div>
            </div>
        </div>
    );
};

export default Login;

