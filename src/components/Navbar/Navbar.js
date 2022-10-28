import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../planet.png';

const Navbar = () => (
  <header className="flex-row-ns flex-column-m flex-column-m items-center justify-between-ns
  justify-center-m justify-center"
  >
    <div id="site-info" className="flex items-center">
      <img alt="logo" src={logo} />
      <h1 className="f3-ns f4">{'Space Travelers\' Hub'}</h1>
    </div>
    <nav>
      <ul id="nav-list">
        <li>
          <NavLink to="/">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="missions">Missions</NavLink>
        </li>
        <li>
          <NavLink to="profile">Profile</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
export default Navbar;
