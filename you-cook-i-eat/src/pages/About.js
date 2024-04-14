import React from 'react';
import { Typography, Box, Grid, Paper } from '@mui/material';
import { useSpring, animated } from 'react-spring';

function About() {
  // Animation for content
  const contentProps = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    config: { duration: 500 }
  });

  // Animation for grid items
  const teamAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(-100px,0,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    delay: 300
  });

  return (
    <Box sx={{ flexGrow: 1, my: 4 }}>
      <animated.div style={contentProps}>
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
      </animated.div>
      <Typography variant="h6" component="h2" gutterBottom>
        The Team
      </Typography>
      <Grid container spacing={2}>
        {['Eric Tan', 'Kevin Yang', 'Binal Patel', 'Tiffany Tran', 'Chris El-Kehdy', 'Louis-Charles Marquis'].map((name, index) => (
          <Grid item xs={12} sm={6} md={4} key={name}>
            <animated.div style={teamAnimation}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6">{name}</Typography>
                <Typography variant="body2">Student ID: {`40208502`}</Typography>
                <Typography variant="body2">Role: {["Project Lead", "UI/UX Designer", "Backend Developer", "Frontend Developer", "Data Analyst", "Quality Assurance"][index]}</Typography>
              </Paper>
            </animated.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default About;