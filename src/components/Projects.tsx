import ProjectList from "./ProjectList";

export default function Projects() {
  return (
    <div id="projects" className="min-h-screen bg-slate-100 py-10 relative">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-slate-700 tracking-wider">
        Projects
      </h1>
      <div className="my-10" />
      <div className="z-40 relative">
        <ProjectList />
      </div>
      <div className="absolute z-10 top-10 md:left-1/4">
        <div className="w-24 h-24 rounded-full bg-blue-300" />
      </div>
      <div className="absolute z-10 top-[50%] left-3/4 md:left-[80%]">
        <div className="w-24 h-24 rounded-full bg-blue-300" />
      </div>
      <div className="absolute z-10 top-1/3 left-3/4 md:left-[90%]">
        <div className="w-16 h-16 rounded-full bg-blue-300" />
      </div>
      <div className="absolute z-10 top-1/2 left-[10%] md:left-1/3">
        <div className="w-16 h-16 rounded-full bg-blue-300" />
      </div>
      <div className="hidden md:block absolute z-10 bottom-1 left-1/3">
        <div className="w-24 h-24 rounded-full bg-blue-300" />
      </div>
      <div className="md:block absolute z-10 md:top-3/4 md:left-2/4 top-[90%] left-[4%]">
        <div className="w-24 h-24 rounded-full bg-blue-300" />
      </div>
    </div>
  );
}
