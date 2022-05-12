import React, { useState } from 'react';
import { Navbar } from '../Components';
import './index.css';

function App() {
  const [codeFormOpen, setCodeFormOpen] = useState<boolean>(true);

  return (
    <Navbar setCodeFormOpen={setCodeFormOpen} />
  );
}

export default App;
