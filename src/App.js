import Home from './Pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Progress from './Pages/Progress'
import { Contact } from './Pages/Contact';
import About from './Pages/About'
function App() {
  return (
    
    <Router>            
      <Routes>
          <Route path="/" element={<Home/>}/>          
          <Route path="/about" element={<About/>}/>          
          <Route path="/portfolio" element={<Progress/>}/>          
          <Route path="/contact" element={<Contact/>}/>          

      </Routes>
    </Router>
  );
}

export default App;
