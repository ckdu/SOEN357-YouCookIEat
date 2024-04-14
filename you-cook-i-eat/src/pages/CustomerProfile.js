import React from 'react';
import { Typography, Box, Grid, Card, CardContent, CardMedia, List, ListItem, ListItemText, Divider } from '@mui/material';
import { useSpring, animated } from 'react-spring';

function CustomerProfile() {
  const customerInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    favorites: [
      "Artisan Bread",
      "Chocolate Croissant",
      "Custom Cake"
    ],
    orderHistory: [
      { date: "2023-01-01", item: "Artisan Bread", status: "Delivered" },
      { date: "2023-02-14", item: "Custom Cake", status: "Delivered" }
    ],
    favoriteImages: [
      "/logo.png",
      "/logo.png",
      "/logo.png"
    ]
  };

  // Animation for content on load
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 }  // Adjust timing as necessary
  });

  return (
    <Box sx={{ flexGrow: 1, my: 4 }}>
      <animated.div style={fadeIn}>
        <Typography variant="h4" component="h1" gutterBottom>Profile</Typography>
        <Typography variant="h6" gutterBottom>Name</Typography>
        <Typography variant="body1">{customerInfo.name}</Typography>
        <Typography variant="h6" gutterBottom>Email</Typography>
        <Typography variant="body1">{customerInfo.email}</Typography>
      </animated.div>

      <animated.div style={fadeIn}>
        <Typography variant="h6" gutterBottom>Favorites</Typography>
        <List>
          {customerInfo.favorites.map((favorite, index) => (
            <ListItem key={index}>
              <ListItemText primary={favorite} />
            </ListItem>
          ))}
        </List>
      </animated.div>

      <Typography variant="h6" gutterBottom>Favorite Dishes Gallery</Typography>
      <Grid container spacing={2}>
        {customerInfo.favoriteImages.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <animated.div style={fadeIn}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={img}
                  alt={`Favorite Dish ${index + 1}`}
                />
              </Card>
            </animated.div>
          </Grid>
        ))}
      </Grid>

      <animated.div style={fadeIn}>
        <Typography variant="h6" gutterBottom>Order History</Typography>
        <List>
          {customerInfo.orderHistory.map((order, index) => (
            <ListItem key={index}>
              <ListItemText primary={order.item} secondary={`Ordered on ${order.date} - ${order.status}`} />
            </ListItem>
          ))}
        </List>
      </animated.div>
    </Box>
  );
}

export default CustomerProfile;