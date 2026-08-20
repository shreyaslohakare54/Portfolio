import React from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import FadeIn from "react-fade-in";

export default function Skills() {
  return (
    <FadeIn className="min-h-screen w-screen bg-[#151a20] text-white relative px-12 py-8">

      {/* Close Button */}
      <Link to="/">
        <RxCross2 className="absolute top-6 right-10 text-4xl text-gray-300 hover:text-white cursor-pointer" />
      </Link>

      {/* Heading */}
      <h1 className="text-4xl font-extrabold tracking-wide mb-12">
        SKILLS
      </h1>

      {/* ================= PROGRAMMING LANGUAGES ================= */}
      <section className="mb-20">

        <h2 className="text-2xl font-semibold text-[#e0b82f] mb-8">
          Programming Languages
        </h2>

        <div className="flex flex-wrap gap-x-24 gap-y-10">

          <Skill
            image="/images/skills/python.svg"
            name="Python"
          />

          <Skill
            image="/images/skills/Java.svg"
            name="Java"
          />

          <Skill
            image="/images/skills/javascript.svg"
            name="JavaScript"
          />
        </div>
      </section>

      <section className="mb-20">

        <h2 className="text-2xl font-semibold text-[#e0b82f] mb-8">
          Web Technology
        </h2>

        <div className="flex flex-wrap gap-x-24 gap-y-10">

          <Skill
            image="/images/skills/html.svg"
            name="HTML"
          />

          <Skill
            image="/images/skills/css.svg"
            name="CSS"
          />
        </div>
      </section>

      <section className="mb-20"></section>


      {/* ================= LIBRARIES & FRAMEWORKS ================= */}
      <section className="mb-20">

        <h2 className="text-2xl font-semibold text-[#e0b82f] mb-8">
          Libraries & Frameworks
        </h2>

        <div className="flex flex-wrap gap-x-24 gap-y-10">

          <Skill
            image="/images/skills/react.svg"
            name="React.js"
          />

          <Skill
            image="/images/skills/tailwind.svg"
            name="Tailwind"
          />

          <Skill
            image="/images/skills/nextjs.svg"
            name=".Net Core"
          />

          <Skill
            image="/images/skills/nodejs.png"
            name="Node.js"
          />

          <Skill
            image="/images/skills/pandas.svg"
            name="Pandas"
          />

          <Skill
            image="/images/skills/matplotlib.png"
            name="Matplotlib"
          />

          <Skill
            image="/images/skills/numpy.svg"
            name="NumPy"
          />

        </div>
      </section>


      {/* ================= TOOLS & DATABASES ================= */}
      <section>

        <h2 className="text-2xl font-semibold text-[#e0b82f] mb-8">
          Tools & Databases
        </h2>

        <div className="flex flex-wrap gap-x-24 gap-y-10">

          <Skill
            image="/images/skills/mongodb.svg"
            name="MongoDB"
          />

          <Skill
            image="/images/skills/mysql.svg"
            name="MySQL"
          />

          <Skill
            image="/images/skills/git.svg"
            name="Git"
          />

          <Skill
            image="/images/skills/canva.svg"
            name="Canva"
          />

          <Skill
            image="/images/skills/github1.webp"
            name="GitHub"
          />

          <Skill
            image="/images/skills/postman.png"
            name="Postman"
          />

          <Skill
            image="/images/skills/vs.webp"
            name="VSCode"
          />
          <Skill
            image="/images/skills/Maven.jpg"
            name="Maven"
          />

        </div>
      </section>

    </FadeIn>
  );
}


/* ================= SKILL COMPONENT ================= */

function Skill({ image, name }) {
  return (
    <div className="w-[90px] flex flex-col items-center">

      <img
        src={image}
        alt={name}
        className="w-[80px] h-[80px] object-contain"
      />

      <p className="mt-3 text-[16px] text-[#e0b82f] whitespace-nowrap">
        {name}
      </p>

    </div>
  );
}