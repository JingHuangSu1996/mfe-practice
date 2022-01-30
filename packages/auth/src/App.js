import React from 'react';
import { Switch, Route, Router, Link } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import SignUp from './components/Signup';
import SignIn from './components/Signin';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

function App({ history, onSignIn }) {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/auth/signup">
              <SignUp onSignIn={onSignIn} />
            </Route>
            <Route exact path="/auth/signin">
              <SignIn onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
}

export default App;
