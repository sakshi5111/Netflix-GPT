import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold w-2/4">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="text-lg bg-white p-4 px-10 rounded-lg text-black font-semibold hover:bg-opacity-70">
          <i className="fa-solid fa-play text-black px-2"></i>Play
        </button>
        <button className="mx-2 text-lg bg-gray-500 p-4 px-10 rounded-lg text-white bg-opacity-50 hover:bg-opacity-30">
          <i className=" fa-solid fa-circle-info px-2"></i>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
