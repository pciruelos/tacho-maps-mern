import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';


const App = () => {
  return (
    <Router>
    <MainNavigation />
    <main>
      <Switch>
      <Route  exact path="/">
        <Users />
      </Route>
      <Route exact path="/:userId/places">
        <UserPlaces />
      </Route>

      <Route  exact path="/places/new">
        <NewPlace />
      </Route>
      <Route path='/places/:placesdId'>
        <UpdatePlace />
      </Route>
      <Redirect to="/" />
      </Switch>
      </main>
    </Router>
  );
}

export default App;
