import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  PrivateQuizForm, Navbar, RoleModal, AccessUser,
} from '../Components';
import {
  QuizDetails, Leaderboard, PublicQuizzes, CreateQuiz, EnrolledStudents,
} from '../Pages';
import RequireAuth from '../Auth/RequireAuth';
import { useAuth } from '../Hooks';
import './index.css';
import Landing from '../Pages/Landing';

function App() {
  const [codeFormOpen, setCodeFormOpen] = useState<boolean>(false);
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [isLoginModalOpen, setLoginModalOpen] = useState<boolean>(true);
  const { authModalType, user } = useAuth();

  return (
    <>
      <Navbar setCodeFormOpen={setCodeFormOpen} />
      <PrivateQuizForm codeFormOpen={codeFormOpen} setCodeFormOpen={setCodeFormOpen} />
      <RoleModal setRole={setRole} />
      {
        !user
        && authModalType === 'login_signup'
        && (
        <AccessUser
          role={role}
          isLoginModalOpen={isLoginModalOpen}
          setLoginModalOpen={setLoginModalOpen}
        />
        )
      }

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
          <Route index element={(<RequireAuth element={<div>Teacher Quizzes page</div>} userRole="teacher" />)} />
          <Route path="quiz/:quizId" element={(<RequireAuth element={<EnrolledStudents />} userRole="teacher" />)} />
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
