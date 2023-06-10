import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import styles from './styles/Navbar.module.css';

const Navbar = () => (
  <>
    <nav className={styles.nav}>
      <div>
        <h1>Bookstore CMS</h1>
        <ul>
          <li><Link to="/">BOOkS</Link></li>
          <li><Link to="/categories">CATEGORIES</Link></li>
        </ul>
      </div>

      <div>
        <BsFillPersonFill className={styles.icon} />
      </div>
    </nav>
  </>
);

export default Navbar;
