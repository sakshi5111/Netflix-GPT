import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movieTitle, posterPath }) => {
  return (
    <div className="w-52 pr-4 cursor-pointer">
      <img
        className="rounded-xl hover:h-64 "
        alt={movieTitle}
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
