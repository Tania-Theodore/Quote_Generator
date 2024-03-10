import React, { useState } from 'react';
import './App.css';

const quotes = [
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  // Add more quotes as needed
];

function App() {
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);
  const [selectedQuote, setSelectedQuote] = useState('');

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setSelectedQuote(quotes[randomIndex]);
  };

  return (
    <>
      <div id="main">
        <div id="sign-in">
          <button id="sign-in-btn">Sign In</button>
        </div>
        <div id="login">
          <button id="login-btn">Login</button>
        </div>
        <div>
          <h2 id="title">RANDOM QUOTE GENERATOR</h2>
        </div>
        <div>
          <h3 id="categ">Category of Quote</h3>
          <select id="opt">
          <option>Random</option>
        <option>Love Quotes</option>
        <option>Life Quotes</option>
        <option>Inspirational Quotes </option>
        <option>Humor Quotes </option>
        <option>Philosophy Quotes</option>
        <option>Inspirational Quotes</option>
        <option>God Quotes</option>
        <option>Truth Quotes</option>
        <option>Wisdom Quotes</option>
        <option>Romance Quotes</option>
        <option>Poetry Quotes</option>
        <option>Death Quotes</option>
        <option>Happiness Quotes</option>
        <option>Hope Quotes</option>
        <option>Faith Quotes</option>
        <option>Life Lessons Quotes</option>
        <option>Quotes Quotes</option>
        <option>Inspiration Quotes</option>
        <option>Spirituality Quotes </option>
        <option>Motivational Quotes </option>
        <option>Religion Quotes</option>
        <option>Writing Quotes</option>
        <option>Relationships Quotes</option>
        <option>Life Quotes</option>
        <option>Success Quotes</option>
        <option>Love Quotes Quotes</option>
        <option>Time Quotes</option>
        <option>Motivation Quotes</option>
        <option>Science Quotes</option>
        <option>Knowledge Quotes</option>
          </select>
          <h3 id="num">Number of Quotes</h3>
          <select id="numDrop" name="numbers">
          {numbers.map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}

          </select>
        </div>
        <div>
          <button id="gen" onClick={getRandomQuote}>
            Generate
          </button>
        </div>
        {/* Display the selected quote */}
        <div id="quote-contain">
          <h3 id="selec">{selectedQuote}</h3>
        </div>
      </div>
    </>
  );
}

export default App;
