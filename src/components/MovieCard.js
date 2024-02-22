import { IMG_CDN_URL } from "../utils/constants";
import MovieDetailedCard from "./MovieDetailedCard";
import { useState } from "react";

const MovieCard = ({ movieTitle, posterPath, movie }) => {
  const [showModal, setShowModal] = useState(false);
  if (!posterPath) return null;
  return (
    <div>
      <div className="w-36 md:w-52 pr-4 cursor-pointer">
        <img
          className="rounded-xl hover:h-64"
          alt="Movie Card"
          src={IMG_CDN_URL + posterPath}
          onClick={() => {
            setShowModal(true);
          }}
        />
      </div>
      {showModal && (
        <MovieDetailedCard
          movie={movie}
          path={posterPath}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default MovieCard;
