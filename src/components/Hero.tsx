import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const [isRendered, setIsRendered] = useState(false);
  useEffect(() => {
    setIsRendered(true);
  }, []);

  return (
    <div
      id="about"
      className={`relative max-h-screen h-screen flex flex-col md:flex-row gap-5 md:gap-24 mx-10 md:justify-center pt-28 md:pt-32 lg:pt-44 xl:pt-56 transition
      transform duration-500 ${
        isRendered ? "scale-100 opacity-100" : "scale-125 opacity-0"
      }`}
    >
      <div className="mx-auto rounded-full shadow-2xl max-w-[270px] max-h-[270px] md:max-w-xs md:max-h-[320px] md:mt-12 lg:mt-4 xl:mt-0 -z-10">
        <img
          src="/photo.png"
          className="max-w-[150px] max-h-[150px] sm:max-w-[200px] sm:max-h-[200px] md:max-w-xs md:max-h-[320px]"
        />
      </div>
      <div className="text-slate-700 font-bold text-lg sm:text-xl lg:text-2xl sm:text tracking-wider text-center flex flex-col gap-3 md:gap-5">
        <p>
          Hello, I'm
          <span className="text-blue-700">
            <TypeAnimation
              sequence={[" Saputra!", 1000, " a Software Developer!", 1000]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </span>
        </p>
        <p className="text-justify text-slate-700 text-xs sm:text-sm md:text-base lg:text-lg tracking-wide font-normal leading-normal">
          I am a Software Developer with a background in{" "}
          <b>Electrical Engineering</b> and over <b>1 year of experience</b> in
          software development. I am proficient in{" "}
          <b>JavaScript, TypeScript,</b> and <b>PHP</b>, and familiar with
          frameworks like <b>Next.js, Laravel</b>, and <b>CodeIgniter</b>. In
          addition to developing <b>responsive user interfaces</b>, I am
          experienced in <b>REST API integration</b>. I have strong{" "}
          <b>collaboration skills</b> for working in teams, yet I am also
          effective when working <b>independently</b>. My high <b>curiosity</b>{" "}
          and passion for <b>continuous learning</b> drive me to keep evolving
          in the world of technology.
        </p>
      </div>
      <div className="absolute -z-20 md:left-1/4">
        <div className="w-24 h-24 rounded-full bg-blue-300" />
      </div>
      <div className="absolute -z-20 top-1/3 left-3/4 md:left-[90%]">
        <div className="w-16 h-16 rounded-full bg-blue-300" />
      </div>
      <div className="hidden md:block absolute -z-20 bottom-20 left-20">
        <div className="w-16 h-16 rounded-full bg-blue-300" />
      </div>
      <div className="hidden md:block absolute -z-20 top-3/4 left-3/4">
        <div className="w-24 h-24 rounded-full bg-blue-300" />
      </div>
    </div>
  );
}
