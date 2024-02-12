import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { bg_url } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={bg_url} alt="bg-img" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
