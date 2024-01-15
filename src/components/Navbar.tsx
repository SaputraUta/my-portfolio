import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiSkills } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { MdPermContactCalendar } from "react-icons/md";

export default function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [sideBar, setSideBar] = useState(false);
  useEffect(() => {
    const navbarHandler = (e: MouseEvent) => {
      if (!navbarRef.current?.contains(e.target as Node)) {
        setSideBar(false);
      }
    };
    document.addEventListener("mousedown", navbarHandler);
    return () => {
      document.removeEventListener("mousedown", navbarHandler);
    };
  }, []);

  return (
    <div className="relative">
      <button className="m-4 p-2 md:hidden" onClick={() => setSideBar(true)}>
        <GiHamburgerMenu size={30} />
      </button>
      <nav
        ref={navbarRef}
        className={`min-h-screen sm:w-64 w-48 flex flex-col absolute top-0 left-0 bg-slate-100 z-50 transition-transform ease-out transform  md:hidden ${
          sideBar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h3 className="p-4 font-bold text-xl">Navigation</h3>
        <a
          href="#"
          className="mt-4 px-4 py-4 flex gap-2 items-center font-medium tracking-wider hover:bg-slate-200 sm:text-lg"
          onClick={() => setSideBar(false)}
        >
          <span>
            <IoPerson size={25} />
          </span>
          About me
        </a>
        <a
          href="#"
          className="px-4 py-4 flex gap-2 items-center font-medium tracking-wider hover:bg-slate-200 sm:text-lg"
          onClick={() => setSideBar(false)}
        >
          <span>
            <GrProjects size={25} />
          </span>
          Projects
        </a>
        <a
          href="#"
          className="px-4 py-4 flex gap-2 items-center font-medium tracking-wider hover:bg-slate-200 sm:text-lg"
          onClick={() => setSideBar(false)}
        >
          <span>
            <GiSkills size={25} />
          </span>
          Skills
        </a>
        <a
          href="#"
          className="px-4 py-4 flex gap-2 items-center font-medium tracking-wider hover:bg-slate-200 sm:text-lg"
          onClick={() => setSideBar(false)}
        >
          <span>
            <MdPermContactCalendar size={25} />
          </span>
          Contact me
        </a>
      </nav>

      <nav className="hidden fixed top-0 z-50 md:flex justify-center items-center gap-16 lg:gap-24 xl:gap-32 w-full py-8">
        <a
          href="#"
          className="flex gap-1 items-center font-bold tracking-wider text-lg lg:text-xl xl:text-2xl rounded-full p-2 hover:bg-slate-300"
        >
          About me
        </a>
        <a
          href="#"
          className="flex gap-1 items-center font-bold tracking-wider text-lg lg:text-xl xl:text-2xl rounded-full p-2 hover:bg-slate-300"
        >
          Projects
        </a>
        <a
          href="#"
          className="flex gap-1 items-center font-bold tracking-wider text-lg lg:text-xl xl:text-2xl rounded-full p-2 hover:bg-slate-300"
        >
          Skills
        </a>
        <a
          href="#"
          className="flex gap-1 items-center font-bold tracking-wider text-lg lg:text-xl xl:text-2xl rounded-full p-2 hover:bg-slate-300"
        >
          Contact me
        </a>
      </nav>
    </div>
  );
}
