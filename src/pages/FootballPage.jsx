import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Trophy, Calendar, Star } from 'lucide-react';

const FootballPage = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState('fixtures');

  const fixtures = [
    { home: 'Lions FC', away: 'Vikings SC', date: 'Oct 12, 2026', time: '15:00', venue: 'Main Pitch' },
    { home: 'Falcons', away: 'Warriors', date: 'Oct 14, 2026', time: '17:00', venue: 'East Ground' },
    { home: 'Dragons', away: 'Elites', date: 'Oct 16, 2026', time: '16:00', venue: 'Main Pitch' },
    { home: 'Vikings SC', away: 'Dragons', date: 'Oct 19, 2026', time: '15:00', venue: 'West Ground' },
    { home: 'Warriors', away: 'Lions FC', date: 'Oct 21, 2026', time: '17:00', venue: 'Main Pitch' },
  ];

  const table = [
    { pos: 1, team: 'Lions FC', played: 8, won: 6, drawn: 1, lost: 1, gd: '+14', pts: 19 },
    { pos: 2, team: 'Vikings SC', played: 8, won: 5, drawn: 2, lost: 1, gd: '+10', pts: 17 },
    { pos: 3, team: 'Dragons', played: 8, won: 4, drawn: 1, lost: 3, gd: '+5', pts: 13 },
    { pos: 4, team: 'Falcons', played: 8, won: 3, drawn: 2, lost: 3, gd: '+1', pts: 11 },
    { pos: 5, team: 'Warriors', played: 8, won: 2, drawn: 2, lost: 4, gd: '-6', pts: 8 },
    { pos: 6, team: 'Elites', played: 8, won: 1, drawn: 0, lost: 7, gd: '-24', pts: 3 },
  ];

  const topScorers = [
    { name: 'Sodja', team: 'Lions FC', goals: 12, assists: 4 },
    { name: 'Kbam', team: 'Vikings SC', goals: 9, assists: 6 },
    { name: 'Sniffer', team: 'Dragons', goals: 8, assists: 3 },
    { name: 'Kumi', team: 'Dragons', goals: 7, assists: 5 },
    { name: 'Ankama', team: 'Falcons', goals: 6, assists: 2 },
  ];

  const bg = isDarkMode ? 'bg-[#111111] text-gray-100' : 'bg-[#f5f5f5] text-gray-900';
  const cardBg = isDarkMode ? 'bg-[#1c1c1c] border-[#2e2e2e]' : 'bg-white border-[#e0e0e0]';
  const headerBg = isDarkMode ? 'bg-[#c0392b]' : 'bg-[#c0392b]';
  const tabActive = 'bg-[#c0392b] text-white';
  const tabInactive = isDarkMode
    ? 'text-gray-400 hover:text-white border border-[#2e2e2e]'
    : 'text-gray-600 hover:text-gray-900 border border-[#e0e0e0] bg-white';

  return (
    <div className={`min-h-screen flex flex-col ${bg}`}>
      {/* Page Header */}
      <div className={`${headerBg} py-10 px-4`}>
        <div className="max-w-5xl mx-auto">
          <p className="text-red-200 text-xs font-bold uppercase tracking-widest mb-1">Acity Sports</p>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Football</h1>
          <p className="text-red-100 text-sm mt-1 font-medium">League Season 2026</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {[
            { key: 'fixtures', label: 'Fixtures' },
            { key: 'table', label: 'League Table' },
            { key: 'scorers', label: 'Top Scorers' },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 text-sm font-bold uppercase tracking-wide transition-colors duration-150 ${activeTab === tab.key ? tabActive : tabInactive}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Fixtures */}
        {activeTab === 'fixtures' && (
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-5 bg-[#c0392b]" />
              <h2 className="text-base font-bold uppercase tracking-wide">Upcoming Fixtures</h2>
            </div>
            {fixtures.map((f, i) => (
              <div key={i} className={`border p-4 card-hover ${cardBg}`}>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 text-right font-bold">{f.home}</div>
                  <div className="text-center px-4 min-w-[80px]">
                    <div className="text-xs font-black text-[#c0392b] uppercase tracking-widest">VS</div>
                    <div className={`text-xs mt-0.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{f.time}</div>
                  </div>
                  <div className="flex-1 font-bold">{f.away}</div>
                  <div className={`text-right text-xs shrink-0 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <div className="font-semibold">{f.date}</div>
                    <div>{f.venue}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Table */}
        {activeTab === 'table' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-5 bg-[#c0392b]" />
              <h2 className="text-base font-bold uppercase tracking-wide">League Table</h2>
            </div>
            <div className={`border overflow-hidden ${cardBg}`}>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#c0392b] text-white">
                    {['Pos', 'Team', 'P', 'W', 'D', 'L', 'GD', 'Pts'].map(h => (
                      <th key={h} className="py-3 px-3 text-left text-xs font-bold uppercase tracking-wide">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-t ${isDarkMode ? 'border-[#2e2e2e]' : 'border-[#f0f0f0]'} hover:bg-red-50/10 transition-colors`}
                    >
                      <td className="py-3 px-3 font-black text-xs">{row.pos}</td>
                      <td className="py-3 px-3 font-semibold">{row.team}</td>
                      <td className="py-3 px-3">{row.played}</td>
                      <td className="py-3 px-3">{row.won}</td>
                      <td className="py-3 px-3">{row.drawn}</td>
                      <td className="py-3 px-3">{row.lost}</td>
                      <td className={`py-3 px-3 font-semibold text-xs ${row.gd.startsWith('+') ? 'text-green-600' : 'text-[#c0392b]'}`}>{row.gd}</td>
                      <td className="py-3 px-3 font-black text-[#c0392b]">{row.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Top Scorers */}
        {activeTab === 'scorers' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-5 bg-[#c0392b]" />
              <h2 className="text-base font-bold uppercase tracking-wide">Top Scorers</h2>
            </div>
            <div className={`border overflow-hidden ${cardBg}`}>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#c0392b] text-white">
                    {['Rank', 'Player', 'Team', 'Goals', 'Assists'].map(h => (
                      <th key={h} className="py-3 px-4 text-left text-xs font-bold uppercase tracking-wide">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {topScorers.map((p, i) => (
                    <tr key={i} className={`border-t ${isDarkMode ? 'border-[#2e2e2e]' : 'border-[#f0f0f0]'} hover:bg-red-50/10 transition-colors`}>
                      <td className="py-3 px-4 font-black text-xs text-[#c0392b]">{i + 1}</td>
                      <td className="py-3 px-4 font-bold">{p.name}</td>
                      <td className={`py-3 px-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{p.team}</td>
                      <td className="py-3 px-4 font-black">{p.goals}</td>
                      <td className={`py-3 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{p.assists}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default FootballPage;
