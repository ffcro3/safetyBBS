import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Obsdetails from './pages/Obsdetails';
import ForgotPassword from './pages/ForgotPassword';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/obsdetails/:bbs" exact component={Obsdetails} />
        <Route path="/forgotpassword" exact component={ForgotPassword} />
      </Switch>
    </BrowserRouter>
  );
}
