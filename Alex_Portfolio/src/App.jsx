import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './Components/Main';
import WorkPage from './Components/WorkPage/WorkPage';
import AboutPage from './Components/AboutPage/AboutPage';

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
    </Router>
  );
}

export default App;
