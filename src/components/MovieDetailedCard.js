import { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import VideoBackground from "./VideoBackground";

const MovieDetailedCard = ({ movie, path, onClose }) => {
  const [showVideo, setShowVideo] = useState(false);
  const handleClickMovieTrailer = (movie) => {
    setShowVideo(true);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm overflow-y-auto">
      <div className="">
        <button
          className="text-white border-solid border-white border-2 rounded-lg px-3 py-2 mt-2 bg-black hover:bg-gray-500 text-xl self-center absolute right-0 top-0"
          onClick={onClose}>
          X
        </button>
        {!showVideo ? (
          <div className="text-white p-10 m-32 flex bg-black opacity-80 rounded-lg">
            <div>
              <img
                className="h-72 rounded-lg"
                alt={movie.original_title}
                src={IMG_CDN_URL + path}
              />
            </div>
            <div className="w-2/4 pl-10">
              <p className="text-4xl pb-6 font-bold">{movie.original_title}</p>
              <p className="text-xl ">{movie.overview}</p>
              <p className="text-xl py-2 ">
                {"Release Date : " + movie.release_date}
              </p>
              <button
                className="border-solid border-white border-2 py-3 px-4 rounded-lg text-xl hover:bg-gray-500 my-4"
                onClick={handleClickMovieTrailer}>
                <i className="fa-solid fa-play pr-2"></i>Play
              </button>
            </div>
          </div>
        ) : (
          <VideoBackground
            movieId={movie.id}
            onClose={() => setShowVideo(false)}
          />
        )}
      </div>
    </div>
  );
};

export default MovieDetailedCard;
