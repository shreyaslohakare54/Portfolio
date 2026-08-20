import React from "react";
import { RxCross2 } from "react-icons/rx";
import placemates from "../Assets/placemates.png";
import convoz from "../Assets/convoz.png";
import cricscore from "../Assets/cricscore.png";
import { Link } from "react-router-dom";
import FadeIn from 'react-fade-in';

export default function Projects() {
  return (
    <div className="flex flex-col w-screen h-screen bg-color-two text-white relative ">
      <div className="flex flex-col mt-20 ">
        <Link to="/">
          <p className="text-5xl absolute top-6 right-16 font-thin">
            <RxCross2 className="text-purple-400 hover:text-purple-700" />
          </p>
        </Link>
        <FadeIn className="pt-2 text-[46px] font-extrabold">Projects</FadeIn>
      </div>

      <FadeIn className="grid grid-cols-3 m-auto gap-x-16">
        <a
          href="https://github.com/shreyaslohakare54/Esports-World"
          target="_blank"
          className="flex flex-col bg-color-one h-[500px] w-[300px]  transform transition-transform hover:scale-110 hover:opacity-40"
        >
          
          <img
            src={placemates}
            alt="placemates-logo"
            className="h-[200px] w-full "
          />
          <div className="flex flex-col gap-5 mx-3 my-8 px-3">
            <h2 className="text-left font-semibold text-xl ">E-Sports World</h2>
            <div className="flex flex-col gap-3 font-thin">
              <p className="text-left">
                <span className="text-left">Description:</span>
                <p className="text-gray-500 text-justify">
                  E-sports World connects players with tournament ,
                  helping them become aware of S teir  class tournaments.
                </p>
              </p>
              <p className="text-left">
                <span className="text-white">Tech Stack:</span>
                <p className="text-gray-500 text-justify">
                  React js, REST APIs, MySQL, Node.js, HTML, CSS. 
                </p>
              </p>
            </div>
          </div>
        </a>

        <a
          href="https://github.com/shreyaslohakare54/Pokemon-Sphere"
          target="_blank"
          className="flex flex-col bg-color-one h-[500px] w-[300px]  transform transition-transform hover:scale-110 hover:opacity-40"
        >
          <img
            src={convoz}
            alt="convoz-logo"
            className="h-[200px] w-full  bg-white"
          />
          <div className="flex flex-col gap-5 mx-3 my-8 px-3">
            <h2 className="text-left font-semibold text-xl">Pokemon Sphere</h2>
            <div className="flex flex-col gap-3 font-thin">
              <p className="text-left">
                <span className="text-left">Description:</span>
                <p className="text-gray-500 text-justify">
                  Pokemon Sphere is a web application that allows users to search, 
                  explore, compare, view detailed information etc. about Pokémon 
                  using the PokeAPI.
                </p>
              </p>
              <p className="text-left">
                <span className="text-white">Tech Stack:</span>
                <p className="text-gray-500 text-justify">
                  React Js, Typescript, Tailwind CSS
                </p>
              </p>
            </div>
          </div>
        </a>

        <a
          href="https://github.com/shreyaslohakare54/Agriventure"
          target="_blank"
          className="flex flex-col bg-color-one h-[500px] w-[300px]  transform transition-transform hover:scale-110 hover:opacity-40"
        >
          <img
            src={cricscore}
            alt="cricscore-logo"
            className="h-[200px] w-full "
          />
          <div className="flex flex-col gap-5 mx-3 my-8 px-3">
            <h2 className="text-left font-semibold text-xl">Agriventure</h2>
            <div className="flex flex-col gap-3 font-thin">
              <p className="text-left">
                <span className="text-left">Description:</span>
                <p className="text-gray-500 text-justify">
                  Agriventure is a website for farmers where farmers can predict the 
                  price of Crop for tomorrow using database.
                  
                </p>
              </p>
              <p className="text-left">
                <span className="text-white">Tech Stack:</span>
                <p className="text-gray-500 text-justify">
                  ReactJS, Node.js, Express.js, MySQL, 
                </p>
              </p>
            </div>
          </div>
        </a>
      </FadeIn>
    </div>
  );
}
