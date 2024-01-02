import React, { useEffect, useState } from 'react';
import './App.css';



function App() {
const [data, setdata] = useState([])

const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';

   useEffect(() => {
    const getMovie = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd4e0fe21a1mshfc36b216d3e03f3p1764a2jsne6a24acf016f',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };
    fetch(url, getMovie)
    // .then(responce =>console.log(responce.json()) )
    .then(responce => responce.json())
    // .then(responce_data => console.log(responce_data))
    .then(responce_data => setdata(responce_data))
   
  }, [])
  return (
    <div>
     <h1>Hi</h1>

      <div>
        {
          data && data.map((v,i)=>{
           <div key={i}>{v.id}
           <h2>
           </h2>
           </div>
          })
        }
      </div>
    </div>
  );
}

export default App;
