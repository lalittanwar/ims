import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar';
import Product from './Components/Product/Product';
import Topbar from './Components/Topbar/Topbar';
import Brand from './Components/Brand/Brand';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Router/PrivateRoute';
import Login from './Components/Login/Login';
import PublicRoute from './Router/PublicRoute';
import LoginService from './Services/LoginService';

const loginService = new LoginService();

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Router>
          {loginService.isUserLoggedIn() ?
            <React.Fragment>
              <div className="col-12">
                <Topbar />
              </div>
              <div className="col-md-2 ">
                <Sidebar />
              </div>
            </React.Fragment> : null}
          <div className="col-md-10">
            <div>
              <Switch>
                <PrivateRoute restricted={false} path="/" exact component={Dashboard} />
                <PrivateRoute restricted={false} path="/product" exact component={Product} />
                <PrivateRoute restricted={false} path="/brand" exact component={Brand} />
                <PublicRoute restricted={true} component={Login} path="/login" exact />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
