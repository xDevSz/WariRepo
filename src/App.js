import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/index'; 
import Register from './pages/register/index';
import Help from './pages/help/index';
import Chat from './pages/chat/index';
// Remova ou adicione a importação para o Map conforme necessário
// import Map from './pages/map/index'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ajuda" element={<Help />} />
          <Route path="/chat" element={<Chat />} />
          {/* Se o Map não for necessário, remova esta linha */}
          {/* <Route path="/home" element={<Map />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
