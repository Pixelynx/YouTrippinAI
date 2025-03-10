import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <AppBar 
      position="relative" 
      sx={{ 
        background: 'linear-gradient(45deg, #ff9800 30%, #ffb74d 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        height: '180px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0,
      }}
    >
      <Toolbar>
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <Typography
            variant="h3"
            component="div"
            sx={{ 
              fontWeight: 'bold',
              color: 'white',
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
            }}
          >
            YouTrippin AI
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ 
              color: 'white',
              opacity: 0.9,
              mt: 1
            }}
          >
            Your AI-Powered Travel Companion
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
