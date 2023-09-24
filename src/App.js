import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectCard } from './components/ProjectCard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects/>
      <ProjectCard/>
     
    </div>
  );
}

export default App;
