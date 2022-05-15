import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateQuizForm, Navbar } from '../Components';
import { CreateQuiz } from '../Pages';
import RequireAuth from '../Auth/RequireAuth';
import { useAuth } from '../Hooks';
import './index.css';

function App() {
  const [codeFormOpen, setCodeFormOpen] = useState<boolean>(false);
  const { authModalType, user } = useAuth();

  return (
    <>
      <Navbar setCodeFormOpen={setCodeFormOpen} />
      <PrivateQuizForm codeFormOpen={codeFormOpen} setCodeFormOpen={setCodeFormOpen} />
      {authModalType === 'login_signup' && !user && <>Login Form</>}

      <Routes>
        <Route index element={<h1>Hello, Quizzer</h1>} />
        {/* Student Routes */}
        <Route path="/student">
          <Route index element={<div>Public Quizzes</div>} />
          <Route path="quiz-details" element={<div>Quiz Details</div>} />
          <Route path="leaderboard" element={<div>Leaderboard</div>} />
          <Route path="quiz/enroll" element={<RequireAuth element={<div>Quiz Page</div>} userRole="student" />} />
        </Route>
        {/* Teacher Routes */}
        <Route path="/teacher">
          <Route index element={(<RequireAuth element={<div>Teacher Quizzes page</div>} userRole="teacher" />)} />
          <Route path="quiz/:quizId" element={(<RequireAuth element={<div>Teacher Quizzes page</div>} userRole="teacher" />)} />
          <Route path="quiz/new" element={<RequireAuth element={<CreateQuiz />} userRole="teacher" />} />
          <Route path="profile" element={<RequireAuth element={<div>Teacher Profile</div>} userRole="teacher" />} />
        </Route>
        <Route path="*" element={<div>page not found</div>} />
        <Route path="/error" element={<div>500</div>} />
      </Routes>
    </>
  );
}

export default App;
