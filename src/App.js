import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Careers } from './Pages/Careers';
import { Contact } from './Pages/Contact';
// import { Nav } from './Components/nav';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/careers' element={<Careers/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
