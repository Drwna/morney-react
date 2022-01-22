import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;


function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Routes>
            <Route path="/tags" element={<Tags/>}/>
            <Route path="/money" element={<Money/>}/>
            <Route path="/statistics" element={<Statistics/>}/>
            <Route path="/" element={<Navigate replace to="/money"/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Main>
        <Nav/>
      </Wrapper>
    </Router>
  );
}

function NotFound() {
  return <h2>当前页面不存在，地址错误！</h2>;
}

function Tags() {
  return <h2>标签页</h2>;
}

function Money() {
  return <h2>记账页</h2>;
}

function Statistics() {
  return <h2>统计页</h2>;
}

export default App;
