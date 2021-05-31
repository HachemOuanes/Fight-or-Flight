import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Fight-or-Flight</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Map</Link>
          </li>
          <li>
            <Link to='/destination'>Desination</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
