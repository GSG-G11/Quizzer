import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PublicQuizzes } from '../Pages';
import { PrivateQuizForm, Navbar, SnackBarProvider } from '../Components';
import './index.css';

function App() {
  const [codeFormOpen, setCodeFormOpen] = useState<boolean>(false);

  return (
    <SnackBarProvider>
      <Navbar setCodeFormOpen={setCodeFormOpen} />
      <PrivateQuizForm codeFormOpen={codeFormOpen} setCodeFormOpen={setCodeFormOpen} />

      <Routes>
        <Route path="/student">
          <Route index element={<h1>Hello, Quizzer!</h1>} />
          <Route path="public-quizzes" element={<PublicQuizzes />} />
          <Route path=":quiz_title/quiz-details" element={<h1>Quiz Details</h1>} />
        </Route>
      </Routes>
    </SnackBarProvider>
  );
}

export default App;
