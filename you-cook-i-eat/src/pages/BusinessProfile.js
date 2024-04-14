import React from 'react';
import { Typography, Box, Grid, Paper, Card, CardMedia, CardContent, List, ListItem, ListItemText, Divider } from '@mui/material';

function BusinessProfile() {
  const businessInfo = {
    name: "Local Bakery",
    description: "Specializing in fresh bread, pastries, and bespoke cakes made daily from locally sourced ingredients.",
    address: "123 Bakery Lane, Foodville",
    phone: "555-1234",
    gallery: [
      "/logo.png",
      "/logo.png",
      "/logo.png"
    ],
    menu: [
      { item: "Artisan Bread", price: "$5" },
      { item: "Chocolate Croissant", price: "$3" },
      { item: "Custom Cake", price: "$25" }
    ],
    reviews: [
      { author: "Jane Doe", content: "Absolutely love the bread here, always fresh!", rating: 5 },
      { author: "John Smith", content: "Great pastries, and friendly staff.", rating: 4 }
    ]
  };

  return (
    <Box sx={{ flexGrow: 1, my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>{businessInfo.name}</Typography>
      <Typography variant="h6" gutterBottom>Description</Typography>
      <Typography variant="body1">{businessInfo.description}</Typography>
      <Typography variant="h6" gutterBottom>Contact</Typography>
      <Typography variant="body1">{businessInfo.address}</Typography>
      <Typography variant="body1">{businessInfo.phone}</Typography>
      
      <Typography variant="h6" gutterBottom>Gallery</Typography>
      <Grid container spacing={2}>
        {businessInfo.gallery.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={img}
                alt={`Gallery Image ${index + 1}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" gutterBottom>Menu Highlights</Typography>
      <List>
        {businessInfo.menu.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.item} secondary={`Price: ${item.price}`} />
          </ListItem>
        ))}
      </List>

      <Typography variant="h6" gutterBottom>Customer Reviews</Typography>
      <List>
        {businessInfo.reviews.map((review, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={`${review.author} says:`}
                secondary={<Typography variant="body2" color="textPrimary">{review.content}</Typography>}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}

export default BusinessProfile;