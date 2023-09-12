import { useState } from "react";
import axios from "axios";

interface HEADER {
  setMovies: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        title: string;
        release_date: string;
        poster_path: string;
      }[]
    >
  >;
  setisLoading: React.Dispatch<React.SetStateAction<boolean>>;
  fetchMovies: Function;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({
  setMovies,
  setisLoading,
  fetchMovies,
  setTitle,
  setError,
}: HEADER) {
  const [movieTitle, setMovieTitle] = useState("");

  const searchMoviesByTitle = async () => {
    setisLoading(true);
    setTitle("Search Results");
    try {
      const api_key = import.meta.env.VITE_REACT_APP_API_KEY;
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${encodeURIComponent(
          movieTitle
        )}`
      );
      setisLoading(false);
      setError(false);
      setMovies(response.data.results);
    } catch (e) {
      setisLoading(false);
      setError(true);
      // console.log(e);
    }
  };

  return (
    <div className="w-full h-[37.5rem] header">
      <div className="container pt-5">
        {/* Navbar */}
        <div className="flex flex-col md:flex-row gap-y-3 justify-between items-center">
          <div className="cursor-pointer" onClick={() => fetchMovies()}>
            <img src="/Logo.png" alt="logo" />
          </div>
          <div className="w-full md:w-[20rem] lg:w-[32rem] border-2 border-[#D1D5DB] px-[0.625rem] py-[0.375rem] rounded-[0.375rem] flex justify-between items-center">
            <input
              type="text"
              placeholder="What do you want to watch?"
              className="text-white text-base font-normal w-[14rem] bg-transparent outline-none placeholder:text-white"
              value={movieTitle}
              onChange={(e) => setMovieTitle(e.target.value)}
            />
            <div className="cursor-pointer" onClick={searchMoviesByTitle}>
              <img src="/Search.png" alt="search_icon" />
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <button className="text-white text-base font-bold">Sign in</button>
            <div className="w-[2.25rem] h-[2.25rem] rounded-full bg-[#BE123C] cursor-pointer flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.59998 8.40001C3.59998 7.73727 4.13723 7.20001 4.79998 7.20001H19.2C19.8627 7.20001 20.4 7.73727 20.4 8.40001C20.4 9.06275 19.8627 9.60001 19.2 9.60001H4.79998C4.13723 9.60001 3.59998 9.06275 3.59998 8.40001Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.59998 15.6C3.59998 14.9373 4.13723 14.4 4.79998 14.4H19.2C19.8627 14.4 20.4 14.9373 20.4 15.6C20.4 16.2628 19.8627 16.8 19.2 16.8H4.79998C4.13723 16.8 3.59998 16.2628 3.59998 15.6Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-end gap-y-4 mt-20 md:mt-28 xl:mt-24">
          {/* Description Box */}
          <div className="flex flex-col gap-4">
            <h1 className="text-[3rem] font-bold text-white leading-[3.5rem]">
              <span className="block">John Wick 3 :</span>{" "}
              <span className="block">Parabellum</span>
            </h1>
            <div className="flex items-center gap-7">
              <div className="flex items-center gap-2">
                <img src="/imdb.png" alt="imdb_icon" />
                <p className="text-white text-[0.75rem] font-normal">
                  86.0 / 100
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src="/tomato.png" alt="tomato" />
                <p className="text-white text-[0.75rem] font-normal">97%</p>
              </div>
            </div>
            <p className="text-white text-[0.875rem] font-medium leading-[1.125rem] w-[18.875rem]">
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>
            <button className="bg-[#BE123C] text-white text-[0.875rem] font-bold uppercase py-[0.375rem] px-[1rem] w-fit rounded-[0.375rem] flex items-center gap-2 ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
                    fill="white"
                  />
                </svg>
              </span>{" "}
              Watch trailer
            </button>
          </div>
          {/* Pagination Box */}
          <div className="flex flex-row md:flex-col items-end gap-3 md:gap-2">
            <div className="text-[0.75rem] font-bold text-[#9CA3AF] w-[0.625rem] text-center cursor-pointer">
              1
            </div>
            <div className="text-[0.75rem] font-bold text-[#9CA3AF] w-[0.625rem] text-center cursor-pointer">
              2
            </div>
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
              <div className="w-[1.25rem] h-[0.1875rem] rounded-[0.375rem] bg-white"></div>{" "}
              <div className="text-[1rem] font-bold text-white w-[0.625rem] text-center cursor-pointer">
                3
              </div>
            </div>
            <div className="text-[0.75rem] font-bold text-[#9CA3AF] w-[0.625rem] text-center cursor-pointer">
              4
            </div>
            <div className="text-[0.75rem] font-bold text-[#9CA3AF] w-[0.625rem] text-center cursor-pointer">
              5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
