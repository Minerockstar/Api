import React, { useEffect, useState } from 'react'

const GetMovie = () => {
    const [data, setdata] = useState([])
    const [search, setSearch] = useState('')
     
    const getMovie = ()=>{
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=9f9e88a7c7add000da8b36a98f3dc731')
        .then(res => res.json())
        // .then(res =>console.log(res.json()) )
        .then(responce => setdata(responce.results))
        // .then(responce_data => console.log(responce_data.adult))

    }

    useEffect (()=>{
        getMovie()
    },[])
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
                    else if(getValue.title.toLowerCase().includes(search.toLowerCase())){
                      return getValue
                    }
                  })
                .map((v,i)=>(
                    <div key={i}>
                    <img  src={`https://image.tmdb.org/t/p/w500${v.poster_path}`} alt="" />
                    <h2>{v.title}</h2>
                    {/* <label htmlFor="">{v.overview}</label> */}
                    </div>
                ))
            }
            </li>
        </div>
        </div>
    </div>
  )
}

export default GetMovie