import React, { useState } from 'react';
import { PrivateQuizForm } from '../Components';
import SnackBarProvider from '../Components/SnackBar';
import './index.css';

function App() {
  const [codeFormOpen, setCodeFormOpen] = useState<boolean>(true);

  return (
    <SnackBarProvider>
      <PrivateQuizForm
        codeFormOpen={codeFormOpen}
        setCodeFormOpen={setCodeFormOpen}
      />
      Hello, Quizzer!
    </SnackBarProvider>
  );
}

export default App;
