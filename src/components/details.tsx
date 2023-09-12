import { MVDETAILS } from "../pages/movieDetails";

interface DETAILS {
  movieDetails: MVDETAILS;
  loading: boolean;
  error: boolean;
}

function Details({ movieDetails, loading, error }: DETAILS) {
  return (
    <div className="w-[90%] xl:w-[65rem] 2xl:w-[74.875rem] xl:ml-[12.5rem] 2xl:ml-[14.125rem]">
      {loading || error ? (
        <div className="mt-4 w-full h-14 bg-[#f6f6f6] text-[#111827] flex justify-center items-center rounded-md font-bold text-lg">
          {loading ? "Loading!!!" : "Something went wrong!!!"}
        </div>
      ) : (
        <>
          {/* Trailer Div */}
          <div className="relative xl:w-[65rem] 2xl:w-[74.875rem] h-[28.0625rem]">
            <div className="w-full h-full">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
                alt="trailer_image"
                className="w-full h-full rounded-[1.25rem]"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
              <div className="w-[6.875rem] h-[6.875rem] border-2 border-[rgba(232,232,232,0.20)] bg-[rgba(255,255,255,0.35)] rounded-full flex items-center justify-center cursor-pointer">
                <img src="/Play.png" alt="play_icon" />
              </div>
              <p className="text-[#E8E8E8] text-[1.5625rem] font-medium shadow-[0px,2px,4px,rgba(0,0,0,0.25)]">
                Watch Trailer
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-4 mt-4">
            {/* 1st column */}
            <div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  {/* Movie title */}
                  <p
                    data-testid="movie-title"
                    className="text-[#404040] text-[1rem] xl:text-[1.2rem] 2xl:text-[1.4375rem] font-medium"
                  >
                    {movieDetails.title}
                  </p>
                  <p className="text-[#404040] text-[1rem] xl:text-[1.2rem] 2xl:text-[1.4375rem] font-medium">
                    •
                  </p>
                  {/* Release date */}
                  <p
                    data-testid="movie-release-date"
                    className="text-[#404040] text-[1rem] xl:text-[1.2rem] 2xl:text-[1.4375rem] font-medium"
                  >
                    {new Date(movieDetails.release_date).toUTCString()}
                  </p>
                  <p className="text-[#404040] text-[1rem] xl:text-[1.2rem] 2xl:text-[1.4375rem] font-medium">
                    •
                  </p>
                  {/* PG */}
                  <p className="text-[#404040] text-[1rem] xl:text-[1.2rem] 2xl:text-[1.4375rem] font-medium">
                    PG-13
                  </p>
                  <p className="text-[#404040] text-[1rem] xl:text-[1.2rem] 2xl:text-[1.4375rem] font-medium">
                    •
                  </p>
                  {/* Runtime */}
                  <p
                    data-testid="movie-runtime"
                    className="text-[#404040] text-[1rem] xl:text-[1.2rem] 2xl:text-[1.4375rem] font-medium"
                  >
                    {movieDetails.runtime}
                  </p>
                </div>
                {/* Genres */}
                <div className="flex items-center gap-2 w-full">
                  {movieDetails?.genres?.map((genre) => (
                    <div
                      key={genre?.id}
                      className="px-3 h-[1.875rem] rounded-[0.9375rem] border border-[#F8E7EB] text-[0.9375rem] font-medium text-[#BE123C] flex items-center justify-center"
                    >
                      {genre?.name}
                    </div>
                  ))}
                </div>
              </div>
              {/* Movie Overview */}
              <p
                data-testid="movie-overview"
                className="mt-7 text-[#333] text-[1rem] xl:text-[1.25rem] font-normal"
              >
                {movieDetails.overview}
              </p>
              {/* Filmmakers */}
              <div className="flex flex-col gap-6 mt-7">
                {/* Director */}
                <div className="flex gap-3 items-center">
                  <h3 className="text-[#333] text-[1rem] xl:text-[1.25rem] font-normal">
                    Director :
                  </h3>
                  <p className="text-[#BE123C] text-[1rem] xl:text-[1.25rem]  font-normal">
                    Joseph Kosinski
                  </p>
                </div>
                {/* Writers */}
                <div className="flex gap-3 items-center">
                  <h3 className="text-[#333] text-[1rem] xl:text-[1.25rem]  font-normal">
                    Writers :
                  </h3>
                  <p className="text-[#BE123C] text-[1rem] xl:text-[1.25rem]  font-normal">
                    Jim Cash, Jack Epps Jr, Peter Craig
                  </p>
                </div>
                {/* Stars */}
                <div className="flex gap-3 items-center">
                  <h3 className="text-[#333] text-[1rem] xl:text-[1.25rem]  font-normal">
                    Stars :
                  </h3>
                  <p className="text-[#BE123C] text-[1rem] xl:text-[1.25rem]  font-normal">
                    Tom Cruise, Jennifer Connelly, Miles Teller
                  </p>
                </div>
              </div>
              {/* Buttons */}
              <div className="flex flex-col md:flex-row mt-8 gap-y-4">
                <button className="w-full md:w-[15.8125rem] h-[3.4375rem] bg-[#BE123C] rounded-[0.625rem] text-white text-[1rem] xl:text-[1.25rem]  font-medium shrink-0">
                  Top rated movie #65
                </button>
                <div className="w-full h-[3.4375rem] rounded-[0.625rem] border border-[#C7C7C7] bg-[rgba(255,255,255,0.80)] text-[#333] text-[1rem] xl:text-[1.25rem]  font-medium px-4 flex justify-between items-center">
                  <div>Awards 9 nominations</div>
                  <div className="cursor-pointer">
                    <img src="/Expand Arrow.png" alt="arrow_down" />
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd column */}
            <div className="flex flex-col lg:items-end">
              {/* Ratings */}
              <div className="flex items-center gap-3 mb-5 md:mb-0">
                <img src="/Star.png" alt="star" />
                <div>
                  <span className="text-[#E8E8E8] font-medium text-[1.2rem] xl:text-[1.4rem] 2xl:text-[1.5625rem]">
                    8.5
                  </span>
                  <span className="text-[#666] text-[1rem] xl:text-[1.2rem] 2xl:text-[1.25rem] font-medium">
                    | 350k
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-col items-center justify-between">
                <div className="w-full">
                  {/* Showtimes button */}
                  <div className="w-full md:w-[20rem] xl:w-[21rem] 2xl:w-[22.5rem] h-[3.4375rem] rounded-[0.625rem] bg-[#BE123C] text-white text-[1rem] xl:text-[1.25rem]  font-medium shadow-[0px,2px,4px,rgba(0,0,0,0.20)] flex items-center justify-center gap-3 cursor-pointer lg:mt-16">
                    <span>
                      <img src="/Two Tickets.png" alt="two_tickets_icon" />
                    </span>{" "}
                    See Showtimes
                  </div>
                  {/* Watch options button */}
                  <div className="w-full md:w-[20rem] xl:w-[21rem] 2xl:w-[22.5rem] h-[3.4375rem] rounded-[0.625rem] bg-[rgba(190,18,60,0.10)] border border-[#BE123C] text-[1rem] xl:text-[1.25rem]  font-medium text-[#333] flex items-center justify-center gap-3 cursor-pointer mt-4">
                    <span>
                      <img src="/List.png" alt="list_icon" />
                    </span>{" "}
                    More watch options
                  </div>
                </div>
                {/* best movies in september */}
                <div className="mt-7">
                  <img src="/Group 52.png" alt="best_september_movies" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Details;
