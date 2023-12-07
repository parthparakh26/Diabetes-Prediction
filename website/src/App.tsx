import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './pages/form/Form';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
