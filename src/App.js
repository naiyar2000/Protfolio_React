import React from 'react';
import { LandingPage } from './components/LandingPage';
import { ExpenseTracker } from './components/ExpenseTracker';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
        <Router>
        <div>
            <Switch>
              <Route  exact path="/" component={LandingPage} />
              <Route  path="/ExpenseTracker" component={ExpenseTracker}/>
            </Switch>
        </div>          
        </Router>
        // <Router>
        //   <LandingPage />
        // </Router>
  );
}

export default App;
