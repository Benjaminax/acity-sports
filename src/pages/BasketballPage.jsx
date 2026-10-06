import React, { useState } from 'react';
import Footer from '../components/Footer';

const BasketballPage = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState('fixtures');

  const fixtures = [
    { home: 'Hoops Squad', away: 'Slam Kings', date: 'Oct 11, 2026', time: '16:00', venue: 'Indoor Arena A' },
    { home: 'Rim Rockers', away: 'Net Blazers', date: 'Oct 13, 2026', time: '18:00', venue: 'Indoor Arena B' },
    { home: 'Fast Breaks', away: 'Hoops Squad', date: 'Oct 15, 2026', time: '15:30', venue: 'Indoor Arena A' },
    { home: 'Slam Kings', away: 'Fast Breaks', date: 'Oct 18, 2026', time: '17:00', venue: 'Indoor Arena B' },
  ];

  const table = [
    { pos: 1, team: 'Slam Kings', played: 7, won: 6, lost: 1, pf: 487, pa: 412, pts: 13 },
    { pos: 2, team: 'Hoops Squad', played: 7, won: 5, lost: 2, pf: 463, pa: 430, pts: 12 },
    { pos: 3, team: 'Rim Rockers', played: 7, won: 4, lost: 3, pf: 441, pa: 445, pts: 11 },
    { pos: 4, team: 'Net Blazers', played: 7, won: 2, lost: 5, pf: 408, pa: 462, pts: 9 },
    { pos: 5, team: 'Fast Breaks', played: 7, won: 1, lost: 6, pf: 391, pa: 441, pts: 8 },
  ];

  const topScorers = [
    { name: 'Kkjr', team: 'Slam Kings', ppg: 22.4, rpg: 6.2 },
    { name: 'Joe', team: 'Hoops Squad', ppg: 19.8, rpg: 5.1 },
    { name: 'Falcon G.', team: 'Rim Rockers', ppg: 17.2, rpg: 4.7 },
    { name: 'Breezy', team: 'Net Blazers', ppg: 15.6, rpg: 8.3 },
  ];

  const bg = isDarkMode ? 'bg-[#111111] text-gray-100' : 'bg-[#f5f5f5] text-gray-900';
  const cardBg = isDarkMode ? 'bg-[#1c1c1c] border-[#2e2e2e]' : 'bg-white border-[#e0e0e0]';
  const tabActive = 'bg-[#c0392b] text-white';
  const tabInactive = isDarkMode
    ? 'text-gray-400 hover:text-white border border-[#2e2e2e]'
    : 'text-gray-600 hover:text-gray-900 border border-[#e0e0e0] bg-white';

  return (
    <div className={`min-h-screen flex flex-col ${bg}`}>
      <div className="bg-[#c0392b] py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-red-200 text-xs font-bold uppercase tracking-widest mb-1">Acity Sports</p>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Basketball</h1>
          <p className="text-red-100 text-sm mt-1 font-medium">League Season 2026</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
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
                    {['Pos', 'Team', 'P', 'W', 'L', 'PF', 'PA', 'Pts'].map(h => (
                      <th key={h} className="py-3 px-3 text-left text-xs font-bold uppercase tracking-wide">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.map((row, i) => (
                    <tr key={i} className={`border-t ${isDarkMode ? 'border-[#2e2e2e]' : 'border-[#f0f0f0]'} hover:bg-red-50/10 transition-colors`}>
                      <td className="py-3 px-3 font-black text-xs">{row.pos}</td>
                      <td className="py-3 px-3 font-semibold">{row.team}</td>
                      <td className="py-3 px-3">{row.played}</td>
                      <td className="py-3 px-3">{row.won}</td>
                      <td className="py-3 px-3">{row.lost}</td>
                      <td className="py-3 px-3 text-green-600 font-semibold">{row.pf}</td>
                      <td className="py-3 px-3 text-[#c0392b]">{row.pa}</td>
                      <td className="py-3 px-3 font-black text-[#c0392b]">{row.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

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
                    {['Rank', 'Player', 'Team', 'PPG', 'RPG'].map(h => (
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
                      <td className="py-3 px-4 font-black">{p.ppg}</td>
                      <td className={`py-3 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{p.rpg}</td>
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

export default BasketballPage;
