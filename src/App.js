import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//components
import Login from './component/login/login';
import Register from './component/register/register';
import Navbar from './component/navbar/navbar';
import Landing from './component/landing/landing';
import Dashboard from './component/dashboard/dashboard';
//redirect
import PrivateRoute from './component/routing/privateroute'

//Alerts
import Alert from './component/messages/alert';
//style
import './App.css';
//redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadChef } from './actions/auth';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

useEffect(()=>{
  store.dispatch(loadChef());
},[]);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path="/" component={Landing} />
          <section className="container App">
            <Navbar />
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

// ReactDOM.render(
//
//     <Router>
//       <div>
//<Provider store= {store}>
//         <Route exact path="/" component={App} />
//         <Switch>
//           <Route path="/login" component={Login} />
//           <Route path="/register" component={Register} />
//           <Route path="/dashboard" component={Dashboard} />
//         </Switch>
//       </div>
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// );
