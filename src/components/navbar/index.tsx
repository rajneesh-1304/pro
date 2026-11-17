"use client";

import Image from 'next/image'
import { Box, Button, Typography } from '@mui/material'
import './style.scss'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Box className="navbar">
      <Box className="navbar-logo">
        <Image src="/logo.png" width="24" height="24" alt="logo" />
        <Typography>Food Delivery</Typography>
      </Box>
      <Box className="navbar-btns">

      </Box>
      <Box className="navbar-right-btns">
        <Button onClick={() => setDarkMode(!darkMode)}>
          {
            darkMode ? <LightModeIcon /> : <DarkModeIcon />
          }
        </Button>
        <Button>Sign in</Button>
      </Box>
    </Box>
  )
}

export default Navbar