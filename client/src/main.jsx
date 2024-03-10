import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from './Student.jsx';
import CreateStudent from './pages/CreateStudent.jsx';
import UpdateStudent from './pages/UpdateStudent.jsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Student />} />
        <Route path="/createStudent" element={<CreateStudent />} />
        <Route path="/updateStudent/:id" element={<UpdateStudent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
