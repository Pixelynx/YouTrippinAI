import React, { useState } from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer';

import { ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import purpleTheme from './themes/purpleTheme';
import FormContainer from './UserInputForm/FormContainer';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <FormContainer />
        <Box sx={{ flexGrow: 1 }} />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;