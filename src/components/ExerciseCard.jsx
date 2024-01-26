import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const ExerciseCard = ({ exercise }) => {
    return (
        <Link to={`/exercise/${exercise.id}`} className="exercise-card">
            <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
            <Stack direction="row">
                <Button sx={{ ml: "20px", my: "10px", color: "white", backgroundColor: "#ffa9a9", fontSize: "14px", borderRadius: "20px", textTransform: "capitalize" }}>{exercise.bodyPart}</Button>
                <Button sx={{ ml: "20px", my: "10px", color: "white", backgroundColor: "#fcc757", fontSize: "14px", borderRadius: "20px", textTransform: "capitalize" }}>{exercise.target}</Button>
            </Stack>
            <Typography ml="20px" fontSize="20px" fontWeight="bold" my="10px" textTransform="capitalize" color="black">
                {exercise.name}
            </Typography>
        </Link>
    )
}

export default ExerciseCard