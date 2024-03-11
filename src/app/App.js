import Sidebar from '../components/sidebar';
import Homepage from '../components/homepage';
import Profil from '../components/profil';
import Portfolio from '../components/portfolio';
import Experiences from '../components/experiences';
import Contact from '../components/contact';
import Footer from '../components/footer';
import fetchApi from '../functions/fetchApi';
import { useEffect, useState } from 'react';

function App() {

 
  return (
    <div className="App">
      <Sidebar key="103"/>
      <div className="box">
        <Homepage key="1"/>
        <Profil />
        <Portfolio key="3"/>
        <Experiences key="5" />
        <Contact key="8"/>
        <Footer key="11"/>
      </div>
    </div>
  );
}

export default App;
