import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { NavNar } from './components';
import AboutPage from './pages/AboutPage';
import ToDosPage from './pages/ToDosPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavNar />
      <div className="container">
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<ToDosPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
