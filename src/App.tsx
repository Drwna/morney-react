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
import styled from 'styled-components';

const AppWrapper = styled.div`
  color: #333;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Routes>
          <Route path="/labels" element={<Labels/>}/>
          <Route path="/money" element={<Money/>}/>
          <Route path="/statistics" element={<Statistics/>}/>
          <Route path="/" element={<Navigate replace to="/money"/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </AppWrapper>
  );
}


export default App;
