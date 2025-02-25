import { useState } from 'react';
import { Sun, Moon, ChevronDown, Search, Menu, X } from 'lucide-react';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarDropdownOpen, setIsSidebarDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebarDropdown = () => {
    setIsSidebarDropdownOpen(!isSidebarDropdownOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-red-900 py-1 px-4 text-white font-sans shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Navigation Links */}
        <div className="flex items-center space-x-6">
          <a href="/">
            <img src="/src/assets/acity sports.png" alt="Logo" className="h-20" />
          </a>
          <ul className="hidden lg:flex space-x-6">
            <li><a href="#" className="navbar-tab hover:text-gray-200 font-semibold">HOME</a></li>
            <li className="relative group" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <button className="navbar-tab hover:text-gray-200 flex items-center font-semibold">
                SPORTS <ChevronDown className="ml-1 h-5 w-5" />
              </button>
              {isDropdownOpen && (
                <ul className="absolute bg-red-900 space-y-2 p-2">
                  <li><a href="#" className="hover:text-gray-200">Football</a></li>
                  <li><a href="#" className="hover:text-gray-200">Basketball</a></li>
                  <li><a href="#" className="hover:text-gray-200">Volleyball</a></li>
                </ul>
              )}
            </li>
            <li><a href="#" className="navbar-tab hover:text-gray-200 font-semibold">VARSITY</a></li>
            <li><a href="#" className="navbar-tab hover:text-gray-200 font-semibold">NEWS</a></li>
            <li><a href="#" className="navbar-tab hover:text-gray-200 font-semibold">ACHIEVEMENTS</a></li>
          </ul>
        </div>

        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="hidden lg:block relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-white placeholder-white focus:outline-none border-b border-white w-48"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <Search className="h-5 w-5 text-white cursor-pointer" />
            </button>
          </div>

          {/* Dark Mode Toggle */}
          <button onClick={toggleTheme} className="p-2 bg-gray-800 text-white rounded">
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Hamburger Menu Icon */}
          <button onClick={toggleMenu} className="lg:hidden">
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Sidebar Menu */}
      {isMenuOpen && (
        <div className={`fixed inset-0 bg-black/50 transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} z-50 lg:hidden`}>
          <div className="bg-red-800 w-64 h-full p-5">
            <button onClick={toggleMenu} className="text-white text-lg mb-5">
              <X className="h-6 w-6" />
            </button>
            {/* Sidebar Search Bar */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-white placeholder-white focus:outline-none border-b border-white w-full"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-white cursor-pointer" />
              </button>
            </div>
            <ul className="space-y-4">
              <li><a href="#" className="block text-white hover:text-gray-200">Home</a></li>
              <li>
                <button onClick={toggleSidebarDropdown} className="block text-white hover:text-gray-200 w-full text-left">
                  Sports <ChevronDown className="inline h-5 w-5" />
                </button>
                {isSidebarDropdownOpen && (
                  <ul className="pl-4 space-y-2">
                    <li><a href="#" className="block text-white hover:text-gray-200">Football</a></li>
                    <li><a href="#" className="block text-white hover:text-gray-200">Basketball</a></li>
                    <li><a href="#" className="block text-white hover:text-gray-200">Volleyball</a></li>
                  </ul>
                )}
              </li>
              <li><a href="#" className="block text-white hover:text-gray-200">Varsity</a></li>
              <li><a href="#" className="block text-white hover:text-gray-200">News</a></li>
              <li><a href="#" className="block text-white hover:text-gray-200">Achievements</a></li>
            </ul>
          </div>
          <div className="flex-1" onClick={toggleMenu}></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;