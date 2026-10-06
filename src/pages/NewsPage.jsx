import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Search } from 'lucide-react';

const NewsPage = ({ isDarkMode }) => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Football', 'Basketball', 'Volleyball', 'General'];

  const articles = [
    {
      title: 'Ankama Leaves Lions for Vikings',
      category: 'Football',
      time: '2 days ago',
      image: '/latestnews assets/01.jpg',
      excerpt: 'Star midfielder Ankama has officially signed for rivals Vikings SC in a blockbuster transfer that shocked the league.',
      featured: true,
    },
    {
      title: 'Falcons: The Underdogs Rising',
      category: 'Football',
      time: '3 days ago',
      image: '/latestnews assets/02.jpg',
      excerpt: 'The Falcons are defying expectations this season with a series of impressive performances.',
    },
    {
      title: 'Warriors: Putting in the Effort',
      category: 'Football',
      time: '5 days ago',
      image: '/latestnews assets/03.jpg',
      excerpt: 'Warriors are determined to climb the table and have shown grit in recent fixtures.',
    },
    {
      title: 'Elites Struggle — A Wake-Up Call',
      category: 'Football',
      time: '5 days ago',
      image: '/latestnews assets/04.jpg',
      excerpt: 'The Elites face an uphill battle to avoid finishing bottom of the table this season.',
    },
    {
      title: 'Dragons: The Team to Watch',
      category: 'Football',
      time: '1 week ago',
      image: '/latestnews assets/05.jpg',
      excerpt: 'With Sniffer, Kumi, and Joe all firing, Dragons look dangerous this season.',
    },
    {
      title: 'Lions and Vikings Lead the Table',
      category: 'Football',
      time: '1 week ago',
      image: '/latestnews assets/06.jpg',
      excerpt: 'Lions and Vikings continue to dominate the Acity Sports League standings.',
    },
    {
      title: 'Slam Kings Dominate Basketball League',
      category: 'Basketball',
      time: '4 days ago',
      image: null,
      excerpt: 'Slam Kings continue their dominant run at the top of the basketball standings with 6 wins in 7 games.',
    },
    {
      title: 'Spike Masters Unbeaten at Home',
      category: 'Volleyball',
      time: '2 days ago',
      image: null,
      excerpt: 'Spike Masters remain unbeaten at home as they continue their impressive run in the volleyball league.',
    },
    {
      title: 'Acity Sports Talk Show Returns',
      category: 'General',
      time: '1 day ago',
      image: null,
      excerpt: 'The Acity Sports Talk Show is back every Monday and Friday with expert analysis.',
    },
  ];

  const filtered = articles.filter(a => {
    const matchCat = activeCategory === 'All' || a.category === activeCategory;
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered.find(a => a.featured);
  const rest = filtered.filter(a => !a.featured);

  const bg = isDarkMode ? 'bg-[#111111] text-gray-100' : 'bg-[#f5f5f5] text-gray-900';
  const cardBg = isDarkMode ? 'bg-[#1c1c1c] border-[#2e2e2e]' : 'bg-white border-[#e0e0e0]';
  const inputBg = isDarkMode
    ? 'bg-[#1c1c1c] border-[#2e2e2e] text-gray-100 placeholder-gray-500'
    : 'bg-white border-[#e0e0e0] text-gray-900 placeholder-gray-400';
  const mutedText = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const tabActive = 'bg-[#c0392b] text-white';
  const tabInactive = isDarkMode
    ? 'text-gray-400 hover:text-white border border-[#2e2e2e]'
    : 'text-gray-600 hover:text-gray-900 border border-[#e0e0e0] bg-white';

  const catLabel = {
    Football: 'FOOTBALL',
    Basketball: 'BASKETBALL',
    Volleyball: 'VOLLEYBALL',
    General: 'GENERAL',
  };

  return (
    <div className={`min-h-screen flex flex-col ${bg}`}>
      <div className="bg-[#c0392b] py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-red-200 text-xs font-bold uppercase tracking-widest mb-1">Acity Sports</p>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">News</h1>
          <p className="text-red-100 text-sm mt-1 font-medium">Latest from the Acity Sports World</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search news..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className={`w-full pl-9 pr-4 py-2.5 border text-sm focus:outline-none focus:border-[#c0392b] transition-colors ${inputBg}`}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors duration-150 ${activeCategory === cat ? tabActive : tabInactive}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {featured && (
          <div className={`border mb-8 card-hover ${cardBg}`}>
            {featured.image && (
              <div className="w-full h-64 md:h-80 overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-[#c0392b] text-white text-xs font-bold uppercase tracking-widest px-2 py-0.5">
                  {catLabel[featured.category]}
                </span>
                <span className={`text-xs font-semibold ${mutedText}`}>{featured.time}</span>
                <span className={`text-xs font-bold uppercase tracking-widest border border-current px-2 py-0.5 ${isDarkMode ? 'text-gray-400 border-gray-600' : 'text-gray-500 border-gray-300'}`}>
                  Featured
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black mb-3 leading-tight">{featured.title}</h2>
              <p className={`text-sm leading-relaxed ${mutedText}`}>{featured.excerpt}</p>
              <button className="mt-5 px-5 py-2 bg-[#c0392b] text-white text-xs font-bold uppercase tracking-wide hover:bg-[#a93226] transition-colors">
                Read More
              </button>
            </div>
          </div>
        )}

        {/* Article Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((article, i) => (
            <div key={i} className={`border card-hover cursor-pointer ${cardBg}`}>
              {article.image ? (
                <div className="w-full h-44 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className={`w-full h-44 flex items-center justify-center ${isDarkMode ? 'bg-[#2a2a2a]' : 'bg-[#e8e8e8]'}`}>
                  <span className={`text-xs font-bold uppercase tracking-widest ${mutedText}`}>{article.category}</span>
                </div>
              )}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#c0392b] text-white text-xs font-bold uppercase tracking-widest px-2 py-0.5">
                    {catLabel[article.category]}
                  </span>
                  <span className={`text-xs ${mutedText}`}>{article.time}</span>
                </div>
                <h3 className="font-bold text-sm mb-2 leading-tight">{article.title}</h3>
                <p className={`text-xs leading-relaxed line-clamp-2 ${mutedText}`}>{article.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className={`text-base font-semibold ${mutedText}`}>No articles found.</p>
          </div>
        )}
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default NewsPage;
