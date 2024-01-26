import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions);
            setBodyParts(["all", ...bodyPartsData])
        }
        fetchExercisesData();
    }, [])

    const handleSearch = async () => {
        if (searchTerm) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1000', exerciseOptions);
            console.log(exercisesData)
            const searchedExercises = exercisesData.filter((exercise) => (
                exercise.name.toLowerCase().includes(searchTerm)
                || exercise.target.toLowerCase().includes(searchTerm)
                || exercise.equipment.toLowerCase().includes(searchTerm)
                || exercise.bodyPart.toLowerCase().includes(searchTerm)
            ))

            setExercises(searchedExercises);
            setSearchTerm("")
        }

    }

    return (
        <Stack alignItems="center" justifyContent="center" mt="120px" width="100%">
            <Typography fontWeight={600} textAlign="center" mb={2} sx={{ fontSize: { lg: "36px", sm: "30px" } }}>
                Awesome Exercises You <br />
                Should Know
            </Typography>
            <Box position="relative">
                <TextField
                    height="75px"
                    value={searchTerm}
                    placeholder='Search Exercise...'
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{
                        input: {
                            backgroundColor: "#fff",
                            width: { lg: "1050px", xs: "350px" },
                            borderRadius: "4px",
                            border: "none"
                        }
                    }}
                />
                <Button sx={{ backgroundColor: "#ff2625", color: "#fff", width: { lg: '153px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '18px', xs: '14px' } }} varient="outlined" onClick={handleSearch}>Search</Button>
            </Box>
            <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
                <HorizontalScrollBar data={bodyParts} isBodyParts bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
        </Stack>
    )
}

export default SearchExercises