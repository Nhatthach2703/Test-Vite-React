import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyApp</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/register" style={styles.link}>Register</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#222', color: 'white' },
  logo: { margin: 0 },
  link: { color: 'white', marginLeft: '1rem', textDecoration: 'none' }
};

export default Navbar;