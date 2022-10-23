import React from "react";
import { ImgPath } from "../constants/api";
import MaImg from "../assets/marvel.png";
function RandomMovie({ movieData, refreshRandom }) {
  return (
    <div className="min-h-screen  py-12 flex flex-col justify-center sm:py-12 overflow-hidden">
      <div className="py-6 h-auto sm:max-w-xl sm:mx-auto">
        <div className="bg-white shadow-lg border-gray-100  h-auto overflow-hidden border pb-16 sm:rounded-3xl p-8 flex space-x-8">
          <div className="h-48 overflow-visible w-1/2">
            <img
              className="rounded-3xl shadow-lg"
              src={
                movieData.poster_path ? ImgPath + movieData.poster_path : MaImg
              }
              alt="movieimg"
            />
          </div>
          <div className="flex flex-col w-1/2 space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-xl md:text-3xl font-bold">{movieData.original_title}</h2>
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
            <p className=" text-gray-400 max-h-40 overflow-y-scroll">
              {movieData.overview}
            </p>
            <div className="flex text-2xl font-bold text-a">
              Votes : {movieData.vote_count}
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={refreshRandom}
        style={{ transform: "translate(-50%)" }}
        class="absolute bottom-4 left-1/2 h-16 w-64 flex justify-center items-center"
      >
        <div class="i h-16 w-64 bg-purple-600 items-center rounded-xl shadow-2xl cursor-pointer absolute overflow-hidden transform active:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
        <div class="text-center text-white font-semibold z-10 pointer-events-none">
          Another Random Movie
        </div>
        <span class="absolute flex h-6 w-6 top-0 right-0 transform translate-x-2.5 -translate-y-2.5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span class="absolute inline-flex rounded-full h-6 w-6 bg-purple-500"></span>
        </span>
      </div>
    </div>
  );
}

export default RandomMovie;
