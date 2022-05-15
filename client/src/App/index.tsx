import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateQuizForm, Navbar, QuizResult } from '../Components';
import { QuizDetails, Leaderboard, PublicQuizzes } from '../Pages';
import RequireAuth from '../Auth/RequireAuth';
import { useAuth } from '../Hooks';
import './index.css';
import Hello from '../Hello';

function App() {
  const [codeFormOpen, setCodeFormOpen] = useState<boolean>(false);
  const { authModalType, user } = useAuth();

  return (
    <>
      <Navbar setCodeFormOpen={setCodeFormOpen} />
      <PrivateQuizForm codeFormOpen={codeFormOpen} setCodeFormOpen={setCodeFormOpen} />
      {authModalType === 'login_signup' && !user && <>Login Form</>}

      <Routes>
        <Route index element={<Hello />} />
        {/* Student Routes */}
        <Route path="/student">
          <Route index element={<PublicQuizzes />} />
          <Route path="quiz-details" element={<QuizDetails />} />
          <Route path="leaderboard" element={<Leaderboard />} />
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
