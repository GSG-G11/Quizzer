import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateQuizForm, Navbar, SnackBarProvider } from '../Components';
import './index.css';

function App() {
  const [codeFormOpen, setCodeFormOpen] = useState<boolean>(false);

  return (
    <SnackBarProvider>
      <Navbar setCodeFormOpen={setCodeFormOpen} />
      <PrivateQuizForm
        codeFormOpen={codeFormOpen}
        setCodeFormOpen={setCodeFormOpen}
      />
      <Routes>
        <Route path="/" element={<h1>Hello, Quizzer!</h1>} />
        <Route path="/student/quiz-details" element={<h1>Quiz Details</h1>} />
      </Routes>
    </SnackBarProvider>
  );
}

export default App;
