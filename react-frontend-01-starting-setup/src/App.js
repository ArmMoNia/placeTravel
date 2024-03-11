import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/users";
import NewPlaces from "./place/pages/newPlaces";
import UserPlaces from "./place/pages/userPlaces";
import MainNavigation from "./shared/components/Navigation/mainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>

          <Route path="/:userId/places" >
            <UserPlaces />
          </Route>

          <Route path="/places/new" exact>
            <NewPlaces />
          </Route>

          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
