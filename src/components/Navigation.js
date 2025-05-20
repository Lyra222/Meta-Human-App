import { Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ChatIcon from '@mui/icons-material/Chat';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';

function Navigation() {
  return (
    <Box
      sx={{
        bgcolor: '#FFFFFF',
        boxShadow: '0 -2px 4px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'center',
        gap: { xs: 1, md: 4 },
        py: 2,
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <Button startIcon={<EditIcon sx={{ color: '#4A90E2' }} />} sx={{ color: '#4A90E2' }}>
        Create
      </Button>
      <Button startIcon={<ChatIcon sx={{ color: '#4A90E2' }} />} sx={{ color: '#4A90E2' }}>
        Interact
      </Button>
      <Button startIcon={<ThreeDRotation sx={{ color: '#4A90E2' }} />} sx={{ color: '#4A90E2' }}>
        VR Mode
      </Button>
    </Box>
  );
}

export default Navigation;