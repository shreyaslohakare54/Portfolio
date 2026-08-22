import React from "react";
import { RxCross2 } from "react-icons/rx";
import about from "../Assets/about.png";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import DownloadLink from "react-download-link";
import resume from './Resume/Shreyas Lohakare.pdf';

export default function About() {
  return (
    <FadeIn className="flex flex-col w-screen h-screen bg-color-two text-white relative">
      <div className="flex flex-col mt-20">
        <Link to="/">
          <p className="text-5xl absolute top-6 right-16 font-thin">
            <RxCross2 className="text-purple-400 hover:text-purple-700" />
          </p>
        </Link>
        <p className="text-gray-500">Get to know me</p>
        <h2 className="pt-2 text-[46px] font-extrabold">About Me</h2>
      </div>
      <div className="flex flex-row  h-[440px] w-[1000px] m-auto mt-14">
        <div className="w-2/ py-6 px-5">
          <img
            src={about}
            alt="aboutimage"
            className="w-[325px] h-[325px] hover:filter-grayscale hover:opacity-70 transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="flex flex-col mt-8 w-3/5 gap-y-5 pl-5">
          <h2 className="text-purple-400 text-2xl text-left">Who am i?</h2>
          <h6 className="text-2xl font-bold text-left">
            I'm Shreyas Lohakare, a Web Developer
          </h6>
          <p className="w-full text-gray-500 text-justify">
            I am 2027 graduate from Pimpri Chinchwad College of Engineering, Akurdi,
            Pune. Full-stack developer skilled in java, data structures, and
            algorithms. Passionate about applying these skills to innovative,
            real-world projects for efficient solutions in both front-end and
            back-end development.
          </p>
          <div className="w-full bg-gray-500 h-[1px]"></div>
          <div className="flex flex-row w-full justify-between">
            <p className="text-gray-500">
              <span className="text-white">Name: </span> Shreyas Lohakare
            </p>
            <p className="text-gray-500">
              <span className="text-white">Age: </span> 21
            </p>
            <p className="text-gray-500">
              <span className="text-white">Location: </span> Pune
            </p>
          </div>
          <a
            href={resume}
            download
            className="text-left"
          >
            <button
              type="button"
              className="text-white bg-purple-600 hover:bg-purple-800 h-[40px] w-[120px] relative transform transition-transform hover:scale-105"
            >
              Download CV
            </button>
          </a>
        </div>
      </div>
    </FadeIn>
  );
}
