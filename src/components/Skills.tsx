export default function Skills() {
  return (
    <div id="skills" className="min-h-screen py-10 relative">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-slate-700 tracking-wider">
        Skills
      </h1>
      <div className="my-10" />
      <div className="z-40 relative">
        <div className="mt-10 mx-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center items-center gap-20 lg:gap-10 lg:gap-y-20">
          <img
            src="javascript.png"
            alt="JavaScript"
            className=" max-w-[180px]"
          />
          <img
            src="typescript.png"
            alt="TypeScript"
            className=" max-w-[180px]"
          />
          <img src="php.png" alt="PHP" className=" max-w-[180px]" />
          <img src="sql.png" alt="SQL" className=" max-w-[180px]" />
          <img src="netxjs.png" alt="NextJs" className=" max-w-[180px]" />
          <img src="laravel.png" alt="Laravel" className=" max-w-[180px]" />
          <img src="react.png" alt="React" className=" max-w-[180px]" />
          <img src="tailwind.png" alt="Tailwind" className=" max-w-[180px]" />
        </div>
      </div>
      <div className="absolute z-10 top-10 md:left-[10%]">
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
      <div className="hidden md:block absolute z-10 bottom-1 left-[20%]">
        <div className="w-24 h-24 rounded-full bg-blue-300" />
      </div>
      <div className="md:block absolute z-10 md:top-3/4 md:left-2/4 top-[90%] left-[4%]">
        <div className="w-24 h-24 rounded-full bg-blue-300" />
      </div>
    </div>
  );
}
