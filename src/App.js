import { Route, Switch } from 'react-router-dom';

import Map from './pages/Map';
import Destination from './pages/Destination';
import Profile from './pages/Profile';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
          <Map />
        </Route>
        <Route path='/destination'>
          <Destination />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>  
      </Switch>
    </div>
  );
}

export default App;
