import React, { useState } from 'react';
import { Typography, Box, Grid, Card, CardMedia, CardContent, CardActions, Button, List, ListItem, ListItemText, ListItemIcon, Divider, useTheme, Modal } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ImageIcon from '@mui/icons-material/Image';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import CloseIcon from '@mui/icons-material/Close';

function CustomerProfile() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

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
      "/artisan_bread.jpg",
      "/chocolate_croissant.jpg",
      "/custom_cake.jpg"
    ]
  };

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 }
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
    <Box sx={{ flexGrow: 1, my: 4 }}>
      <animated.div style={fadeIn}>
        <Typography variant="h4" component="h1" gutterBottom color="primary">
          Profile
        </Typography>
        <Typography variant="h6" gutterBottom>Name</Typography>
        <Typography variant="body1" color="secondary">{customerInfo.name}</Typography>
        <Typography variant="h6" gutterBottom>Email</Typography>
        <Typography variant="body1" color="secondary">{customerInfo.email}</Typography>
      </animated.div>

      <animated.div style={fadeIn}>
        <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.dark }}>
          Favorites
        </Typography>
        <List>
          {customerInfo.favorites.map((favorite, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <FavoriteIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary={favorite} />
            </ListItem>
          ))}
        </List>
      </animated.div>

      <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.dark }}>Favorite Dishes Gallery</Typography>
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
            Favorite Dish
          </Typography>
          <img src={selectedImage} alt="Favorite Dish" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
          <Button startIcon={<CloseIcon />} onClick={closeModal} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>

      <animated.div style={fadeIn}>
        <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.dark }}>Order History</Typography>
        <List>
          {customerInfo.orderHistory.map((order, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <HistoryToggleOffIcon color="action" />
              </ListItemIcon>
              <ListItemText primary={order.item} secondary={`Ordered on ${order.date} - ${order.status}`} />
            </ListItem>
          ))}
        </List>
      </animated.div>
    </Box>
  );
}

export default CustomerProfile;