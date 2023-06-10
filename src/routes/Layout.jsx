import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styles from './styles/Layout.module.css';

const Layout = () => (
  <>
    <Navbar />
    <div className={styles.outlet}>
      <div>
        <Outlet />
      </div>
    </div>
  </>
);

export default Layout;
