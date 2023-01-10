import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Catalog from './components/catalog/Catalog';


function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <div>
        <Route exact path='/' component={Content} />
        <Route path='/catalog' component={Catalog} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
