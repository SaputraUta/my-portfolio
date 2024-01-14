import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosHome } from "react-icons/io";
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
  });

  return (
    <div className="relative">
      {!sideBar && (
        <button className="m-4 p-2" onClick={() => setSideBar(true)}>
          <GiHamburgerMenu size={30} />
        </button>
      )}
      {sideBar && (
        <div ref={navbarRef} className="min-h-screen w-48 flex flex-col absolute top-0 left-0 bg-slate-100 z-50">
          <h3 className="p-4 font-bold text-xl">Navigation</h3>
          <a
            href="#"
            className="mt-4 px-4 py-3 flex gap-2 items-center font-medium tracking-wider hover:bg-slate-200"
            onClick={() => setSideBar(false)}
          >
            <span>
              <IoIosHome size={25} />
            </span>
            Introduction
          </a>
          <a
            href="#"
            className="px-4 py-3 flex gap-2 items-center font-medium tracking-wider hover:bg-slate-200"
            onClick={() => setSideBar(false)}
          >
            <span>
              <IoPerson size={25} />
            </span>
            About me
          </a>
          <a
            href="#"
            className="px-4 py-3 flex gap-2 items-center font-medium tracking-wider hover:bg-slate-200"
            onClick={() => setSideBar(false)}
          >
            <span>
              <GrProjects size={25} />
            </span>
            Projects
          </a>
          <a
            href="#"
            className="px-4 py-3 flex gap-2 items-center font-medium tracking-wider hover:bg-slate-200"
            onClick={() => setSideBar(false)}
          >
            <span>
              <MdPermContactCalendar size={25} />
            </span>
            Contact me
          </a>
        </div>
      )}
    </div>
  );
}
