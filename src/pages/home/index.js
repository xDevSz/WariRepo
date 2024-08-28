import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.css';
import logo from '../../assets/images/logo.png';
import imageRight from '../../assets/images/image-right2.png';
import mapImage from '../../assets/images/map.png';
import chatIcon from '../../assets/images/chat-icon.png'; // Ícone do chat
import footerLeftImage from '../../assets/images/footer-left.png'; // Nova imagem do canto inferior esquerdo

const Home = () => {
    const navigate = useNavigate();

    const handleMapClick = () => {
        navigate('/pesquisa'); // Substitua '/alguma-rota' pela rota desejada
    };

    const handleChatClick = () => {
        navigate('/chat'); // Substitua '/chat' pela rota desejada para o chat
    };
    const handlePerfilClick = () => {
        navigate('/perfil'); // Substitua '/chat' pela rota desejada para o chat
    };

    const handleRotaClick = () => {
        navigate('/rota'); // Substitua '/chat' pela rota desejada para o chat
    };

    return (
        <div className={styles.homeContainer}>
            <div className={styles.navbar}>
                <img src={logo} alt="Logo" className={styles.navbarLogo} />
                <div className={styles.navLinks}>
                    <span className={styles.activeLink}>Página Inicial</span>
                    <span onClick={handlePerfilClick}>Perfil</span>
                    <span onClick={handleRotaClick}>Rota</span>
                </div>
                <img src={imageRight} alt="Right Decoration" className={styles.navbarRightImage} />
            </div>
            <div className={styles.mapContainer}>
                <img
                    src={mapImage}
                    alt="Map of Brazil"
                    className={styles.mapImage}
                    onClick={handleMapClick}
                    role="button"
                />
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

export default Home;
