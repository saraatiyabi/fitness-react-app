import { Box, Typography, Stack } from '@mui/material'
import React from 'react'

const ExerciseVideos = ({ exerciseVideos, name }) => {

  return (
    <Box p="20px" sx={{ marginTop: { lg: "100px", xs: "30px" } }}>
      <Typography marginBottom="30px" sx={{ fontSize: { lg: "36px", xs: "25px" } }}>
        watch <span style={{color: "#ff2625", textTransform: "capitalize"}}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent="flex-start" alignItems="center" flexWrap="wrap" sx={{ flexDirection: { lg: "row" }, gap: { lg: "40px", xs: "30px" } }}>
        {
          exerciseVideos?.slice(0, 6).map((item, index) => (
            <a
              className='exercise-video'
              style={{ borderTopLeftRadius: "20px" }}
              key={index}
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box gap="10px">
                <Typography sx={{ color: "#000", fontSize: "16px", fontWeight: "bold" }}>
                  {item.video.title}
                </Typography>
                <Typography sx={{ color: "#000", fontSize: "15px" }}>
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))
        }
      </Stack>
    </Box>
  )
}

export default ExerciseVideos