import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <strong><Alert alert={alert} /></strong>
        <div className="container my-3" >
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App; 
