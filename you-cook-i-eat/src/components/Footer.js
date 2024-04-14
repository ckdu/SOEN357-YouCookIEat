import React from 'react';
import { Box, Typography, Container, Grid, Card, useTheme } from '@mui/material';

function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 8, sm: 10 },
        px: 2,
        mt: 8,
        bgcolor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          SOEN 357 - User Interface Design | Winter 2024
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          The Team
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {[
            { name: 'Eric Tan', id: '40208502' },
            { name: 'Kevin Yang', id: '40214231' },
            { name: 'Binal Patel', id: '40212973' },
            { name: 'Tiffany Tran', id: '40210679' },
            { name: 'Chris El-Kehdy', id: '40208593' },
            { name: 'Louis-Charles Marquis', id: '40177137' },
          ].map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.name}>
              <Card sx={{ bgcolor: theme.palette.background.paper, py: 2, px: 4, textAlign: 'center', boxShadow: 1 }}>
                <Typography variant="subtitle2" color="textSecondary">
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.secondary.dark }}>
                  {member.id}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;