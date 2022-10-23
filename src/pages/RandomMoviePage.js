import React , {useState , useEffect} from 'react'
import { useSelector } from 'react-redux'
import RandomMovie from '../components/RandomMovie'
import { SearchApi } from "../constants/api";
import Loading from '../components/Loading';


function RandomMoviePage() {
  const [loading, setLoading] = useState(true);

  const HeroName = useSelector((state) => state.HeroName.name)
  const [hero , setHero] = useState(null)
  
  async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    setHero(data.results[Math.floor(Math.random() * (data.results.length - 2))]);
    console.log(data.results[Math.floor(Math.random() * (data.results.length - 2))]);
  }
  useEffect(() => {
    getMovies(SearchApi + HeroName)
  },[HeroName]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const refreshRandom = ()=>{
    getMovies(SearchApi + HeroName)
  }
  return (
    <div>
      {loading ? <Loading /> : <RandomMovie refreshRandom={refreshRandom} movieData={hero} />}
    </div>
  )
}

export default RandomMoviePage