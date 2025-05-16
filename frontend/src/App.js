import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [heading, setHeading] = useState();

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then(response => response.text())
      .then(data => setHeading(data))
      .catch(error => console.error('Error fetching heading:', error));
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {heading ? heading : 'Loading...'}
        </a>
      </header>
    </div>
  );
}

export default App;
