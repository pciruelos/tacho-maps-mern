import "./App.css";
import { useCallback, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { AuthContext } from "./shared/context/auth-context";

import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./users/pages/Auth";
import Home from "./shared/components/Home/Home";
import About from "./shared/components/Home/About";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>

        <Route exact path="/">
          <Home />
          <Users />
          <About/>
        </Route>

        <Route exact path="/:userId/places">
          <UserPlaces />
        </Route>

        <Route exact path="/places/new">
          <NewPlace />
        </Route>

        <Route path="/places/:placesdId">
          <UpdatePlace />
        </Route>

        <Redirect to="/" />

      </Switch>
    );
  } else {
    routes = (
      <Switch>
        
        <Route exact path="/">
          <Home />
          <Users />
          <About/>
        </Route>

        <Route exact path="/:userId/places">
          <UserPlaces />
        </Route>

        <Route exact path="/auth">
          <Auth />
        </Route>

        <Redirect to="/auth" />

      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>
          
            {routes}
          
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
