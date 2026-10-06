import Footer from '../components/Footer';

const HELP_LINKS = [
  ['Help', 'https://fantasy.premierleague.com/en/help'],
  ['Rules', 'https://fantasy.premierleague.com/en/help/rules'],
  ['FAQs', 'https://fantasy.premierleague.com/en/help/faqs'],
  ['T&Cs', 'https://fantasy.premierleague.com/en/help/terms'],
  ['New to FPL', 'https://fantasy.premierleague.com/en/help/new'],
];

const HELP_STEPS = [
  {
    number: '01',
    title: 'Build your squad',
    text: 'Select 15 players while staying within the AC 100.0m budget. Look for regular starters, attacking returns, clean-sheet potential, and a strong bench.',
  },
  {
    number: '02',
    title: 'Pick your starting line-up',
    text: 'Choose 11 players each Gameweek. Your substitutes are ordered and can come into play if a starting player does not play.',
  },
  {
    number: '03',
    title: 'Choose your captain',
    text: 'Your captain scores double points. You must also choose a vice-captain, whose points are doubled if the captain does not play.',
  },
  {
    number: '04',
    title: 'Understand points',
    text: 'Players earn points for minutes, goals, assists, clean sheets, saves, defensive contributions, and bonus points.',
  },
  {
    number: '05',
    title: 'Make transfers',
    text: 'Use transfers to replace unavailable players, target better fixtures, react to form, and improve your squad. Extra transfers cost 4 points.',
  },
  {
    number: '06',
    title: 'Use chips',
    text: 'Wildcard, Free Hit, Bench Boost, and Triple Captain can each boost a Gameweek. Only one chip can be played in a Gameweek.',
  },
  {
    number: '07',
    title: 'Join leagues',
    text: 'Create or join leagues to compete with friends, family, colleagues, and other managers across the season.',
  },
];

const CHECKLIST = [
  'Pick your starting XI',
  'Select your captain and vice-captain',
  'Order your substitutes',
  'Check injuries, suspensions, and doubtful players',
  'Review transfers and chips before the deadline',
];

const GLOSSARY = [
  ['Gameweek', 'A round of fixtures in which your players score points.'],
  ['Deadline', 'The time by which team changes must be made.'],
  ['Squad', 'Your full group of 15 players.'],
  ['Bench', 'Your substitutes.'],
  ['Free transfer', 'A transfer that does not cost points.'],
  ['Points hit', 'A 4-point deduction for an extra transfer.'],
  ['Clean sheet', 'When a team does not concede a goal.'],
  ['Return', 'A goal, assist, or clean sheet.'],
  ['Blank Gameweek', 'A Gameweek in which a team does not play.'],
  ['Double Gameweek', 'A Gameweek in which a team plays more than once.'],
];

const HelpPage = ({ isDarkMode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <main className="flex-1">
        <section className="bg-[#1a1a2e] text-white px-4 sm:px-6 py-10 sm:py-14">
          <div className="max-w-6xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.25em] text-pink-300 font-medium">ACITY FPL Help</p>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight mt-2">New to Fantasy Premier League? Start here.</h1>
            <p className="max-w-3xl text-sm sm:text-base text-gray-300 mt-4 leading-relaxed">
              Fantasy Premier League is a game where you pick real players and score points based on how they perform in actual matches.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {HELP_LINKS.map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="border border-white/30 px-3 py-2 text-xs text-white hover:bg-white hover:text-[#1a1a2e] transition">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-8">
          <section>
            <div className="flex items-center gap-3 mb-4"><span className="w-1 h-6 bg-[#e90052]" /><h2 className="text-xl sm:text-2xl font-semibold uppercase tracking-tight">Fantasy Premier League in 60 seconds</h2></div>
            <div className="bg-gray-50 border border-gray-200 p-5 sm:p-6 text-sm text-gray-700 leading-relaxed space-y-3">
              <p>You are given a budget to build a squad of 15 players. The Premier League season is split into 38 Gameweeks, and you select 11 players to score points each week.</p>
              <p>Your captain scores double points, your bench provides cover, transfers help you improve your squad, and chips can boost your score at important moments.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4"><span className="w-1 h-6 bg-[#e90052]" /><h2 className="text-xl sm:text-2xl font-semibold uppercase tracking-tight">The basics</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {HELP_STEPS.map(step => (
                <article key={step.number} className="border border-gray-200 bg-white p-5 shadow-sm">
                  <span className="text-sm font-semibold text-[#e90052]">{step.number}</span>
                  <h3 className="text-sm font-semibold uppercase mt-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mt-3">{step.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border border-gray-200 p-5 sm:p-6 shadow-sm">
              <h2 className="text-lg font-semibold uppercase tracking-tight">Gameweek checklist</h2>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                {CHECKLIST.map(item => <li key={item} className="flex gap-3"><span className="text-[#e90052] font-semibold">+</span>{item}</li>)}
              </ul>
            </div>
            <div className="border border-gray-200 p-5 sm:p-6 shadow-sm">
              <h2 className="text-lg font-semibold uppercase tracking-tight">FPL glossary</h2>
              <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3 text-sm">
                {GLOSSARY.map(([term, definition]) => <div key={term}><dt className="font-semibold text-gray-900">{term}</dt><dd className="text-gray-600 mt-0.5">{definition}</dd></div>)}
              </dl>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-lg font-semibold uppercase tracking-tight">Ready for more?</h2>
            <p className="text-sm text-gray-600 mt-2">Use the official Rules, FAQs, Help pages, Scout, and Statistics pages for detailed scoring, transfer, league, and player information.</p>
          </section>
        </div>
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default HelpPage;
