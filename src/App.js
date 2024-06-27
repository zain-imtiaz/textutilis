import "./App.css";
import Navbar from "./Components/Navbar";
// import About from "./Components/About";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode=()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title= 'Textutilis-Dark mode';

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title= 'Textutilis-Light mode';
    }
  }
  return (
    <>
 {/* <Navbar title="Textutilis" aboutText="About Textutilis"/> */}
 {/* <Navbar/> */}
 {/* <Router> */}
  <Navbar title="Textutilis"  mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
 <div className="container my-3">
  {/* <Routes> */}
  {/* {/users --> component 1
  /users/home --> --> component 2} */}
          {/*<Route exact path="/about" element={<About/>}/>*/}
           <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route> */}
  {/* </Routes>  */}
 </div>
 {/* </Router> */}
    </>
  );
}

export default App;

