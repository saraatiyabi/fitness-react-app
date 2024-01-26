import React from 'react'
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from './../assets/images/Logo.png'

const Navbar = () => (
  <Stack direction="row" sx={{ gap: { sm: "110px", xs: "40px" }, mt: { sm: "25px", xs: "20px" }, alignItems: "center", px: "20px", width: "300px" }}>
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: "48px", height: "48px", margin: "0 20px" }} />
    </Link>
    <Stack direction="row" sx={{ gap: { sm: "110px", xs: "40px" } }}>
      <Link to="/" style={{ textDecoration: "none", fontSize: "24px", color: "#3A1212", borderBottom: "3px solid #FF2625" }}>Home</Link>
      <a href="#exercises" alt="exercises" style={{ textDecoration: "none", fontSize: "24px", color: "#3A1212" }}>Exercises</a>
    </Stack>

  </Stack>
)

export default Navbar