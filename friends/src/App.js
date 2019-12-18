import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';
import Friend from './components/Friend';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <PrivateRoute exact path="/friends" component={Friends} />
        <Route path="/login" component={Login} />
        <Route exact path="/friends/:id" render={(props) => <Friend {...props} />}
        />
      </div>
    </Router>
  );
}

export default App;
