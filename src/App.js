import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
const [data, setdata] = useState([])
const [search, setSearch] = useState('')

const url = 'https://imdb8.p.rapidapi.com/title/get-images?tconst=tt0944947&limit=25';

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
    // .then(responce_data => console.log(responce_data.images))
    .then(responce_data => setdata(responce_data.images))
   
  }, [])
  console.log(setSearch);
  console.log(data);
  return (
    <div>
      <input type="text" name="" id="search" placeholder='Search your favourite movie'
      onChange={(e)=>setSearch(e.target.value)}/>
     
      <div id='movie'>
      <div>
        <li>
        {
          
            data && data.filter((getValue)=>{
              if(search === ''){
                return getValue
              }
              else if(getValue.caption.toLowerCase().includes(search.toLowerCase())){
                return getValue
              }
            })
            .map((v,i)=> (
              <div key={i}>
                <img src={v.url} alt="Image" />
      <h2>{v.caption}</h2>
              </div>
            ))
          
        }
        </li>
      </div>
      </div>



      {/* <div id='movie'>
      <div >
        <li>
        {
          data && data.map((v,i)=>(
      <div key={i}>
      <img src={v.url} alt="Image" />
      <h2>{v.caption}</h2>
      </div>

          ))
        }
        </li>
      </div>
      </div> */}
    </div>
  );
}

export default App;
