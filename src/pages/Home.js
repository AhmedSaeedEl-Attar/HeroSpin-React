import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <>
    <div className="justify-around flex min-h-screen w-full items-center">
     <Link to="/pickmovie" className='relative w-3/12 mb-5'>
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
        Pick Random Movie
      </p>
    </div>

    {/* <footer className="mb-10 flex justify-center">
      <button
        className="flex items-center rounded-lg bg-[#FF7308] px-4 py-2.5 text-xl font-bold text-white hover:bg-[#E56707]"
      >
        <p>Start</p>
        <svg
          className="h-9 w-9"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </footer> */}
  </section>
     </Link>
     <Link to="/pickmovie" className='relative w-3/12'>
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

    {/* <footer className="mb-10 flex justify-center">
      <button
        className="flex items-center rounded-lg bg-[#FF7308] px-4 py-2.5 text-xl font-bold text-white hover:bg-[#E56707]"
      >
        <p>Start</p>
        <svg
          className="h-9 w-9"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </footer> */}
  </section>
     </Link>
     <Link to="/pickmovie" className='relative w-3/12'>
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
        Trending Movies
      </p>
    </div>

    {/* <footer className="mb-10 flex justify-center">
      <button
        className="flex items-center rounded-lg bg-[#FF7308] px-4 py-2.5 text-xl font-bold text-white hover:bg-[#E56707]"
      >
        <p>Start</p>
        <svg
          className="h-9 w-9"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </footer> */}
  </section>
     </Link>
    
</div>
<Outlet />
    </>
    )
}

export default Home