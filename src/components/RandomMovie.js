import React from "react";
import { ImgPath } from "../constants/api";
import MaImg from '../assets/marvel.png'
function RandomMovie({ movieData }) {
  return (
    <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
      <div className="py-3 sm:max-w-xl sm:mx-auto">
        <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
          <div className="h-48 overflow-visible w-1/2">
            <img
              className="rounded-3xl shadow-lg"
              src={movieData.poster_path ? ImgPath + movieData.poster_path : MaImg }
              alt="movieimg"
            />
          </div>
          <div className="flex flex-col w-1/2 space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold">{movieData.original_title}</h2>
              <div className="bg-yellow-400 font-bold rounded-xl p-2">
                {movieData.vote_average}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Date :</div>
              <div className="text-lg text-gray-800">
                {movieData.release_date}
              </div>
            </div>
            <p className=" text-gray-400 max-h-40 overflow-y-hidden">
              {movieData.overview}
            </p>
            <div className="flex text-2xl font-bold text-a">
              Votes : {movieData.vote_count}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomMovie;
