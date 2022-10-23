import React, { useEffect, useState } from "react";
import { Api_Url, SearchApi } from "../../constants/api";
import Movie from "./Movie";
import "./style.css";

function MoviesList() {
  const [post, setPost] = useState([]);
  const [moiveName, setMovieName] = useState("");

 
  async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    setPost(data.results);
  }

  
  useEffect(() => {
    getMovies(SearchApi + moiveName)
    if(moiveName === '') getMovies(Api_Url)
  },[moiveName]);
  
  useEffect(() => {
    setTimeout(()=> {
      getMovies(Api_Url);
    } , 1000)
  }, []);

 

  return (
    <div className="layout">
      <header className="head">
        <form id="form">
          <input
            type="text"
            onChange={(e) => setMovieName(e.target.value)}
            className="search"
            placeholder="Search"
          />
        </form>
      </header>
      <main id="main">
        {post.map((film) => {
          return <Movie film={film} />;
        })}
      </main>
    </div>
  );
}

export default MoviesList;
