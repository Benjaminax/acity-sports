import React from 'react';
import Footer from '../components/Footer';

const VarsityPage = ({ isDarkMode }) => {
  const teams = [
    {
      sport: 'Football',
      accent: '#c0392b',
      captain: 'Sodja',
      coach: 'Coach Mensah',
      record: '2024/25 Champions',
      players: ['Sodja', 'Ankama', 'Kbam', 'Kkjr', 'Joe', 'Sniffer', 'Kumi', 'Volta', 'Asante', 'Frimpong', 'Breezy'],
    },
    {
      sport: 'Basketball',
      accent: '#c0392b',
      captain: 'Kkjr',
      coach: 'Coach Boateng',
      record: 'Current Title Holders',
      players: ['Kkjr', 'Joe', 'Breezy', 'Falcon G.', 'Mensah D.', 'Frimpong', 'Asante', 'Volta', 'Kumi', 'Adjei'],
    },
    {
      sport: 'Volleyball',
      accent: '#c0392b',
      captain: 'Volta G.',
      coach: 'Coach Acheampong',
      record: 'Runners Up 2024',
      players: ['Volta G.', 'Asante K.', 'Mensah D.', 'Frimpong J.', 'Adjei L.', 'Kumi R.', 'Ankama S.', 'Breezy A.'],
    },
  ];

  const bg = isDarkMode ? 'bg-[#111111] text-gray-100' : 'bg-[#f5f5f5] text-gray-900';
  const cardBg = isDarkMode ? 'bg-[#1c1c1c] border-[#2e2e2e]' : 'bg-white border-[#e0e0e0]';
  const pillBg = isDarkMode ? 'bg-[#2a2a2a] text-gray-300' : 'bg-[#f0f0f0] text-gray-700';
  const mutedText = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  return (
    <div className={`min-h-screen flex flex-col ${bg}`}>
      <div className="bg-[#c0392b] py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-red-200 text-xs font-bold uppercase tracking-widest mb-1">Acity Sports</p>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Varsity</h1>
          <p className="text-red-100 text-sm mt-1 font-medium">Official Acity Sports Varsity Programme</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* About */}
        <div className={`border p-6 mb-8 ${cardBg}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-5 bg-[#c0392b]" />
            <h2 className="text-base font-bold uppercase tracking-wide">About the Programme</h2>
          </div>
          <p className={`text-sm leading-relaxed ${mutedText}`}>
            The Acity Sports Varsity programme represents the highest level of inter-college athletic competition.
            Our varsity teams compete across football, basketball, and volleyball, fostering discipline,
            teamwork, and excellence both on and off the field.
          </p>
        </div>

        {/* Teams */}
        <div className="space-y-6">
          {teams.map((team, i) => (
            <div key={i} className={`border card-hover ${cardBg}`}>
              {/* Team header bar */}
              <div className="bg-[#c0392b] px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-red-200 text-xs font-bold uppercase tracking-widest">Varsity</p>
                  <h3 className="text-xl font-black text-white">{team.sport}</h3>
                </div>
                <span className="text-xs font-bold text-white border border-white/40 px-3 py-1">{team.record}</span>
              </div>

              {/* Team body */}
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${mutedText}`}>Captain</p>
                    <p className="font-bold text-base">{team.captain}</p>
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${mutedText}`}>Coach</p>
                    <p className="font-bold text-base">{team.coach}</p>
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${mutedText}`}>Squad Size</p>
                    <p className="font-bold text-base">{team.players.length} Players</p>
                  </div>
                </div>

                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${mutedText}`}>Squad</p>
                  <div className="flex flex-wrap gap-2">
                    {team.players.map((p, j) => (
                      <span key={j} className={`px-3 py-1 text-xs font-semibold uppercase tracking-wide ${pillBg}`}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default VarsityPage;
