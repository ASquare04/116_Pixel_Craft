import React from "react";
import art from "../imgs/art.png";
const Section = () => {
  return (
    <>
      <section class="text-white bg-black">
        <div class="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start justify-center md:text-justify mb-16 md:mb-0 items-center text-center">
            <h1 class="sm:text-4xl mb-4 text-white italic font-gelasio">
              From Palette to Perspective..
            </h1>
            <p class="mb-8 leading-relaxed font-inter text-white">
              Browse through our curated collection of mesmerizing artworks.
              Whether you're a seasoned art enthusiast or just beginning your
              journey into the world of creativity, there's something here for
              everyone..
            </p>
            <cite>
              "Art enables us to find ourselves and lose ourselves at the same
              time" - Qala
            </cite>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/3 w-3/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={art}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
