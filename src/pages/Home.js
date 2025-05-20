import Header from '../components/Header';
import PromptBox from '../components/PromptBox';
import Navigation from '../components/Navigation';
import { Box, Typography } from '@mui/material';

function Home() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 10 }}>
      <Header />
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Box
          sx={{
            width: 150,
            height: 150,
            bgcolor: '#FFFFFF',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          <Typography variant="body1">3D Avatar Here</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <PromptBox />
      </Box>
      <Navigation />
    </Box>
  );
}

export default Home;