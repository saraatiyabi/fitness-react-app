import { Stack, Typography } from '@mui/material'
import icon from './../assets/icons/gym.png';
import React from 'react';

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
    return (
        <Stack
            type="button"
            justifyContent="center"
            alignItems="center"
            className="bodyPart-card"
            sx={{
                borderTop: bodyPart === item ? "4px solid #ff2625" : "",
                width: "270px",
                height: "280px",
                backgroundColor: "#fff",
                cursor: "pointer",
                gap: "35px"
            }}
            onClick={() => {
                setBodyPart(item)
                window.scrollTo({ top: 1450, left: 100, behavior: 'smooth' });
            }}
        >
            <img src={icon} alt='icon' style={{ width: "40px", height: "40px" }} />
            <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">{item}</Typography>
        </Stack>
    )
}

export default BodyPart