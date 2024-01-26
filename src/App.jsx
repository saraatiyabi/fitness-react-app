import './App.css'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ExerciseDetails from './Pages/ExerciseDetails'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <Box width="400px" sx={{width: {xl: "1388px"}}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
