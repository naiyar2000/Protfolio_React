import React from 'react';
import { LandingPage } from './components/LandingPage';
// import { ExpenseTracker } from './components/ExpenseTracker';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
        // <Router>
        // <div>
        //     <Switch>
        //       <Route  exact path="/Portfolio" component={LandingPage} />
        //       <Route  path="/Portfolio/ExpenseTracker" component={ExpenseTracker}/>
        //     </Switch>
        // </div>          
        // </Router>
        <Router>
          <LandingPage />
        </Router>
  );
}

export default App;
