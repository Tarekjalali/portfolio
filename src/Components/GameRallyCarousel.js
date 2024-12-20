import React, { useState, useEffect } from "react";
import { Carousel, RadioGroup, Radio, Divider } from 'rsuite';
import "rsuite/dist/rsuite.min.css"; // Make sure to import the CSS

const GameRallyCarousel = () => {
  const [placement, setPlacement] = React.useState('left');
  const [shape, setShape] = React.useState('bar');
  const [isHovered, setIsHovered] = useState(false); // State to track hover event
  const [isVisible, setIsVisible] = useState(false); // State to toggle popup visibility
  const [activeIndex, setActiveIndex] = useState(0); // State to track the current index of the carousel
  const [autoPlay, setAutoPlay] = useState(true); // State to control autoplay

  // Content for each image (can be dynamic, based on your use case)
  const popoverContent = [
    {
      title: "Discover New Releases",
      description: "Explore the freshest titles in gaming, powered by RAWG API.",
    },
    {
      title: "Join Gaming Events",
      description: "Compete and showcase your skills in exciting gaming tournaments.",
    },
    {
      title: "Your Profile Hub",
      description: "Easily manage your events, applications, and gaming journey.",
    },
    {
      title: "Event Applicants",
      description: "Review participants and manage applications seamlessly.",
    }
    
  ];

  // Handle hover event to stop autoplay and show the popup
  const handleMouseEnter = () => {
    setIsHovered(true); // Set hovered state to true
    setIsVisible(true); // Show the popup
    setAutoPlay(false); // Stop autoplay
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Set hovered state to false
    setIsVisible(false); // Hide the popup
    setAutoPlay(true); // Restart autoplay
  };

  // Handle change of carousel index
  const handleSelect = (index) => {
    setActiveIndex(index); // Update the active index when the carousel slides
  };

  // Auto-play functionality: Change activeIndex every 3 seconds
  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % popoverContent.length);
      }, 3000); // Interval of 3 seconds (3000 ms)
      return () => clearInterval(interval); // Clean up the interval on unmount or when autoplay is turned off
    }
  }, [autoPlay]); // Only run the effect if autoPlay state changes

  return (
    <div style={{ width: '700px', display: 'flex', justifyContent: 'center' }}>
      <>
        <RadioGroup
          name="radioList"
          inline
          appearance="picker"
          defaultValue={placement}
          onChange={setPlacement}
        >
        </RadioGroup>
        <Divider vertical />
        <RadioGroup
          name="radioList"
          inline
          appearance="picker"
          defaultValue={shape}
          onChange={setShape}
        >
        </RadioGroup>

        <div
          style={{ position: 'relative' }}
          onMouseEnter={handleMouseEnter} // Trigger hover event on mouse enter
          onMouseLeave={handleMouseLeave} // Trigger hover event on mouse leave
        >
          <Carousel
            key={`${placement}.${shape}`}
            placement={placement}
            shape={shape}
            className="custom-slider"
            interval={3000} // Autoplay interval in milliseconds (3 seconds)
            autoplay={autoPlay} // Use the autoplay state to control the autoplay behavior
            activeIndex={activeIndex} // Control the active index
            onSelect={handleSelect} // Update active index when carousel slides
          >
            <img
              src="https://i.ibb.co/C039ngV/1.jpg"
              height="250"
              width="500"
              style={{ cursor: 'pointer' }}
            />
            <img
              src="https://i.ibb.co/2Nw9xFt/2.jpg"
              height="250"
              width="500"
              style={{ cursor: 'pointer' }}
            />
            <img
              src="https://i.ibb.co/HGVcr41/3.jpg"
              height="250"
              width="500"
              style={{ cursor: 'pointer' }}
            />
            <img
              src="https://i.ibb.co/b2K2Xz0/4.jpg"
              height="250"
              width="500"
              style={{ cursor: 'pointer' }}
            />
            
          </Carousel>

          {/* Popup */}
          {isVisible && (
            <div
              data-popover
              role="tooltip"
              className="absolute z-10 inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-100 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
              style={{
                top: '50%',
                left: '-320px', // Move the popup further left
                transform: 'translateY(-50%)', // Keep it vertically centered
              }}
            >
              <div className="p-3 space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">{popoverContent[activeIndex].title}</h3>
                <p>{popoverContent[activeIndex].description}</p>
                
              </div>
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default GameRallyCarousel;
