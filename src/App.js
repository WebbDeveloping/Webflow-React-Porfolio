import './webflowFiles/css/normalize.css';
import { Link } from "react-router-dom";

// import './App.css';
import './webflowFiles/css/components.css';
import './webflowFiles/css/joe-webb.css';
import {projects} from './wf-data/projects'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  console.log(projects)
  return (
    <div className="App body">
      {/* <Projects projects={projects} /> */}
      {/* <About /> */}
      <Home />
    </div>
  );
}

export default App;
