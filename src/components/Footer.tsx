import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div
      id="contact"
      className="w-full flex flex-col gap-10 py-12 px-10 bg-slate-700 text-slate-100"
    >
      <div className="flex flex-col md:flex-row gap-10 md:gap-32 lg:gap-48">
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-medium">Contact:</h3>
          <div className="flex flex-col text-lg md:text-xl gap-2 w-full mt-2 sm:mt-5">
            <p className="flex items-center hover:text-slate-300 transition text-base sm:text-lg">
              <MdOutlineEmail size={25} className="mr-2" />
              saputra.uta50@gmail.com
            </p>
            <a
              href="https://www.linkedin.com/in/saputrauta9/"
              className="flex items-center hover:text-slate-300 transition text-base sm:text-lg"
            >
              <FaLinkedin size={25} className="mr-2" />
              Saputra Uta
            </a>
            <a
              href="https://www.instagram.com/saputrautaaa/"
              className="flex items-center hover:text-slate-300 transition text-base sm:text-lg"
            >
              <FaInstagram size={25} className="mr-2" />
              @saputrautaaa
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-medium">Check:</h3>
          <div className="flex flex-col flex-wrap justify-center gap-2 mt-2 sm:mt-5">
            <a
              href="#about"
              className="text-base sm:text-lg text-slate-100 hover:text-slate-300 transition"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-base sm:text-lg text-slate-100 hover:text-slate-300 transition"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-base sm:text-lg text-slate-100 hover:text-slate-300 transition"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-base sm:text-lg text-slate-100 hover:text-slate-300 transition"
            >
              Contact
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-medium">Address:</h3>
          <p className="text-base sm:text-lg text-slate-100 mt-2 sm:mt-5">
            Mataram, West Nusa Tenggara, Indonesia
          </p>
        </div>
      </div>
      <h3 className="text-center font-medium text-xl sm:text-2xl">
        Copyright &copy; 2024 Saputra. All rights reserved.
      </h3>
    </div>
  );
}
