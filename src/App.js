import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './Alert';
// import About from './components/About';
// import { 
//   BrowserRouter as Router, Routes, Route
// } from 'react-router-dom';


function App() {
  const [mode,setMode] = useState('light');  //whether dark mode is enabled or not 
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled","Success")
      // setInterval(()=>{
      //   document.title='TextUtilis Dark Mode Enabled'
      // },2000)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","Success")
    }
  }

  return (
    <>
    {/* <Router>  */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes> */}
        {/* <Route exact path="about" element={<About />} /> */}
        {/* <Route exact path="/" element={ */}
        <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/> 
    {/* </Routes> */}
    </div>
    {/* </Router> */}
    </> 
  );
}

export default App;
