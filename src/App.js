import React from 'react';
import './App.css';
import Clients from './clients';
import Screen from './screen';
import Products from './our_products';
import Solutions from './solutions';
import Process from './process';
import Name from './name';
import Cashmission from './cashmission';
import Textimonials from './textimonials';
import Allclinets from './allclients';
import Contact from './contact&career';
import Footer from './footer';

function App() {
  return (
    <div className="App"> 
    <Screen/>
    <Clients/>
    <Products/>
    <Solutions/>
    <Process/>
    <Name/>
    <Cashmission/>
    <Textimonials/>
    <Allclinets/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
