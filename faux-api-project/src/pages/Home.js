import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ searchTerm, filterValue }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const placeholderData = [
    { id: 1, name: "Add Project", category: "1" },
    { id: 2, name: "Add API", category: "2" },
    { id: 3, name: "Registering online", category: "3" },
    { id: 4, name: "Utilize the API", category: "1" },
    { id: 5, name: "Get Started", category: "2" },
  ];

  useEffect(() => {
    setTimeout(() => {
      fetchData()
        .then((fetchedData) => {
          const finalData = fetchedData && fetchedData.length > 0 ? fetchedData : placeholderData;
          setData(finalData);
          setFilteredData(finalData);
        })
        .catch(() => {
          setData(placeholderData);
          setFilteredData(placeholderData);
        });
    }, 1000);
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterValue ? item.category === filterValue : true;
      return matchesSearch && matchesFilter;
    });
    setFilteredData(filtered);
  }, [searchTerm, filterValue, data]);

  return (
    <div className="container">
      <h1>Welcome to the My Faux API App</h1>
      <p>Faux APIs are a big deal in software development! They help developers mock, test, and work with fake APIs that act like the real ones. This is super important because it lets us try out apps in different situations without needing the actual backend services. Explore a free backend API crafted for frontend frameworks and libraries.</p>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            {item.name} <br />
            <Link to={`/details/${item.id}`} className="btn">View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
