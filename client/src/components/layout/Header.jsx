import * as styles from './Header.css';
import logoImg from '../../assets/images/timbertop-icon.png'
import useAuth from '../../hooks/useAuth'
import TuButton from '../common/TuButton';
import TuLink from '../common/TuLink';

import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from "react-bootstrap";
import { RiShoppingCartFill } from 'react-icons/ri';

const Header = () => {
  // ACCESS VARIABLES FROM HOOKS
  const { user, logout } = useAuth();

  return (
    <Navbar className={styles.navbar} variant="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className={styles.brandLink} as={Link} to='/'>
          <img className={styles.logo} src={logoImg} alt="timbertop united logo" />
          <div className={styles.logoTextBox}>
            <span className={styles.brand}>Timbertop United</span>
            <span className={styles.brandSub}>The Official Online Store</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          {/* STANDARD NAVLINKS */}
          <Nav className='me-auto'>
            <Nav.Link className={styles.navLink} as={Link} to='/store/products'>Products</Nav.Link>
          </Nav>
          {/* AUTH NAVLINKS */}
          <Nav >
            {!user && <TuLink to='/signup'>Sign&nbsp;Up</TuLink>}
            {!user && <TuLink to="/login"  >Log&nbsp;In</TuLink>}
            {user && <TuLink to="/dashboard" >Dashboard</TuLink>}
            {user && <TuButton onClick={() => { logout() }}>Logout</TuButton>}
            {<TuButton><RiShoppingCartFill /></TuButton>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
