import React from 'react';
import { Box, Container, Typography, Link, Divider } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3, 
        px: 2, 
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[100]
      }}
    >
      <Divider sx={{ mb: 2 }} />
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' }
        }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} YouTrippin AI. All rights reserved.
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            gap: 3,
            mt: { xs: 2, sm: 0 }
          }}>
            <Link href="#" color="text.secondary" underline="hover">
              Terms of Service
            </Link>
            <Link href="#" color="text.secondary" underline="hover">
              Privacy Policy
            </Link>
            <Link href="#" color="text.secondary" underline="hover">
              Contact Us
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;