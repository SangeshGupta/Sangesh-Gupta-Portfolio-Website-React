
import './App.css';
import { About } from './components/About';
import { Footers } from './components/Footers';
import { Header } from './components/Header';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './components/Home';
import { Skills } from './components/Skills';
import { Project } from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <Header></Header>
    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      
      </Routes>
      <Footers></Footers>
    </Router>

  );
}

export default App;
