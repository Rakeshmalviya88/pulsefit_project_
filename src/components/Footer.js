import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
// import Logo from '../assets/images/Logo-1.png';
// import Logo from '../assets/images/logo pulsefit no bg.png';

const Footer = () => (
  // <Box mt="80px" bgcolor="#FFF3F4">
  <Box mt="80px" bgcolor="#2448551b">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      {/* <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} /> */}
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made by</Typography>
  </Box>
);

export default Footer;
