import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Components';
import { PublicQuizzes } from '../Pages';
import './index.css';

function App() {
  const [codeFormOpen, setCodeFormOpen] = useState<boolean>(true);

  return (
    <>
      <Navbar setCodeFormOpen={setCodeFormOpen} />
      <Routes>
        <Route path="/student">
          <Route path="public-quizzes" element={<PublicQuizzes />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
