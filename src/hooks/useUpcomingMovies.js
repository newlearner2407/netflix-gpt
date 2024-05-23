import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";


const useUpcomingMovies = () => {
    // fetch Data from TMDB API and Update store
    const dispatch = useDispatch();

 const getUpcomingMovies= async ()=> {
  const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', 
    API_OPTIONS
  );
const json = await data.json();

dispatch(addUpcomingMovies(json.results));
 }

 useEffect(()=> {
  getUpcomingMovies();
 },[]);
};


export default useUpcomingMovies;