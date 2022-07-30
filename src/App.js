import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from  './components/Navbar'
import Create from './components/Create';
import Home from './components/Home'
import BlogDetails from './components/BlogDetails'
import Notfound from './components/Notfound';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
    <div className="App ">
      <Navbar/>
      <div className='content'>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/blogs/:id' element={<BlogDetails/>}/>
          <Route path='*' element={<Notfound/>}/>

        </Routes>
      </div>
      <Footer/>
      
    </div>
    </Router>
    
  );
}

export default App;
