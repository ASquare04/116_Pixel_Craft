import React, { useState, useEffect } from 'react';
import AnimationWrapper from '../common/page-animation';

const Hero = () => {
  const [displayedSections, setDisplayedSections] = useState([]);
  const sectionsData = [
    {
      imageUrl: "https://source.unsplash.com/featured/?art",
      category: "Painting",
      title: "Starry Night",
      description: "Vincent van Gogh's masterpiece depicting a starry night sky over a quaint village."
    },
    {
      imageUrl: "https://source.unsplash.com/featured/?paint",
      category: "Sculpture",
      title: "David",
      description: "Michelangelo's iconic marble sculpture of the biblical hero David."
    },
    {
      imageUrl: "https://source.unsplash.com/featured/?texture",
      category: "Photography",
      title: "The Afghan Girl",
      description: "Steve McCurry's famous photograph capturing the haunting green eyes of an Afghan refugee girl."
    },
    {
      imageUrl: "https://source.unsplash.com/featured/?color",
      category: "Digital Art",
      title: "Composition VII",
      description: "Wassily Kandinsky's abstract masterpiece showcasing vibrant colors and geometric shapes."
    },
    {
      imageUrl: "",
      category: "Street Art",
      title: "Banksy's Artwork",
      description: "Banksy's thought-provoking street art pieces challenging societal norms and political issues."
    },
    {
      imageUrl: "https://source.unsplash.com/featured/?painhttps://source.unsplash.com/featured/?sketcht",
      category: "Performance Art",
      title: "The Artist is Present",
      description: "Marina Abramović's performance art piece where she sat silently opposite visitors for 736 hours."
    },
    {
      imageUrl: "https://source.unsplash.com/featured/?textures",
      category: "Installation Art",
      title: "The Gates",
      description: "Christo and Jeanne-Claude's installation art project consisting of 7,503 gates adorned with saffron-colored fabric in Central Park."
    },
    {
      imageUrl: "https://source.unsplash.com/featured/?pottery",
      category: "Ceramics",
      title: "Wedgwood Pottery",
      description: "Wedgwood's exquisite ceramic creations known for their craftsmanship and intricate designs."
    },
    {
      imageUrl: "https://source.unsplash.com/featured/?mixedmedia",
      category: "Mixed Media",
      title: "Untitled",
      description: "An experimental mixed media artwork combining various materials to evoke different textures and meanings."
    }
  ];
  
  

  useEffect(() => {
    const sectionsWithIndex = sectionsData.map((section, index) => ({ ...section, index }));
    setDisplayedSections(sectionsWithIndex.slice(0, 3));

    const interval = setInterval(() => {
      setDisplayedSections(prev => {
        const nextIndex = (prev[prev.length - 1].index + 1) % sectionsWithIndex.length;
        return sectionsWithIndex.slice(nextIndex, nextIndex + 3);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimationWrapper key="hero-animation">
      <section className="text-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {displayedSections.map((section, index) => (
              <AnimationWrapper key={section.title} className="p-4">
                <div className="h-full border-2 border-black border-opacity-60 rounded-lg overflow-hidden">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={section.imageUrl} alt="blog" />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-slate-400 mb-1">{section.category}</h2>
                    <h1 className="title-font text-lg font-medium text-slate-200 mb-3">{section.title}</h1>
                    <p className="leading-relaxed mb-3">{section.description}</p>
                    <div className="flex items-center flex-wrap">
                      <a href="/explore">
                      <button className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 focus:outline-none">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default Hero;
