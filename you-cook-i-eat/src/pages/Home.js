import React, { useState } from 'react';
import { Typography, Box, Grid, Card, CardMedia, CardContent, CardActions, Button, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { businesses } from '../data/businessData';
import { useSpring, animated, useTransition } from 'react-spring';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();

  const handleLearnMore = (id) => {
    navigate(`/business/${id}`);
  };

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  // Filter businesses based on search term
  const filteredBusinesses = Object.values(businesses).filter(
    (business) =>
      business.name.toLowerCase().includes(searchTerm) ||
      business.description.toLowerCase().includes(searchTerm)
  );

  // Transitions for search results
  const transitions = useTransition(filteredBusinesses, {
    keys: business => business.id,
    from: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    trail: 100,  // Each item will appear with a delay of 100ms
  });

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4, mb: 2, color: theme.palette.primary.main }}>
        Welcome to You Cook I Eat
      </Typography>
      <Typography variant="body1" gutterBottom>
        Discover local food businesses and enjoy the taste of local cuisine!
      </Typography>
      <SearchBar onSearch={handleSearch} />
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Featured Local Businesses
      </Typography>
      <Grid container spacing={4}>
        {transitions((style, business) => (
          <Grid item key={business.id} xs={12} sm={6} md={4}>
            <animated.div style={style}>
              <Card sx={{ '&:hover': { boxShadow: 10 }, transition: 'box-shadow 0.3s' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={business.gallery[0]}
                  alt={business.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {business.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {business.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => handleLearnMore(business.id)}>Learn More</Button>
                </CardActions>
              </Card>
            </animated.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;