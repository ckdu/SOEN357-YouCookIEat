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

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Admin Dashboard', path: '/admin' },
    { text: 'Login/Register', path: '/auth' },
  ];

  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}>
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
            <Button 
              color="inherit" 
              key={item.text} 
              component={Link} 
              to={item.path} 
              sx={{ ml: 2, '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.2)' } }}
            >
              {item.text}
            </Button>
          ))
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;