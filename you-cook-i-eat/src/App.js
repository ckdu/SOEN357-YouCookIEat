import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BusinessProfile from './pages/BusinessProfile';
import CustomerProfile from './pages/CustomerProfile';
import AdminDashboard from './pages/AdminDashboard';
import About from './pages/About';
import Auth from './pages/Auth';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF8A65',
      contrastText: '#fff',
    },
    secondary: {
      main: '#F48FB1',
      contrastText: '#000',
    },
    background: {
      default: '#f6f6f6',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#575757',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Header />
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/business/:id" element={<BusinessProfile />} />
            <Route path="/profile" element={<CustomerProfile />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;