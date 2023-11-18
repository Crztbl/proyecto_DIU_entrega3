import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { Calificaciones } from './Calificaciones';
import { Settings } from './Settings';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />

        <Sidebar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/calificaciones" component={Calificaciones} />
          <Route component={Settings} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
