import React from 'react';
import { useParams } from 'react-router-dom';

const ExploreDetails = () => {
  const {imageURL, heading } = useParams(); // Get id, imageURL, and heading from URL parameters

  return (
    <div className='bg-black text-white'>
      <h1>Gallery Item Details</h1>
      <p>Heading: {heading}</p>
      <img src={imageURL} alt="Gallery Item" />
    </div>
  );
};

export default ExploreDetails;