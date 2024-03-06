import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { featuredImg, title, content, relatedImg1, relatedImg2 } = useParams();

  return (
    <section className="text-white bg-black body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <h1 className="text-white text-3xl mb-8 text-center">{title}</h1>
          <div className="rounded-lg overflow-hidden aspect-w-16 aspect-h-9 mb-8">
            <img alt="content" className="w-full h-full object-cover object-center" src={featuredImg} />
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center mt-10">
            <div className="sm:w-1/3 flex flex-col items-center mb-8 sm:mb-0">
              <img className='w-48 h-48 object-cover mb-4' src={relatedImg1} alt="" />
              <img className='w-48 h-48 object-cover' src={relatedImg2} alt="" />
            </div>
            <div className="sm:w-2/3 sm:pl-8 text-center sm:text-left">
              <p className="leading-relax ed text-justify mb-4">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
