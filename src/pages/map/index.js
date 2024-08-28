import React from 'react';
import './index.css';
import mapImage from '../../assets/images/map-image.png.png'; // Caminho para a imagem do mapa do Brasil
import iconAlert from '../../assets/images/incon-alert.png.png'; 
import iconHome from '../../assets/images/icon-home.png.png'
import iconChat from '../../assets/images/icon-chat.png.png';
import searchIcon from '../../assets/images/icon-search.png';
import menuIcon from '../../assets/images/icon-menu.png.png';
import imageLeft from '../../assets/images/image-left.png';

export default function Map() {
  return (
    <div className="container">

        <div className="header">

             <img src={imageLeft} alt="Imagem canto superior esquerdo" className="left-image" />
            <input type="text" placeholder="Onde você quer ir?" className="search-input" />
            <img src={searchIcon} alt="Pesquisar" className="search-icon" />
            
        </div>
    
    <div className="map-container">
      <img src={mapImage} alt="Mapa do Brasil" className="map-image" />
    </div>
    <div className="map-display">
      <iframe
        title="Mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.3363836580024!2d-48.57342458497143!3d-22.993592884977456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89bd91b87d867%3A0x8e8b93eb18c9ce04!2sGuajira%2C%20SP%2C%20Brazil!5e0!3m2!1sen!2sus!4v1592305808498!5m2!1sen!2sus"
        className="google-map"
      />
    </div>
    <div className="footer">
      <img src={iconHome} alt="Home" className="icon" />
      <img src={menuIcon} alt="Menu" className="menu-icon" />
      <img src={iconAlert} alt="Alert" className="icon" />
      <img src={iconChat} alt="Chat" className="icon" />
    </div>
  </div>
)

};