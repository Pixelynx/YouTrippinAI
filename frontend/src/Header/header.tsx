import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          align="center"
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          YouTrippin AI
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
