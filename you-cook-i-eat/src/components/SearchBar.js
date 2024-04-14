import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);  // Pass the searchTerm back to the parent component
  };

  return (
    <Box display="flex" justifyContent="center" my={2}>
      <TextField
        label="Search local food"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{ mr: 1, width: '300px' }}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
    </Box>
  );
}

export default SearchBar;