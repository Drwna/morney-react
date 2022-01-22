import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Layout from 'components/Layout';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tags" element={<Tags/>}/>
        <Route path="/money" element={<Money/>}/>
        <Route path="/statistics" element={<Statistics/>}/>
        <Route path="/" element={<Navigate replace to="/money"/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

function NotFound() {
  return <h2>当前页面不存在，地址错误！</h2>;
}

function Tags() {
  return (
    <Layout>
      <h2>标签页</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>记账页</h2>
    </Layout>
  );
}

function Statistics() {
  return (
    <Layout>
      <h2>统计页</h2>
    </Layout>
  );
}

export default App;
