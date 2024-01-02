import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Movie = () => {
const [values, setValues] = useState([])

useEffect(()=>{
    const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/auto-complete',
        params: {q: 'game of thr'},
        headers: {
          'X-RapidAPI-Key': 'd4e0fe21a1mshfc36b216d3e03f3p1764a2jsne6a24acf016f',
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
      }
   axios.request(options)
 .then(response=>setValues(response))
 
 },[])
 console.log(values);

  return (
    <div>Movie

<div>
        {
          values && values.map((v,i)=>{
           <div key={i}>{v.s}
           <h2>
           </h2>
           </div>
          })
        }
      </div>
    </div>
  )
}

export default Movie