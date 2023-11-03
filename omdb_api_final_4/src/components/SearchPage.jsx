import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieSearch } from "../features/omdbapi/searchSilce";
import { useNavigate } from "react-router-dom";
// import { Movies } from "../features/omdbapi/omdbapiSlice";

const SearchPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchMovie = useSelector((state) => state.search.search);
  // const [query, setQuery] = useState("");

  // // console.log(query);

  useEffect(() => {
    dispatch(movieSearch());
  }, [dispatch]);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(moviesSearch(query));

  //   if (query <= 0) {
  //     navigate("/");
  //   } else {
  //     navigate(`/search/?t=${query}`, { replace: true });
  //     console.log(query);
  //   }
  // };

  const getSearchParams = () => {
    const search = window.location.search;
    const params = new URLSearchParams(search);

    const searchParams = params.get("s");
    return searchParams;
  };

  // console.log(moviesSearch);
  return (
    <>
      <div className="text-center p-6 text-4xl font-serif">Search Page</div>

      {/* <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="search here.."
          className="p-1 bg-gray-200 w-60 rounded"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className=" bg-[#181b22] px-4 py-1 text-white text-white-800 hover:text-gray-400 duration-500 ">
          search
        </button>
      </form> */}

      <h2 className="text-lg font-semibold capitalize text-gray-900 md:text-xl">
        Search Result For "{getSearchParams()}"
      </h2>
      <br />
      <div className="grid gap-8 lg:grid-cols-4 sm:grid-cols-2 w-68 m-3">
        {searchMovie?.map((movie) => {
          return (
            <div
              className="flex flex-col py-2 px-6 rounded-md border border-black "
              key={movie?.imdbID}
            >
              <img className="h-50 w-40 " src={movie?.Poster} />
              <h1 className="card-title font-bold">{movie?.Title}</h1>
              <h1 id="year">{movie?.Year}</h1>
              <h1 id="type">{movie?.Type}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchPage;
