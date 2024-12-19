import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ onSearch, onFilter }) => {
  const [searchInput, setSearchInput] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    onSearch(value);
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilterValue(value);
    onFilter(value);
  };

  return (
    <nav className="header">
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About us</Link>
        <Link to="/blogs" className="nav-link">Blogs</Link>
        <Link to="/contacts" className="nav-link">Contacts</Link>
      </div>
      <div className="controls">
        <input
          type="text"
          value={searchInput}
          onChange={handleSearch}
          placeholder="Search..."
          className="search-input"
        />
        <select value={filterValue} onChange={handleFilter} className="filter-dropdown">
          <option value="">All</option>
          <option value="1">Adding</option>
          <option value="2">Registering</option>
          <option value="3">Utilizing</option>
        </select>
      </div>
    </nav>
  );
};

export default Header;
