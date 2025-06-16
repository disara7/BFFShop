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
          <div>
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
    backgroundColor: '#282c34',
    color: 'white',
  },
  brand: {
    margin: 0,
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '1rem',
  },
  container: {
    padding: '2rem',
  },
};

export default App;
