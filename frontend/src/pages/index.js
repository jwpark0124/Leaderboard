import React from 'react';
import { Route } from 'react-router-dom';
import LoginRequiredRoute from 'utils/LoginRequiredRoute';
import Home from './Home';
import About from './About';
import AccountsRoutes from './account';

import CompetitionsRoutes from './competitions';

function Root() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="/account" component={AccountsRoutes} />
      <Route path="/competitions" component={CompetitionsRoutes} />
    </>
  );
}

export default Root;
