﻿import React from 'react';
import { Route } from 'react-router-dom';
import LoginRequiredRoute from 'utils/LoginRequiredRoute';
import Home from './Home';
import About from './About';
import AccountsRoutes from './account';

import CompetitionsRoutes from './competitions';
import Outline from './competitions/Outline';

function Root() {
  return (
    <>
      <Route exact path="/Home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="/account" component={AccountsRoutes} />
      <Route path="/competitions" component={CompetitionsRoutes} />
      <Route exact path="/" component={Outline} />
    </>
  );
}

export default Root;
