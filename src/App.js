import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from "./component/Contact";
import Corousel from "./component/Corousel";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Team from "./component/Team";
import Info from "./component/Info";
import About from './component/About';
import CV from './component/CV';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={
            <>
              <Corousel />
              <Info />
            </>
          } />
          <Route path="/About" element={<About/>
          } />
          <Route path="/team" element={<Team />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
