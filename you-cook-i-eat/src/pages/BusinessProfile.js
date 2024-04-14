import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Grid, Card, CardMedia, CardContent, CardActions, Button, List, ListItem, ListItemText, Divider, useTheme, Modal } from '@mui/material';
import { businesses } from '../data/businessData';
import { useSpring, animated } from 'react-spring';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ImageIcon from '@mui/icons-material/Image';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CloseIcon from '@mui/icons-material/Close';

function BusinessProfile() {
  const { id } = useParams();
  const businessInfo = businesses[id];
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const fadeInUp = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, 50px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { tension: 220, friction: 20 },
    delay: 100
  });

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1, my: 4, color: theme.palette.text.primary }}>
      <animated.div style={fadeInUp}>
        <Typography variant="h3" component="h1" gutterBottom color="primary">{businessInfo.name}</Typography>
        <Typography variant="h5" gutterBottom>Description</Typography>
        <Typography variant="body1">{businessInfo.description}</Typography>
        <Typography variant="h5" gutterBottom>Contact</Typography>
        <Typography variant="body1">{businessInfo.address}</Typography>
        <Typography variant="body1">{businessInfo.phone}</Typography>
      </animated.div>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>Gallery</Typography>
      <Grid container spacing={2}>
        {businessInfo.gallery.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <animated.div style={fadeInUp}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={img}
                  alt={`Gallery Image ${index + 1}`}
                />
                <CardActions>
                  <Button size="small" color="primary" startIcon={<ImageIcon />} onClick={() => openModal(img)}>
                    View
                  </Button>
                </CardActions>
              </Card>
            </animated.div>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="image-modal-title"
        aria-describedby="image-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="image-modal-title" variant="h6" component="h2" gutterBottom>
            Image View
          </Typography>
          <img src={selectedImage} alt="Enlarged View" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
          <Button startIcon={<CloseIcon />} onClick={closeModal} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>Menu Highlights</Typography>
      <animated.div style={fadeInUp}>
        <List sx={{ bgcolor: theme.palette.background.paper }}>
          {businessInfo.menu.map((item, index) => (
            <ListItem key={index}>
              <RestaurantMenuIcon color="secondary" sx={{ mr: 2 }} />
              <ListItemText primary={item.item} secondary={`Price: ${item.price}`} />
            </ListItem>
          ))}
        </List>
      </animated.div>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>Customer Reviews</Typography>
      <animated.div style={fadeInUp}>
        <List sx={{ bgcolor: theme.palette.background.paper }}>
          {businessInfo.reviews.map((review, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start">
                <ChatBubbleOutlineIcon color="action" sx={{ mr: 2 }} />
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