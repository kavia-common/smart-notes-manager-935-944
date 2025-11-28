import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import logo from './logo.svg';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [searchText, setSearchText] = useState('');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // (Stub) Optional demo for secondary action: replace with modal/new note action as needed
  const handleSecondaryAction = null; // pass null by default, implement as needed

  return (
    <div className="App" style={{ minHeight: "100vh", background: "#f9fafb" }}>
      {/* Top navbar */}
      <Navbar
        searchValue={searchText}
        onSearchChange={setSearchText}
        onSecondaryAction={handleSecondaryAction}
        secondaryLabel="New Note"
      />
      {/* Main app body */}
      <main style={{ paddingTop: "3.5rem" }}>
        <header className="App-header">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            Current theme: <strong>{theme}</strong>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </main>
    </div>
  );
}

export default App;
