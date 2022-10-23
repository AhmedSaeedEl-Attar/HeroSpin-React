import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <>
    <div className="flex-col sm:flex-col md:justify-around md:flex-row flex min-h-screen w-full items-center mt-72 md:mt-0">
     <Link to="/pickmovie" className='relative w-3/12 md:mb-0 md:mt-0  mb-80 mt-20'>
      <section
    className="absolute top-1/2 left-1/2 h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-3 transform rounded-2xl bg-gray-400"
  ></section>

  <section
    className="absolute top-1/2 left-1/2 h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-3 transform space-y-6 rounded-2xl bg-gray-100 p-6 duration-300 hover:rotate-0"
  >
    <div className="flex justify-end">
      <div className="h-4 w-4 rounded-full bg-gray-900"></div>
    </div>

    <header className="text-center text-xl font-extrabold text-gray-600">
      Try Your Luck
    </header>

    <div>
      <p className="text-center text-5xl font-extrabold text-gray-900">
        Pick Random Movie
      </p>
    </div>
  </section>
     </Link>
     <Link to="/choosehero" className='relative w-3/12 md:mb-0 md:mt-0 mb-80 mt-20'>
      <section
    className="absolute top-1/2 left-1/2 h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-3 transform rounded-2xl bg-gray-400"
  ></section>

  <section
    className="absolute top-1/2 left-1/2 h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-3 transform space-y-6 rounded-2xl bg-gray-100 p-6 duration-300 hover:rotate-0"
  >
    <div className="flex justify-end">
      <div className="h-4 w-4 rounded-full bg-gray-900"></div>
    </div>

    <header className="text-center text-xl font-extrabold text-gray-600">
      HeroStars Movies
    </header>

    <div>
      <p className="text-center text-5xl font-extrabold text-gray-900">
        Choose Your Hero
      </p>
    </div>
  </section>
     </Link>
     <Link to="/trendingmovies" className='relative w-3/12 md:mb-0 md:mt-0 mb-80 mt-20'>
      <section
    className="absolute top-1/2 left-1/2 h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-3 transform rounded-2xl bg-gray-400"
  ></section>

  <section
    className="absolute top-1/2 left-1/2 h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-3 transform space-y-6 rounded-2xl bg-gray-100 p-6 duration-300 hover:rotate-0"
  >
    <div className="flex justify-end">
      <div className="h-4 w-4 rounded-full bg-gray-900"></div>
    </div>

    <header className="text-center text-xl font-extrabold text-gray-600">
      Most Recent
    </header>

    <div>
      <p className="text-center text-5xl font-extrabold text-gray-900">
        Trending Movies
      </p>
    </div>
  </section>
     </Link>
    
</div>
<Outlet />
    </>
    )
}

export default Home