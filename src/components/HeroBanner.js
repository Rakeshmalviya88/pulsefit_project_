// import React from 'react';
// import { Box, Stack, Typography } from '@mui/material';

// import HeroBannerImage from '../assets/images/girlbanner.jpg';

// const HeroBanner = () => (
//   <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
//     <Typography color="#FF2625" fontWeight="600" fontSize="36px">PulseFit</Typography>
//     <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
//       Sweat, Smile <br />
//       And Repeat
//     </Typography>
//     <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
//       Check out the most effective exercises personalized to you
//     </Typography>
//     <Stack>
//       <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#244855', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
//     </Stack>
//     <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
//       Exercise
//     </Typography>
//     <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img"  />
//   </Box>
// );

// export default HeroBanner;




// new  code without mui 

import React from 'react';
import HeroBannerImage from '../assets/images/girlbanner.jpg';
import '../styles/HeroBanner.css';

const HeroBanner = () => (
  <div className="hero-banner">
    <h1 className="hero-title">PulseFit</h1>
    <h2 className="hero-subtitle">
      Sweat, Smile <br />
      And Repeat
    </h2>
    <p className="hero-description">
      Check out the most effective exercises personalized to you
    </p>
    <div className="hero-button-container">
      <a href="#exercises" className="hero-button">Explore Exercises</a>
    </div>
    <h1 className="hero-background-text">PulseFit</h1>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </div>
);

export default HeroBanner;


