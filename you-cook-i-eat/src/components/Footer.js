import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          SOEN 357 - User Interface Design | Winter 2024
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Eric Tan - 40208502 | Kevin Yang - 40214231 | Binal Patel - 40212973 |
          Tiffany Tran - 40210679 | Chris El-Kehdy - 40208593 | Louis-Charles Marquis - 40177137
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;