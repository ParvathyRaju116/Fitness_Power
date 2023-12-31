import React, { useState } from 'react'
import HeroBanner from '../Components/HeroBanner'
import SearchExercises from '../Components/SearchExercises'
import Exercises from '../Components/Exercises'



function Home() {
  const [exercises, setExercises] =useState([])
  const [bodyPart,setBodyPart]=useState('all')

  return (
    <div>
       <HeroBanner/>
       <SearchExercises 
           setExercises={setExercises}
           bodyPart={bodyPart} 
           setBodyPart={setBodyPart}
      />
       <Exercises
          setExercises={setExercises} 
          exercises={exercises}
          bodyPart={bodyPart} 
       />
    </div>
  )
}

export default Home