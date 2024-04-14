import React, { useState } from 'react';
import { Typography, Box, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { businesses } from '../data/businessData';
import { useSpring, animated } from 'react-spring';

function Home() {
  const featuredBusinesses = Object.values(businesses);
  const navigate = useNavigate();

  // Animation for cards on scroll
  const cardAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    config: { tension: 170, friction: 26 },
    delay: 200,
  });

  const handleLearnMore = (id) => {
    navigate(`/business/${id}`);
  };

  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Welcome to You Cook I Eat
      </Typography>
      <Typography variant="body1" gutterBottom>
        Discover local food businesses and enjoy the taste of local cuisine!
      </Typography>
      <SearchBar />
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Featured Local Businesses
      </Typography>
      <Grid container spacing={4}>
        {featuredBusinesses.map((business, index) => (
          <Grid item key={business.id} xs={12} sm={6} md={4}>
            <animated.div
              style={{ ...props, ...cardAnimation }}
              onMouseMove={({ clientX: x, clientY: y, currentTarget }) => {
                const rect = currentTarget.getBoundingClientRect();
                set({ xys: [(y - rect.top - rect.height / 2) / 20, (x - rect.left - rect.width / 2) / 20, 1.1] });
              }}
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
            >
              <Card sx={{ '&:hover': { boxShadow: 10 }, transition: 'box-shadow 0.3s' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={business.gallery[0]}
                  alt={business.name}
                  sx={{ filter: 'brightness(0.9)' }}
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