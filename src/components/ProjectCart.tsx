import { useState, useEffect, useRef } from "react";

interface Props {
  title: string;
  img: string;
  body: string;
  link: string;
}

export default function ProjectCart({ title, img, body, link }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const projectCartRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (projectCartRef.current) {
      observer.observe(projectCartRef.current);
    }

    return () => {
      if (projectCartRef.current) {
        observer.unobserve(projectCartRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={projectCartRef}
      className={`p-4 rounded-lg border-4 border-slate-700 justify-between flex flex-col bg-white max-w-sm sm:max-w-md items-center transform transition duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-slate-700 text-xl sm:text-2xl md:text-3xl font-medium text-center">
          <a href={link}>{title}</a>
        </h3>
        <img src={img} alt={title} />
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify tracking-wide">
          {body}
        </p>
      </div>
      <a
        href={link}
        className="font-bold self-center w-full text-center py-2 text-sm sm:text-base rounded-lg bg-slate-700 text-white hover:bg-slate-800 my-2"
      >
        Check
      </a>
    </div>
  );
}
