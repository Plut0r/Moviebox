import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface MOVIES {
  movies:
    | {
        id: number;
        title: string;
        release_date: string;
        poster_path: string;
      }[];
  isLoading: boolean;
  title: string;
  error: boolean;
}

function Movies({ movies, isLoading, title, error }: MOVIES) {
  const [favoriteMovies, setFavoriteMovies] = useState<number[]>([]);

  const navigate = useNavigate();

  // Initializing favoriteMovies array with stored items in the localstorage
  useEffect(() => {
    const storedFavoritesMovie = localStorage.getItem("favoritesMovie");
    if (storedFavoritesMovie) {
      setFavoriteMovies(JSON.parse(storedFavoritesMovie));
    }
  }, []);

  const toggleFavorite = (id: number) => {
    if (favoriteMovies.includes(id)) {
      const updatedFavorites = favoriteMovies.filter(
        (favMovie) => favMovie !== id
      );
      setFavoriteMovies(updatedFavorites);
      localStorage.setItem("favoritesMovie", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favoriteMovies, id];
      setFavoriteMovies(updatedFavorites);
      localStorage.setItem("favoritesMovie", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div className="container mt-14">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-[1.25rem] md:text-[2.25rem] font-bold">{title}</h2>
        <div className="flex items-center gap-2 text-[1rem] md:text-[1.125rem] font-normal text-[#BE123C] cursor-pointer">
          See more{" "}
          <span>
            <img src="/icon_right.svg" alt="icon_right" />
          </span>
        </div>
      </div>
      {/* Movies List */}
      <div className="mt-7 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center md:justify-start gap-x-4 gap-y-6">
        {isLoading
          ? // Loading skeleton
            Array.from({ length: 10 }, (_, index) => (
              <div key={index} className="flex flex-col gap-2 w-[15.625rem]">
                <Skeleton height={23.125 * 16} width={15.625 * 16} />
                <Skeleton />
                <Skeleton />
              </div>
            ))
          : movies.map(
              (item: {
                id: number;
                title: string;
                release_date: string;
                poster_path: string;
              }) => (
                // Movie card
                <div
                  data-testid="movie-card"
                  key={item?.id}
                  className="flex flex-col gap-2 w-[15.625rem]"
                >
                  <div className="w-[15.625rem] h-[23.125rem] relative">
                    {/* Movie Poster */}
                    <div className="w-full h-full z-10">
                      <img
                        data-testid="movie-poster"
                        src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                        alt="movie_poster_image"
                        className="w-full h-full"
                      />
                    </div>
                    {/* Favorite button */}
                    <div
                      className={`w-[1.875rem] h-[1.82569rem] rounded-full ${
                        favoriteMovies.includes(item.id)
                          ? "bg-[#BE123C]"
                          : "bg-[rgba(243,244,246,0.50)]"
                      } flex justify-center items-center cursor-pointer absolute top-5 right-3 z-20 heart`}
                      onClick={() => toggleFavorite(item.id)}
                    >
                      <img src="/Heart.png" alt="heart_icon" />
                    </div>
                  </div>
                  {/* Movie Release date */}
                  <h3
                    data-testid="movie-release-date"
                    className="text-[0.75rem] text-[#9CA3AF] font-bold"
                  >
                    {item?.release_date}
                  </h3>
                  {/* Movie Title */}
                  <h4
                    data-testid="movie-title"
                    className="text-[#111827] text-[1.125rem] font-bold cursor-pointer"
                    onClick={() => navigate(`/movies/${item.id}`)}
                  >
                    {item.title}
                  </h4>
                  {/* <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/imdb.png" alt="imdb_icon" />
            <p className="text-[#111827] text-[0.75rem] font-normal">
              86.0 / 100
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/tomato.png" alt="tomato" />
            <p className="text-[#111827] text-[0.75rem] font-normal">97%</p>
          </div>
        </div>
        <div className="text-[0.75rem] font-bold text-[#9CA3AF]">
          Action, Adventure, Drama
        </div> */}
                </div>
              )
            )}
      </div>
      {!isLoading && movies.length === 0 && (
        <div className="mt-4 w-full h-14 bg-[#f6f6f6] text-[#111827] flex justify-center items-center rounded-sm font-bold text-lg">
          No Result Found!!!
        </div>
      )}
      {error && (
        <div className="mt-4 w-full h-14 bg-[#f6f6f6] text-[#111827] flex justify-center items-center rounded-sm font-bold text-lg">
          Something went wrong!!!
        </div>
      )}
    </div>
  );
}

export default Movies;
