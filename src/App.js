import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/index';
import Register from './pages/register/index';
import Help from './pages/help/index'; // Página de ajuda (crie se ainda não existir)
import Chat from './pages/chat/index'; // Página de chat (crie se ainda não existir)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ajuda" element={<Help />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
