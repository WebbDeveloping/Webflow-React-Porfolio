import './webflowFiles/css/normalize.css';
import './App.css'
import { Link } from "react-router-dom";
import {
  Routes,
  Route,
} from "react-router-dom";

// import './App.css';
import './webflowFiles/css/components.css';
import './webflowFiles/css/joe-webb.css';
import { projects } from './wf-data/projects'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// import { projects } from '../wf-data/projects'

function App() {
  // console.log(projects)
  return (
    <div className="App body">
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/projects' element={<Projects projects={projects}/>} />
          <Route path='/contact' element={<Contact />} />
        
        </Routes>
    </div>

  );
}

export default App;
