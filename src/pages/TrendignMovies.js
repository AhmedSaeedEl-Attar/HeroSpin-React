import React , {useState , useEffect} from "react";
import MoviesList from "../components/moivesList/MoviesList";
import Loading from '../components/Loading';


function TrendignMovies() {
  const [loading , setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=> setLoading(false) , 1000)
  } , [])
  return (
    <div className="">
      {loading ? <Loading /> : <MoviesList />}
    </div>
  );
}

export default TrendignMovies;
