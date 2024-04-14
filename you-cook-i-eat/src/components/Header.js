import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="You Cook I Eat" style={{ height: '50px', marginRight: '20px' }} />
          <Typography variant="h6" component="div">
            You Cook I Eat
          </Typography>
        </Box>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/admin">Admin Dashboard</Button>
        <Button color="inherit" component={Link} to="/auth">Login/Register</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;