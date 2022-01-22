import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Labels from 'views/labels';
import Money from 'views/Money';
import Statistics from 'views/Statistics';
import NotFound from './views/NotFound';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/labels" element={<Labels/>}/>
        <Route path="/money" element={<Money/>}/>
        <Route path="/statistics" element={<Statistics/>}/>
        <Route path="/" element={<Navigate replace to="/money"/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}


export default App;
