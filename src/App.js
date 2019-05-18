import React from 'react';
import './style/css/Reset.css';
import './style/css/style.min.css';
import App_header from './view/App_header';
import App_body from './view/App_body';

function App() {
  return (
    <div className="App">
      <App_header></App_header>
      <App_body></App_body>
    </div>
  );
}

export default App;
