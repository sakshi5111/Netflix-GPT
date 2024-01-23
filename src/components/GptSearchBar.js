import React from "react";

const GptSearchBar = () => {
  return (
    <div className="p-[10%] flex justify-center">
      <form
        className="bg-black w-2/3 grid grid-cols-12 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <input
          type="text"
          className=" p-4 m-4 col-span-9 rounded-lg"
          placeholder="What would you like to watch today?"
        />
        <button className="bg-red-700 col-span-3 m-4 py-2 px-4 rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
