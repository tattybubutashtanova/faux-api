import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <section className="about-intro">
        <p>
          Welcome to <span className="highlight">Faux API App</span>! 
          🌟 Welcome to Faux API, your go-to platform for effortless API creation and unlimited storage! Whether you're an experienced developer or just starting out, Faux API has got you covered. Let's dive into what makes Faux API unique and how you can make the most of it.

        </p>
      </section>
      <section className="about-mission">

        <p>
        At Faux API, we offer a free API service for developers, no key required. You can access our API without any hassle and start building right away. Additionally, our API features pagination support, making it easy to manage large datasets and improve overall performance. So, whether you're working on a small project or a big one, Faux API has the tools you need to succeed. <strong>React.js</strong>.
        </p>
      </section>
      <section className="about-features">
        <h2>Key Features</h2>
        <ul>
          <li>📦 Fetch and display API data</li>
          <li>🔎 Search and filter through data</li>
          <li>🛠 Easy navigation with React Router</li>
          <li>✨ A clean and responsive UI</li>
        </ul>
      </section>
      <section className="about-contact">
        <h2>Get in Touch</h2>
        <p>
          Have questions or feedback? Feel free to <a href="/contacts">contact us</a> anytime!
        </p>
      </section>
    </div>
  );
};

export default About;
