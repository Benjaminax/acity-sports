import { Instagram, Phone } from 'lucide-react'; // Import Instagram and Phone icons from Lucide
import { useState } from 'react';

const Footer = ({ isDarkMode }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle the subscription logic here, e.g., send the email to a server
    console.log(`Subscribed with email: ${email}`);
    // Reset the email input
    setEmail('');
  };

  return (
    <footer className={`${isDarkMode ? 'bg-red-900' : 'bg-[#1A1A1A]'} text-white py-10 px-4`}>
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Us Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
            <a href="mailto:acity.sports@gmail.com" className={`text-sm mb-2 block ${isDarkMode ? 'text-white' : 'text-[#A0A0A0]'}`}>acity.sports@gmail.com</a>
            <p className={`text-sm mb-2 ${isDarkMode ? 'text-white' : 'text-[#A0A0A0]'}`}>Agbogba-Haatso, Ghana</p>
            <div className={`flex items-center justify-center md:justify-start text-sm mb-4 ${isDarkMode ? 'text-white' : 'text-[#A0A0A0]'}`}>
              <Phone className="w-4 h-4 mr-2" /> {/* Call icon */}
              <a href="tel:+233123456789" className={`text-sm ${isDarkMode ? 'text-white' : 'text-[#A0A0A0]'}`}>+233 123 456 789</a>
            </div>
            <a
              href="https://www.instagram.com/acitysports"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center md:justify-start text-sm transition-colors ${isDarkMode ? 'text-white' : 'text-[#A0A0A0]'}`}
            >
              <Instagram className="w-5 h-5 mr-2" /> {/* Instagram icon */}
              Instagram
            </a>
          </div>

          {/* Subscribe Section */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">SUBSCRIBE</h3>
            <p className={`text-sm mb-4 ${isDarkMode ? 'text-white' : 'text-[#A0A0A0]'}`}>
              Enter your email to subscribe to the ACity Newsletter
            </p>
            <form className="flex justify-center" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 w-48 rounded-l-lg bg-[#2D2D2D] text-white border border-[#444444] focus:outline-none text-sm"
              />
              <button
                type="submit"
                className="p-2 bg-[#af0d0d] rounded-r-lg hover:bg-red-950 transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Acity Section */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">ACITY SPORTS</h3>
            <p className={`text-sm ${isDarkMode ? 'text-white' : 'text-[#A0A0A0]'}`}>Acity Sports. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;