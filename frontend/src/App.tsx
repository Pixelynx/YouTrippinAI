import React from 'react'
import Header from './Header/Header';
import UserInfoInput from './UserInputForm/UserInfoInput';
import CardDetails from './RecommendationCard/CardDetails';
import Footer from './Footer/Footer';

import { ThemeProvider } from '@emotion/react';
import { Box, CssBaseline } from '@mui/material';
import darkTheme from './themes/darkTheme';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "75%",
            maxWidth: "1200px",
            padding: 2,
            backgroundColor: "background.paper",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Header />
          <UserInfoInput />
          <CardDetails />
          <Footer />
      </Box>
    </Box>
    </ThemeProvider >
  );
}

export default App;