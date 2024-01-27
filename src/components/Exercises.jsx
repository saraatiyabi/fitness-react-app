import { Stack, Typography, Box, Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ExerciseCard from './ExerciseCard'
import { fetchData, exerciseOptions } from '../utils/fetchData';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 9;

  useEffect(() => {
    console.log("bodypart changed")
    const changeBodyPart = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises?limit=100", exerciseOptions)
        console.log(exercisesData)
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=100`, exerciseOptions)
        console.log(exercisesData)
      }
      setExercises(exercisesData)
      setIsLoading(false)
    };

    changeBodyPart()
  }, [bodyPart])

  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;

  const shownExercises = exercises.slice(startIndex, endIndex)

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1450, behavior: "smooth" })
  }


  return (
    <Box
      sx={{ marginTop: { lg: "110px", xs: "50px" } }}
      p="20px"
      id="exercises"
    >
      <Typography variant='h3' textAlign="center" mb="40px">Showing Results</Typography>
      {isLoading && <Loader />}
      <Stack
        justifyContent="center"
        alignItems="center"
        direction="row"
        flexWrap="wrap"
        sx={{ gap: { lg: "70px", xs: "50px" } }}
      >
        {
          shownExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))
        }
      </Stack>
      <Stack justifyContent="center" alignItems="center" mt="50px">
        <Pagination
          count={Math.ceil(exercises.length / itemsPerPage)}
          color="standard"
          shape="rounded"
          size="large"
          defaultPage={1}
          currentPage={currentPage}
          onChange={paginate}
        />
      </Stack>
    </Box>
  )
}

export default Exercises