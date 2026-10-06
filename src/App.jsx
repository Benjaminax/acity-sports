import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import UpcomingMatches from './components/UpcomingMatches';
import LatestNews from './components/LatestNews';
import Footer from './components/Footer';

// Pages
import FootballPage from './pages/FootballPage';
import BasketballPage from './pages/BasketballPage';
import VolleyballPage from './pages/VolleyballPage';
import VarsityPage from './pages/VarsityPage';
import NewsPage from './pages/NewsPage';
import AchievementsPage from './pages/AchievementsPage';
import FPLPage from './pages/FPLPage';
import HelpPage from './pages/HelpPage';
import AdminPage from './pages/AdminPage';

// Assets
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import FootballImage from './assets/Football.fixtures.jpg';
import BasketballImage from './assets/Basketball.fixtures.jpg';
import VolleyballImage from './assets/Volleyball.fixtures.jpg';

/* ─── Scroll-to-top on route change ─────────────────────────── */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

/* ─── Home Page ──────────────────────────────────────────────── */
const HomePage = ({ isDarkMode }) => {
  const slideshowImages = [image1, image2, image3];
  const matches = [
    {
      sport: 'Football',
      date: '2025-03-26T18:00:00',
      image: FootballImage,
      location: 'Stadium A',
      description: 'Exciting football match between Team A and Team B.',
    },
    {
      sport: 'Basketball',
      date: '2023-10-20T19:00:00',
      image: BasketballImage,
      location: 'Arena B',
      description: 'Intense basketball game between Team C and Team D.',
    },
    {
      sport: 'Volleyball',
      date: '2023-10-25T20:00:00',
      image: VolleyballImage,
      location: 'Court C',
      description: 'Thrilling volleyball match between Team E and Team F.',
    },
  ];

  return (
    <>
      <Slideshow images={slideshowImages} />
      <UpcomingMatches matches={matches} isDarkMode={isDarkMode} />
      <LatestNews isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
};

/* ─── Root App ───────────────────────────────────────────────── */
const AppContent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const bg = isDarkMode ? 'bg-[#1A1A1A] text-gray-100' : 'bg-white text-black';

  return (
    <div className={`flex flex-col min-h-screen ${bg}`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      {/* Offset for fixed navbar */}
      <div className="pt-[84px]">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage isDarkMode={isDarkMode} />} />
          <Route path="/sports/football" element={<FootballPage isDarkMode={isDarkMode} />} />
          <Route path="/sports/basketball" element={<BasketballPage isDarkMode={isDarkMode} />} />
          <Route path="/sports/volleyball" element={<VolleyballPage isDarkMode={isDarkMode} />} />
          <Route path="/varsity" element={<VarsityPage isDarkMode={isDarkMode} />} />
          <Route path="/news" element={<NewsPage isDarkMode={isDarkMode} />} />
          <Route path="/achievements" element={<AchievementsPage isDarkMode={isDarkMode} />} />
          <Route path="/fpl" element={<FPLPage isDarkMode={isDarkMode} />} />
          <Route path="/help" element={<HelpPage isDarkMode={isDarkMode} />} />
          <Route path="/admin" element={<AdminPage isDarkMode={isDarkMode} />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;