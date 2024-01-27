import React, { useEffect, useState } from 'react'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { fetchData, exerciseOptions, youtubeOptions } from './../utils/fetchData';

const ExerciseDetails = () => {
    const { id } = useParams();
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [sameTargetMuscleExercises, setSameTargetMuscleExercises] = useState([]);
    const [sameEquipmentExercises, setSameEquipmentExercises] = useState([]);

    useEffect(() => {
        const fetchExercisesDetail = async () => {
            const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
            const youtubeDbUrl = "https://youtube-search-and-download.p.rapidapi.com";

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}?limit=10`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData(`${youtubeDbUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
            setExerciseVideos(exerciseVideosData.contents);

            const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}?limit=10`, exerciseOptions)
            setSameTargetMuscleExercises(targetMuscleExercisesData);

            const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}?limit=10`, exerciseOptions)
            setSameEquipmentExercises(equipmentExercisesData)
        }
        fetchExercisesDetail();
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [id])

    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises sameEquipmentExercises={sameEquipmentExercises} sameTargetMuscleExercises={sameTargetMuscleExercises} />
        </Box>
    )
}

export default ExerciseDetails