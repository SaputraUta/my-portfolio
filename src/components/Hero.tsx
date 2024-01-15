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
          className="max-w-[270px] max-h-[270px] md:max-w-xs md:max-h-[320px]"
        />
      </div>
      <div className="text-slate-700 font-bold text-2xl sm:text-3xl lg:text-5xl sm:text tracking-wider text-center flex flex-col gap-5 md:gap-10">
        <p>
          Hello i'm
          <span className="text-blue-700">
            <TypeAnimation
              sequence={[" Saputra!", 1000, " a Web Developer!", 1000]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </span>
        </p>
        <p className="text-justify text-slate-700 text-base sm:text-lg md:text-xl tracking-wide font-normal leading-normal">
          I am a fresh graduate in <b>Electrical Engineering</b> concentrating
          in <b>Computer Science</b>. I have knowledge of
          <b> JavaScript, Typescript, PHP</b> and <b>SQL </b>
          languages. I also have knowledge in the use of frameworks using
          <b> NextJs </b>
          and also <b>Laravel</b>. I have experience working with <b>teams</b>
          and <b>individuals </b>
          so I am experienced in using <b>Git</b> and <b>GitHub</b> as version
          control. I have <b>high curiosity</b> and <b>passion</b> to{" "}
          <b>keep learning</b>.
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
