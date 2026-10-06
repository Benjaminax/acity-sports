import React, { useMemo, useState } from 'react';
import { Save, RotateCcw, ShieldCheck, Upload, UserCog, Trophy, Gauge, Users } from 'lucide-react';
import Footer from '../components/Footer';
import {
  INITIAL_SQUAD,
  LOGOS_LIST,
  TEAM_ACCENTS,
} from './FPLPage';

const FPL_SETTINGS_KEY = 'acity-fpl-admin-settings';

const readSettings = () => {
  if (typeof window === 'undefined') return {};

  try {
    const raw = window.localStorage.getItem(FPL_SETTINGS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

const DEFAULT_SETTINGS = {
  teamName: 'Dragons FC',
  selectedBadge: 'DRAGONS',
  customBadges: {},
  captainId: 421,
  viceCaptainId: 329,
  gameweek: 5,
  squad: INITIAL_SQUAD,
};

const createDefaultSettings = () => ({
  ...DEFAULT_SETTINGS,
  ...readSettings(),
  squad: readSettings().squad || INITIAL_SQUAD,
  customBadges: readSettings().customBadges || {},
});

const AdminPage = ({ isDarkMode }) => {
  const initialSettings = useMemo(() => createDefaultSettings(), []);
  const [settings, setSettings] = useState(initialSettings);

  const saveSettings = (nextSettings) => {
    setSettings(nextSettings);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(FPL_SETTINGS_KEY, JSON.stringify(nextSettings));
      window.dispatchEvent(new CustomEvent('fpl-settings-updated', { detail: nextSettings }));
    }
  };

  const applyTextValue = (field, value) => {
    saveSettings({ ...settings, [field]: value });
  };

  const applyPlayerField = (id, field, value) => {
    const updatedSquad = settings.squad.map((player) =>
      player.id === id ? { ...player, [field]: value } : player,
    );
    saveSettings({ ...settings, squad: updatedSquad });
  };

  const handleBadgeUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const updatedBadges = {
        ...settings.customBadges,
        [settings.selectedBadge]: reader.result,
      };
      saveSettings({ ...settings, customBadges: updatedBadges });
    };
    reader.readAsDataURL(file);
    event.target.value = '';
  };

  const availableBadge = settings.customBadges[settings.selectedBadge]
    || LOGOS_LIST.find((item) => item.key === settings.selectedBadge)?.logo;

  const resetToDefaults = () => {
    const next = { ...DEFAULT_SETTINGS, squad: INITIAL_SQUAD.map(player => ({ ...player })) };
    saveSettings(next);
  };

  const playerOptions = settings.squad.map((player) => ({
    id: player.id,
    label: `${player.name} (${player.pos})`,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-10">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#e90052]">FPL administration</p>
            <h1 className="text-3xl sm:text-4xl font-semibold uppercase tracking-tight text-gray-900 mt-2">Control Centre</h1>
          </div>
          <div className="flex gap-2">
            <button
              onClick={resetToDefaults}
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-3 py-2 text-xs font-semibold uppercase tracking-wide hover:border-[#e90052] hover:text-[#e90052] transition"
            >
              <RotateCcw className="w-4 h-4" /> Reset
            </button>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 bg-[#e90052] text-white px-3 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-[#c70047] transition"
            >
              <Save className="w-4 h-4" /> Save
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <section className="xl:col-span-2 space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="rounded-md bg-[#e90052]/10 text-[#e90052] p-2"><Trophy className="w-5 h-5" /></div>
                <h2 className="text-lg font-semibold uppercase tracking-tight text-gray-900">Team branding</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-5">
                <div className="space-y-4">
                  <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600">
                    Team name
                    <input
                      value={settings.teamName}
                      onChange={(event) => applyTextValue('teamName', event.target.value)}
                      className="mt-2 w-full border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:border-[#e90052] focus:outline-none"
                    />
                  </label>

                  <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600">
                    Selected club badge
                    <select
                      value={settings.selectedBadge}
                      onChange={(event) => applyTextValue('selectedBadge', event.target.value)}
                      className="mt-2 w-full border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:border-[#e90052] focus:outline-none"
                    >
                      {LOGOS_LIST.map((team) => (
                        <option key={team.key} value={team.key}>{team.name}</option>
                      ))}
                    </select>
                  </label>

                  <div className="flex gap-3">
                    <label className="inline-flex items-center gap-2 cursor-pointer border border-gray-300 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-700 hover:border-[#e90052] hover:text-[#e90052] transition">
                      <Upload className="w-4 h-4" /> Upload custom badge
                      <input type="file" accept="image/*" onChange={handleBadgeUpload} className="hidden" />
                    </label>
                  </div>
                </div>

                <div className="border border-gray-200 bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">Live preview</div>
                  <img
                    src={availableBadge}
                    alt={settings.selectedBadge}
                    className="w-24 h-24 object-contain mb-3"
                  />
                  <div className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-tight text-gray-700">{settings.teamName}</p>
                    <p className="text-[10px] text-gray-500 mt-1">{settings.selectedBadge}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="rounded-md bg-[#e90052]/10 text-[#e90052] p-2"><Gauge className="w-5 h-5" /></div>
                <h2 className="text-lg font-semibold uppercase tracking-tight text-gray-900">Live FPL settings</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600">
                  Current gameweek
                  <input
                    type="number"
                    min="1"
                    max="38"
                    value={settings.gameweek}
                    onChange={(event) => applyTextValue('gameweek', Number(event.target.value))}
                    className="mt-2 w-full border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:border-[#e90052] focus:outline-none"
                  />
                </label>

                <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600">
                  Captain
                  <select
                    value={settings.captainId}
                    onChange={(event) => applyTextValue('captainId', Number(event.target.value))}
                    className="mt-2 w-full border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:border-[#e90052] focus:outline-none"
                  >
                    {playerOptions.map((player) => (
                      <option key={player.id} value={player.id}>{player.label}</option>
                    ))}
                  </select>
                </label>

                <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600">
                  Vice Captain
                  <select
                    value={settings.viceCaptainId}
                    onChange={(event) => applyTextValue('viceCaptainId', Number(event.target.value))}
                    className="mt-2 w-full border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:border-[#e90052] focus:outline-none"
                  >
                    {playerOptions.map((player) => (
                      <option key={player.id} value={player.id}>{player.label}</option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="rounded-md bg-[#e90052]/10 text-[#e90052] p-2"><Users className="w-5 h-5" /></div>
                <h2 className="text-lg font-semibold uppercase tracking-tight text-gray-900">Squad editor</h2>
              </div>

              <div className="space-y-4">
                {settings.squad.map((player) => (
                  <div key={player.id} className="grid grid-cols-1 md:grid-cols-6 gap-3 border border-gray-200 rounded-lg p-3 bg-gray-50">
                    <label className="text-[10px] font-semibold uppercase tracking-wide text-gray-600">
                      Name
                      <input
                        value={player.name}
                        onChange={(event) => applyPlayerField(player.id, 'name', event.target.value)}
                        className="mt-2 w-full border border-gray-300 bg-white px-2 py-2 text-sm text-gray-900 focus:border-[#e90052] focus:outline-none"
                      />
                    </label>

                    <label className="text-[10px] font-semibold uppercase tracking-wide text-gray-600">
                      Club
                      <select
                        value={player.team}
                        onChange={(event) => applyPlayerField(player.id, 'team', event.target.value)}
                        className="mt-2 w-full border border-gray-300 bg-white px-2 py-2 text-sm text-gray-900 focus:border-[#e90052] focus:outline-none"
                      >
                        {Object.keys(TEAM_ACCENTS).map((team) => (
                          <option key={team} value={team}>{team}</option>
                        ))}
                      </select>
                    </label>

                    <label className="text-[10px] font-semibold uppercase tracking-wide text-gray-600">
                      Pos
                      <select
                        value={player.pos}
                        onChange={(event) => applyPlayerField(player.id, 'pos', event.target.value)}
                        className="mt-2 w-full border border-gray-300 bg-white px-2 py-2 text-sm text-gray-900 focus:border-[#e90052] focus:outline-none"
                      >
                        {['GKP', 'DEF', 'MID', 'FWD'].map((position) => (
                          <option key={position} value={position}>{position}</option>
                        ))}
                      </select>
                    </label>

                    <label className="text-[10px] font-semibold uppercase tracking-wide text-gray-600">
                      Price
                      <input
                        type="number"
                        step="0.1"
                        value={player.price}
                        onChange={(event) => applyPlayerField(player.id, 'price', Number(event.target.value))}
                        className="mt-2 w-full border border-gray-300 bg-white px-2 py-2 text-sm text-gray-900 focus:border-[#e90052] focus:outline-none"
                      />
                    </label>

                    <label className="text-[10px] font-semibold uppercase tracking-wide text-gray-600">
                      Points
                      <input
                        type="number"
                        value={player.pts}
                        onChange={(event) => applyPlayerField(player.id, 'pts', Number(event.target.value))}
                        className="mt-2 w-full border border-gray-300 bg-white px-2 py-2 text-sm text-gray-900 focus:border-[#e90052] focus:outline-none"
                      />
                    </label>

                    <label className="text-[10px] font-semibold uppercase tracking-wide text-gray-600">
                      Status
                      <select
                        value={player.status || 'fit'}
                        onChange={(event) => applyPlayerField(player.id, 'status', event.target.value)}
                        className="mt-2 w-full border border-gray-300 bg-white px-2 py-2 text-sm text-gray-900 focus:border-[#e90052] focus:outline-none"
                      >
                        {['fit', 'injured', 'doubt', 'suspended'].map((status) => (
                          <option key={status} value={status}>{status}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-md bg-[#e90052]/10 text-[#e90052] p-2"><ShieldCheck className="w-5 h-5" /></div>
                <h3 className="text-lg font-semibold uppercase tracking-tight text-gray-900">Quick summary</h3>
              </div>

              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex justify-between border-b border-gray-100 pb-2"><span>Team</span><strong>{settings.teamName}</strong></div>
                <div className="flex justify-between border-b border-gray-100 pb-2"><span>Gameweek</span><strong>{settings.gameweek}</strong></div>
                <div className="flex justify-between border-b border-gray-100 pb-2"><span>Players</span><strong>{settings.squad.length}</strong></div>
                <div className="flex justify-between"><span>Budget used</span><strong>AC {settings.squad.reduce((sum, player) => sum + player.price, 0).toFixed(1)}m</strong></div>
              </div>
            </div>

            <div className="bg-[#1a1a2e] text-white rounded-xl shadow-sm p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-md bg-white/10 text-white p-2"><UserCog className="w-5 h-5" /></div>
                <h3 className="text-lg font-semibold uppercase tracking-tight">Admin notes</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>• Updates are saved to the browser automatically.</li>
                <li>• Badge uploads override the default crest instantly.</li>
                <li>• Squad changes reflect in the live FPL dashboard.</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default AdminPage;
