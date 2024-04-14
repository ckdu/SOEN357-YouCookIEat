import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BusinessProfile from './pages/BusinessProfile';
import CustomerProfile from './pages/CustomerProfile';
import AdminDashboard from './pages/AdminDashboard';
import About from './pages/About';
import Auth from './pages/Auth';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<BusinessProfile />} />
          <Route path="/profile" element={<CustomerProfile />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;