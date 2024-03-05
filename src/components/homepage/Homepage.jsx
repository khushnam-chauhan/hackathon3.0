import React, { useEffect } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

function Homepage() {
  useEffect(() => {
    const words = document.querySelectorAll('.hero-left span');

    const animateWords = () => {
      words.forEach((word, index) => {
        setTimeout(() => {
          word.classList.add('show');
        }, index * 500); // Adjust the delay (500ms) as needed
      });

      setTimeout(() => {
        words.forEach((word) => {
          word.classList.remove('show');
        });
        setTimeout(animateWords, 500); // Restart animation after all words have been shown
      }, words.length * 500); // Wait for all words to be shown before resetting
    };

    animateWords();
  }, []);

  return (
    <div className="homepage">
      <header className='header'>
        <h1>Welcome to Your E-Learning Platform</h1>
        <nav className='navbar'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Conceptual learning</a></li>
        </nav>
      </header>
      <main>
        <div className='hero-section'>
          <div className='hero-right'>
            <h2>Learn, Code, and Grow</h2>
            <p>Start your coding journey with our hands-on projects and courses.</p>
            <button className='getbtn'>Get Started</button>
          </div>
          <div className="hero-left">
            <span>Learn</span>
            <span>Code</span>
            <span>Grow</span>
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Your E-Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;
