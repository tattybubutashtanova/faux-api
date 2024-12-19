import React from 'react';

const Contacts = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contact Us</h1>
      <p>Here are the contscts:</p>
      <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
        <li>Email: <a href="tattybubu.tashtanova@gmail.com">tattybubu.tashtanova@gmail.com</a></li>
        <li>Phone: <a href="tel:+996700489213">+996 700489213</a></li>
        <li>Address: 123 API Street, React City, 12345</li>
      </ul>
      <p style={{ marginTop: '20px' }}>
        <a href="tattybubu.tashtanova@gmail.com" style={{
          textDecoration: 'none',
          backgroundColor: '#ff8ba7',
          color: 'white',
          padding: '10px 15px',
          borderRadius: '8px'
        }}>
          Send us an Email
        </a>
      </p>
    </div>
  );
};

export default Contacts;
