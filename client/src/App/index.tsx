import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  PublicQuizzes, Quiz, Leaderboard, QuizResult,
} from '../Pages';
import QuizDetails from '../Pages/Student/QuizDetails';
import { PrivateQuizForm, Navbar, RoleModal } from '../Components';
import RequireAuth from '../Auth/RequireAuth';
import { useAuth } from '../Hooks';
import './index.css';

function Form() {
  const { login } = useAuth();
  const submit = (e:any) => {
    e.preventDefault();
    login({ email: 'amjad@gmail.com', password: 'amjad123', role: 'student' });
  };
  return (
    <form onSubmit={submit}>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const [codeFormOpen, setCodeFormOpen] = useState<boolean>(false);
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const { authModalType, user } = useAuth();

  return (
    <>
      <Navbar setCodeFormOpen={setCodeFormOpen} />
      <PrivateQuizForm codeFormOpen={codeFormOpen} setCodeFormOpen={setCodeFormOpen} />
      <RoleModal setRole={setRole} />
      {authModalType === 'login_signup' && !user && <Form />}

      <Routes>
        <Route index element={<>Hello Quizzer</>} />
        {/* Student Routes */}
        <Route path="/student">
          <Route index element={<PublicQuizzes />} />
          <Route path="quiz-details" element={<QuizDetails />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="quiz/enroll" element={<RequireAuth element={<Quiz />} userRole="student" />} />
          <Route path="quiz/result" element={<RequireAuth element={<QuizResult />} userRole="student" />} />
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
