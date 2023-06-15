import { NavLink } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import styles from './styles/Navbar.module.css';

const Navbar = () => (
  <>
    <nav className={styles.nav}>
      <div>
        <h1>Bookstore CMS</h1>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : '')}
              to="/"
            >
              BOOkS
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : '')}
              to="/categories"
            >
              CATEGORIES
            </NavLink>
          </li>
        </ul>
      </div>

      <div>
        <BsFillPersonFill className={styles.icon} />
      </div>
    </nav>
  </>
);

export default Navbar;
