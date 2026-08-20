import React from "react";
import Navbar from "../Components/Navbar";
import Name from "../Components/Name";
import Social from "../Components/Social";
import hero from "../Assets/hero.png";


export default function Home() {
  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero})`,
    backgroundPosition: "right center",
  };

  return (
    <div
      className="h-screen w-screen flex flex-col bg-no-repeat bg-color-one  bg-center bg-contain text-white"
      style={containerStyle}
    >
      <Navbar />
      <Name />
      <Social />
    </div>
  );
}
