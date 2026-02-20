import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Main/Pages/NavBar';
import Pages from './Main/Pages/HomeScreen';

function App () {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Pages />}></Route>
            <Route path="*" element={<div> 404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
} 
    
export default App;
