import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch ,HashRouter} from 'react-router-dom'
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
        <HashRouter>
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
              <PublicRoute restricted={true}  path="/login" exact component={Login} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
