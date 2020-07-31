import React, { Fragment } from 'react';
import Header from './components/Header';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />  
      <div className= "container mt-5">
        <Switch>
          <Route exact path= "/" component= {Productos}/>
          <Route exact path= "/productos/nuevo" component= {NuevoProducto}/>
          <Route exact path= "/productos/editar/:id" component= {EditarProducto}/>
        </Switch>
      </div>
    </Router>
  );
}
//REACT-ROUTER-DOM todo lo que este fuera del switch se va a utilizar en todas las paginas

export default App;
