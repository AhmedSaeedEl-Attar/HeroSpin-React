import React  from "react";
import Heros from "../constants/heros";
import { useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {setHeroName} from '../store/features/HeroNameSlice'

function LIstHeros() {
  const dispatch =  useDispatch()
  const  Companyname = useSelector((state) => state.companyName.name);
  return (
    <div className="h-full w-full">
      <div className="container mx-auto py-16 px-12 flex justify-center items-center flex-wrap gap-16 ">
     {
        Heros[Companyname].map(hero =>{
            return(
               <Link to='/moviedetails' onClick={()=> dispatch(setHeroName(hero.name))}>
                <div key={hero.id} className="h-48 w-48 relative cursor-pointer mb-5 overflow-hidden">
                <div className={`absolute inset-0  bg-${Companyname} bg-cover  rounded-lg shadow-2xl`}></div>
                <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
                  <div className="h-full w-full   rounded-lg shadow-2xl overflow-hidden">
                    <img src={hero.img} alt="hero-img" className="w-full rounded-lg object-contain "/>
                  </div>
                  <h1 className="flex justify-center items-center text-slate-50 text-xl">{hero.name}</h1>
                </div>
              </div>
               </Link>
            )
        })
     }
      </div>
    </div>
     );
}

export default LIstHeros;
