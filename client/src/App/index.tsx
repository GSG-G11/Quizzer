import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import Landing from '../Pages/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/public" element={<div>hello world</div>} /> */}
      </Routes>
    </Router>

  );
}

export default App;
