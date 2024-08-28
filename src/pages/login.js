import React from 'react';
import './login.css';
import logo from '../assets/images/logo.png';
import imageLeft from '../assets/images/image-left.png'; // Imagem do canto superior esquerdo
import imageRight from '../assets/images/image-right.png'; // Imagem do canto superior direito

const Login = () => {
    return (
        <div className="login-container">
            {/* Imagem no canto superior esquerdo */}
            <img src={imageLeft} alt="Left Decoration" className="corner-image left-corner" />
            
            {/* Imagem no canto superior direito */}
            <img src={imageRight} alt="Right Decoration" className="corner-image right-corner" />

            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="input-container">
                <input type="email" placeholder="E-MAIL" className="login-input" />
                <input type="password" placeholder="SENHA" className="login-input" />
            </div>
            <button className="login-button">ENTRAR</button>
            <div className="register-container">
                <div className="register-line"></div> {/* Linha reta acima do texto */}
                <div className="register-link">
                    Ainda não é cadastrado? <a href="/register">Clique aqui</a> para criar sua conta!
                </div>
            </div>
        </div>
    );
};

export default Login;
