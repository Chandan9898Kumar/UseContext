import './App.css';
import MainComponents from './MainComponent'
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  // To UseLoaction/History/Params we need put Componenet inside BrowserRouter
  return (
    <div className="App">
      <Router>
        <MainComponents />
      </Router>

    </div>
  );
}

export default App;
