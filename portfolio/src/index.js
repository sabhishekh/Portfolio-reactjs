



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {BrowserRouter, Route, Routes } from 'react-router-dom';
function Hello(){
 <BrowserRouter>
 <Routes>
  <Route path='/mycomponent/cards.js' element={<div>cards page</div>}/>
  <Route path="/" element={<div>About page</div>}/>
 </Routes>
 </BrowserRouter>



  return(
    <>
    <App/>
    <br/>
    
  
  
    </>
  );
}
 
  
 
 const root = ReactDOM. createRoot (document.getElementById('root'));
 root.render(<Hello/>);