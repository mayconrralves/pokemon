import React  from "react";
import {BrowserRouter as Router}  from 'react-router-dom';
import MyRoutes from './MyRoutes';
import GlobalStyles from './styles';
function App() {
  return (
    <Router>
      <MyRoutes/>
      <GlobalStyles />
    </Router>
  ) 
}

export default App;
