import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <Router>
      <div>
        <nav style={styles.navbar}>
          <h2 style={styles.brand}>BFFShop</h2>
          <div style={styles.navLinks}>
            <Link to="/" style={styles.navLink}>Home</Link>
            <Link to="/admin" style={styles.navLink}>Admin Panel</Link>
          </div>
        </nav>
        <div style={styles.container}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: 'linear-gradient(90deg, #1e3c72, #2a5298)', // gradient background
    color: 'white',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)', // subtle shadow
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  brand: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '1.5rem',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'color 0.3s ease, transform 0.2s ease',
  },
  container: {
    padding: '2rem',
  },
};

// Add hover effect dynamically
styles.navLink[':hover'] = {
  color: '#ffdd57',
  transform: 'scale(1.05)',
};

export default App;
