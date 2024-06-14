//this 
import './App.css';
import Nevbar from './components/Nevbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('primary');
  const [alert, setAlert] = useState(null);
  const [bgColor, setBgColor] = useState('#042743');
  const [btnColor, setBtnColor] = useState('secondary')
  const changeTheme = (color) => {
    if (color === 'dark') {
      setBgColor('#042743');
      setBtnColor('secondary');
      if (mode === 'dark') {
        document.body.style.backgroundColor = '#042743'
        showAlert("Dark mode enabled", 'Success')
      }
    }
    else {
      setBgColor('rgb(8 47 4)');
      setBtnColor('success');
      if (mode === 'dark') {
        document.body.style.backgroundColor = ('rgb(8 47 4)')
        showAlert("Dark mode enabled", 'Success')
      }
    }
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'primary') {
      setMode('dark');
      document.body.style.backgroundColor = bgColor
      showAlert("Dark mode enabled", 'Success')
    }
    else {
      setMode('primary');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode disabled", 'Success')
    }
  };
  return (
    <>
      <Router>

        <Nevbar title="TextUtils " aboutText="About Us" mode={mode} toggleMode={toggleMode} changeTheme={changeTheme} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path='/' element={<TextForm mode={mode} showAlert={showAlert} heading='Try TextUtils - Word Counter, Character counter' btnColor={btnColor} />} />
            <Route exact path='/About' element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}


export default App;
