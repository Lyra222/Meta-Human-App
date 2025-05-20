import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const PromptBox = () => {
  // State to store the user's input
  const [memory, setMemory] = useState('');

  // Handle button click
  const handleSubmit = () => {
    if (memory.trim()) {
      console.log('Childhood memory:', memory); // Log the input for now
      alert(`Memory submitted: ${memory}`); // Show a pop-up to confirm
      setMemory(''); // Clear the input field
    } else {
      alert('Please enter a memory!');
    }
  };

  return (
    <Box sx={{ backgroundColor: 'white', padding: 2, borderRadius: 2, textAlign: 'center' }}>
      <Typography variant="h6">Add a childhood memory to reach Level 2!</Typography>
      <TextField
        label="Your childhood memory"
        value={memory}
        onChange={(e) => setMemory(e.target.value)}
        fullWidth
        sx={{ marginTop: 2, marginBottom: 2 }}
      />
      <Button
        variant="contained"
        sx={{ backgroundColor: '#FFD700', color: 'black' }}
        onClick={handleSubmit}
      >
        Start Now
      </Button>
    </Box>
  );
};

export default PromptBox;