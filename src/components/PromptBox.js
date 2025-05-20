import { Box, Typography, Button } from '@mui/material';

function PromptBox() {
  return (
    <Box
      sx={{
        bgcolor: '#FFFFFF',
        borderRadius: 2,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        p: 2,
        width: { xs: '90%', md: '50%' },
        textAlign: 'center',
      }}
    >
      <Typography variant="body1" sx={{ mb: 2 }}>
        Add a childhood memory to reach Level 2!
      </Typography>
      <Button variant="contained" color="secondary">
        Start Now
      </Button>
    </Box>
  );
}

export default PromptBox;