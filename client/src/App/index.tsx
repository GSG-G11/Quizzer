import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  PrivateQuizForm, Navbar, RoleModal,
} from '../Components';
import {
  TeacherProfile,
  QuizDetails, Leaderboard, PublicQuizzes, MyQuizzes, CreateQuiz,
} from '../Pages';
import RequireAuth from '../Auth/RequireAuth';
import { useAuth } from '../Hooks';
import QuizzesProvider from '../Contexts/Quizzes/quizzesContext';
import './index.css';
import Landing from '../Pages/Landing';

function App() {
  const [codeFormOpen, setCodeFormOpen] = useState<boolean>(false);
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const { authModalType, user } = useAuth();

  return (
    <>
      <Navbar setCodeFormOpen={setCodeFormOpen} />

      <PrivateQuizForm codeFormOpen={codeFormOpen} setCodeFormOpen={setCodeFormOpen} />
      <RoleModal setRole={setRole} />
      {authModalType === 'login_signup' && !user && <>Login Form</>}

      <Routes>
        <Route index element={<Landing />} />
        {/* Student Routes */}
        <Route path="/student">
          <Route index element={<PublicQuizzes />} />
          <Route path="quiz-details" element={<QuizDetails />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="quiz/enroll" element={<RequireAuth element={<>Quiz Page</>} userRole="student" />} />
        </Route>
        {/* Teacher Routes */}
        <Route path="/teacher">

          <Route index element={(<RequireAuth element={<QuizzesProvider><MyQuizzes /></QuizzesProvider>} userRole="teacher" />)} />
          <Route path="quiz/:quizId" element={(<RequireAuth element={<div>Teacher Quiz page</div>} userRole="teacher" />)} />
          <Route path="quiz/new" element={<RequireAuth element={<CreateQuiz />} userRole="teacher" />} />
          <Route path="profile" element={<RequireAuth element={<QuizzesProvider><TeacherProfile /></QuizzesProvider>} userRole="teacher" />} />
        </Route>
        <Route path="*" element={<div>page not found</div>} />
        <Route path="/error" element={<div>500</div>} />
      </Routes>
    </>
  );
}

export default App;
