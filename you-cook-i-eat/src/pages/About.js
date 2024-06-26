import React from 'react';
import { Typography, Box, Grid, Paper, Avatar, useTheme } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import SchoolIcon from '@mui/icons-material/School';
import BrushIcon from '@mui/icons-material/Brush';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

function About() {
  const theme = useTheme();
  const contentProps = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    config: { duration: 500 },
  });
  const teamAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(-100px,0,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    delay: 300,
  });

  const roles = [
    { name: "Eric Tan", role: "Project Lead", icon: <SchoolIcon /> },
    { name: "Kevin Yang", role: "UI/UX Designer", icon: <BrushIcon /> },
    { name: "Binal Patel", role: "Backend Developer", icon: <StorageIcon /> },
    { name: "Tiffany Tran", role: "Frontend Developer", icon: <CodeIcon /> },
    { name: "Chris El-Kehdy", role: "Data Analyst", icon: <AnalyticsIcon /> },
    { name: "Louis-Charles Marquis", role: "Quality Assurance", icon: <VerifiedUserIcon /> },
  ];

  return (
    <Box sx={{ flexGrow: 1, my: 4, bgcolor: theme.palette.background.default }}>
      <animated.div style={contentProps}>
        <Typography variant="h4" component="h1" gutterBottom color="primary">
          About Us
        </Typography>
        <Paper elevation={3} sx={{ p: 3, mb: 2, bgcolor: theme.palette.grey[200] }}>
          <Typography variant="h6" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1">
            You Cook I Eat aims to empower local food businesses by providing a platform that enhances their visibility and fosters direct connections with consumers. Our mission is to support the growth of local economies and ensure that everyone has access to unique and quality local food options.
          </Typography>
        </Paper>
        <Paper elevation={3} sx={{ p: 3, mb: 2, bgcolor: theme.palette.grey[200] }}>
          <Typography variant="h6" gutterBottom>
            What We Do
          </Typography>
          <Typography variant="body1">
            Our platform allows local food vendors to showcase their products and engage with customers directly, free from the high fees and impersonal nature of larger food delivery services. By choosing You Cook I Eat, users support local businesses and contribute to a more sustainable and personalized food industry.
          </Typography>
        </Paper>
      </animated.div>
      <Typography variant="h6" component="h2" gutterBottom color="primary">
        The Team
      </Typography>
      <Grid container spacing={2}>
        {roles.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={member.name}>
            <animated.div style={teamAnimation}>
              <Paper elevation={3} sx={{ p: 2, display: 'flex', alignItems: 'center', bgcolor: theme.palette.grey[100], boxShadow: theme.shadows[4] }}>
                <Avatar sx={{ m: 1, bgcolor: theme.palette.secondary.main }}>
                  {member.icon}
                </Avatar>
                <Box>
                  <Typography variant="subtitle1">{member.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{member.role}</Typography>
                </Box>
              </Paper>
            </animated.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default About;
