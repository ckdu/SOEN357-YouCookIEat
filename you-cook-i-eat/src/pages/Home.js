import React from 'react';
import { Typography, Box, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import SearchBar from '../components/SearchBar';

function Home() {
  const featuredBusinesses = [
    { id: 1, name: "Local Bakery", description: "Freshly baked goods daily.", imageUrl: "/logo.png" },
    { id: 2, name: "Farm to Table Restaurant", description: "Organic meals prepared with local ingredients.", imageUrl: "/logo.png" },
    { id: 3, name: "Homemade Pies", description: "Sweet and savory pies like your grandmother used to make.", imageUrl: "/logo.png" },
  ];

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
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
                image={business.imageUrl}
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
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;