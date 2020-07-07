import './css/general/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// Page imports.
import LoginPage from './pages/LoginPage';

function App() {
  return (
    // Return the desired page based on the path.=
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
              <LoginPage/>
            </Route>
            <Redirect to="/" />
          </Switch>  
        </Router>
      </div>
  );
}

export default App;