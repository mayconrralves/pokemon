import React  from "react";
import {BrowserRouter as Router}  from 'react-router-dom';
import MyRoutes from './MyRoutes';

function App() {
  return (
    <Router>
      <MyRoutes/>
    </Router>
  ) 
}

export default App;
