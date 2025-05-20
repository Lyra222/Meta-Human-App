import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h1" sx={{ flexGrow: 1 }}>
          Meta Human
        </Typography>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;