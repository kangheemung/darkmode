import React, { useState } from 'react';
import './App.css';
import BodyComponent from './components/BodyComponent'


function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <BodyComponent darkMode={darkMode} setDarkMode={setDarkMode}/>
    </>
  );
  }

export default App;
