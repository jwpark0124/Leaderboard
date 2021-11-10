import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import useAxios from 'axios-hooks';
import Dataset from './Dataset';
import Outline from './Outline';
import Baseline from './Baseline';
import Leaderboard from './Leaderboard';
import LeaderboardList from './LeaderboardList';
import Navbar from './CompetitionsLayoutComponents/Navbar';
import Footer from './CompetitionsLayoutComponents/Footer';
import Poster from './OutlineComponents/Poster';
import Ground from './OutlineComponents/Ground';

function Routes({ match }) {
  const [{ data: postList, loading, error }, refetch] = useAxios({
    url: 'http://localhost:8000/api/posts/',
  });

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />

      <Route exact path={match.url + '/dataset'} component={Dataset} />
      <Route exact path={match.url + '/outline'} component={Outline} />
      <Route exact path={match.url + '/baseline'} component={Baseline} />
      <Route exact path={match.url + '/leaderboard'} component={Leaderboard} />
      <Route
        exact
        path={match.url + '/leaderboardlist'}
        component={LeaderboardList}
      />
      <Footer />
    </>
  );
}

export default Routes;
