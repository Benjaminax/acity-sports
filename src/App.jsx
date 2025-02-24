import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import UpcomingMatches from './components/UpcomingMatches';
import LatestNews from './components/LatestNews';
import Footer from './components/Footer';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import FootballImage from './assets/Football.fixtures.jpg'; // Import images
import BasketballImage from './assets/Basketball.fixtures.jpg';
import VolleyballImage from './assets/Volleyball.fixtures.jpg';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode and apply/remove the 'dark' class on the HTML element
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply/remove the 'dark' class on the HTML element when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const slideshowImages = [
    image1,
    image2,
    image3,
  ];

  const matches = [
    {
      sport: 'Football',
      date: '2025-03-26T18:00:00',
      image: FootballImage, // Use imported image
      location: 'Stadium A',
      description: 'Exciting football match between Team A and Team B.',
    },
    {
      sport: 'Basketball',
      date: '2023-10-20T19:00:00',
      image: BasketballImage, // Use imported image
      location: 'Arena B',
      description: 'Intense basketball game between Team C and Team D.',
    },
    {
      sport: 'Volleyball',
      date: '2023-10-25T20:00:00',
      image: VolleyballImage, // Use imported image
      location: 'Court C',
      description: 'Thrilling volleyball match between Team E and Team F.',
    },
  ];

  return (
    <div className={`font-bebas flex flex-col min-h-screen ${isDarkMode ? 'bg-[#1A1A1A] text-gray-100' : 'bg-white text-black'}`}>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Slideshow images={slideshowImages} />
      <UpcomingMatches matches={matches} isDarkMode={isDarkMode} />
      <LatestNews isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;