import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) =>{
   

    const dispatch = useDispatch();

    const getMovieVideos = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();
      
  
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
     
        dispatch(addTrailerVideo(trailer));
      } catch (error) {
        console.error("Failed to fetch movie videos:", error);
      }
    };
  
    useEffect(() => {
      getMovieVideos();
    }, [movieId]); // Added movieId as a dependency to refetch videos when movieId changes
}


export default useMovieTrailer;