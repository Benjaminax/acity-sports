import React from 'react';

const LatestNews = ({ isDarkMode }) => {
  const newsArticles = [
    {
      title: "Ankama leaves Lions for Vikings",
      time: "2d | news",
      image: "/latestnews assets/01.jpg"
    },
    {
      title: "Falcons: The Underdogs",
      time: "3d | news",
      image: "/latestnews assets/02.jpg"
    },
    {
      title: "Warriors: The Trying Underdogs",
      description: "Warriors are putting in the effort to rise in the league.",
      time: "5d | news",
      image: "/latestnews assets/03.jpg"
    },
    {
      title: "Elites: On Their Way to the Worst",
      description: "Elites are struggling this season and might end up at the bottom.",
      time: "5d | news",
      image: "/latestnews assets/04.jpg"
    },
    {
      title: "Dragons: Team with Sniffer, Kumi, and Joe",
      time: "1w | news",
      image: "/latestnews assets/05.jpg"
    },
    {
      title: "Lions and Vikings: The Best Teams",
      description: "Lions and Vikings, with players like Sodja, Kbam, and Kkjr, are leading the league.",
      time: "1w | news",
      image: "/latestnews assets/06.jpg"
    }
  ];

  return (
    <div id="latest-news" className={`max-w-4xl mx-auto my-8 px-0 ${isDarkMode ? 'text-gray-200' : 'text-black'}`}>
      <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center sm:text-left">ACITY SPORTS LEAGUE UPDATES</h2>
      <div className="grid grid-cols-1 scroll-m-7 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {newsArticles.map((article, index) => (
          <div key={index} className={`rounded-lg shadow-lg overflow-hidden ${isDarkMode ? 'bg-red-900' : 'bg-white'} ${index % 3 === 0 ? 'col-span-1 sm:col-span-2' : 'col-span-1'}`}>
            <div className="w-full h-64 bg-gray-300">
              {/* Placeholder for image */}
              <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold">{article.title}</h3>
              {article.description && <p className="mt-2">{article.description}</p>}
              {article.time && <p className={`mt-2 text-sm ${isDarkMode ? 'text-white' : 'text-gray-500'}`}>{article.time}</p>}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4">
        <h3 className="text-xl font-bold">ACITY SPORTS TALK SHOW UPDATES</h3>
        <div className={`rounded-lg shadow-lg overflow-hidden mt-4 ${isDarkMode ? 'bg-red-900' : 'bg-white'}`}>
          <div className="w-full h-64 bg-gray-300">
            {/* Placeholder for image */}
            <img src="\Inter-levels.png" alt="Talk Show" className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold">LATEST EPISODE</h3>
            <p className="mt-2">Catch the latest discussions and insights on Acity Sports Talk Show every Monday and Friday.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;