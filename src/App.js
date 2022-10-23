import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages 
import Layout from './pages/Layout';
import Home from './pages/Home'
import PickRandomSuperHeroMovie from "./pages/PickRandomSuperHeroMovie";
import ChooseHero from "./pages/ChooseHero";
import NoPage from "./pages/NoPage";
import RandomMoviePage from "./pages/RandomMoviePage";
import TrendignMovies from "./pages/TrendignMovies";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="pickmovie" element={<PickRandomSuperHeroMovie />} />
          <Route path="choosehero" element={<ChooseHero />} />
          <Route path="moviedetails" element={<RandomMoviePage />} />
          <Route path="trendingmovies" element={<TrendignMovies />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
