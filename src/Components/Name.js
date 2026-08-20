import Typewriter from "typewriter-effect";

export default function Name() {
  return (
    <div className="flex flex-col mt-52">
      <h1 className="font-bold text-7xl py-2">Shreyas Lohakare</h1>
      <h4 className="text-4xl pt-5 flex flex-row gap-x-2 m-auto">
        I'm a
        <span className="text-purple-500">
          <Typewriter
            options={{
              strings: ["Front End Developer", "Web Developer"],
              autoStart: true,
              loop: true,
              delay: 50,
            }} 
          />
        </span>
      </h4>
    </div>
  );
}
