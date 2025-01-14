// src/App.js
import React from 'react';
import "../src/App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'; // assume you have this component
import PrivateRoute from './components/PrivateRoute';
import Counter from './components/Counter';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        // {/* Private routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/counter" element={<Counter />} />
        </Route>
        
        {/* Redirect root to login */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
