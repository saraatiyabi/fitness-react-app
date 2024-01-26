import { Stack, Box, Typography } from '@mui/material'
import React from 'react'
import Logo from './../assets/images/Logo-1.png';

const Footer = () => (
    <Box bgcolor="#fff3f4" mt={3} py="30px">
        <Stack justifyContent="center" alignItems="center">
            <img src={Logo} alt='logo' width="200px" height="40px" />
        </Stack>
        <Typography textAlign="center" mt={2}>
            Made with ❤️ by Sara Atiyabi
        </Typography>
    </Box>
)

export default Footer