import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Grid, Paper, Card, CardMedia, CardContent, List, ListItem, ListItemText, Divider } from '@mui/material';
import { businesses } from '../data/businessData';

function BusinessProfile() {
  const { id } = useParams();
  const businessInfo = businesses[id]; // Get business data based on URL parameter


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