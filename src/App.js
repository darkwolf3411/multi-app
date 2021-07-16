import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { useRouts  } from './routs';
import { NavigationPanel } from './components/NavigationPanel/NavigationPanel';
import './App.css';



function App() {
  const routs = useRouts()
  return (
    <div className="wrapper">
      <Router>
        <NavigationPanel />
        {routs}
      </Router>
    </div>
  );
}

export default App;
