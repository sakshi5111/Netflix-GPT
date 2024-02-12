import React, { useRef } from "react";
import openai from "../utils/openai";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const searchText = useRef(null);

  // search movie in TMDB API
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_Options
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    // console.log(searchText.current.value);
    const gptQuery =
      "Act as a Movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give names of 6 movies, comma seperated";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      <h1>Didn't found the movie that you have searched </h1>;
    }

    console.log(gptResults.choices?.[0]?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // for each movie search for TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    // to resolve all the promises used Promise.all
    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);
    dispatch(
      addGptMovies({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="p-[10%] flex justify-center">
      <form
        className="bg-black w-2/3 grid grid-cols-12 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9 rounded-lg"
          placeholder="What would you like to watch today?"
        />
        <button
          className="bg-red-700 col-span-3 m-4 py-2 px-4 rounded-lg"
          onClick={handleGPTSearchClick}>
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
