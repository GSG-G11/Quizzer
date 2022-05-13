import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateQuizForm, Navbar, SnackBarProvider } from '../Components';
import { QuizDetails } from '../Pages';
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
        <Route path="/student/quiz-details" element={<QuizDetails />} />
        <Route path="/student/quiz/enroll" element={<div>Quiz</div>} />
      </Routes>
    </SnackBarProvider>
  );
}

export default App;
