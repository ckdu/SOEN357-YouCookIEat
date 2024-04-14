import React from 'react';
import { Typography, Box, Grid, Paper } from '@mui/material';

function About() {
  return (
    <Box sx={{ flexGrow: 1, my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        About You Cook I Eat
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1">
          You Cook I Eat aims to empower local food businesses by providing a platform that enhances their visibility and fosters direct connections with consumers. Our mission is to support the growth of local economies and ensure that everyone has access to unique and quality local food options.
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          What We Do
        </Typography>
        <Typography variant="body1">
          Our platform allows local food vendors to showcase their products and engage with customers directly, free from the high fees and impersonal nature of larger food delivery services. By choosing You Cook I Eat, users support local businesses and contribute to a more sustainable and personalized food industry.
        </Typography>
      </Paper>
      <Typography variant="h6" component="h2" gutterBottom>
        The Team
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Eric Tan</Typography>
            <Typography variant="body2">Student ID: 40208502</Typography>
            <Typography variant="body2">Role: Project Lead</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Kevin Yang</Typography>
            <Typography variant="body2">Student ID: 40214231</Typography>
            <Typography variant="body2">Role: UI/UX Designer</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Binal Patel</Typography>
            <Typography variant="body2">Student ID: 40212973</Typography>
            <Typography variant="body2">Role: Backend Developer</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Tiffany Tran</Typography>
            <Typography variant="body2">Student ID: 40210679</Typography>
            <Typography variant="body2">Role: Frontend Developer</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Chris El-Kehdy</Typography>
            <Typography variant="body2">Student ID: 40208593</Typography>
            <Typography variant="body2">Role: Data Analyst</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Louis-Charles Marquis</Typography>
            <Typography variant="body2">Student ID: 40177137</Typography>
            <Typography variant="body2">Role: Quality Assurance</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;