import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import banner from './../assets/images/banner.png';

const HeroBanner = () => (
    <Box sx={{
        mt: { lg: "90px", xs: "60px" },
        ml: { sm: "50px" },
    }} position="relative" p="20px">
        <Typography fontWeight={600} fontSize="22px" color="#ff2625" mb={1} lineHeight="35px">Fitness Club</Typography>
        <Typography fontWeight={600} fontSize="40px" mb={3}>Sweat, Smile<br /> and Repeat</Typography>
        <Typography fontWeight={600} my={3}>Check Out The Most Effective Exercises</Typography>
        <Button variant='contained' mb={1} href='#exercises' sx={{ backgroundColor: "#ff2625", padding: "10px" }}>EXPLORE EXERCISES</Button>
        <Typography fontWeight={600} fontSize="160px" color="#ff2625" sx={{ opacity: "0.1", display: { lg: "block", xs: "hidden" } }}>Exercise</Typography>
        <img src={banner} alt='banner' className='hero-banner-img' />
    </Box>
)

export default HeroBanner