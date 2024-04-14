import React from 'react';
import { Box, TextField, Button } from '@mui/material';

function SearchBar() {
  return (
    <Box display="flex" justifyContent="center" my={2}>
      <TextField
        label="Search local food"
        variant="outlined"
        sx={{ mr: 1, width: '300px' }}
      />
      <Button variant="contained" color="primary">Search</Button>
    </Box>
  );
}

export default SearchBar;