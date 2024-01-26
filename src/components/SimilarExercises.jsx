import { Box, Typography, Stack } from '@mui/material'
import React from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader';

const SimilarExercises = ({ sameEquipmentExercises, sameTargetMuscleExercises }) => {
    return (
        <Box sx={{ mt: { lg: '60px', xs: '10px' }, padding: "20px" }}>
            <Typography marginBottom="30px" sx={{ fontSize: { lg: "36px", xs: "25px" } }}>Similar <span style={{color: "#ff2625"}}>Target Muscles</span> Exercises </Typography>
            <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
                {sameTargetMuscleExercises.length !== 0 ? <HorizontalScrollBar data={sameTargetMuscleExercises} /> : <Loader />}
            </Stack>
            <Typography marginBottom="30px" sx={{ fontSize: { lg: "36px", xs: "25px" } }}>Similar <span style={{color: "#ff2625"}}>Equipment</span> Exercises </Typography>
            <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
                {sameEquipmentExercises.length !== 0 ? <HorizontalScrollBar data={sameEquipmentExercises} /> : <Loader />}
            </Stack>
        </Box>
    )
}

export default SimilarExercises