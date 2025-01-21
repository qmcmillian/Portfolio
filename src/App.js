import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/main/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/projects/Projects';

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Skills/>
      <About/>
      {/* <Projects/> */}
    </>
  );
}
export default App;
