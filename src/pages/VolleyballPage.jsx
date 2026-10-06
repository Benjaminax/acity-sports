import React, { useState } from 'react';
import Footer from '../components/Footer';

const VolleyballPage = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState('fixtures');

  const fixtures = [
    { home: 'Spike Masters', away: 'Net Force', date: 'Oct 10, 2026', time: '14:00', venue: 'Court A' },
    { home: 'Block Party', away: 'Spike Masters', date: 'Oct 13, 2026', time: '16:00', venue: 'Court B' },
    { home: 'Net Force', away: 'Sky Hitters', date: 'Oct 16, 2026', time: '15:00', venue: 'Court A' },
    { home: 'Sky Hitters', away: 'Block Party', date: 'Oct 20, 2026', time: '14:30', venue: 'Court C' },
  ];

  const table = [
    { pos: 1, team: 'Spike Masters', played: 6, won: 5, lost: 1, setsW: 14, setsL: 6, pts: 16 },
    { pos: 2, team: 'Net Force', played: 6, won: 4, lost: 2, setsW: 12, setsL: 8, pts: 14 },
    { pos: 3, team: 'Sky Hitters', played: 6, won: 3, lost: 3, setsW: 10, setsL: 10, pts: 12 },
    { pos: 4, team: 'Block Party', played: 6, won: 1, lost: 5, setsW: 6, setsL: 14, pts: 8 },
  ];

  const topPlayers = [
    { name: 'Volta G.', team: 'Spike Masters', spikes: 45, blocks: 12 },
    { name: 'Asante K.', team: 'Net Force', spikes: 38, blocks: 20 },
    { name: 'Mensah D.', team: 'Sky Hitters', spikes: 35, blocks: 15 },
    { name: 'Frimpong J.', team: 'Block Party', spikes: 29, blocks: 18 },
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
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Volleyball</h1>
          <p className="text-red-100 text-sm mt-1 font-medium">League Season 2026</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex gap-2 mb-8 flex-wrap">
          {[
            { key: 'fixtures', label: 'Fixtures' },
            { key: 'table', label: 'League Table' },
            { key: 'players', label: 'Top Players' },
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
                    {['Pos', 'Team', 'P', 'W', 'L', 'Sets W', 'Sets L', 'Pts'].map(h => (
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
                      <td className="py-3 px-3 text-green-600 font-semibold">{row.setsW}</td>
                      <td className="py-3 px-3 text-[#c0392b]">{row.setsL}</td>
                      <td className="py-3 px-3 font-black text-[#c0392b]">{row.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'players' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-5 bg-[#c0392b]" />
              <h2 className="text-base font-bold uppercase tracking-wide">Top Players</h2>
            </div>
            <div className={`border overflow-hidden ${cardBg}`}>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#c0392b] text-white">
                    {['Rank', 'Player', 'Team', 'Spikes', 'Blocks'].map(h => (
                      <th key={h} className="py-3 px-4 text-left text-xs font-bold uppercase tracking-wide">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {topPlayers.map((p, i) => (
                    <tr key={i} className={`border-t ${isDarkMode ? 'border-[#2e2e2e]' : 'border-[#f0f0f0]'} hover:bg-red-50/10 transition-colors`}>
                      <td className="py-3 px-4 font-black text-xs text-[#c0392b]">{i + 1}</td>
                      <td className="py-3 px-4 font-bold">{p.name}</td>
                      <td className={`py-3 px-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{p.team}</td>
                      <td className="py-3 px-4 font-black">{p.spikes}</td>
                      <td className={`py-3 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{p.blocks}</td>
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

export default VolleyballPage;
