import React from 'react';
import Footer from '../components/Footer';

const AchievementsPage = ({ isDarkMode }) => {
  const achievements = [
    {
      year: '2024',
      title: 'Football League Champions',
      team: 'Lions FC',
      sport: 'Football',
      description: 'Lions FC dominated the 2024 season with an unbeaten home record and 68 goals scored.',
    },
    {
      year: '2024',
      title: 'Basketball League Champions',
      team: 'Slam Kings',
      sport: 'Basketball',
      description: 'Slam Kings secured the title with a record-breaking points tally of 487 over the season.',
    },
    {
      year: '2024',
      title: 'Volleyball League Champions',
      team: 'Spike Masters',
      sport: 'Volleyball',
      description: 'Spike Masters went unbeaten all season, dropping only 4 sets across all their matches.',
    },
    {
      year: '2023',
      title: 'Football League Champions',
      team: 'Vikings SC',
      sport: 'Football',
      description: 'Vikings SC claimed their second consecutive football title with Kbam as top scorer.',
    },
    {
      year: '2023',
      title: 'Basketball League Champions',
      team: 'Hoops Squad',
      sport: 'Basketball',
      description: 'Hoops Squad edged out the Slam Kings in a thrilling final-day showdown.',
    },
    {
      year: '2023',
      title: 'Volleyball League Champions',
      team: 'Net Force',
      sport: 'Volleyball',
      description: 'Net Force lifted the trophy after a dramatic playoff against Sky Hitters.',
    },
  ];

  const hallOfFame = [
    { name: 'Sodja', sport: 'Football', award: 'Best Player 2024', team: 'Lions FC', stat: '24 goals' },
    { name: 'Kbam', sport: 'Football', award: 'Golden Boot 2023', team: 'Vikings SC', stat: '21 goals' },
    { name: 'Kkjr', sport: 'Basketball', award: 'MVP 2024', team: 'Slam Kings', stat: '22.4 PPG' },
    { name: 'Volta G.', sport: 'Volleyball', award: 'Best Spiker 2024', team: 'Spike Masters', stat: '48 spikes' },
    { name: 'Sniffer', sport: 'Football', award: 'Young Player 2024', team: 'Dragons', stat: '8 goals' },
  ];

  const bg = isDarkMode ? 'bg-[#111111] text-gray-100' : 'bg-[#f5f5f5] text-gray-900';
  const cardBg = isDarkMode ? 'bg-[#1c1c1c] border-[#2e2e2e]' : 'bg-white border-[#e0e0e0]';
  const mutedText = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const pillBg = isDarkMode ? 'bg-[#2a2a2a] text-gray-300' : 'bg-[#f0f0f0] text-gray-600';

  return (
    <div className={`min-h-screen flex flex-col ${bg}`}>
      <div className="bg-[#c0392b] py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-red-200 text-xs font-bold uppercase tracking-widest mb-1">Acity Sports</p>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Achievements</h1>
          <p className="text-red-100 text-sm mt-1 font-medium">Celebrating Acity Sports Excellence</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* Summary stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: 'Titles Awarded', value: '6+' },
            { label: 'Hall of Famers', value: '5' },
            { label: 'Seasons Completed', value: '3' },
          ].map((s, i) => (
            <div key={i} className={`border p-5 text-center card-hover ${cardBg}`}>
              <p className="text-3xl font-black text-[#c0392b]">{s.value}</p>
              <p className={`text-xs font-bold uppercase tracking-wide mt-1 ${mutedText}`}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Title Honours */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-1 h-5 bg-[#c0392b]" />
          <h2 className="text-base font-bold uppercase tracking-wide">Title Honours</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {achievements.map((a, i) => (
            <div key={i} className={`border card-hover ${cardBg}`}>
              <div className="bg-[#c0392b] px-5 py-3 flex items-center justify-between">
                <span className="text-white font-black text-sm uppercase tracking-wide">{a.sport}</span>
                <span className="text-red-200 text-xs font-bold uppercase tracking-widest">{a.year}</span>
              </div>
              <div className="p-5">
                <p className="font-black text-base mb-1">{a.title}</p>
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{a.team}</p>
                <p className={`text-sm ${mutedText}`}>{a.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Hall of Fame */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-1 h-5 bg-[#c0392b]" />
          <h2 className="text-base font-bold uppercase tracking-wide">Hall of Fame</h2>
        </div>
        <div className={`border overflow-hidden ${cardBg}`}>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#c0392b] text-white">
                {['Player', 'Team', 'Sport', 'Award', 'Stat'].map(h => (
                  <th key={h} className="py-3 px-4 text-left text-xs font-bold uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {hallOfFame.map((p, i) => (
                <tr
                  key={i}
                  className={`border-t ${isDarkMode ? 'border-[#2e2e2e]' : 'border-[#f0f0f0]'} hover:bg-red-50/10 transition-colors`}
                >
                  <td className="py-3 px-4 font-bold">{p.name}</td>
                  <td className={`py-3 px-4 text-sm ${mutedText}`}>{p.team}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs font-bold uppercase tracking-wide px-2 py-0.5 ${pillBg}`}>{p.sport}</span>
                  </td>
                  <td className="py-3 px-4 text-sm font-semibold">{p.award}</td>
                  <td className="py-3 px-4 font-black text-[#c0392b] text-sm">{p.stat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default AchievementsPage;
