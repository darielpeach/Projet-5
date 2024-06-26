import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Propos from './pages/About'
import Error from './components/Error'
import PageLogement from './pages/PageLogement'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a_propos" element={<Propos />} />
        <Route path='*' element={<Error />} />
        <Route path="/logement/:id" element={<PageLogement />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


