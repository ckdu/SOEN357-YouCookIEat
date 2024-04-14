import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Grid, Paper, Card, CardMedia, CardContent, List, ListItem, ListItemText, Divider } from '@mui/material';
import { businesses } from '../data/businessData';
import { useSpring, animated } from 'react-spring';

function BusinessProfile() {
  const { id } = useParams();
  const businessInfo = businesses[id]; // Get business data based on URL parameter

  // Animation for content on load
  const fadeInUp = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, 50px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { tension: 220, friction: 20 },
    delay: 100
  });

  return (
    <Box sx={{ flexGrow: 1, my: 4 }}>
      <animated.div style={fadeInUp}>
        <Typography variant="h4" component="h1" gutterBottom>{businessInfo.name}</Typography>
        <Typography variant="h6" gutterBottom>Description</Typography>
        <Typography variant="body1">{businessInfo.description}</Typography>
        <Typography variant="h6" gutterBottom>Contact</Typography>
        <Typography variant="body1">{businessInfo.address}</Typography>
        <Typography variant="body1">{businessInfo.phone}</Typography>
      </animated.div>

      <Typography variant="h6" gutterBottom>Gallery</Typography>
      <Grid container spacing={2}>
        {businessInfo.gallery.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <animated.div style={fadeInUp}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={img}
                  alt={`Gallery Image ${index + 1}`}
                />
              </Card>
            </animated.div>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" gutterBottom>Menu Highlights</Typography>
      <animated.div style={fadeInUp}>
        <List>
          {businessInfo.menu.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item.item} secondary={`Price: ${item.price}`} />
            </ListItem>
          ))}
        </List>
      </animated.div>

      <Typography variant="h6" gutterBottom>Customer Reviews</Typography>
      <animated.div style={fadeInUp}>
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
      </animated.div>
    </Box>
  );
}

export default BusinessProfile;