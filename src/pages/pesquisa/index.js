import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';
import styles from './pesquisa.module.css';
import logo from '../../assets/images/logo.png';
import footerLeftImage from '../../assets/images/footer-left.png';
import chatIcon from '../../assets/images/chat-icon.png';

const customIcon = new L.Icon({
    iconUrl: 'path-to-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

const SearchBox = ({ onSearch, navigate }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (!query) return;

        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`)
            .then((response) => response.json())
            .then((data) => {
                if (data && data.length > 0) {
                    const { lat, lon } = data[0];
                    onSearch([parseFloat(lat), parseFloat(lon)]);
                } else {
                    alert("Local não encontrado.");
                }
            })
            .catch((error) => {
                console.error("Erro na busca de local:", error);
                alert("Erro ao buscar o local.");
            });
    };

    return (
        <div className={styles.searchBox}>
            <span onClick={() => navigate('/home')} className={styles.navLink}>
                Página Inicial
            </span>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Digite um local"
                className={styles.searchInput}
            />
            <button onClick={handleSearch} className={styles.searchButton}>Buscar</button>
        </div>
    );
};

const Pesquisa = () => {
    const [mapCenter, setMapCenter] = useState([-14.2350, -51.9253]);
    const navigate = useNavigate();

    return (
        <div className={styles.pesquisaContainer}>
            <div className={styles.navbar}>
                <img src={logo} alt="Logo" className={styles.navbarLogo} />
                <div className={styles.navLinksRight}>
                    {/* Certifique-se de que o navigate leva à rota correta da Home */}
                    <span onClick={() => navigate('/perfil')} className={styles.navLink}>Perfil</span>
                    <span onClick={() => navigate('/notificacao')} className={styles.navLink}>Notificação</span>
                </div>
            </div>

            <SearchBox onSearch={setMapCenter} navigate={navigate} />
            <MapContainer center={mapCenter} zoom={4} scrollWheelZoom={true} className={styles.map}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={mapCenter} icon={customIcon}>
                    <Popup>
                        Local selecionado. <br /> Facilmente customizável.
                    </Popup>
                </Marker>
            </MapContainer>

            {/* Linha verde abaixo do mapa */}
            <div className={styles.mapBottomLine}></div>

            <img src={footerLeftImage} alt="Left Decoration" className={styles.footerLeftImage} />

            <div className={styles.footer}>
                <a href="/chat" className={styles.chatLink}>
                    Dúvidas? use o chat!
                    <img src={chatIcon} alt="Chat Icon" className={styles.chatIcon} />
                </a>
            </div>
        </div>
    );
};

export default Pesquisa;
