import React from 'react';
import { Typography, Box, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { businesses } from '../data/businessData';

function Home() {
  const featuredBusinesses = Object.values(businesses);

  const navigate = useNavigate();

  const handleLearnMore = (id) => {
    navigate(`/business/${id}`);
  };

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
        {featuredBusinesses.map((business) => (
          <Grid item key={business.id} xs={12} sm={6} md={4}>
            <Card>
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
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;