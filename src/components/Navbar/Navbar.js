import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../planet.png';

const Navbar = () => (
  <header>
    <img alt="logo" src={logo} />

    <h1>{'Space Travelers\' Hub'}</h1>
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
