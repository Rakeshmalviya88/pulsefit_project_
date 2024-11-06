import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { Stack } from '@mui/material';

// import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }}
    px="20px"
  >
    {/* <NavLink to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </NavLink> */}
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <NavLink
        to="/"
        style={({ isActive }) => ({
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: isActive ? '3px solid #FF2625' : 'none', 
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/tracker"
        style={({ isActive }) => ({
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: isActive ? '3px solid #FF2625' : 'none', 
        })}
      >
        Tracker
      </NavLink>

      <NavLink
        to="/login"
        style={({ isActive }) => ({
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: isActive ? '3px solid #FF2625' : 'none', 
        })}
      >
        Login
      </NavLink>

      <NavLink
        to="/signup"
        style={({ isActive }) => ({
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: isActive ? '3px solid #FF2625' : 'none', 
        })}
      >
        Sign up
      </NavLink>
      {/* <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a> */}
    </Stack>
  </Stack>
);

export default Navbar;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Stack } from '@mui/material';

// import Logo from '../assets/images/Logo.png';

// const Navbar = () => (
//   <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
//     <Link to="/">
//       <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
//     </Link>
//     <Stack
//       direction="row"
//       gap="40px"
//       fontFamily="Alegreya"
//       fontSize="24px"
//       alignItems="flex-end"
//     >
//       <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
//       <Link to="/tracker" style={{ textDecoration: 'none', color: '#3A1212'}}>Tracker</Link>
//       {/* <Link to="/report" style={{ textDecoration: 'none', color: '#3A1212'}}>Report</Link> */}
//       <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
//     </Stack>
//   </Stack>
// );

// export default Navbar;
