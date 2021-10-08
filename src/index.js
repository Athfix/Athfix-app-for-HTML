import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Privacy from './Privacy';
import Notes from './Notes';
import App from './App';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
    <Switch>
      <Route  path="/" component={Home} exact/>
      <Route  path="/privacy" component={Privacy}/>
      <Route  path="/Notes" component={Notes}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);