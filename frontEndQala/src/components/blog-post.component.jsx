import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/blog');
        setBlogData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="text-white body-font mb">
      <div className="container px-5 py-24 mx-auto flex flex-wrap gap-12 items-center">
        {blogData.map((item, index) => (
          <Link key={index} to={`/blog/${item._id}/${encodeURIComponent(item.featuredImg)}/${encodeURIComponent(item.title)}/${encodeURIComponent(item.content)}/${encodeURIComponent(item.relatedImg1)}/${encodeURIComponent(item.relatedImg2)}`}
            className="md:w-full flex items-center">
            <div className="md:w-4/12 md:h-5/6 md:mr-6 flex items-center justify-center">
              <img className="object-contain w-2/3wh max-h-full" src={item.featuredImg} alt="" />
            </div>
            <div className="md:w-3/5">
              <p className='text-xl mb-4'>{item.title}</p>
              <p className="leading-relaxed text-base">{item.excerpt}</p>
              <div className="flex md:mt-4 mt-6">
                <span className="text-indigo-500 inline-flex items-center ml-4">
                  Read Content
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;
