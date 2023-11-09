import React, { useState, useEffect } from 'react';

// List of image URLs
const imageList = [
  'path_to_first_image.jpg', // Replace with your actual image paths
  'path_to_second_image.jpg',
  'path_to_third_image.jpg',
  // Add as many images as you want here
];

// Function to get a random index for the image list
const getRandomImageIndex = () => Math.floor(Math.random() * imageList.length);

export default function Legend() {
  // State to hold the current index of the image to be displayed
  const [currentImageIndex, setCurrentImageIndex] = useState(getRandomImageIndex());

  // Effect hook to set up the interval for image rotation
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(getRandomImageIndex());
    }, 3000); // Rotate images every 3000 milliseconds (3 seconds)

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Render the current image
  return (
    <div className="image-container">
      <img src={imageList[currentImageIndex]} alt="Rotating legend" />
    </div>
  );
}
