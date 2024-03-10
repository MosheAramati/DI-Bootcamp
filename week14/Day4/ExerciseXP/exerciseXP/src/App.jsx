import React from 'react';
import './App.css'
import BuggyCounter from './components/BuggyCounter.jsx';
import {ErrorBoundary} from './components/ErrorBoundary.jsx';


function App() {
  return (
    <div>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </div>
  );
}

export default App;

