import React from 'react';
import './App.css';
import CurrentTemp from './Components/CurrentTemp';

/**
 * Refs:
 * https://youtu.be/WUDoU8u7lOo
 * https://nodejs.org/en/download/
 * https://create-react-app.dev/docs/getting-started
 * https://reactjs.org/tutorial/tutorial.html
 */
function App() {
  return (
    <div className="App">
      <CurrentTemp />
    </div>
  );
}

export default App;
