import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import PlumbingServices from './components/PlumbingServices';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <PlumbingServices />
      <About />
      <Contact />
    </div>
  );
};

export default App;
