import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
//import Main from './components/Main';

function App() {
  return (
    <div className="App">
     <Header/>
     <Sidebar/>
     <Footer/>
    </div>
  );
}

export default App;
