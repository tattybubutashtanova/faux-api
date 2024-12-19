import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/Home';
import Details from './pages/Details';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contacts from './pages/Contacts';
import Header from './components/Header';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterValue, setFilterValue] = useState('');

  return (
    <Router>
      <Header 
        onSearch={(value) => setSearchTerm(value)} 
        onFilter={(value) => setFilterValue(value)} 
      />
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} filterValue={filterValue} />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
};

export default App;
