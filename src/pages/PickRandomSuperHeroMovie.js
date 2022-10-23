import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import RandomMovie from "../components/RandomMovie";
import { SearchApi } from "../constants/api";
import Heros from "../constants/heros";


function PickRandomSuperHeroMovie() {
  const [loading, setLoading] = useState(true);
  const [hero , setHero] = useState(null)
  
  async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    setHero(data.results[Math.floor(Math.random() * 3)]);
  }
  useEffect(() => {
    getMovies(SearchApi + Heros.marvel[Math.floor(Math.random() * 12)].name)
  },[]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <div>
      {loading ? <Loading /> : <RandomMovie movieData={hero} />}
    </div>
  );
}

export default PickRandomSuperHeroMovie;
