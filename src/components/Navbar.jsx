import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, ChevronDown, Search, Menu, X } from 'lucide-react';

const LOGO_PATH = '/acity sports.png';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarDropdownOpen, setIsSidebarDropdownOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY.current;

      setIsNavVisible(currentScrollY < 40 || scrollingUp);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path) => location.pathname === path;

  const navLinkClass = (path) =>
    `navbar-tab font-semibold text-sm tracking-wide transition-colors duration-150 ${
      isActive(path)
        ? 'text-white border-b-2 border-white pb-1'
        : 'hover:text-gray-200'
    }`;

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-[#c0392b] py-1 px-4 text-white shadow-md z-50 transition-transform duration-300 ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo + Nav Links */}
        <div className="flex items-center space-x-6">
          <Link to="/">
            <img src={LOGO_PATH} alt="Acity Sports" className="h-20" />
          </Link>

          <ul className="hidden lg:flex items-center space-x-6">
            <li>
              <Link to="/" className={navLinkClass('/')}>Home</Link>
            </li>

            {/* Sports Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="navbar-tab hover:text-gray-200 flex items-center font-semibold text-sm tracking-wide">
                Sports
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <ul className="absolute top-full left-0 mt-0 bg-[#a93226] w-44 shadow-lg z-50 border-t-2 border-white/20">
                  {[
                    { label: 'Football', path: '/sports/football' },
                    { label: 'Basketball', path: '/sports/basketball' },
                    { label: 'Volleyball', path: '/sports/volleyball' },
                  ].map(({ label, path }) => (
                    <li key={path}>
                      <Link
                        to={path}
                        className={`block px-4 py-3 text-sm font-semibold hover:bg-[#922b21] transition-colors ${
                          isActive(path) ? 'bg-[#922b21]' : ''
                        }`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><Link to="/varsity" className={navLinkClass('/varsity')}>Varsity</Link></li>
            <li><Link to="/news" className={navLinkClass('/news')}>News</Link></li>
            <li><Link to="/achievements" className={navLinkClass('/achievements')}>Achievements</Link></li>
            <li><Link to="/help" className={navLinkClass('/help')}>Help</Link></li>
            <li><Link to="/admin" className={navLinkClass('/admin')}>Admin</Link></li>

            {/* FPL tab — navy accent to stand out from red navbar */}
            <li>
              <Link
                to="/fpl"
                className={`px-3 py-1.5 text-xs font-black uppercase tracking-widest transition-colors duration-150 ${
                  isActive('/fpl')
                    ? 'bg-white text-[#1a1a2e]'
                    : 'bg-[#1a1a2e] text-white hover:bg-[#2c2c54]'
                }`}
              >
                FPL
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden lg:block relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-white placeholder-white/60 focus:outline-none border-b border-white/40 focus:border-white w-36 text-sm pb-1 transition-all"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2">
              <Search className="h-4 w-4 text-white/70 cursor-pointer" />
            </button>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 bg-[#a93226] hover:bg-[#922b21] text-white transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Hamburger */}
          <button onClick={toggleMenu} className="lg:hidden">
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 lg:hidden" onClick={toggleMenu}>
          <div
            className="bg-[#c0392b] w-72 h-full p-5 overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <img src={LOGO_PATH} alt="Acity Sports" className="h-12" />
              <button onClick={toggleMenu} className="text-white p-1">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#a93226] text-white placeholder-white/60 focus:outline-none border border-white/20 focus:border-white w-full px-4 py-2 text-sm"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
            </div>

            <ul className="space-y-0.5">
              {[
                { label: 'Home', path: '/' },
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    onClick={toggleMenu}
                    className={`block px-4 py-3 font-semibold text-sm transition-colors ${
                      isActive(path) ? 'bg-[#922b21] text-white' : 'text-white hover:bg-[#a93226]'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}

              {/* Sports dropdown mobile */}
              <li>
                <button
                  onClick={() => setIsSidebarDropdownOpen(!isSidebarDropdownOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 font-semibold text-sm text-white hover:bg-[#a93226] transition-colors"
                >
                  <span>Sports</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isSidebarDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isSidebarDropdownOpen && (
                  <ul className="border-l-2 border-white/20 ml-4">
                    {[
                      { label: 'Football', path: '/sports/football' },
                      { label: 'Basketball', path: '/sports/basketball' },
                      { label: 'Volleyball', path: '/sports/volleyball' },
                    ].map(({ label, path }) => (
                      <li key={path}>
                        <Link
                          to={path}
                          onClick={toggleMenu}
                          className={`block px-4 py-2.5 text-sm font-semibold transition-colors ${
                            isActive(path) ? 'bg-[#922b21] text-white' : 'text-white/80 hover:bg-[#a93226]'
                          }`}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {[
                { label: 'Varsity', path: '/varsity' },
                { label: 'News', path: '/news' },
                { label: 'Achievements', path: '/achievements' },
                { label: 'Help', path: '/help' },
                { label: 'Admin', path: '/admin' },
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    onClick={toggleMenu}
                    className={`block px-4 py-3 font-semibold text-sm transition-colors ${
                      isActive(path) ? 'bg-[#922b21] text-white' : 'text-white hover:bg-[#a93226]'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}

              {/* FPL mobile */}
              <li className="pt-3">
                <Link
                  to="/fpl"
                  onClick={toggleMenu}
                  className={`block w-full text-center px-4 py-3 font-black text-sm uppercase tracking-widest transition-colors ${
                    isActive('/fpl') ? 'bg-white text-[#1a1a2e]' : 'bg-[#1a1a2e] text-white hover:bg-[#2c2c54]'
                  }`}
                >
                  Fantasy Premier League
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;