import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar';
import Product from './Components/Product/Product';
import Topbar from './Components/Topbar/Topbar';
import Brand from './Components/Brand/Brand.jsx';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Router/PrivateRoute';
import Login from './Components/Login/Login';
import Logout from './Components/Logout/Logout';
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
              <div className="col-12 bg-dark">
                <Topbar />
              </div>
              <div className="col-md-2 bg-dark p-0">
                <Sidebar />
              </div>
            </React.Fragment> : null}
          <div className="col-md-10">
            <Switch>
              <PrivateRoute restricted={false} path="/" exact component={Dashboard} />
              <PrivateRoute restricted={false} path="/product" exact component={Product} />
              <PrivateRoute restricted={false} path="/brand" exact component={Brand} />
              <PrivateRoute restricted={false} path="/logout" exact component={Logout} />
              <PublicRoute restricted={true} component={Login} path="/login" exact />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
