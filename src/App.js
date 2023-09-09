import './App.css';
import React from 'react';
import Main from './components/Main';
import Name from './components/name';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App(props) {
  return (
    <div >
      <Router>
        {/* <Name/>  */}
        <Routes>
          <Route exact path="/" element={<Name/>} />
          <Route exact path="/main" element={<Main Name={props.Naam}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
