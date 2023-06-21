import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact1 from "./component/Contact1";
import Corousel from "./component/Corousel";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Team from "./component/Team";
import Info from "./component/Info";
import About from './component/About';
import CV from './component/CV';
import About1 from './component/About1';

function App() {
  return (
    <>
   
      <BrowserRouter>  
        <Header />

        <Routes>
          <Route path="/" element={
            <div style={{ backgroundColor: '#ffffff' }}>
              <Corousel />
              <Info />
            </div>
          } />
          <Route path="/About" element={<About1/>
          } />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact1 />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
