import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <section className="bg-gray-900">
        <div className="container px-6 py-16 mx-auto text-center">
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-semibold text-white   lg:text-4xl">
              We&apos;re changing the way teams collaborate
            </h1>
            <p className="mt-6 text-gray-100 dark:text-gray-300">
              Cognito is the next-gen document editor and collaboration
              platform.
            </p>
            <button className=" btn btn-xl px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
              Get Started for free
            </button>
            <p className="mt-3 text-sm text-gray-300 ">
              No credit card required
            </p>
          </div>

          <div className="flex justify-center mt-10">
            <Image
              alt=""
              className="object-cover w-full h-96 rounded-xl lg:w-4/5"
              src="/hero-img.jpg"
              width={1400}
              height={1440}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
