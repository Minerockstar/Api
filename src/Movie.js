import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Movie = () => {
const [values, setValues] = useState([])

useEffect(()=>{
    // const options = {
    //   method: 'GET',
    //   url: 'https://imdb8.p.rapidapi.com/title/get-images',
    //   params: {
    //     tconst: 'tt0944947',
    //     limit: '25'
    //   },
    //   headers: {
    //     'X-RapidAPI-Key': 'd4e0fe21a1mshfc36b216d3e03f3p1764a2jsne6a24acf016f',
    //     'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    //   }
    //   }
   axios.get('https://imdb8.p.rapidapi.com/title/get-images')
 .then(response=>console.log(response))
//  .then(response=>console.log(response.images))
//  .then(response=>setValues(response.images))
 
 },[])
 console.log(values);

  return (
    <div>

         <div id='movie'>
          <div >
          <li>
          {
          values && values.map((v,i)=>(
        <div key={i}>
        <img src={v.url} alt="Image" />
        <h2>{v.caption}</h2>
         </div>

          ))
        }
        </li>
      </div>
      </div>
    </div>
  )
}

export default Movie