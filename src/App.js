import React from 'react';
import {Switch,Route} from 'react-router-dom';

import './App.css';

import Total from './Components/Total';
import Completeguide from './pages/completeguide';
import Modern from './pages/modern';

function App() {

  return (
    <div>
      <Switch>
        <Route path="/" exact component={Total} />
        <Route path="/completeguide" component={Completeguide} />
        <Route path="/modern" component={Modern} />
      </Switch>
    </div>

  );
}

export default App;
