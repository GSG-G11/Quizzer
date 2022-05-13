import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateQuizForm, Navbar, QuizResult } from '../Components';
import RequireAuth from '../Auth/RequireAuth';
import { useAuth } from '../Hooks';
import './index.css';

function App() {
  const [codeFormOpen, setCodeFormOpen] = useState<boolean>(false);
  const { isAuthModalOpen, user } = useAuth();

  return (
    <>
      <Navbar setCodeFormOpen={setCodeFormOpen} />
      <PrivateQuizForm codeFormOpen={codeFormOpen} setCodeFormOpen={setCodeFormOpen} />
      {isAuthModalOpen && !user && <>Login Form</>}

      <Routes>
        <Route index element={<h1>Hello, Quizzer</h1>} />
        {/* Student Routes */}
        <Route path="/student">
          <Route index element={<div>Public Quizzes</div>} />
          <Route path="quiz-details" element={<div>Quiz Details</div>} />
          <Route path="leaderboard" element={<div>Leaderboard</div>} />
          <Route path="quiz/enroll" element={<RequireAuth element={<QuizResult />} userRole="student" />} />
        </Route>
        {/* Teacher Routes */}
        <Route path="/teacher">
          <Route index element={(<RequireAuth element={<div>Teacher Quizzes page</div>} userRole="teacher" />)} />
          <Route path="quiz/:quizId" element={(<RequireAuth element={<div>Teacher Quizzes page</div>} userRole="teacher" />)} />
          <Route path="quiz/new" element={<RequireAuth element={<div>Create Quiz Page</div>} userRole="teacher" />} />
          <Route path="profile" element={<RequireAuth element={<div>Teacher Profile</div>} userRole="teacher" />} />
        </Route>
        <Route path="*" element={<div>page not found</div>} />
        <Route path="/error" element={<div>500</div>} />
      </Routes>
    </>
  );
}

export default App;
