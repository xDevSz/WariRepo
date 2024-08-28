import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/index';
import Register from './pages/register/index';
import Help from './pages/help/index';
import Chat from './pages/chat/index';
import Home from './pages/home/index'; // Importação da página Home
import Pesquisa from './pages/pesquisa/index'; // Certifique-se de que o caminho esteja correto
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} /> {/* Rota para a Home */}
          <Route path="/ajuda" element={<Help />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/pesquisa" element={<Pesquisa />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
