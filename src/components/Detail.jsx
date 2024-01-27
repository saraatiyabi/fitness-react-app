import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import Loader from './Loader';

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, equipment, gifUrl, id, name, target, secondaryMuscles, instructions } = exerciseDetail;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 4000)
    }, [])

    const extraDetails = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        },
    ]


    if (isLoading) {
        return (
            <Loader />
        )
    }
    return (
        <Stack sx={{ flexDirection: { lg: "row" }, alignItems: "center", gap: "50px", p: "20px 50px" }} >
            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
            <Stack>
                <Typography variant='h3' my={1} textTransform="capitalize" fontWeight="600">{name}</Typography>
                <Typography fontSize="16px" color="#323030">
                    Exercises keep you strong.{' '}
                    <span style={{ textTransform: 'capitalize', color: "#ff2625" }}>{name}</span> is one
                    of the best <br /> exercises to target your {target}. It will help you improve your{' '}
                    <br /> mood and gain energy.
                </Typography>
                {
                    extraDetails.map((item) => (
                        <Stack key={item.name} direction="row" mt="25px" alignItems="center" gap={2}>
                            <Button sx={{ width: "70px", height: "70px", borderRadius: "50%", background: '#FFF2DB' }}>
                                <img src={item.icon} alt={item.name} width="40px" height="40px" />
                            </Button>
                            <Typography textTransform="capitalize" sx={{ fontSize: { lg: "20px", xs: "18px" } }}>{item.name}</Typography>
                        </Stack>
                    ))
                }
                <Box mt={2}>
                    <Typography variant='h5' my={1} textAlign="justify">Instructions:</Typography>
                    <Typography color="#323030" fontSize="16px">{instructions}</Typography>
                </Box>

            </Stack>
        </Stack>
    )
}

export default Detail