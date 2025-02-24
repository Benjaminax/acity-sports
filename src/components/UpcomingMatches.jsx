import React, { useState, useEffect, useRef } from 'react';
import { Share } from 'lucide-react';

const UpcomingMatches = ({ matches, isDarkMode }) => {
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const modalRef = useRef(null);

  // Function to calculate time remaining until the fixed date
  const calculateTimeRemaining = () => {
    const now = new Date();
    const matchTime = new Date('2025-03-26T00:00:00');
    const difference = matchTime - now;

    if (difference > 0) {
      return difference;
    }
    return 0;
  };

  // Update the countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Automatically move to the next match after a delay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMatchIndex((prev) => (prev + 1) % matches.length);
    }, 5000); // Change match every 5 seconds

    return () => clearInterval(interval);
  }, [matches.length]);

  // Format the countdown time
  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  // Open modal with match details
  const openModal = (match) => {
    setSelectedMatch(match);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMatch(null);
  };

  // Function to share match on social media
  const shareMatch = (match) => {
    const shareUrl = match.url; // URL to share
    const shareText = `Check out this match: ${match.teams} on ${match.date}. ${match.description}`;
    const countdown = `Countdown: ${formatTime(calculateTimeRemaining())}`;
    const imageUrl = match.image;
    const websiteUrl = window.location.href;

    if (navigator.share) {
      // Use Web Share API if available
      navigator.share({
        title: 'Upcoming Match',
        text: `${shareText}\n${countdown}\n${imageUrl}\n${websiteUrl}`,
        url: shareUrl,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText + '\n' + countdown + '\n' + imageUrl + '\n' + websiteUrl)}&url=${encodeURIComponent(shareUrl)}`;
      window.open(twitterUrl, '_blank');
    }
  };

  // Update scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollPosition(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className={`container mx-auto my-8 px-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
      {/* Red Line */}
      <div className="h-1 bg-red-600 mb-4" style={{ width: `${scrollPosition}%` }}></div>

      <h2 className="text-2xl font-bold mb-4">Upcoming Matches</h2>
      {/* Grid Layout for Matches */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {matches.slice(0, 3).map((match, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
            onClick={() => openModal(match)}
          >
            {/* Image Container */}
            <div className="w-full h-64">
              <a href={match.image} target="_blank" rel="noopener noreferrer">
                <img
                  src={match.image}
                  alt={match.sport}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>
            {/* Dark Overlay */}
            <div className={`absolute inset-0 ${isDarkMode ? 'bg-black/50' : 'bg-black/30'} flex flex-col justify-center items-center text-white`}>
              <h3 className="text-xl font-bold">{match.sport}</h3>
              <p>{match.date}</p>
              <p>{match.teams}</p>
            </div>
            {/* Share Icon */}
            <div
              className={`absolute top-2 right-2 p-2 rounded-full ${isDarkMode ? 'bg-black/70' : 'bg-white/90'} hover:bg-gray-200 transition-colors`}
              onClick={(e) => {
                e.stopPropagation(); // Prevent opening the modal
                shareMatch(match);
              }}
            >
              <Share className="h-5 w-5" />
            </div>
          </div>
        ))}
      </div>

      {/* Countdown Clock */}
      <div className="mt-4 text-center">
        <h3 className="text-xl font-bold">Next Match in:</h3>
        <p className="text-2xl">{formatTime(timeRemaining)}</p>
      </div>

      {/* Match Details Modal */}
      {isModalOpen && selectedMatch && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div ref={modalRef} className={`p-6 rounded-lg shadow-lg max-w-md w-full ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            {/* Image in Modal */}
            <div className="w-full h-100 mb-4 flex justify-center items-center">
              <img
                src={selectedMatch.image}
                alt={selectedMatch.sport}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">{selectedMatch.sport}</h3>
            <p className="text-lg mb-4">Date: {selectedMatch.date}</p>
            <p className="text-lg mb-4">Teams: {selectedMatch.teams}</p>
            <p className="text-lg mb-4">Location: {selectedMatch.location || 'TBD'}</p>
            <p className="text-lg mb-4">Description: {selectedMatch.description || 'No description available.'}</p>
            <p className="text-lg mb-4">Countdown: {formatTime(timeRemaining)}</p>
            {/* Share Button in Modal */}
            <button
              onClick={() => shareMatch(selectedMatch)}
              className="bg-gray-950 text-white px-4 py-2 rounded hover:bg-gray-950 transition-colors flex items-center space-x-2"
            >
              <Share className="h-5 w-5" />
              <span>Share</span>
            </button>
            <button
              onClick={closeModal}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingMatches;