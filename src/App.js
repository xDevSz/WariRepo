import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import Login from './pages/login/index.js'; // Certifique-se de que o caminho esteja correto
import Register from './pages/register/index.js'; // Importar a página de registro
import Map from './pages/map/index.js'
import './App.css';
=======
import Login from './pages/login/index';
import Register from './pages/register/index';
import Help from './pages/help/index'; // Página de ajuda (crie se ainda não existir)
import Chat from './pages/chat/index'; // Página de chat (crie se ainda não existir)
>>>>>>> 6ab0e2fdb8f174942a6e826db1a2128cbff9ecbb

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <div className="App">
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
=======
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ajuda" element={<Help />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
>>>>>>> 6ab0e2fdb8f174942a6e826db1a2128cbff9ecbb
    </Router>
  );
}

export default App;
