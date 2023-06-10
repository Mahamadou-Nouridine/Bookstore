import { BsFillPersonFill } from 'react-icons/bs';
import styles from './styles/Navbar.module.css';

const Navbar = () => (
  <>
    <nav className={styles.nav}>
      <div>
        <h1>Bookstore CMS</h1>
        <ul>
          <li>BOOkS</li>
          <li>CATEGORIES</li>
        </ul>
      </div>

      <div>
        <BsFillPersonFill className={styles.icon} />
      </div>
    </nav>
  </>
);

export default Navbar;
