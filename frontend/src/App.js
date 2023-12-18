import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import EbookPage from './pages/EbookPage';
import ArticleComponent from './components/ArticleComponent';
import TestPage from './pages/TestPage';
import './App.css';
import './styles/styles.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/ebook" element={<EbookPage />} />
        <Route path="/article" element={<ArticleComponent />} />
        <Route path="/test" element={<TestPage />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;

