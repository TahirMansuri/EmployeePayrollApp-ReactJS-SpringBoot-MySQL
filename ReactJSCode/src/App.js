
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
          <div className='container'>
            <Routes>
              <Route path="/" element={<AddEmployeeComponent />}></Route>
              <Route path="/view" element={<ViewEmployeeComponent />}></Route>
            </Routes>
          </div>
          
      </Router>
    </div>
  );
}

export default App;
