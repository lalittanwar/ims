import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar';
import Product from './Components/Product/Product';
import Topbar from './Components/Topbar/Topbar';
import Brand from './Components/Brand/Brand';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (

    <div className="row">
      <Router>
        <div className="col-12">
          <Topbar />
        </div>
        <div className="col-md-2 ">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <div>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/product" exact component={Product} />
              <Route path="/brand" exact component={Brand} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
