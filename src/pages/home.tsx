import { useState, useEffect } from "react";
import Header from "../components/header";
import Movies from "../components/movies";
import Footer from "../components/footer";
import axios from "axios";

function Home() {
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState<
    {
      id: number;
      title: string;
      release_date: string;
      poster_path: string;
    }[]
  >([]);
  const [title, setTitle] = useState("Top 10 Movies");

  const fetchMovies = async () => {
    setisLoading(true);
    setTitle("Top 10 Movies");
    try {
      const api_key = import.meta.env.VITE_REACT_APP_API_KEY;
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`
      );
      setisLoading(false);
      setError(false);
      setMovies(response.data.results.slice(0, 10));
      // console.log(movies);
    } catch (error) {
      setisLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <Header
        setMovies={setMovies}
        setisLoading={setisLoading}
        fetchMovies={fetchMovies}
        setTitle={setTitle}
        setError={setError}
      />
      <Movies
        movies={movies}
        isLoading={isLoading}
        title={title}
        error={error}
      />
      <Footer />
    </div>
  );
}

export default Home;
