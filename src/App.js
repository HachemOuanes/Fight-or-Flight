import { Route, Switch } from 'react-router-dom';

import MapPage from './pages/MapPage';
import Destination from './pages/Destination';
import Profile from './pages/Profile';
import MainLayout from './components/layout/MainLayout';

function App() {
  return (
    <div>
      <MainLayout>
        <Switch>
          <Route path='/' exact>
            <MapPage />
          </Route>
          <Route path='/destination'>
            <Destination />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
        </Switch>
      </MainLayout>
    </div>
  );
}

export default App;
