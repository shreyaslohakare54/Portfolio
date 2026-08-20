import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.gif";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between px-[50px] py-[25px] ">
      <div>
        <img src={logo} alt="Logo" className="h-12 w-12 rounded-full transform transition-transform hover:scale-110" />
      </div>
      <div className="pr-6">
        <ul className="flex flex-row gap-x-10 py-4 font-medium ">
          <li className="hover:text-purple-700">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-purple-700">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="hover:text-purple-700">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="hover:text-purple-700">
            <Link to="/education">Education</Link>
          </li>
          <li className="hover:text-purple-700">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
