import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  PrivateQuizForm,
  Navbar,
  RoleModal,
  AccessUser,
} from '../Components';
import {
  StudentProfile,
  Leaderboard,
  PublicQuizzes,
  CreateQuiz,
  Quiz,
  QuizDetails,
  QuizResult,
  TeacherProfile,
  MyQuizzes,
  Landing,
  EnrolledStudents,
  Error,
} from '../Pages';
import RequireAuth from '../Auth/RequireAuth';
import { useAuth } from '../Hooks';
import QuizzesProvider from '../Contexts/Quizzes/quizzesContext';
import './index.css';

function App() {
  const [codeFormOpen, setCodeFormOpen] = useState<boolean>(false);
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [isLoginModalOpen, setLoginModalOpen] = useState<boolean>(true);
  const { authModalType, user } = useAuth();

  return (
    <>
      <Navbar setCodeFormOpen={setCodeFormOpen} setRole={setRole} />
      <PrivateQuizForm codeFormOpen={codeFormOpen} setCodeFormOpen={setCodeFormOpen} />
      <RoleModal setRole={setRole} />
      {
        !user
        && authModalType === 'login_signup'
        && (
        <AccessUser
          setRole={setRole}
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
          <Route path="quiz/enroll" element={<Quiz />} />
          <Route path="quiz/result" element={<QuizResult />} />
          <Route path="profile" element={<RequireAuth element={<StudentProfile />} userRole="student" />} />
        </Route>
        {/* Teacher Routes */}
        <Route path="/teacher">
          <Route index element={(<RequireAuth element={<QuizzesProvider><MyQuizzes /></QuizzesProvider>} userRole="teacher" />)} />
          <Route path="quiz/:quizId" element={(<RequireAuth element={<EnrolledStudents />} userRole="teacher" />)} />
          <Route path="quiz/new" element={<RequireAuth element={<CreateQuiz />} userRole="teacher" />} />
          <Route path="profile" element={<RequireAuth element={<QuizzesProvider><TeacherProfile /></QuizzesProvider>} userRole="teacher" />} />
        </Route>
        <Route path="*" element={<Error status={404} />} />
        <Route path="/error" element={<Error status={500} />} />
      </Routes>
    </>
  );
}

export default App;
