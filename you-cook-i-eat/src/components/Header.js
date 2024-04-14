import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const MenuButtons = (
    <>
      <Button color="inherit" component={Link} to="/" sx={{ ml: 2 }}>Home</Button>
      <Button color="inherit" component={Link} to="/about">About</Button>
      <Button color="inherit" component={Link} to="/admin">Admin Dashboard</Button>
      <Button color="inherit" component={Link} to="/auth">Login/Register</Button>
    </>
  );

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Admin Dashboard', path: '/admin' },
    { text: 'Login/Register', path: '/auth' },
  ];

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box
          sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          <img src="/logo.png" alt="You Cook I Eat" style={{ height: '50px', marginRight: '20px' }} />
          <Typography variant="h6" component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
            You Cook I Eat
          </Typography>
        </Box>
        {isMobile ? (
          <>
            <IconButton color="inherit" edge="start" onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
              <List>
                {menuItems.map((item) => (
                  <ListItem button key={item.text} component={Link} to={item.path} onClick={handleDrawerClose}>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          menuItems.map((item) => (
            <Button color="inherit" key={item.text} component={Link} to={item.path} sx={{ ml: 2 }}>
              {item.text}
            </Button>
          ))
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;