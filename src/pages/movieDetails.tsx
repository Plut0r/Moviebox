import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "../components/sidebar";
import Details from "../components/details";

export interface MVDETAILS {
  id: number;
  title: string;
  release_date: string;
  runtime: number;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  genres: { id: number; name: string }[];
}

function MovieDetails() {
  const { id } = useParams();
  // @ts-ignore
  const [movie, setMovie] = useState<MVDETAILS>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(false);
      try {
        const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );
        // console.log(response.data);
        setLoading(false);
        setMovie(response.data);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div className="movie-details">
      <Sidebar />
      <div className="mt-8 flex justify-center">
        <Details movieDetails={movie} loading={loading} error={error} />
      </div>
    </div>
  );
}

export default MovieDetails;
