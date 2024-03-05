import React from "react";
import Hero from "../components/hero.component";
import Feature from "../components/feature.component";
import Section from "../components/section.component";
import Footer from "../components/footer.component";
const HomePage = () => {
  return (
    <div className="bg-black">
      <Section />
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-md font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
          Discover{" "}
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-green-500 via-white from-orange-400">
            India's{" "}
          </span>
          Best Artforms by <span className="text-purple-500">#Top Artists</span> at
          Qala.
        </h1>
        <p className="text-md ml-2 font-normal md:text-lg lg:text-xl dark:text-gray-200">
          Here at Qala, we bring you the best of the best in India's rich
          tradition of arts and artforms.
        </p>
      </div>
      <Hero />
      <div className="flex flex-col items-center md:mb-12">
        <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          We think for the{" "}
          <span class="underline underline-offset-3 decoration-8 dark:decoration-seagreen">
            artist’s potential
          </span>
        </h1>
      </div>
      <Feature />
      <Footer />
    </div>
  );
};

export default HomePage;
