import React from "react";

export default function Newsletter() {
  return (
    <section className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-gray-900 rounded-lg  md:flex-row md:h-48">
      <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-base ">
        <div className="px-6 py-6 md:px-8 md:py-0 bg-base">
          <h2 className="text-lg font-bold text-white">
            Sign Up For <span className="text-blue-600">Project</span> Updates
          </h2>
          <p className="mt-2 text-sm text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur obcaecati odio
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 bg-base">
        <form>
          <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg lg:flex-row  focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none  focus:placeholder-transparent"
              type="text"
              name="email"
              placeholder="Enter your email"
              aria-label="Enter your email"
            />

            <button className="px-4 py-3 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none">
              subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
