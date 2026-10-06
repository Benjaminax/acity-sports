import React, { useEffect, useState, useMemo } from 'react';
import Footer from '../components/Footer';
import {
  TrendingUp,
  ChevronUp,
  ChevronDown,
  Minus,
  HelpCircle,
  Award,
  Users,
  Repeat,
  Zap,
  Shield,
  Star,
  Info,
  X,
  Check,
  Search,
  Filter,
  ArrowRightLeft,
  ChevronRight,
  ChevronLeft,
  Flame,
  ExternalLink,
  AlertTriangle
} from 'lucide-react';

// Pitch & Assets
import pitchBg from '../assets/PITCH/PITCH.png';
import cautionSignImg from '../assets/Caution-Sign-PNG-File.png';
import cautionRedSignImg from '../assets/pngtree-caution-sign-in-triangle-shape-with-red-color-vector-png-image_14710401 (1).png';
import upgradeOrDowngradeImg from '../assets/UPGRADE OR DOWNGRADE.png';

// Jerseys
import dragonsJersey from '../assets/JERSEY AND GK/DRAGONS.png';
import dragonsGkJersey from '../assets/JERSEY AND GK/DRAGONS GK.png';
import elitesJersey from '../assets/JERSEY AND GK/ELITES.png';
import elitesGkJersey from '../assets/JERSEY AND GK/ELITES GK.png';
import falconsJersey from '../assets/JERSEY AND GK/FALCONS.png';
import falconsGkJersey from '../assets/JERSEY AND GK/FALCONS GK.png';
import lionsJersey from '../assets/JERSEY AND GK/LIONS.png';
import lionsGkJersey from '../assets/JERSEY AND GK/LIONS GK.png';
import vikingsJersey from '../assets/JERSEY AND GK/VIKINGS.png';
import vikingsGkJersey from '../assets/JERSEY AND GK/VIKINGS GK.png';
import warriorsJersey from '../assets/JERSEY AND GK/WARRIORS.png';
import warriorsGkJersey from '../assets/JERSEY AND GK/WARRIORS GK.png';

// Team Logos
import dragonsLogo from '../assets/TEAM LOGOS/DRAGONS.PNG';
import elitesLogo from '../assets/TEAM LOGOS/ELITES.PNG';
import falconsLogo from '../assets/TEAM LOGOS/FALCONS.PNG';
import lionsLogo from '../assets/TEAM LOGOS/LIONS.PNG';
import vikingsLogo from '../assets/TEAM LOGOS/VIKINGS.PNG';
import warriorsLogo from '../assets/TEAM LOGOS/WARRIORS.png';

const JERSEY_MAP = {
  DRAGONS: { outfield: dragonsJersey, gk: dragonsGkJersey, logo: dragonsLogo },
  ELITES: { outfield: elitesJersey, gk: elitesGkJersey, logo: elitesLogo },
  FALCONS: { outfield: falconsJersey, gk: falconsGkJersey, logo: falconsLogo },
  LIONS: { outfield: lionsJersey, gk: lionsGkJersey, logo: lionsLogo },
  VIKINGS: { outfield: vikingsJersey, gk: vikingsGkJersey, logo: vikingsLogo },
  WARRIORS: { outfield: warriorsJersey, gk: warriorsGkJersey, logo: warriorsLogo },
};

export const TEAM_ACCENTS = {
  DRAGONS: { primary: '#2563eb', secondary: '#1d4ed8', surface: '#dbeafe', text: '#ffffff', muted: '#dbeafe' },
  ELITES: { primary: '#111827', secondary: '#1f2937', surface: '#e5e7eb', text: '#ffffff', muted: '#f3f4f6' },
  FALCONS: { primary: '#f8fafc', secondary: '#e2e8f0', surface: '#ffffff', text: '#111827', muted: '#f8fafc' },
  LIONS: { primary: '#22c55e', secondary: '#15803d', surface: '#dcfce7', text: '#ffffff', muted: '#dcfce7' },
  VIKINGS: { primary: '#ef4444', secondary: '#b91c1c', surface: '#fee2e2', text: '#ffffff', muted: '#fee2e2' },
  WARRIORS: { primary: '#facc15', secondary: '#eab308', surface: '#fef9c3', text: '#111827', muted: '#fef9c3' },
};

export const LOGOS_LIST = [
  { key: 'DRAGONS', name: 'Dragons', logo: dragonsLogo },
  { key: 'ELITES', name: 'Elites', logo: elitesLogo },
  { key: 'FALCONS', name: 'Falcons', logo: falconsLogo },
  { key: 'LIONS', name: 'Lions', logo: lionsLogo },
  { key: 'VIKINGS', name: 'Vikings', logo: vikingsLogo },
  { key: 'WARRIORS', name: 'Warriors', logo: warriorsLogo },
];

// Initial 15-player squad (11 Starters + 4 Subs) using real ACITY Premier League players
export const INITIAL_SQUAD = [
  // 1 Starting GK
  {
    id: 107,
    firstName: 'Jamal',
    name: 'Jamal',
    fullName: 'Jamal',
    team: 'DRAGONS',
    clubName: 'Dragons',
    pos: 'GKP',
    price: 7.0,
    pts: 13,
    totalPts: 13,
    form: 6.5,
    ppm: 4.3,
    tsb: '74.4%',
    fixture: 'WARRIORS (GW4)',
    status: 'fit',
    starred: true,
    hasWarning: false,
    hasTransferArrow: true,
    isStarter: true,
    benchOrder: null,
    recentForm: [
      { gw: 'GW1', opp: 'ELITES', pts: 4, logo: elitesLogo },
      { gw: 'GW2', opp: 'VIKINGS', pts: 3, logo: vikingsLogo },
      { gw: 'GW3', opp: 'WARRIORS', pts: 6, logo: warriorsLogo },
    ],
    upcomingFixtures: [
      { gw: 'GW4', opp: 'WARRIORS', diff: 3, logo: warriorsLogo },
      { gw: 'GW5', opp: 'ELITES', diff: 2, logo: elitesLogo },
      { gw: 'GW6', opp: 'VIKINGS', diff: 4, logo: vikingsLogo },
    ]
  },

  // 4 Starting DEF
  {
    id: 209,
    firstName: 'Haack',
    name: 'Haack',
    fullName: 'Haack',
    team: 'WARRIORS',
    clubName: 'Warriors',
    pos: 'DEF',
    price: 5.5,
    pts: 17,
    totalPts: 17,
    form: 5.7,
    ppm: 5.7,
    tsb: '39.0%',
    fixture: 'DRAGONS (GW4)',
    status: 'injured',
    starred: false,
    hasWarning: true,
    warningType: 'red',
    warningMsg: 'Hamstring Injury - Out',
    hasTransferArrow: true,
    isStarter: true,
    benchOrder: null,
    recentForm: [
      { gw: 'GW1', opp: 'LIONS', pts: 6, logo: lionsLogo },
      { gw: 'GW2', opp: 'FALCONS', pts: 5, logo: falconsLogo },
      { gw: 'GW3', opp: 'DRAGONS', pts: 6, logo: dragonsLogo },
    ],
    upcomingFixtures: [
      { gw: 'GW4', opp: 'DRAGONS', diff: 3, logo: dragonsLogo },
      { gw: 'GW5', opp: 'LIONS', diff: 2, logo: lionsLogo },
      { gw: 'GW6', opp: 'FALCONS', diff: 3, logo: falconsLogo },
    ]
  },
  {
    id: 207,
    firstName: 'Sadiq',
    name: 'Sadiq',
    fullName: 'Sadiq',
    team: 'WARRIORS',
    clubName: 'Warriors',
    pos: 'DEF',
    price: 6.0,
    pts: 26,
    totalPts: 26,
    form: 8.7,
    ppm: 8.7,
    tsb: '42.7%',
    fixture: 'DRAGONS (GW4)',
    status: 'doubt',
    starred: true,
    hasWarning: true,
    warningType: 'yellow',
    warningMsg: 'Knock - 75% chance of playing',
    hasTransferArrow: true,
    isStarter: true,
    benchOrder: null,
    recentForm: [
      { gw: 'GW1', opp: 'LIONS', pts: 8, logo: lionsLogo },
      { gw: 'GW2', opp: 'FALCONS', pts: 9, logo: falconsLogo },
      { gw: 'GW3', opp: 'DRAGONS', pts: 9, logo: dragonsLogo },
    ],
    upcomingFixtures: [
      { gw: 'GW4', opp: 'DRAGONS', diff: 3, logo: dragonsLogo },
      { gw: 'GW5', opp: 'LIONS', diff: 2, logo: lionsLogo },
      { gw: 'GW6', opp: 'FALCONS', diff: 3, logo: falconsLogo },
    ]
  },
  {
    id: 214,
    firstName: 'Wumpini',
    name: 'Wumpini',
    fullName: 'Wumpini',
    team: 'LIONS',
    clubName: 'Lions',
    pos: 'DEF',
    price: 6.5,
    pts: 14,
    totalPts: 14,
    form: 4.7,
    ppm: 4.7,
    tsb: '39.0%',
    fixture: 'FALCONS (GW4)',
    status: 'fit',
    starred: false,
    hasWarning: false,
    hasTransferArrow: true,
    isStarter: true,
    benchOrder: null,
    recentForm: [
      { gw: 'GW1', opp: 'WARRIORS', pts: 4, logo: warriorsLogo },
      { gw: 'GW2', opp: 'ELITES', pts: 6, logo: elitesLogo },
      { gw: 'GW3', opp: 'FALCONS', pts: 4, logo: falconsLogo },
    ],
    upcomingFixtures: [
      { gw: 'GW4', opp: 'FALCONS', diff: 2, logo: falconsLogo },
      { gw: 'GW5', opp: 'WARRIORS', diff: 4, logo: warriorsLogo },
      { gw: 'GW6', opp: 'ELITES', diff: 2, logo: elitesLogo },
    ]
  },
  {
    id: 228,
    firstName: 'Ahuche',
    name: 'Ahuche',
    fullName: 'Ahuche',
    team: 'FALCONS',
    clubName: 'Falcons',
    pos: 'DEF',
    price: 6.5,
    pts: 14,
    totalPts: 14,
    form: 4.7,
    ppm: 4.7,
    tsb: '12.2%',
    fixture: 'LIONS (GW4)',
    status: 'fit',
    starred: false,
    hasWarning: false,
    hasTransferArrow: true,
    isStarter: true,
    benchOrder: null,
    recentForm: [
      { gw: 'GW1', opp: 'VIKINGS', pts: 5, logo: vikingsLogo },
      { gw: 'GW2', opp: 'WARRIORS', pts: 4, logo: warriorsLogo },
      { gw: 'GW3', opp: 'LIONS', pts: 5, logo: lionsLogo },
    ],
    upcomingFixtures: [
      { gw: 'GW4', opp: 'LIONS', diff: 3, logo: lionsLogo },
      { gw: 'GW5', opp: 'VIKINGS', diff: 3, logo: vikingsLogo },
      { gw: 'GW6', opp: 'WARRIORS', diff: 4, logo: warriorsLogo },
    ]
  },

  // 4 Starting MID
  {
    id: 329,
    firstName: 'Phillipe',
    name: 'Phillipe',
    fullName: 'Phillipe',
    team: 'DRAGONS',
    clubName: 'Dragons',
    pos: 'MID',
    price: 13.0,
    pts: 26,
    totalPts: 26,
    form: 8.7,
    ppm: 8.7,
    tsb: '69.5%',
    fixture: 'WARRIORS (GW4)',
    status: 'fit',
    starred: true,
    hasWarning: false,
    hasTransferArrow: true,
    isStarter: true,
    benchOrder: null,
    recentForm: [
      { gw: 'GW1', opp: 'ELITES', pts: 9, logo: elitesLogo },
      { gw: 'GW2', opp: 'VIKINGS', pts: 8, logo: vikingsLogo },
      { gw: 'GW3', opp: 'WARRIORS', pts: 9, logo: warriorsLogo },
    ],
    upcomingFixtures: [
      { gw: 'GW4', opp: 'WARRIORS', diff: 3, logo: warriorsLogo },
      { gw: 'GW5', opp: 'ELITES', diff: 2, logo: elitesLogo },
      { gw: 'GW6', opp: 'VIKINGS', diff: 4, logo: vikingsLogo },
    ]
  },
  {
    id: 308,
    firstName: 'Kuuchi',
    name: 'Kuuchi',
    fullName: 'Kuuchi',
    team: 'WARRIORS',
    clubName: 'Warriors',
    pos: 'MID',
    price: 12.5,
    pts: 26,
    totalPts: 26,
    form: 8.7,
    ppm: 8.7,
    tsb: '47.6%',
    fixture: 'DRAGONS (GW4)',
    status: 'fit',
    starred: true,
    hasWarning: false,
    hasTransferArrow: true,
    isStarter: true,
    benchOrder: null,
    recentForm: [
      { gw: 'GW1', opp: 'LIONS', pts: 8, logo: lionsLogo },
      { gw: 'GW2', opp: 'FALCONS', pts: 9, logo: falconsLogo },
      { gw: 'GW3', opp: 'DRAGONS', pts: 9, logo: dragonsLogo },
    ],
    upcomingFixtures: [
      { gw: 'GW4', opp: 'DRAGONS', diff: 3, logo: dragonsLogo },
      { gw: 'GW5', opp: 'LIONS', diff: 2, logo: lionsLogo },
      { gw: 'GW6', opp: 'FALCONS', diff: 3, logo: falconsLogo },
    ]
  },
  {
    id: 316,
    firstName: 'Ralph',
    name: 'Ralph',
    fullName: 'Ralph',
    team: 'LIONS',
    clubName: 'Lions',
    pos: 'MID',
    price: 5.5,
    pts: 26,
    totalPts: 26,
    form: 8.7,
    ppm: 8.7,
    tsb: '37.8%',
    fixture: 'FALCONS (GW4)',
    status: 'fit',
    starred: true,
    hasWarning: false,
    hasTransferArrow: true,
    isStarter: true,
    benchOrder: null,
    recentForm: [
      { gw: 'GW1', opp: 'WARRIORS', pts: 10, logo: warriorsLogo },
      { gw: 'GW2', opp: 'ELITES', pts: 8, logo: elitesLogo },
      { gw: 'GW3', opp: 'FALCONS', pts: 8, logo: falconsLogo },
    ],
    upcomingFixtures: [
      { gw: 'GW4', opp: 'FALCONS', diff: 2, logo: falconsLogo },
      { gw: 'GW5', opp: 'WARRIORS', diff: 4, logo: warriorsLogo },
      { gw: 'GW6', opp: 'ELITES', diff: 2, logo: elitesLogo },
    ]
  },
  {
    id: 301,
    firstName: 'KBAM',
    name: 'KBAM',
    fullName: 'KBAM',
    team: 'VIKINGS',
    clubName: 'Vikings',
    pos: 'MID',
    price: 12.5,
    pts: 9,
    totalPts: 9,
    form: 3.0,
    ppm: 3.0,
    tsb: '56.1%',
    fixture: 'ELITES (GW4)',
    status: 'fit',
    starred: false,
    hasWarning: false,
    hasTransferArrow: true,
    isStarter: true,
    benchOrder: null,
    recentForm: [
      { gw: 'GW1', opp: 'FALCONS', pts: 3, logo: falconsLogo },
      { gw: 'GW2', opp: 'DRAGONS', pts: 3, logo: dragonsLogo },
      { gw: 'GW3', opp: 'ELITES', pts: 3, logo: elitesLogo },
    ],
    upcomingFixtures: [
      { gw: 'GW4', opp: 'ELITES', diff: 2, logo: elitesLogo },
      { gw: 'GW5', opp: 'FALCONS', diff: 3, logo: falconsLogo },
      { gw: 'GW6', opp: 'DRAGONS', diff: 4, logo: dragonsLogo },
    ]
  },

  // 2 Starting FWD
  {
    id: 421,
    firstName: 'Theo',
    name: 'Theo',
    fullName: 'Theo',
    team: 'DRAGONS',
    clubName: 'Dragons',
    pos: 'FWD',
    price: 12.1,
    pts: 47,
    totalPts: 47,
    form: 15.6,
    ppm: 15.6,
    tsb: '41.5%',
    fixture: 'WARRIORS (GW4)',
    status: 'fit',
    starred: true,
    hasWarning: false,
    hasTransferArrow: true,
    isStarter: true,
    benchOrder: null,
    recentForm: [
      { gw: 'GW1', opp: 'ELITES', pts: 16, logo: elitesLogo },
      { gw: 'GW2', opp: 'VIKINGS', pts: 15, logo: vikingsLogo },
      { gw: 'GW3', opp: 'WARRIORS', pts: 16, logo: warriorsLogo },
    ],
    upcomingFixtures: [
      { gw: 'GW4', opp: 'WARRIORS', diff: 3, logo: warriorsLogo },
      { gw: 'GW5', opp: 'ELITES', diff: 2, logo: elitesLogo },
      { gw: 'GW6', opp: 'VIKINGS', diff: 4, logo: vikingsLogo },
    ]
  },
  {
    id: 401,
    firstName: 'KKJr',
    name: 'KKJr',
    fullName: 'KKJr',
    team: 'VIKINGS',
    clubName: 'Vikings',
    pos: 'FWD',
    price: 13.0,
    pts: 27,
    totalPts: 27,
    form: 9.0,
    ppm: 9.0,
    tsb: '69.5%',
    fixture: 'ELITES (GW4)',
    status: 'fit',
    starred: true,
    hasWarning: false,
    hasTransferArrow: true,
    isStarter: true,
    benchOrder: null,
    recentForm: [
      { gw: 'GW1', opp: 'FALCONS', pts: 9, logo: falconsLogo },
      { gw: 'GW2', opp: 'DRAGONS', pts: 9, logo: dragonsLogo },
      { gw: 'GW3', opp: 'ELITES', pts: 9, logo: elitesLogo },
    ],
    upcomingFixtures: [
      { gw: 'GW4', opp: 'ELITES', diff: 2, logo: elitesLogo },
      { gw: 'GW5', opp: 'FALCONS', diff: 3, logo: falconsLogo },
      { gw: 'GW6', opp: 'DRAGONS', diff: 4, logo: dragonsLogo },
    ]
  },

  // 4 Substitutes (1 GKP + 3 Outfield)
  {
    id: 104,
    firstName: 'Abeiku',
    name: 'Abeiku',
    fullName: 'Abeiku',
    team: 'LIONS',
    clubName: 'Lions',
    pos: 'GKP',
    price: 5.0,
    pts: 12,
    totalPts: 12,
    form: 4.0,
    ppm: 4.0,
    tsb: '30.5%',
    fixture: 'FALCONS (GW4)',
    status: 'fit',
    starred: false,
    hasWarning: false,
    hasTransferArrow: true,
    isStarter: false,
    benchOrder: 0,
    recentForm: [
      { gw: 'GW1', opp: 'WARRIORS', pts: 4, logo: warriorsLogo },
      { gw: 'GW2', opp: 'ELITES', pts: 4, logo: elitesLogo },
      { gw: 'GW3', opp: 'FALCONS', pts: 4, logo: falconsLogo },
    ],
    upcomingFixtures: [
      { gw: 'GW4', opp: 'FALCONS', diff: 2, logo: falconsLogo },
      { gw: 'GW5', opp: 'WARRIORS', diff: 4, logo: warriorsLogo },
      { gw: 'GW6', opp: 'ELITES', diff: 2, logo: elitesLogo },
    ]
  },
  {
    id: 206,
    firstName: 'Nana Brenya',
    name: 'Nana Brenya',
    fullName: 'Nana Brenya',
    team: 'WARRIORS',
    clubName: 'Warriors',
    pos: 'DEF',
    price: 6.5,
    pts: 14,
    totalPts: 14,
    form: 4.7,
    ppm: 4.7,
    tsb: '36.6%',
    fixture: 'DRAGONS (GW4)',
    status: 'fit',
    starred: false,
    hasWarning: false,
    hasTransferArrow: true,
    isStarter: false,
    benchOrder: 1,
    recentForm: [
      { gw: 'GW1', opp: 'LIONS', pts: 4, logo: lionsLogo },
      { gw: 'GW2', opp: 'FALCONS', pts: 5, logo: falconsLogo },
      { gw: 'GW3', opp: 'DRAGONS', pts: 5, logo: dragonsLogo },
    ],
    upcomingFixtures: [
      { gw: 'GW4', opp: 'DRAGONS', diff: 3, logo: dragonsLogo },
      { gw: 'GW5', opp: 'LIONS', diff: 2, logo: lionsLogo },
      { gw: 'GW6', opp: 'FALCONS', diff: 3, logo: falconsLogo },
    ]
  },
  {
    id: 302,
    firstName: 'Opanzy',
    name: 'Opanzy',
    fullName: 'Opanzy',
    team: 'VIKINGS',
    clubName: 'Vikings',
    pos: 'MID',
    price: 6.5,
    pts: 21,
    totalPts: 21,
    form: 7.0,
    ppm: 7.0,
    tsb: '15.9%',
    fixture: 'ELITES (GW4)',
    status: 'fit',
    starred: false,
    hasWarning: false,
    hasTransferArrow: true,
    isStarter: false,
    benchOrder: 2,
    recentForm: [
      { gw: 'GW1', opp: 'FALCONS', pts: 7, logo: falconsLogo },
      { gw: 'GW2', opp: 'DRAGONS', pts: 7, logo: dragonsLogo },
      { gw: 'GW3', opp: 'ELITES', pts: 7, logo: elitesLogo },
    ],
    upcomingFixtures: [
      { gw: 'GW4', opp: 'ELITES', diff: 2, logo: elitesLogo },
      { gw: 'GW5', opp: 'FALCONS', diff: 3, logo: falconsLogo },
      { gw: 'GW6', opp: 'DRAGONS', diff: 4, logo: dragonsLogo },
    ]
  },
  {
    id: 408,
    firstName: 'Mubarak',
    name: 'Mubarak',
    fullName: 'Mubarak',
    team: 'LIONS',
    clubName: 'Lions',
    pos: 'FWD',
    price: 7.0,
    pts: 17,
    totalPts: 17,
    form: 5.7,
    ppm: 5.7,
    tsb: '8.5%',
    fixture: 'FALCONS (GW4)',
    status: 'fit',
    starred: false,
    hasWarning: false,
    hasTransferArrow: true,
    isStarter: false,
    benchOrder: 3,
    recentForm: [
      { gw: 'GW1', opp: 'WARRIORS', pts: 6, logo: warriorsLogo },
      { gw: 'GW2', opp: 'ELITES', pts: 5, logo: elitesLogo },
      { gw: 'GW3', opp: 'FALCONS', pts: 6, logo: falconsLogo },
    ],
    upcomingFixtures: [
      { gw: 'GW4', opp: 'FALCONS', diff: 2, logo: falconsLogo },
      { gw: 'GW5', opp: 'WARRIORS', diff: 4, logo: warriorsLogo },
      { gw: 'GW6', opp: 'ELITES', diff: 2, logo: elitesLogo },
    ]
  },
];

// All Real ACITY Premier League Players Database
const ALL_REAL_PLAYERS = [
  // GOALKEEPERS
  { id: 101, name: 'Andy', fullName: 'Andy', team: 'VIKINGS', clubName: 'Vikings', pos: 'GKP', price: 5.5, tsb: '8.5%', pts: 6, fixture: 'ELITES (GW4)', status: 'fit' },
  { id: 102, name: 'Alvin', fullName: 'Alvin', team: 'VIKINGS', clubName: 'Vikings', pos: 'GKP', price: 4.5, tsb: '15.9%', pts: 0, fixture: 'ELITES (GW4)', status: 'fit' },
  { id: 103, name: 'Osmond Quist', fullName: 'Osmond Quist', team: 'WARRIORS', clubName: 'Warriors', pos: 'GKP', price: 5.5, tsb: '14.6%', pts: 6, fixture: 'DRAGONS (GW4)', status: 'fit' },
  { id: 104, name: 'Abeiku', fullName: 'Abeiku', team: 'LIONS', clubName: 'Lions', pos: 'GKP', price: 5.0, tsb: '30.5%', pts: 12, fixture: 'FALCONS (GW4)', status: 'fit' },
  { id: 105, name: 'Kelvin', fullName: 'Kelvin', team: 'ELITES', clubName: 'Elites', pos: 'GKP', price: 5.5, tsb: '9.8%', pts: 6, fixture: 'VIKINGS (GW4)', status: 'fit' },
  { id: 106, name: 'Nana Yaw', fullName: 'Nana Yaw', team: 'FALCONS', clubName: 'Falcons', pos: 'GKP', price: 5.0, tsb: '24.4%', pts: 4, fixture: 'LIONS (GW4)', status: 'fit' },
  { id: 107, name: 'Jamal', fullName: 'Jamal', team: 'DRAGONS', clubName: 'Dragons', pos: 'GKP', price: 7.0, tsb: '74.4%', pts: 13, fixture: 'WARRIORS (GW4)', status: 'fit' },

  // DEFENDERS
  { id: 201, name: 'Manasseh', fullName: 'Manasseh', team: 'VIKINGS', clubName: 'Vikings', pos: 'DEF', price: 6.0, tsb: '8.5%', pts: 4, fixture: 'ELITES (GW4)', status: 'fit' },
  { id: 202, name: 'Stanley', fullName: 'Stanley', team: 'VIKINGS', clubName: 'Vikings', pos: 'DEF', price: 5.5, tsb: '11.0%', pts: 6, fixture: 'ELITES (GW4)', status: 'fit' },
  { id: 203, name: 'Ankama', fullName: 'Ankama', team: 'VIKINGS', clubName: 'Vikings', pos: 'DEF', price: 5.5, tsb: '9.8%', pts: 3, fixture: 'ELITES (GW4)', status: 'fit' },
  { id: 204, name: 'Rodney', fullName: 'Rodney', team: 'VIKINGS', clubName: 'Vikings', pos: 'DEF', price: 6.0, tsb: '6.1%', pts: 2, fixture: 'ELITES (GW4)', status: 'fit' },
  { id: 205, name: 'Veve', fullName: 'Veve', team: 'WARRIORS', clubName: 'Warriors', pos: 'DEF', price: 5.0, tsb: '0.0%', pts: 3, fixture: 'DRAGONS (GW4)', status: 'injured', hasWarning: true, warningType: 'red', warningMsg: 'Knee Ligament Injury - Expected back GW7' },
  { id: 206, name: 'Nana Brenya', fullName: 'Nana Brenya', team: 'WARRIORS', clubName: 'Warriors', pos: 'DEF', price: 6.5, tsb: '36.6%', pts: 14, fixture: 'DRAGONS (GW4)', status: 'fit' },
  { id: 207, name: 'Sadiq', fullName: 'Sadiq', team: 'WARRIORS', clubName: 'Warriors', pos: 'DEF', price: 6.0, tsb: '42.7%', pts: 26, fixture: 'DRAGONS (GW4)', status: 'doubt', hasWarning: true, warningType: 'yellow', warningMsg: 'Knock - 75% chance of playing' },
  { id: 208, name: 'McCarius', fullName: 'McCarius', team: 'WARRIORS', clubName: 'Warriors', pos: 'DEF', price: 5.0, tsb: '0.0%', pts: 1, fixture: 'DRAGONS (GW4)', status: 'fit' },
  { id: 209, name: 'Haack', fullName: 'Haack', team: 'WARRIORS', clubName: 'Warriors', pos: 'DEF', price: 5.5, tsb: '39.0%', pts: 17, fixture: 'DRAGONS (GW4)', status: 'injured', hasWarning: true, warningType: 'red', warningMsg: 'Hamstring Injury - Out' },
  { id: 210, name: 'Carl', fullName: 'Carl', team: 'WARRIORS', clubName: 'Warriors', pos: 'DEF', price: 4.5, tsb: '0.0%', pts: 0, fixture: 'DRAGONS (GW4)', status: 'injured', hasWarning: true, warningType: 'red', warningMsg: 'Red Card Suspension - 3 matches' },
  { id: 211, name: 'Kpakpo', fullName: 'Kpakpo', team: 'LIONS', clubName: 'Lions', pos: 'DEF', price: 6.5, tsb: '26.8%', pts: 2, fixture: 'FALCONS (GW4)', status: 'fit' },
  { id: 212, name: 'Leeroy', fullName: 'Leeroy', team: 'LIONS', clubName: 'Lions', pos: 'DEF', price: 4.5, tsb: '2.4%', pts: 0, fixture: 'FALCONS (GW4)', status: 'doubt', hasWarning: true, warningType: 'yellow', warningMsg: 'Muscle tightness - 75% chance of playing' },
  { id: 213, name: 'Obaka', fullName: 'Obaka', team: 'LIONS', clubName: 'Lions', pos: 'DEF', price: 4.5, tsb: '3.7%', pts: 1, fixture: 'FALCONS (GW4)', status: 'fit' },
  { id: 214, name: 'Wumpini', fullName: 'Wumpini', team: 'LIONS', clubName: 'Lions', pos: 'DEF', price: 6.5, tsb: '39.0%', pts: 14, fixture: 'FALCONS (GW4)', status: 'fit' },
  { id: 215, name: 'Izi', fullName: 'Izi', team: 'LIONS', clubName: 'Lions', pos: 'DEF', price: 5.0, tsb: '1.2%', pts: 8, fixture: 'FALCONS (GW4)', status: 'fit' },
  { id: 216, name: 'Addy', fullName: 'Addy', team: 'ELITES', clubName: 'Elites', pos: 'DEF', price: 5.0, tsb: '8.5%', pts: 3, fixture: 'VIKINGS (GW4)', status: 'fit' },
  { id: 217, name: 'NKBA', fullName: 'NKBA', team: 'ELITES', clubName: 'Elites', pos: 'DEF', price: 6.0, tsb: '7.3%', pts: 6, fixture: 'VIKINGS (GW4)', status: 'fit' },
  { id: 218, name: 'CJ', fullName: 'CJ', team: 'ELITES', clubName: 'Elites', pos: 'DEF', price: 4.5, tsb: '2.4%', pts: 8, fixture: 'VIKINGS (GW4)', status: 'fit' },
  { id: 219, name: 'Yasin', fullName: 'Yasin', team: 'ELITES', clubName: 'Elites', pos: 'DEF', price: 4.5, tsb: '4.9%', pts: 5, fixture: 'VIKINGS (GW4)', status: 'fit' },
  { id: 220, name: 'Abiks jnr', fullName: 'Abiks jnr', team: 'ELITES', clubName: 'Elites', pos: 'DEF', price: 4.5, tsb: '4.9%', pts: 4, fixture: 'VIKINGS (GW4)', status: 'fit' },
  { id: 221, name: 'Jean Christian', fullName: 'Jean Christian', team: 'ELITES', clubName: 'Elites', pos: 'DEF', price: 4.6, tsb: '3.7%', pts: 5, fixture: 'VIKINGS (GW4)', status: 'fit' },
  { id: 222, name: 'Lamoral', fullName: 'Lamoral', team: 'ELITES', clubName: 'Elites', pos: 'DEF', price: 4.5, tsb: '2.4%', pts: 0, fixture: 'VIKINGS (GW4)', status: 'fit' },
  { id: 223, name: 'Kofi Koranteng', fullName: 'Kofi Koranteng', team: 'ELITES', clubName: 'Elites', pos: 'DEF', price: 4.5, tsb: '3.7%', pts: 1, fixture: 'VIKINGS (GW4)', status: 'fit' },
  { id: 224, name: 'Sadiq (Falcons)', fullName: 'Sadiq', team: 'FALCONS', clubName: 'Falcons', pos: 'DEF', price: 5.0, tsb: '3.7%', pts: 2, fixture: 'LIONS (GW4)', status: 'fit' },
  { id: 225, name: 'Narh', fullName: 'Narh', team: 'FALCONS', clubName: 'Falcons', pos: 'DEF', price: 5.0, tsb: '4.9%', pts: 10, fixture: 'LIONS (GW4)', status: 'doubt', hasWarning: true, warningType: 'yellow', warningMsg: 'Knock - 50% chance of playing' },
  { id: 226, name: 'Chris (Falcons)', fullName: 'Chris', team: 'FALCONS', clubName: 'Falcons', pos: 'DEF', price: 5.0, tsb: '11.0%', pts: 8, fixture: 'LIONS (GW4)', status: 'fit' },
  { id: 227, name: 'Leslie', fullName: 'Leslie', team: 'FALCONS', clubName: 'Falcons', pos: 'DEF', price: 4.5, tsb: '4.9%', pts: 0, fixture: 'LIONS (GW4)', status: 'fit' },
  { id: 228, name: 'Ahuche', fullName: 'Ahuche', team: 'FALCONS', clubName: 'Falcons', pos: 'DEF', price: 6.5, tsb: '12.2%', pts: 14, fixture: 'LIONS (GW4)', status: 'fit' },
  { id: 229, name: 'Aaron (Falcons)', fullName: 'Aaron', team: 'FALCONS', clubName: 'Falcons', pos: 'DEF', price: 4.5, tsb: '8.5%', pts: 0, fixture: 'LIONS (GW4)', status: 'fit' },
  { id: 230, name: 'Rhyndolf', fullName: 'Rhyndolf', team: 'DRAGONS', clubName: 'Dragons', pos: 'DEF', price: 5.5, tsb: '14.6%', pts: 9, fixture: 'WARRIORS (GW4)', status: 'fit' },
  { id: 231, name: 'Gerald', fullName: 'Gerald', team: 'DRAGONS', clubName: 'Dragons', pos: 'DEF', price: 5.5, tsb: '17.1%', pts: 8, fixture: 'WARRIORS (GW4)', status: 'fit' },
  { id: 232, name: 'Aaron (Dragons)', fullName: 'Aaron', team: 'DRAGONS', clubName: 'Dragons', pos: 'DEF', price: 5.0, tsb: '4.9%', pts: 9, fixture: 'WARRIORS (GW4)', status: 'fit' },
  { id: 233, name: 'Shaun Benjamin', fullName: 'Shaun Benjamin', team: 'DRAGONS', clubName: 'Dragons', pos: 'DEF', price: 4.5, tsb: '0.0%', pts: 0, fixture: 'WARRIORS (GW4)', status: 'fit' },

  // MIDFIELDERS
  { id: 301, name: 'KBAM', fullName: 'KBAM', team: 'VIKINGS', clubName: 'Vikings', pos: 'MID', price: 12.5, tsb: '56.1%', pts: 9, fixture: 'ELITES (GW4)', status: 'doubt', hasWarning: true, warningType: 'yellow', warningMsg: 'Ankle Strain - 75% chance of playing' },
  { id: 302, name: 'Opanzy', fullName: 'Opanzy', team: 'VIKINGS', clubName: 'Vikings', pos: 'MID', price: 6.5, tsb: '15.9%', pts: 21, fixture: 'ELITES (GW4)', status: 'fit' },
  { id: 303, name: 'Iseh', fullName: 'Iseh', team: 'VIKINGS', clubName: 'Vikings', pos: 'MID', price: 4.5, tsb: '1.2%', pts: 1, fixture: 'ELITES (GW4)', status: 'fit' },
  { id: 304, name: 'Jeff', fullName: 'Jeff', team: 'VIKINGS', clubName: 'Vikings', pos: 'MID', price: 4.5, tsb: '1.2%', pts: 1, fixture: 'ELITES (GW4)', status: 'fit' },
  { id: 305, name: 'Brookman', fullName: 'Brookman', team: 'VIKINGS', clubName: 'Vikings', pos: 'MID', price: 10.5, tsb: '9.8%', pts: 3, fixture: 'ELITES (GW4)', status: 'fit' },
  { id: 306, name: 'Logo', fullName: 'Logo', team: 'VIKINGS', clubName: 'Vikings', pos: 'MID', price: 7.0, tsb: '20.7%', pts: 12, fixture: 'ELITES (GW4)', status: 'fit' },
  { id: 307, name: 'Malcom', fullName: 'Malcom', team: 'WARRIORS', clubName: 'Warriors', pos: 'MID', price: 8.0, tsb: '12.2%', pts: 11, fixture: 'DRAGONS (GW4)', status: 'fit' },
  { id: 308, name: 'Kuuchi', fullName: 'Kuuchi', team: 'WARRIORS', clubName: 'Warriors', pos: 'MID', price: 12.5, tsb: '47.6%', pts: 26, fixture: 'DRAGONS (GW4)', status: 'doubt', hasWarning: true, warningType: 'yellow', warningMsg: 'Thigh Injury - 75% chance of playing' },
  { id: 309, name: 'Madiba', fullName: 'Madiba', team: 'WARRIORS', clubName: 'Warriors', pos: 'MID', price: 6.5, tsb: '8.5%', pts: 9, fixture: 'DRAGONS (GW4)', status: 'fit' },
  { id: 310, name: 'Ebere', fullName: 'Ebere', team: 'WARRIORS', clubName: 'Warriors', pos: 'MID', price: 6.0, tsb: '1.2%', pts: 5, fixture: 'DRAGONS (GW4)', status: 'fit' },
  { id: 311, name: 'Sean', fullName: 'Sean', team: 'LIONS', clubName: 'Lions', pos: 'MID', price: 5.0, tsb: '7.3%', pts: 7, fixture: 'FALCONS (GW4)', status: 'fit' },
  { id: 312, name: 'Kwakye', fullName: 'Kwakye', team: 'LIONS', clubName: 'Lions', pos: 'MID', price: 5.1, tsb: '0.0%', pts: 7, fixture: 'FALCONS (GW4)', status: 'fit' },
  { id: 313, name: 'Keli', fullName: 'Keli', team: 'LIONS', clubName: 'Lions', pos: 'MID', price: 5.8, tsb: '1.2%', pts: 3, fixture: 'FALCONS (GW4)', status: 'fit' },
  { id: 314, name: 'Kester', fullName: 'Kester', team: 'LIONS', clubName: 'Lions', pos: 'MID', price: 8.5, tsb: '8.5%', pts: 7, fixture: 'FALCONS (GW4)', status: 'fit' },
  { id: 315, name: 'Osimhen', fullName: 'Osimhen', team: 'LIONS', clubName: 'Lions', pos: 'MID', price: 7.0, tsb: '7.3%', pts: 9, fixture: 'FALCONS (GW4)', status: 'fit' },
  { id: 316, name: 'Ralph', fullName: 'Ralph', team: 'LIONS', clubName: 'Lions', pos: 'MID', price: 5.5, tsb: '37.8%', pts: 26, fixture: 'FALCONS (GW4)', status: 'fit' },
  { id: 317, name: 'Cheick', fullName: 'Cheick', team: 'ELITES', clubName: 'Elites', pos: 'MID', price: 4.5, tsb: '1.2%', pts: 0, fixture: 'VIKINGS (GW4)', status: 'fit' },
  { id: 318, name: 'Durmas', fullName: 'Durmas', team: 'ELITES', clubName: 'Elites', pos: 'MID', price: 4.5, tsb: '2.4%', pts: 5, fixture: 'VIKINGS (GW4)', status: 'fit' },
  { id: 319, name: 'Obeng', fullName: 'Obeng', team: 'ELITES', clubName: 'Elites', pos: 'MID', price: 5.3, tsb: '13.4%', pts: 17, fixture: 'VIKINGS (GW4)', status: 'fit' },
  { id: 320, name: 'David Dare', fullName: 'David Dare', team: 'ELITES', clubName: 'Elites', pos: 'MID', price: 4.5, tsb: '0.0%', pts: 2, fixture: 'VIKINGS (GW4)', status: 'fit' },
  { id: 321, name: 'Aaron Osei', fullName: 'Aaron Osei', team: 'ELITES', clubName: 'Elites', pos: 'MID', price: 4.5, tsb: '0.0%', pts: 1, fixture: 'VIKINGS (GW4)', status: 'fit' },
  { id: 322, name: 'Joshua', fullName: 'Joshua', team: 'ELITES', clubName: 'Elites', pos: 'MID', price: 4.5, tsb: '0.0%', pts: 0, fixture: 'VIKINGS (GW4)', status: 'fit' },
  { id: 323, name: 'Gaisie', fullName: 'Gaisie', team: 'FALCONS', clubName: 'Falcons', pos: 'MID', price: 5.0, tsb: '2.4%', pts: 1, fixture: 'LIONS (GW4)', status: 'fit' },
  { id: 324, name: 'Isaac', fullName: 'Isaac', team: 'FALCONS', clubName: 'Falcons', pos: 'MID', price: 7.5, tsb: '0.0%', pts: 4, fixture: 'LIONS (GW4)', status: 'fit' },
  { id: 325, name: 'Yemi', fullName: 'Yemi', team: 'FALCONS', clubName: 'Falcons', pos: 'MID', price: 5.0, tsb: '2.4%', pts: 5, fixture: 'LIONS (GW4)', status: 'fit' },
  { id: 326, name: 'Kumi-Asante', fullName: 'Kumi-Asante', team: 'FALCONS', clubName: 'Falcons', pos: 'MID', price: 5.0, tsb: '4.9%', pts: 5, fixture: 'LIONS (GW4)', status: 'fit' },
  { id: 327, name: 'SK', fullName: 'SK', team: 'FALCONS', clubName: 'Falcons', pos: 'MID', price: 4.8, tsb: '12.2%', pts: 9, fixture: 'LIONS (GW4)', status: 'fit' },
  { id: 328, name: 'Ledley', fullName: 'Ledley', team: 'FALCONS', clubName: 'Falcons', pos: 'MID', price: 4.5, tsb: '0.0%', pts: 2, fixture: 'LIONS (GW4)', status: 'fit' },
  { id: 329, name: 'Phillipe', fullName: 'Phillipe', team: 'DRAGONS', clubName: 'Dragons', pos: 'MID', price: 13.0, tsb: '69.5%', pts: 26, fixture: 'WARRIORS (GW4)', status: 'fit' },
  { id: 330, name: 'Abdoul', fullName: 'Abdoul', team: 'DRAGONS', clubName: 'Dragons', pos: 'MID', price: 5.5, tsb: '2.4%', pts: 13, fixture: 'WARRIORS (GW4)', status: 'fit' },
  { id: 331, name: 'Humphrey', fullName: 'Humphrey', team: 'DRAGONS', clubName: 'Dragons', pos: 'MID', price: 7.0, tsb: '4.9%', pts: 6, fixture: 'WARRIORS (GW4)', status: 'fit' },
  { id: 332, name: 'Thomas', fullName: 'Thomas', team: 'DRAGONS', clubName: 'Dragons', pos: 'MID', price: 4.5, tsb: '1.2%', pts: 0, fixture: 'WARRIORS (GW4)', status: 'fit' },
  { id: 333, name: 'Marouf', fullName: 'Marouf', team: 'DRAGONS', clubName: 'Dragons', pos: 'MID', price: 5.0, tsb: '0.0%', pts: 0, fixture: 'WARRIORS (GW4)', status: 'fit' },
  { id: 334, name: 'Freddy', fullName: 'Freddy', team: 'DRAGONS', clubName: 'Dragons', pos: 'MID', price: 5.0, tsb: '0.0%', pts: 3, fixture: 'WARRIORS (GW4)', status: 'fit' },
  { id: 335, name: 'Joseph', fullName: 'Joseph', team: 'DRAGONS', clubName: 'Dragons', pos: 'MID', price: 4.5, tsb: '0.0%', pts: 1, fixture: 'WARRIORS (GW4)', status: 'fit' },

  // ATTACKERS / FORWARDS
  { id: 401, name: 'KKJr', fullName: 'KKJr', team: 'VIKINGS', clubName: 'Vikings', pos: 'FWD', price: 13.0, tsb: '69.5%', pts: 27, fixture: 'ELITES (GW4)', status: 'fit' },
  { id: 402, name: 'Chris (Vikings)', fullName: 'Chris', team: 'VIKINGS', clubName: 'Vikings', pos: 'FWD', price: 7.5, tsb: '4.9%', pts: 10, fixture: 'ELITES (GW4)', status: 'fit' },
  { id: 403, name: 'Kwame', fullName: 'Kwame', team: 'VIKINGS', clubName: 'Vikings', pos: 'FWD', price: 6.5, tsb: '2.4%', pts: 4, fixture: 'ELITES (GW4)', status: 'fit' },
  { id: 404, name: 'Marco', fullName: 'Marco', team: 'WARRIORS', clubName: 'Warriors', pos: 'FWD', price: 5.5, tsb: '1.2%', pts: 3, fixture: 'DRAGONS (GW4)', status: 'fit' },
  { id: 405, name: 'Bamba', fullName: 'Bamba', team: 'WARRIORS', clubName: 'Warriors', pos: 'FWD', price: 9.0, tsb: '28.0%', pts: 8, fixture: 'DRAGONS (GW4)', status: 'fit' },
  { id: 406, name: 'Winston', fullName: 'Winston', team: 'WARRIORS', clubName: 'Warriors', pos: 'FWD', price: 8.0, tsb: '9.8%', pts: 12, fixture: 'DRAGONS (GW4)', status: 'fit' },
  { id: 407, name: 'Jesse', fullName: 'Jesse', team: 'WARRIORS', clubName: 'Warriors', pos: 'FWD', price: 4.5, tsb: '4.9%', pts: 14, fixture: 'DRAGONS (GW4)', status: 'fit' },
  { id: 408, name: 'Mubarak', fullName: 'Mubarak', team: 'LIONS', clubName: 'Lions', pos: 'FWD', price: 7.0, tsb: '8.5%', pts: 17, fixture: 'FALCONS (GW4)', status: 'fit' },
  { id: 409, name: 'Flaco', fullName: 'Flaco', team: 'LIONS', clubName: 'Lions', pos: 'FWD', price: 6.5, tsb: '9.8%', pts: 4, fixture: 'FALCONS (GW4)', status: 'fit' },
  { id: 410, name: 'Robbie G', fullName: 'Robbie G', team: 'LIONS', clubName: 'Lions', pos: 'FWD', price: 6.5, tsb: '8.5%', pts: 4, fixture: 'FALCONS (GW4)', status: 'fit' },
  { id: 411, name: 'Senam', fullName: 'Senam', team: 'LIONS', clubName: 'Lions', pos: 'FWD', price: 4.5, tsb: '1.2%', pts: 2, fixture: 'FALCONS (GW4)', status: 'fit' },
  { id: 412, name: 'Setornam', fullName: 'Setornam', team: 'ELITES', clubName: 'Elites', pos: 'FWD', price: 4.5, tsb: '1.2%', pts: 3, fixture: 'VIKINGS (GW4)', status: 'fit' },
  { id: 413, name: 'Stanley (Elites)', fullName: 'Stanley', team: 'ELITES', clubName: 'Elites', pos: 'FWD', price: 4.5, tsb: '1.2%', pts: 0, fixture: 'VIKINGS (GW4)', status: 'fit' },
  { id: 414, name: 'Abiks', fullName: 'Abiks', team: 'ELITES', clubName: 'Elites', pos: 'FWD', price: 7.0, tsb: '11.0%', pts: 7, fixture: 'VIKINGS (GW4)', status: 'fit' },
  { id: 415, name: 'NK', fullName: 'NK', team: 'ELITES', clubName: 'Elites', pos: 'FWD', price: 4.5, tsb: '8.5%', pts: 3, fixture: 'VIKINGS (GW4)', status: 'fit' },
  { id: 416, name: 'Selassie', fullName: 'Selassie', team: 'FALCONS', clubName: 'Falcons', pos: 'FWD', price: 6.9, tsb: '6.1%', pts: 6, fixture: 'LIONS (GW4)', status: 'fit' },
  { id: 417, name: 'Ojo', fullName: 'Ojo', team: 'FALCONS', clubName: 'Falcons', pos: 'FWD', price: 4.5, tsb: '15.9%', pts: 2, fixture: 'LIONS (GW4)', status: 'fit' },
  { id: 418, name: 'Dani', fullName: 'Dani', team: 'FALCONS', clubName: 'Falcons', pos: 'FWD', price: 5.5, tsb: '15.9%', pts: 6, fixture: 'LIONS (GW4)', status: 'fit' },
  { id: 419, name: 'Kofi', fullName: 'Kofi', team: 'FALCONS', clubName: 'Falcons', pos: 'FWD', price: 4.5, tsb: '4.9%', pts: 5, fixture: 'LIONS (GW4)', status: 'fit' },
  { id: 420, name: 'Twum', fullName: 'Twum', team: 'DRAGONS', clubName: 'Dragons', pos: 'FWD', price: 7.0, tsb: '6.1%', pts: 11, fixture: 'WARRIORS (GW4)', status: 'fit' },
  { id: 421, name: 'Theo', fullName: 'Theo', team: 'DRAGONS', clubName: 'Dragons', pos: 'FWD', price: 12.1, tsb: '41.5%', pts: 47, fixture: 'WARRIORS (GW4)', status: 'fit' },
  { id: 422, name: 'Dominick', fullName: 'Dominick', team: 'DRAGONS', clubName: 'Dragons', pos: 'FWD', price: 5.0, tsb: '0.0%', pts: 4, fixture: 'WARRIORS (GW4)', status: 'fit' },
  { id: 423, name: 'Deji', fullName: 'Deji', team: 'DRAGONS', clubName: 'Dragons', pos: 'FWD', price: 4.5, tsb: '0.0%', pts: 1, fixture: 'WARRIORS (GW4)', status: 'fit' },
  { id: 424, name: 'Alex Yeboah', fullName: 'Alex Yeboah', team: 'DRAGONS', clubName: 'Dragons', pos: 'FWD', price: 4.5, tsb: '1.2%', pts: 2, fixture: 'WARRIORS (GW4)', status: 'fit' },
];

// Price changes market data with real ACITY players
const PRICE_CHANGES_DATA = [
  { id: 329, name: 'Phillipe', club: 'Dragons', pos: 'MID', statusText: 'Likely to rise', statusType: 'rise', progress: '+99.7%', predicted: '+100.4%', trend: 'Up', currentPrice: 'AC 13.0m', purchasePrice: 'AC 12.5m', sellingPrice: 'AC 12.8m', jersey: dragonsJersey },
  { id: 421, name: 'Theo', club: 'Dragons', pos: 'FWD', statusText: 'Likely to rise', statusType: 'rise', progress: '+99.5%', predicted: '+99.8%', trend: 'Up', currentPrice: 'AC 12.1m', purchasePrice: 'AC 11.5m', sellingPrice: 'AC 11.8m', jersey: dragonsJersey },
  { id: 401, name: 'KKJr', club: 'Vikings', pos: 'FWD', statusText: 'Likely to rise', statusType: 'rise', progress: '+99.1%', predicted: '+99.2%', trend: 'Up', currentPrice: 'AC 13.0m', purchasePrice: 'AC 12.5m', sellingPrice: 'AC 12.7m', jersey: vikingsJersey },
  { id: 207, name: 'Sadiq', club: 'Warriors', pos: 'DEF', statusText: 'Likely to rise', statusType: 'rise', progress: '+98.4%', predicted: '+98.8%', trend: 'Up', currentPrice: 'AC 6.0m', purchasePrice: 'AC 5.5m', sellingPrice: 'AC 5.7m', jersey: warriorsJersey },
  { id: 308, name: 'Kuuchi', club: 'Warriors', pos: 'MID', statusText: 'Likely to rise', statusType: 'rise', progress: '+98.0%', predicted: '+98.2%', trend: 'Up', currentPrice: 'AC 12.5m', purchasePrice: 'AC 12.0m', sellingPrice: 'AC 12.2m', jersey: warriorsJersey },
  { id: 316, name: 'Ralph', club: 'Lions', pos: 'MID', statusText: 'Likely to rise', statusType: 'rise', progress: '+97.5%', predicted: '+97.7%', trend: 'Up', currentPrice: 'AC 5.5m', purchasePrice: 'AC 5.0m', sellingPrice: 'AC 5.2m', jersey: lionsJersey },
  { id: 301, name: 'KBAM', club: 'Vikings', pos: 'MID', statusText: 'Unlikely to change', statusType: 'neutral', progress: '+94.9%', predicted: '+95.1%', trend: 'Up', currentPrice: 'AC 12.5m', purchasePrice: '-', sellingPrice: '-', jersey: vikingsJersey },
  { id: 214, name: 'Wumpini', club: 'Lions', pos: 'DEF', statusText: 'Unlikely to change', statusType: 'neutral', progress: '+94.2%', predicted: '+94.5%', trend: 'Up', currentPrice: 'AC 6.5m', purchasePrice: '-', sellingPrice: '-', jersey: lionsJersey },
  { id: 302, name: 'Opanzy', club: 'Vikings', pos: 'MID', statusText: 'Likely to rise', statusType: 'rise', progress: '+96.5%', predicted: '+97.0%', trend: 'Up', currentPrice: 'AC 6.5m', purchasePrice: 'AC 6.0m', sellingPrice: 'AC 6.2m', jersey: vikingsJersey },
  { id: 107, name: 'Jamal', club: 'Dragons', pos: 'GKP', statusText: 'Likely to rise', statusType: 'rise', progress: '+99.2%', predicted: '+99.6%', trend: 'Up', currentPrice: 'AC 7.0m', purchasePrice: 'AC 6.5m', sellingPrice: 'AC 6.7m', jersey: dragonsGkJersey },
  { id: 225, name: 'Narh', club: 'Falcons', pos: 'DEF', statusText: 'Likely to drop', statusType: 'drop', progress: '-96.0%', predicted: '-96.4%', trend: 'Down', currentPrice: 'AC 5.0m', purchasePrice: '-', sellingPrice: '-', jersey: falconsJersey },
  { id: 408, name: 'Mubarak', club: 'Lions', pos: 'FWD', statusText: 'Unlikely to change', statusType: 'neutral', progress: '+93.8%', predicted: '+94.1%', trend: 'Up', currentPrice: 'AC 7.0m', purchasePrice: '-', sellingPrice: '-', jersey: lionsJersey },
];

export const FPL_FIXTURES = [
  { gameweek: 5, date: 'Sat 10 Oct', time: '13:00', home: 'LIONS', away: 'FALCONS', venue: 'Main Pitch' },
  { gameweek: 5, date: 'Sat 10 Oct', time: '15:30', home: 'DRAGONS', away: 'WARRIORS', venue: 'East Ground' },
  { gameweek: 5, date: 'Sun 11 Oct', time: '14:00', home: 'VIKINGS', away: 'ELITES', venue: 'West Ground' },
  { gameweek: 6, date: 'Sat 17 Oct', time: '13:00', home: 'ELITES', away: 'LIONS', venue: 'Academy Stadium' },
  { gameweek: 6, date: 'Sat 17 Oct', time: '15:30', home: 'FALCONS', away: 'DRAGONS', venue: 'Falcon Arena' },
  { gameweek: 6, date: 'Sun 18 Oct', time: '14:00', home: 'WARRIORS', away: 'VIKINGS', venue: 'Warrior Park' },
];

const FPL_SETTINGS_KEY = 'acity-fpl-admin-settings';

const loadFplSettings = () => {
  if (typeof window === 'undefined') return {};

  try {
    const stored = window.localStorage.getItem(FPL_SETTINGS_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    return {};
  }
};

const FPLPage = ({ isDarkMode }) => {
  const savedSettings = loadFplSettings();
  const [squad, setSquad] = useState(savedSettings.squad || INITIAL_SQUAD);
  const [captainId, setCaptainId] = useState(savedSettings.captainId ?? 421);
  const [viceCaptainId, setViceCaptainId] = useState(savedSettings.viceCaptainId ?? 329);
  const [gameweek, setGameweek] = useState(savedSettings.gameweek ?? 5);
  const [viewMode, setViewMode] = useState('pitch'); // 'pitch' or 'list'
  const [displayFilter, setDisplayFilter] = useState('Opponent'); // 'Points', 'Opponent', 'Current Price'
  
  // Modal / Interaction states
  const [modalPlayer, setModalPlayer] = useState(null);
  const [swapSourcePlayer, setSwapSourcePlayer] = useState(null);
  const [activeTab, setActiveTab] = useState('pick-team'); // 'pick-team', 'price-changes', 'standings'
  const [notification, setNotification] = useState(null);
  const [selectedBadge, setSelectedBadge] = useState(savedSettings.selectedBadge || 'DRAGONS');
  const [teamName, setTeamName] = useState(savedSettings.teamName || 'Dragons FC');
  const [customBadges, setCustomBadges] = useState(savedSettings.customBadges || {});
  const [showLogoPicker, setShowLogoPicker] = useState(false);
  const [removedSlot, setRemovedSlot] = useState(null);
  const [countdownSeconds, setCountdownSeconds] = useState((6 * 60 * 60) + (22 * 60));

  useEffect(() => {
    const countdownTimer = window.setInterval(() => {
      setCountdownSeconds(previousSeconds => Math.max(0, previousSeconds - 1));
    }, 1000);

    return () => window.clearInterval(countdownTimer);
  }, []);

  useEffect(() => {
    const nextSettings = {
      squad,
      captainId,
      viceCaptainId,
      gameweek,
      selectedBadge,
      teamName,
      customBadges,
    };

    window.localStorage.setItem(FPL_SETTINGS_KEY, JSON.stringify(nextSettings));
    window.dispatchEvent(new CustomEvent('fpl-settings-updated', { detail: nextSettings }));
  }, [squad, captainId, viceCaptainId, gameweek, selectedBadge, teamName, customBadges]);

  useEffect(() => {
    const syncFplSettings = (event) => {
      const incomingSettings = event.detail || loadFplSettings();

      if (!incomingSettings) return;

      setSquad(incomingSettings.squad || INITIAL_SQUAD);
      setCaptainId(incomingSettings.captainId ?? 421);
      setViceCaptainId(incomingSettings.viceCaptainId ?? 329);
      setGameweek(incomingSettings.gameweek ?? 5);
      setSelectedBadge(incomingSettings.selectedBadge || 'DRAGONS');
      setTeamName(incomingSettings.teamName || 'Dragons FC');
      setCustomBadges(incomingSettings.customBadges || {});
    };

    const handleStorageChange = (event) => {
      if (event.key !== FPL_SETTINGS_KEY) return;
      syncFplSettings({ detail: event.newValue ? JSON.parse(event.newValue) : {} });
    };

    window.addEventListener('fpl-settings-updated', syncFplSettings);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('fpl-settings-updated', syncFplSettings);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const countdownHours = String(Math.floor(countdownSeconds / 3600)).padStart(2, '0');
  const countdownMinutes = String(Math.floor((countdownSeconds % 3600) / 60)).padStart(2, '0');
  const countdownRemainingSeconds = String(countdownSeconds % 60).padStart(2, '0');

  const getSelectedBadgeImage = () => customBadges[selectedBadge] || LOGOS_LIST.find(l => l.key === selectedBadge)?.logo || dragonsLogo;

  const handleBadgeUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setCustomBadges(prev => ({
        ...prev,
        [selectedBadge]: reader.result,
      }));
      showToast('Custom badge uploaded.');
    };
    reader.readAsDataURL(file);
    event.target.value = '';
  };

  // Transfer market filter states
  const [transferSearch, setTransferSearch] = useState('');
  const [transferPosFilter, setTransferPosFilter] = useState('ALL');
  const [transferClubFilter, setTransferClubFilter] = useState('ALL');
  const [transferSort, setTransferSort] = useState('default');

  const showToast = (msg) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  const canAddPlayerToSquad = (playerToAdd) => {
    if (!playerToAdd) return false;
    if (squad.some(p => p.id === playerToAdd.id)) return false;
    if (squad.length >= 15) return false;
    if (squad.filter(p => p.team === playerToAdd.team).length >= 3) return false;
    return true;
  };

  const starters = useMemo(() => squad.filter(p => p.isStarter), [squad]);
  const bench = useMemo(() => {
    return squad
      .filter(p => !p.isStarter)
      .sort((a, b) => (a.benchOrder ?? 99) - (b.benchOrder ?? 99));
  }, [squad]);

  const visibleSquad = useMemo(() => squad.slice(0, 15), [squad]);

  const gkStarters = useMemo(() => starters.filter(p => p.pos === 'GKP'), [starters]);
  const defStarters = useMemo(() => starters.filter(p => p.pos === 'DEF'), [starters]);
  const midStarters = useMemo(() => starters.filter(p => p.pos === 'MID'), [starters]);
  const fwdStarters = useMemo(() => starters.filter(p => p.pos === 'FWD'), [starters]);

  const formationString = `${defStarters.length}-${midStarters.length}-${fwdStarters.length}`;

  // Validate FPL formation rules
  const isValidFormation = (newStarters) => {
    const gks = newStarters.filter(p => p.pos === 'GKP').length;
    const defs = newStarters.filter(p => p.pos === 'DEF').length;
    const mids = newStarters.filter(p => p.pos === 'MID').length;
    const fwds = newStarters.filter(p => p.pos === 'FWD').length;

    if (gks !== 1) return { valid: false, reason: 'Must have exactly 1 Goalkeeper.' };
    if (defs < 3 || defs > 5) return { valid: false, reason: 'Must have between 3 and 5 Defenders.' };
    if (mids < 2 || mids > 5) return { valid: false, reason: 'Must have between 2 and 5 Midfielders.' };
    if (fwds < 1 || fwds > 3) return { valid: false, reason: 'Must have between 1 and 3 Forwards.' };
    if (defs + mids + fwds !== 10) return { valid: false, reason: 'Must have 10 outfield players.' };

    return { valid: true };
  };

  // Check if two players can be swapped (substitution mode only: must be starter â†” bench)
  const canSwap = (p1, p2) => {
    if (!p1 || !p2 || p1.id === p2.id) return false;

    // Substitution only works between a starter and a bench player
    if (p1.isStarter === p2.isStarter) return false;

    // GK can only swap with GK across starter/bench boundary
    if (p1.pos === 'GKP' || p2.pos === 'GKP') {
      return p1.pos === 'GKP' && p2.pos === 'GKP';
    }

    // Outfield swap: check resulting formation is still valid
    const starter = p1.isStarter ? p1 : p2;
    const benchPlayer = p1.isStarter ? p2 : p1;

    const simulatedStarters = starters.map(p => p.id === starter.id ? benchPlayer : p);
    return isValidFormation(simulatedStarters).valid;
  };

  // Perform Swap
  const executeSwap = (sourceP, targetP) => {
    if (!sourceP || !targetP || sourceP.id === targetP.id) return;

    // Both are starters: Swap positions
    if (sourceP.isStarter && targetP.isStarter) {
      if (sourceP.pos === 'GKP' || targetP.pos === 'GKP') {
        if (sourceP.pos !== targetP.pos) {
          showToast('Cannot swap Goalkeeper with Outfield player.');
          return;
        }
      }
      showToast(`Swapped positions of ${sourceP.name} and ${targetP.name}`);
      return;
    }

    // Both on bench: Swap bench order
    if (!sourceP.isStarter && !targetP.isStarter) {
      if (sourceP.pos === 'GKP' || targetP.pos === 'GKP') {
        showToast('Substitute Goalkeeper stays in GKP slot.');
        return;
      }
      const orderA = sourceP.benchOrder;
      const orderB = targetP.benchOrder;
      setSquad(prev => prev.map(p => {
        if (p.id === sourceP.id) return { ...p, benchOrder: orderB };
        if (p.id === targetP.id) return { ...p, benchOrder: orderA };
        return p;
      }));
      showToast(`Reordered bench: ${sourceP.name} â†” ${targetP.name}`);
      return;
    }

    // Starter & Bench swap
    const starter = sourceP.isStarter ? sourceP : targetP;
    const benchP = sourceP.isStarter ? targetP : sourceP;

    if (starter.pos === 'GKP' && benchP.pos !== 'GKP') {
      showToast('Goalkeepers can only be replaced by substitute Goalkeepers.');
      return;
    }
    if (benchP.pos === 'GKP' && starter.pos !== 'GKP') {
      showToast('Goalkeepers cannot replace outfield starters.');
      return;
    }

    const simulatedStarters = starters.map(p => p.id === starter.id ? { ...benchP, isStarter: true, benchOrder: null } : p);
    const check = isValidFormation(simulatedStarters);
    if (!check.valid) {
      showToast(`Invalid formation: ${check.reason}`);
      return;
    }

    const bOrder = benchP.benchOrder;
    setSquad(prev => prev.map(p => {
      if (p.id === starter.id) return { ...p, isStarter: false, benchOrder: bOrder };
      if (p.id === benchP.id) return { ...p, isStarter: true, benchOrder: null };
      return p;
    }));

    if (captainId === starter.id) {
      setCaptainId(benchP.id);
      showToast(`Subbed in ${benchP.name} (Now Captain) for ${starter.name}`);
    } else if (viceCaptainId === starter.id) {
      setViceCaptainId(benchP.id);
      showToast(`Subbed in ${benchP.name} (Now Vice-Captain) for ${starter.name}`);
    } else {
      showToast(`Substituted ${benchP.name} for ${starter.name}`);
    }
  };

  // Get jersey asset for a player
  const getPlayerJersey = (player) => {
    const teamObj = JERSEY_MAP[player.team] || JERSEY_MAP.DRAGONS;
    return player.pos === 'GKP' ? teamObj.gk : teamObj.outfield;
  };

  const getTeamAccent = (teamKey) => TEAM_ACCENTS[teamKey] || TEAM_ACCENTS.DRAGONS;

  // Render an empty pitch slot (+ Add POS) when player count for a position is under target
  const RenderEmptySlot = ({ pos, previousPlayerName = null }) => {
    const slotName = pos === 'GKP' ? 'Goalkeeper' : pos === 'DEF' ? 'Defender' : pos === 'MID' ? 'Midfielder' : 'Forward';
    const hasPreviousName = Boolean(previousPlayerName);
    const slotLabel = hasPreviousName ? (pos === 'GKP' ? 'Previous keeper' : 'Previous player') : slotName;

    return (
      <div
        onClick={() => {
          setTransferPosFilter(pos);
          showToast(`Select a ${pos} from the left player selection list.`);
        }}
        className="flex flex-col items-center select-none group cursor-pointer"
      >
        <div className={`relative flex flex-col items-center justify-center w-[58px] min-[380px]:w-[68px] sm:w-[88px] md:w-[104px] h-[86px] min-[380px]:h-[98px] sm:h-[116px] md:h-[128px] rounded-md border backdrop-blur-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] transition-all duration-200 hover:scale-105 ${
          hasPreviousName ? 'border-white/30 bg-white/10' : 'border-white/60 bg-white/15 hover:bg-white/20'
        }`}>
          <div className="absolute inset-x-2 top-1.5 text-center text-[8px] sm:text-[9px] font-medium uppercase tracking-wider text-white/80">
            {slotLabel}
          </div>

          <div className={`rounded-full border flex items-center justify-center text-white font-semibold shadow-sm ${
            hasPreviousName ? 'w-5 h-5 sm:w-6 sm:h-6 bg-white/20 border-white/35 text-white/90 text-lg sm:text-xl' : 'w-6 h-6 sm:w-7 sm:h-7 bg-white/25 border-white/50 text-lg sm:text-xl' 
          }`}>
            +
          </div>

          <div className="mt-1.5 sm:mt-2 text-center px-1">
            <div className={`truncate max-w-[52px] ${
              hasPreviousName ? 'text-[8px] sm:text-[9px] font-bold text-white/95' : 'text-[8px] sm:text-[9px] font-semibold text-white/90'
            }`}>
              {previousPlayerName || 'Keeper'}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render a player card on the pitch or bench matching user's exact uploaded image
  const RenderPitchPlayer = ({ player, isBench = false, benchRole = '' }) => {
    const isCapt = captainId === player.id;
    const isVice = viceCaptainId === player.id;
    const isSwapTarget = swapSourcePlayer && canSwap(swapSourcePlayer, player) && swapSourcePlayer.id !== player.id;
    const isSwapSource = swapSourcePlayer?.id === player.id;

    const jerseyImg = getPlayerJersey(player);

    const displayValue = displayFilter === 'Points' 
      ? player.pts 
      : displayFilter === 'Opponent' 
      ? player.fixture 
      : `AC ${player.price.toFixed(1)}m`;

    // Determine opacity/fading when a swap is active
    const swapActive = !!swapSourcePlayer;
    const isNeutral = swapActive && !isSwapSource && !isSwapTarget;

    return (
      <div
        className="flex flex-col items-center select-none group relative transition-opacity duration-200"
        style={{ opacity: isNeutral ? 0.28 : 1 }}
      >
        {/* Bench position header if on bench */}
        {isBench && (
          <div className="text-[9px] sm:text-[11px] font-medium uppercase text-gray-800 tracking-wider mb-0.5 sm:mb-1 underline decoration-dotted decoration-gray-400">
            {benchRole}
          </div>
        )}

        {/* Compact Styled Card Container (Mobile responsive) */}
        <div
          onClick={() => {
            if (swapSourcePlayer) {
              if (isSwapSource) {
                // clicking same player cancels
                setSwapSourcePlayer(null);
              } else if (isSwapTarget) {
                executeSwap(swapSourcePlayer, player);
                setSwapSourcePlayer(null);
              }
              // clicking a neutral player does nothing
            } else {
              setModalPlayer(player);
            }
          }}
          className={`relative flex flex-col justify-between items-center w-[58px] min-[380px]:w-[68px] sm:w-[88px] md:w-[104px] ${
            activeTab === 'transfers' 
              ? 'h-[94px] min-[380px]:h-[106px] sm:h-[126px] md:h-[138px]' 
              : 'h-[86px] min-[380px]:h-[98px] sm:h-[116px] md:h-[128px]'
          } overflow-hidden cursor-pointer transition-all duration-200 border-2 rounded-md backdrop-blur-xs ${
            isSwapSource
              ? 'bg-black/25 border-[#e90052] scale-105 shadow-sm'
              : isSwapTarget
              ? 'bg-black/25 border-emerald-400 hover:scale-105 active:scale-95 shadow-sm'
              : isBench
              ? 'bg-black/20 border-gray-400/40 hover:scale-105 active:scale-95 shadow-sm'
              : 'bg-black/25 border-white/30 hover:scale-105 active:scale-95 shadow-sm'
          }`}
        >
          {/* Balanced Top Price Header in Transfers mode */}
          {activeTab === 'transfers' && (
            <div className="w-full z-30 flex items-center justify-between px-1.5 sm:px-2 pt-1.5 sm:pt-2 pb-0.5 sm:pb-1 text-[8px] min-[380px]:text-[9px] sm:text-[10px] font-bold">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                    setRemovedSlot({ pos: player.pos, name: player.name });
                  setSquad(prev => prev.filter(p => p.id !== player.id));
                  showToast(`Removed ${player.name} from squad.`);
                }}
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-black/60 hover:bg-red-600 text-white flex items-center justify-center border border-white/70 transition hover:scale-110 active:scale-95 flex-shrink-0"
                title="Remove player"
              >
                <X className="w-2 sm:w-2.5 h-2 sm:h-2.5 stroke-[3]" />
              </button>
              <span className="font-extrabold text-white text-[8px] min-[380px]:text-[9px] sm:text-[10px] tracking-wide whitespace-nowrap drop-shadow-md">AC {player.price.toFixed(1)}m</span>
              {player.hasWarning ? (
                <img
                  src={player.warningType === 'red' || player.status === 'injured' ? cautionRedSignImg : cautionSignImg}
                  alt="Warning"
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain flex-shrink-0 drop-shadow-md"
                  title={player.warningMsg || (player.warningType === 'red' ? 'Injured / Out' : 'Knock / Doubt')}
                />
              ) : (
                <span className="w-3.5 sm:w-4" />
              )}
            </div>
          )}

          {/* Top Left Vertical Badges Stack (for Pick Team / Points tabs) */}
          {activeTab !== 'transfers' && (
            <div className="absolute top-0.5 sm:top-1 left-0.5 sm:left-1 z-20 flex flex-col items-center gap-0.5">
              
              {/* 1. Upgrade / Downgrade Transfer Arrows Badge */}
              {player.hasTransferArrow && (
                <img
                  src={upgradeOrDowngradeImg}
                  alt="Transfer Status"
                  className="w-3 h-3 sm:w-4 sm:h-4 object-contain filter drop-shadow-xs"
                />
              )}

              {/* 2. Captain (C) or Vice Captain (V) Circle Badge */}
              {isCapt && (
                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#200028] text-white font-black text-[7px] sm:text-[8px] flex items-center justify-center border border-white/80 shadow">
                  C
                </div>
              )}
              {isVice && !isCapt && (
                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#200028] text-white font-black text-[7px] sm:text-[8px] flex items-center justify-center border border-white/80 shadow">
                  V
                </div>
              )}

              {/* 3. Star Icon Badge */}
              {player.starred && (
                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#200028] flex items-center justify-center border border-white/80 shadow">
                  <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 fill-[#00ff87] text-[#00ff87]" />
                </div>
              )}

            </div>
          )}

          {/* Top Right Caution Warning Badge if injury doubt (Non-transfers tabs only) */}
          {player.hasWarning && activeTab !== 'transfers' && (
            <div className="absolute top-0.5 sm:top-1 right-0.5 sm:right-1 z-20 w-3.5 h-3.5 sm:w-4 sm:h-4 flex items-center justify-center">
              <img
                src={player.warningType === 'red' || player.status === 'injured' ? cautionRedSignImg : cautionSignImg}
                alt="Caution"
                className="w-full h-full object-contain filter drop-shadow-sm"
                title={player.warningMsg || (player.warningType === 'red' ? 'Injured / Out' : 'Knock / Doubt')}
              />
            </div>
          )}

          {/* Jersey Graphic (Mobile-adjusted sizing) */}
          <div className="w-full flex-1 flex items-end justify-center px-0.5 pt-2 sm:pt-4 pb-0 overflow-hidden relative">
            <img
              src={jerseyImg}
              alt={player.name}
              className="max-h-[58px] min-[380px]:max-h-[68px] sm:max-h-[92px] md:max-h-[108px] w-full object-contain filter drop-shadow-lg hover:brightness-105 transition transform translate-y-5 min-[380px]:translate-y-6 sm:translate-y-8 md:translate-y-9 scale-115 sm:scale-120"
            />
          </div>

          {/* Bottom Flush Plaque Box */}
          <div className="w-full text-center border-t border-gray-200/80 relative z-10">
            {/* Player Surname — red/yellow bg if has warning */}
            <div className={`font-normal text-[8px] min-[380px]:text-[9px] sm:text-[11px] py-0.5 px-0.5 truncate tracking-tight leading-tight ${
              player.hasWarning && (player.warningType === 'red' || player.status === 'injured')
                ? 'bg-red-600 text-white font-bold'
                : player.hasWarning
                ? 'bg-amber-300 text-[#00003c] font-bold'
                : 'bg-white text-[#00003c]'
            }`}>
              {player.name}
            </div>

            {/* Opponent / Fixture Row — red if swap source, green if swap target */}
            <div className={`font-normal text-[7.5px] min-[380px]:text-[8.5px] sm:text-[10px] py-0.5 px-0.5 truncate border-t border-gray-100 leading-tight ${
              isSwapSource
                ? 'bg-[#e90052] text-white'
                : isSwapTarget
                ? 'bg-emerald-500 text-white'
                : 'bg-[#f4f5f8] text-[#00003c]'
            }`}>
              {displayValue}
            </div>
          </div>

        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      
      {/* Toast Notification Banner */}
      {notification && (
        <div className="fixed top-20 right-4 z-50 bg-[#e90052] text-white px-4 sm:px-5 py-2.5 sm:py-3 shadow-2xl border border-pink-400 flex items-center gap-2.5 sm:gap-3 animate-fade-in text-xs sm:text-sm font-black">
          <Info className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <span>{notification}</span>
          <button onClick={() => setNotification(null)} className="ml-2 hover:opacity-80">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* FPL-Style Full Navigation Tab Bar — White/Red Theme */}
      <div className="bg-white border-b-2 border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-2 sm:px-6">
          <div className="flex items-center overflow-x-auto scrollbar-hide">
            {[
              { id: 'pick-team',     label: 'Pick Team' },
              { id: 'points',        label: 'Points' },
              { id: 'transfers',     label: 'Transfers' },
              { id: 'standings',     label: 'Leagues' },
              { id: 'price-changes', label: 'Price Changes' },
              { id: 'fixtures',      label: 'Fixtures' },
              { id: 'statistics',    label: 'Statistics' },
              { id: 'help',          label: 'Help' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setSwapSourcePlayer(null); }}
                className={`whitespace-nowrap px-3 sm:px-5 py-3 sm:py-3.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all border-b-2 -mb-[2px] flex-shrink-0 ${
                  activeTab === tab.id
                    ? 'border-[#e90052] text-[#e90052]'
                    : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTAINER — WIDESCREEN MAX WIDTH */}
      <div className="max-w-[1600px] mx-auto px-2.5 sm:px-6 py-4 sm:py-6">
        
        {/* ================= TAB 1: PICK TEAM PITCH VIEW ================= */}
        {activeTab === 'pick-team' && (
          <div className="space-y-4 sm:space-y-6">

          {/* ── Pick Team Header: Gameweek + Deadline + Chips — White/Red Theme ── */}
          <div className="bg-white border border-gray-200 shadow-sm px-4 sm:px-6 py-4 sm:py-5">
            {/* Gameweek & Deadline row */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-gray-100">
              <div>
                <h2 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-gray-900">Pick Team</h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Gameweek {gameweek} &nbsp;·&nbsp;
                  <span className="text-[#e90052] font-semibold">Deadline: Sat 10 Oct, 10:00</span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[11px] font-semibold uppercase tracking-widest text-emerald-600">Live GW{gameweek}</span>
              </div>
            </div>

            {/* 4 Chip Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {[
                {
                  id: 'bench-boost',
                  label: 'Bench Boost',
                  desc: 'Points scored by your bench count',
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="22" width="32" height="10" rx="3" fill="#e90052" opacity="0.15"/>
                      <rect x="8" y="14" width="24" height="10" rx="3" fill="#e90052" opacity="0.25"/>
                      <circle cx="20" cy="10" r="5" fill="#e90052" opacity="0.15"/>
                      <rect x="4" y="22" width="32" height="10" rx="3" stroke="#e90052" strokeWidth="1.5" fill="none"/>
                      <rect x="8" y="14" width="24" height="10" rx="3" stroke="#e90052" strokeWidth="1.5" fill="none"/>
                      <circle cx="20" cy="10" r="5" stroke="#e90052" strokeWidth="1.5" fill="none"/>
                      <path d="M20 7v6M17 10h6" stroke="#e90052" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  id: 'triple-captain',
                  label: 'Triple Captain',
                  desc: 'Captain scores 3× points',
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="20" cy="20" r="14" stroke="#e90052" strokeWidth="2" fill="#e90052" fillOpacity="0.08"/>
                      <text x="20" y="26" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#e90052">C</text>
                      <circle cx="29" cy="11" r="5" fill="#e90052"/>
                      <text x="29" y="14" textAnchor="middle" fontSize="7" fontWeight="bold" fill="white">3×</text>
                    </svg>
                  ),
                },
                {
                  id: 'wildcard',
                  label: 'Wildcard',
                  desc: 'Make unlimited free transfers',
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6 L34 14 L34 26 L20 34 L6 26 L6 14 Z" stroke="#e90052" strokeWidth="2" fill="#e90052" fillOpacity="0.08"/>
                      <path d="M14 20 L18 24 L26 16" stroke="#e90052" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                },
                {
                  id: 'free-hit',
                  label: 'Free Hit',
                  desc: 'Temporary squad for one GW',
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="20" cy="20" r="13" fill="#e90052" fillOpacity="0.08" stroke="#e90052" strokeWidth="2"/>
                      <path d="M20 10 L20 20 L28 20" stroke="#e90052" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="20" cy="20" r="2" fill="#e90052"/>
                    </svg>
                  ),
                },
              ].map(chip => (
                <button
                  key={chip.id}
                  className="group relative bg-white hover:bg-red-50 border border-gray-200 hover:border-[#e90052] rounded-lg p-3 sm:p-4 flex flex-col items-center gap-1.5 transition-all duration-200 text-center shadow-xs"
                >
                  <div className="flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-red-50 border border-red-100 group-hover:border-[#e90052]/40 transition">
                    {chip.icon}
                  </div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-gray-800 leading-tight">{chip.label}</p>
                  <span className="text-[9px] sm:text-[10px] text-gray-400 leading-tight hidden sm:block">{chip.desc}</span>
                  <div className="mt-1 w-full bg-[#e90052] text-white text-[9px] sm:text-[10px] font-bold uppercase py-1 rounded-sm tracking-wider group-hover:bg-[#c0392b] transition">
                    Play
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Main pick-team grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
            
            {/* LEFT SIDEBAR (Cols 1-4) */}
            <div className="lg:col-span-4 space-y-4">
              
              {/* User / Team Profile Card */}
              <div className="p-4 sm:p-5 bg-white border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setShowLogoPicker(prev => !prev)}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 border border-gray-300 flex items-center justify-center p-1 hover:border-[#e90052] transition"
                    title="Change team logo"
                  >
                    <img src={getSelectedBadgeImage()} alt={`${selectedBadge} team logo`} className="w-full h-full object-contain" />
                  </button>
                  <div className="min-w-0 flex-1">
                    <input
                      type="text"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      aria-label="Team name"
                      className="w-full min-w-0 bg-transparent border-0 border-b border-transparent hover:border-gray-300 focus:border-[#e90052] focus:outline-none px-0 py-0 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 uppercase"
                      placeholder="Enter team name"
                    />
                    <p className="text-xs font-medium text-gray-600 flex items-center gap-1.5">
                      Benjamin Acheampong
                      <span className="inline-block w-4 h-2.5 bg-yellow-500 border border-black" title="Ghana" />
                    </p>
                  </div>
                </div>
              </div>

              {/* Squad & Transfers Card (No Points on Pick Team) */}
              <div className="p-4 sm:p-5 bg-white border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-3 sm:mb-4">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-900">Squad & Transfers</h3>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#e90052] bg-red-50 px-2 py-0.5 border border-red-100 rounded">
                    Deadline: Sat 10 Oct
                  </span>
                </div>

                <div className="space-y-2.5 sm:space-y-3 text-xs">
                  <div className="flex justify-between items-center py-0.5 sm:py-1">
                    <span className="text-gray-600 font-normal">Free Transfers</span>
                    <span className="font-bold text-gray-900 text-xs sm:text-sm">1</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5 sm:py-1">
                    <span className="text-gray-600 font-normal">Cost</span>
                    <span className="font-semibold text-gray-900 text-xs sm:text-sm">0 pts</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5 sm:py-1">
                    <span className="text-gray-600 font-normal">In The Bank</span>
                    <span className="font-semibold text-emerald-600 text-xs sm:text-sm">£0.5m</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5 sm:py-1">
                    <span className="text-gray-600 font-normal">Squad Value</span>
                    <span className="font-bold text-gray-900 text-xs sm:text-sm">£100.0m</span>
                  </div>
                </div>
              </div>

              {/* Team Badge Card — Pick Logo */}
              <div className="p-4 sm:p-5 bg-white border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-900">Team Badge</h3>
                  <button
                    onClick={() => setShowLogoPicker(prev => !prev)}
                    className="text-[10px] sm:text-[11px] font-bold text-[#e90052] hover:text-white bg-red-50 hover:bg-[#e90052] px-2.5 py-1 border border-red-200 rounded transition"
                  >
                    {showLogoPicker ? 'Close' : 'Pick Logo >'}
                  </button>
                </div>

                {/* Selected Logo Display */}
                <div
                  onClick={() => setShowLogoPicker(prev => !prev)}
                  className="w-28 h-32 sm:w-36 sm:h-40 mx-auto bg-gray-50 border-2 border-dashed border-gray-300 hover:border-[#e90052] flex flex-col items-center justify-center p-3 text-center cursor-pointer transition rounded-lg group"
                >
                  <img
                    src={getSelectedBadgeImage()}
                    alt={selectedBadge}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-1.5 transform group-hover:scale-110 transition"
                  />
                  <p className="text-[10px] sm:text-[11px] font-bold uppercase text-gray-900 leading-tight">
                    {selectedBadge}
                  </p>
                  <span className="text-[9px] text-[#e90052] font-semibold mt-0.5">Click to change</span>
                </div>

                <div className="mt-3">
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wide text-gray-700 mb-1.5">
                    Team Name
                  </label>
                  <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-2.5 py-2 text-xs sm:text-sm font-semibold text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#e90052]/30 focus:border-[#e90052]"
                    placeholder="Enter your team name"
                  />
                </div>

                {/* Logo Selection Grid */}
                {showLogoPicker && (
                  <div className="mt-4 pt-3 border-t border-gray-200 animate-fade-in">
                    <p className="text-[11px] font-bold uppercase text-gray-700 mb-2 text-center">Choose Team Crest:</p>
                    <div className="grid grid-cols-3 gap-2">
                      {LOGOS_LIST.map(item => (
                        <button
                          key={item.key}
                          onClick={() => {
                            setSelectedBadge(item.key);
                            setShowLogoPicker(false);
                            showToast(`Updated Team Badge to ${item.name}!`);
                          }}
                          className={`p-2 border rounded-lg flex flex-col items-center gap-1 transition ${
                            selectedBadge === item.key
                              ? 'border-[#e90052] bg-red-50/50 ring-2 ring-[#e90052]/30'
                              : 'border-gray-200 bg-white hover:border-gray-400'
                          }`}
                        >
                          <img src={customBadges[item.key] || item.logo} alt={item.name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                          <span className="text-[9px] font-bold uppercase text-gray-800 truncate w-full text-center">{item.name}</span>
                        </button>
                      ))}
                    </div>

                    <div className="mt-3 flex items-center justify-center">
                      <label className="inline-flex cursor-pointer items-center gap-2 border border-gray-300 bg-white px-3 py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-wide text-gray-800 hover:border-[#e90052] hover:text-[#e90052] transition">
                        <span>Upload Logo</span>
                        <input type="file" accept="image/*" className="hidden" onChange={handleBadgeUpload} />
                      </label>
                    </div>
                  </div>
                )}
              </div>

              {/* Fan League */}
              <div className="p-4 sm:p-5 bg-white border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-900">Fan League</h3>
                  <button className="text-[10px] sm:text-[11px] font-medium text-gray-700 hover:text-black bg-gray-100 px-2 py-0.5 border border-gray-300">
                    View League &gt;
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <img src={lionsLogo} alt="Lions Crest" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                  <div>
                    <p className="text-xs font-semibold uppercase text-gray-900">Manchester United Fan League</p>
                    <p className="text-[10px] text-gray-500">Rank: 42,109</p>
                  </div>
                </div>
              </div>

              {/* My Leagues */}
              <div className="p-4 sm:p-5 bg-white border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-900">My Leagues</h3>
                  <button className="text-[10px] sm:text-[11px] font-medium text-gray-700 hover:text-black bg-gray-100 px-2 py-0.5 border border-gray-300">
                    Create/Join Leagues &gt;
                  </button>
                </div>
                <p className="text-[10px] sm:text-[11px] font-semibold uppercase text-gray-500 mb-2">Broadcaster Leagues</p>
                <div className="flex justify-between items-center bg-gray-50 p-2 sm:p-2.5 border border-gray-200 text-xs">
                  <span className="font-medium text-gray-800 text-[11px] sm:text-xs">SuperSport League</span>
                  <span className="font-medium text-gray-900 bg-gray-200 px-1.5 sm:px-2 py-0.5 border border-gray-300 text-[10px] sm:text-xs">854,609</span>
                </div>
              </div>

            </div>

            {/* RIGHT PITCH & SQUAD VIEW (Cols 5-12) */}
            <div className="lg:col-span-8 space-y-4">
              
              {/* Top Gameweek & Deadline Bar (No points stats on Pick Team) */}
              <div className="bg-white border border-gray-200 p-3 sm:p-4 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold uppercase text-gray-900">Gameweek {gameweek} Deadline:</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#e90052]">Sat 10 Oct, 10:00</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs">
                    <div>
                      <span className="text-gray-500">Free Transfers: </span>
                      <span className="font-bold text-gray-900">1</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Bank: </span>
                      <span className="font-bold text-emerald-600">£0.5m</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* View Selector & Dropdown Controls */}
              <div className="flex items-center justify-between flex-wrap gap-2 sm:gap-3">
                <div className="flex bg-gray-100 p-1 border border-gray-300">
                  <button
                    onClick={() => setViewMode('pitch')}
                    className={`px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase transition ${
                      viewMode === 'pitch' ? 'bg-white text-gray-900 shadow-sm border border-gray-300' : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Pitch
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase transition ${
                      viewMode === 'list' ? 'bg-white text-gray-900 shadow-sm border border-gray-300' : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    List
                  </button>
                </div>

                {/* Value Dropdown */}
                <div className="flex items-center gap-2">
                  <select
                    value={displayFilter === 'Points' ? 'Opponent' : displayFilter}
                    onChange={(e) => setDisplayFilter(e.target.value)}
                    className="bg-white border border-gray-300 text-gray-900 text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1.5 focus:outline-none focus:border-pink-500"
                  >
                    <option value="Opponent">Opponent</option>
                    <option value="Current Price">Current Price</option>
                  </select>
                </div>
              </div>

              {/* PITCH VIEW (Mobile responsive) */}
              {viewMode === 'pitch' && (
                <div className="border border-gray-200 bg-white p-1 sm:p-4 shadow-sm relative overflow-hidden">

                  {/* Pitch Container with Local Graphic */}
                  <div
                    className="relative w-full min-h-[580px] min-[380px]:min-h-[640px] sm:min-h-[820px] md:min-h-[920px] bg-cover sm:bg-contain bg-no-repeat bg-center flex flex-col justify-between py-3 sm:py-4 px-1 sm:px-2 select-none"
                    style={{
                      backgroundImage: `url(${pitchBg})`,
                      backgroundColor: '#ffffff',
                    }}
                  >
                    {/* Top squad details header bar */}
                    <div className="flex justify-between items-center px-2 sm:px-6 mb-1 sm:mb-2 z-10">
                      <div className="bg-white/90 backdrop-blur-xs rounded-lg px-3 py-1.5 border border-gray-200 shadow-xs flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-900">SQUAD SELECTOR</span>
                        <span className="text-[10px] text-gray-500">GW{gameweek}</span>
                      </div>
                      <div className="bg-white/90 backdrop-blur-xs rounded-lg px-3 py-1.5 border border-gray-200 shadow-xs flex items-center gap-2">
                        <span className="text-[10px] text-gray-500">Auto Substitutions:</span>
                        <span className="text-xs font-bold text-emerald-600">ON</span>
                      </div>
                    </div>

                    {/* Pitch Rows */}
                    <div className="space-y-4 sm:space-y-8 md:space-y-10 my-auto relative z-10">
                      
                      {/* Row 1: Goalkeeper */}
                      <div className="flex justify-center items-center">
                        {gkStarters.map(player => (
                          <RenderPitchPlayer key={player.id} player={player} />
                        ))}
                      </div>

                      {/* Row 2: Defenders */}
                      <div className="flex justify-around items-center max-w-2xl mx-auto px-0.5 sm:px-2 gap-1 sm:gap-2">
                        {defStarters.map(player => (
                          <RenderPitchPlayer key={player.id} player={player} />
                        ))}
                      </div>

                      {/* Row 3: Midfielders */}
                      <div className="flex justify-around items-center max-w-2xl mx-auto px-0.5 sm:px-2 gap-1 sm:gap-2">
                        {midStarters.map(player => (
                          <RenderPitchPlayer key={player.id} player={player} />
                        ))}
                      </div>

                      {/* Row 4: Forwards */}
                      <div className="flex justify-center items-center gap-4 min-[380px]:gap-8 sm:gap-16 md:gap-24 max-w-xl mx-auto px-0.5 sm:px-2">
                        {fwdStarters.map(player => (
                          <RenderPitchPlayer key={player.id} player={player} />
                        ))}
                      </div>

                    </div>

                    {/* Substitutes Bench Bar */}
                    <div className="mt-4 sm:mt-6 pt-2 sm:pt-4 pb-2 sm:pb-3 border-t border-gray-200 bg-white p-1.5 sm:p-3 relative z-10 shadow-sm rounded-sm">
                      <div className="flex justify-around items-center max-w-2xl mx-auto gap-1 sm:gap-2">
                        {bench.map((player, idx) => {
                          const roleLabel = idx === 0 
                            ? 'GKP' 
                            : `${idx}. ${player.pos}`;
                          return (
                            <RenderPitchPlayer
                              key={player.id}
                              player={player}
                              isBench={true}
                              benchRole={roleLabel}
                            />
                          );
                        })}
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* LIST VIEW */}
              {viewMode === 'list' && (
                <div className="bg-white border border-gray-200 overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead>
                        <tr className="text-gray-500 font-bold border-b border-gray-200 bg-gray-50">
                          <th className="py-3 px-4 uppercase">Player</th>
                          <th className="py-3 px-3 uppercase text-center">CP</th>
                          <th className="py-3 px-3 uppercase text-center">PP</th>
                          <th className="py-3 px-3 uppercase text-center">SP</th>
                          <th className="py-3 px-3 uppercase text-center">F</th>
                          <th className="py-3 px-3 uppercase text-center">TP</th>
                          <th className="py-3 px-4 uppercase text-right">Fix</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        
                        {/* Position Groups */}
                        {[
                          { title: 'Goalkeeper', list: squad.filter(p => p.pos === 'GKP') },
                          { title: 'Defenders', list: squad.filter(p => p.pos === 'DEF') },
                          { title: 'Midfielders', list: squad.filter(p => p.pos === 'MID') },
                          { title: 'Forwards', list: squad.filter(p => p.pos === 'FWD') },
                        ].map(group => (
                          <React.Fragment key={group.title}>
                            <tr className="bg-gray-100">
                              <td colSpan={7} className="py-2 px-4 font-black text-xs uppercase text-gray-800 tracking-wide">
                                {group.title}
                              </td>
                            </tr>
                            {group.list.map(p => {
                              const isCapt = captainId === p.id;
                              const isVice = viceCaptainId === p.id;
                              return (
                                <tr
                                  key={p.id}
                                  onClick={() => setModalPlayer(p)}
                                  className="hover:bg-gray-50 cursor-pointer transition"
                                >
                                  <td className="py-3 px-4 flex items-center gap-3">
                                    <span className="text-gray-400 italic text-[11px]">i</span>
                                    {p.hasWarning && (
                                      <img
                                        src={p.warningType === 'red' || p.status === 'injured' ? cautionRedSignImg : cautionSignImg}
                                        alt="Caution"
                                        className="w-3.5 h-3.5 object-contain flex-shrink-0"
                                        title={p.warningMsg || (p.warningType === 'red' ? 'Injured / Out' : 'Knock / Doubt')}
                                      />
                                    )}
                                    <img src={getPlayerJersey(p)} alt="" className="w-7 h-7 object-contain" />
                                    <div>
                                      <p className="font-black text-gray-900 text-xs flex items-center gap-1.5">
                                        {p.name}
                                        {isCapt && <span className="bg-black text-white text-[9px] px-1 font-black">C</span>}
                                        {isVice && <span className="bg-gray-800 text-white text-[9px] px-1 font-black">V</span>}
                                        {p.starred && <Star className="w-3 h-3 text-emerald-600 fill-emerald-600" />}
                                      </p>
                                      <p className="text-[10px] text-gray-500">{p.clubName} {p.pos}</p>
                                    </div>
                                  </td>
                                  <td className="py-3 px-3 text-center font-bold text-gray-800">£{p.price.toFixed(1)}m</td>
                                  <td className="py-3 px-3 text-center text-gray-400">-</td>
                                  <td className="py-3 px-3 text-center text-gray-400">-</td>
                                  <td className="py-3 px-3 text-center font-bold text-gray-800">{p.form.toFixed(1)}</td>
                                  <td className="py-3 px-3 text-center font-black text-gray-900">{p.totalPts}</td>
                                  <td className="py-3 px-4 text-right font-bold text-gray-700">{p.fixture}</td>
                                </tr>
                              );
                            })}
                          </React.Fragment>
                        ))}

                      </tbody>
                    </table>
                  </div>
                </div>
              )}

            </div>
          </div>
          </div>
        )}

        {/* ================= TAB 2: PRICE CHANGES VIEW ================= */}
        {activeTab === 'price-changes' && (
          <div className="space-y-5">
            {/* Countdown Header */}
            <div className="bg-white border border-gray-200 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
              <div>
                <p className="text-lg sm:text-xl font-medium text-gray-900">
                  Next Price Changes Happen in: <span className="text-[#e90052]">{countdownHours} : {countdownMinutes} : {countdownRemainingSeconds}</span>
                </p>
                <p className="text-xs text-gray-500 mt-0.5">Next Price Change at: 23:00 (Local Time)</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-medium text-gray-800">Last updated: 10/4/2026, 4:20:13 PM</p>
                <p className="text-[10px] text-gray-500">(Updates every 15 minutes)</p>
              </div>
            </div>

            {/* Price Changes Table */}
            <div className="bg-white border border-gray-200 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-xs text-left">
                  <thead>
                    <tr className="text-gray-600 font-medium border-b border-gray-200 bg-gray-50 uppercase">
                      <th className="py-3.5 px-4">Player &#8597;</th>
                      <th className="py-3.5 px-3">Status &#8597;</th>
                      <th className="py-3.5 px-3">Progress &#8597;</th>
                      <th className="py-3.5 px-3">Predicted Progress &#8597;</th>
                      <th className="py-3.5 px-3">Ownership Trend &#8597;</th>
                      <th className="py-3.5 px-3">Current Price &#8597;</th>
                      <th className="py-3.5 px-3">Purchase Price &#8597;</th>
                      <th className="py-3.5 px-4">Selling Price &#8597;</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {PRICE_CHANGES_DATA.map((row) => (
                      <tr key={row.id} className="hover:bg-gray-50 transition">
                        <td className="py-3 px-4 flex items-center gap-3">
                          <span className="text-gray-400 italic text-[11px]">i</span>
                          {row.hasWarning && <img src={cautionSignImg} alt="Warning" className="w-3.5 h-3.5 object-contain inline-block" />}
                          <img src={row.jersey} alt="" className="w-6 h-6 object-contain" />
                          <div>
                            <p className="font-medium text-gray-900 text-xs">{row.name}</p>
                            <p className="text-[10px] text-gray-500">{row.club} {row.pos}</p>
                          </div>
                        </td>
                        <td className="py-3 px-3">
                            <span className={`px-2.5 py-1 text-[10px] font-medium uppercase ${
                            row.statusType === 'drop-fast' ? 'bg-red-600 text-white' :
                            row.statusType === 'drop' ? 'bg-pink-600 text-white' :
                            row.statusType === 'rise' ? 'bg-emerald-600 text-white' :
                            'bg-gray-600 text-white'
                          }`}>
                            {row.statusText}
                          </span>
                        </td>
                        <td className={`py-3 px-3 font-mono font-medium ${row.progress.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>
                          {row.progress}
                        </td>
                        <td className={`py-3 px-3 font-mono font-medium ${row.predicted.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>
                          {row.predicted}
                        </td>
                        <td className="py-3 px-3 font-medium text-gray-700">
                          {row.trend === 'Up' ? <>&#8593; Up</> : <>&#8595; Down</>}
                        </td>
                        <td className="py-3 px-3 font-medium text-gray-900">{row.currentPrice}</td>
                        <td className="py-3 px-3 text-gray-500">{row.purchasePrice}</td>
                        <td className="py-3 px-4 text-gray-500">{row.sellingPrice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: LEAGUE STANDINGS ================= */}
        {activeTab === 'standings' && (
          <div className="bg-white border border-gray-200 p-4 sm:p-6 shadow-sm space-y-4">
            <h2 className="text-lg sm:text-xl font-bold uppercase text-gray-900">Acity Mini-League Standings</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px] text-xs text-left">
                <thead>
                  <tr className="bg-gray-100 text-gray-800 uppercase font-semibold">
                    <th className="py-3 px-4">Rank</th>
                    <th className="py-3 px-4">Team</th>
                    <th className="py-3 px-4">Manager</th>
                    <th className="py-3 px-4">GW5</th>
                    <th className="py-3 px-4">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { rank: 1, name: 'Sodja XI', manager: 'Sodja', gw: 72, total: 1124 },
                    { rank: 2, name: 'lol (You)', manager: 'Benjamin Acheampong', gw: 40, total: 272, highlight: true },
                    { rank: 3, name: 'Sniffer City', manager: 'Sniffer', gw: 61, total: 1076 },
                    { rank: 4, name: 'Kumi FC', manager: 'Kumi', gw: 78, total: 1054 },
                    { rank: 5, name: 'Kkjr Athletic', manager: 'Kkjr', gw: 55, total: 1042 },
                  ].map(r => (
                    <tr key={r.rank} className={r.highlight ? 'bg-pink-50 font-semibold' : 'hover:bg-gray-50'}>
                      <td className="py-3 px-4 text-emerald-600 font-bold">{r.rank}</td>
                      <td className="py-3 px-4 font-semibold text-gray-900">{r.name}</td>
                      <td className="py-3 px-4 text-gray-600">{r.manager}</td>
                      <td className="py-3 px-4 text-emerald-600 font-semibold">{r.gw}</td>
                      <td className="py-3 px-4 font-bold text-gray-900 text-sm">{r.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= POINTS TAB ================= */}
        {activeTab === 'points' && (
          <div className="space-y-4 sm:space-y-6">

            {/* Main Points Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
              
              {/* LEFT SIDEBAR (Cols 1-4) */}
              <div className="lg:col-span-4 space-y-4">
                
                {/* User / Team Profile Card */}
                <div className="p-4 sm:p-5 bg-white border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-50 border border-red-200 flex items-center justify-center font-bold text-xl sm:text-2xl text-[#e90052]">
                      ★
                    </div>
                    <div>
                      <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 uppercase">
                        lol
                      </h1>
                      <p className="text-xs font-medium text-gray-600 flex items-center gap-1.5">
                        Benjamin Acheampong
                        <span className="inline-block w-4 h-2.5 bg-yellow-500 border border-black" title="Ghana" />
                      </p>
                    </div>
                  </div>
                </div>

                {/* Points & Rankings Card */}
                <div className="p-4 sm:p-5 bg-white border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-3 sm:mb-4">
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-900">Points & Rankings</h3>
                    <button className="text-[10px] sm:text-[11px] font-medium text-gray-700 hover:text-black flex items-center bg-gray-100 px-2 py-0.5 border border-gray-300">
                      Gameweek History <ChevronRight className="w-3 h-3 ml-0.5" />
                    </button>
                  </div>

                  <div className="space-y-2.5 sm:space-y-3 text-xs">
                    <div className="flex justify-between items-center py-0.5 sm:py-1">
                      <span className="text-gray-600 font-normal">Overall points</span>
                      <span className="font-bold text-[#e90052] text-xs sm:text-sm">272</span>
                    </div>
                    <div className="flex justify-between items-center py-0.5 sm:py-1">
                      <span className="text-gray-600 font-normal">Overall rank</span>
                      <span className="font-semibold text-gray-900 text-xs sm:text-sm">6,856,356</span>
                    </div>
                    <div className="flex justify-between items-center py-0.5 sm:py-1">
                      <span className="text-gray-600 font-normal">Total players</span>
                      <span className="font-semibold text-gray-900 text-xs sm:text-sm">11,015,686</span>
                    </div>
                    <div className="flex justify-between items-center py-0.5 sm:py-1 bg-red-50 p-2 rounded border border-red-100">
                      <span className="text-[#e90052] font-bold">Gameweek 5 points</span>
                      <span className="font-black text-[#e90052] text-sm sm:text-base">54</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* RIGHT PITCH & SQUAD VIEW (Cols 5-12) */}
              <div className="lg:col-span-8 space-y-4">
                
                {/* Top Gameweek Stat Banner */}
                <div className="bg-white border border-gray-200 p-3 sm:p-4 text-center shadow-sm">
                  {/* Gameweek Stepper */}
                  <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <button
                      onClick={() => setGameweek(prev => Math.max(1, prev - 1))}
                      className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center hover:bg-gray-200"
                    >
                      <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-800" />
                    </button>
                    <h2 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-gray-900">
                      Gameweek {gameweek}
                    </h2>
                    <button
                      onClick={() => setGameweek(prev => Math.min(38, prev + 1))}
                      className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center hover:bg-gray-200"
                    >
                      <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-800" />
                    </button>
                  </div>

                  {/* 5-Column Stats Row */}
                  <div className="grid grid-cols-5 gap-1 sm:gap-2 items-center text-center">
                    <div>
                      <p className="text-base sm:text-2xl font-bold text-gray-900">48</p>
                      <p className="text-[8px] sm:text-[10px] font-medium uppercase text-gray-500 mt-0.5 truncate">Avg Pts</p>
                    </div>
                    <div>
                      <p className="text-base sm:text-2xl font-bold text-gray-900">126</p>
                      <p className="text-[8px] sm:text-[10px] font-medium uppercase text-gray-500 mt-0.5 truncate">Highest</p>
                    </div>
                    <div className="bg-[#e90052] text-white p-1.5 sm:p-2.5 rounded shadow">
                      <p className="text-xl sm:text-3xl font-bold">54</p>
                      <p className="text-[8px] sm:text-[10px] font-semibold uppercase tracking-tight truncate">GW Points</p>
                    </div>
                    <div>
                      <p className="text-xs sm:text-xl font-bold text-gray-900 truncate">14.2K</p>
                      <p className="text-[8px] sm:text-[10px] font-medium uppercase text-gray-500 mt-0.5 truncate">GW Rank</p>
                    </div>
                    <div>
                      <p className="text-base sm:text-2xl font-bold text-gray-900">0</p>
                      <p className="text-[8px] sm:text-[10px] font-medium uppercase text-gray-500 mt-0.5 truncate">Transfers</p>
                    </div>
                  </div>
                </div>

                {/* Pitch View container with player cards displaying points */}
                <div className="border border-gray-200 bg-white p-1 sm:p-4 shadow-sm relative overflow-hidden">
                  <div
                    className="relative w-full min-h-[580px] min-[380px]:min-h-[640px] sm:min-h-[820px] md:min-h-[920px] bg-cover sm:bg-contain bg-no-repeat bg-center flex flex-col justify-between py-3 sm:py-4 px-1 sm:px-2 select-none"
                    style={{
                      backgroundImage: `url(${pitchBg})`,
                      backgroundColor: '#ffffff',
                    }}
                  >
                    {/* Corner summary badges */}
                    <div className="flex justify-between items-start px-1 sm:px-6 mb-1 sm:mb-2 z-10">
                      <div className="bg-white rounded-xl sm:rounded-2xl p-1.5 sm:p-3 text-center border border-gray-200 shadow-sm flex flex-col items-center min-w-[55px] sm:min-w-[90px]">
                        <span className="text-base sm:text-2xl font-bold text-[#e90052] leading-none">54</span>
                        <div className="mt-1 sm:mt-1.5 px-2 sm:px-3 py-0.5 rounded-full border border-red-100 text-[9px] sm:text-[11px] font-bold uppercase text-[#e90052] bg-red-50">
                          GW Pts
                        </div>
                      </div>

                      <div className="bg-white rounded-xl sm:rounded-2xl p-1.5 sm:p-3 text-center border border-gray-200 shadow-sm flex flex-col items-center min-w-[55px] sm:min-w-[90px]">
                        <span className="text-xs sm:text-base font-bold text-gray-900 leading-tight">14.2K</span>
                        <div className="mt-1 sm:mt-1.5 px-2 sm:px-3 py-0.5 rounded-full border border-gray-200 text-[9px] sm:text-[11px] font-medium uppercase text-gray-700 bg-gray-50">
                          GW Rank
                        </div>
                      </div>
                    </div>

                    {/* Pitch Rows showing player points */}
                    <div className="space-y-4 sm:space-y-8 md:space-y-10 my-auto relative z-10">
                      <div className="flex justify-center items-center">
                        {gkStarters.map(player => (
                          <RenderPitchPlayer key={player.id} player={player} />
                        ))}
                      </div>

                      <div className="flex justify-around items-center max-w-2xl mx-auto px-0.5 sm:px-2 gap-1 sm:gap-2">
                        {defStarters.map(player => (
                          <RenderPitchPlayer key={player.id} player={player} />
                        ))}
                      </div>

                      <div className="flex justify-around items-center max-w-2xl mx-auto px-0.5 sm:px-2 gap-1 sm:gap-2">
                        {midStarters.map(player => (
                          <RenderPitchPlayer key={player.id} player={player} />
                        ))}
                      </div>

                      <div className="flex justify-center items-center gap-4 min-[380px]:gap-8 sm:gap-16 md:gap-24 max-w-xl mx-auto px-0.5 sm:px-2">
                        {fwdStarters.map(player => (
                          <RenderPitchPlayer key={player.id} player={player} />
                        ))}
                      </div>
                    </div>

                    {/* Substitutes Bench Bar */}
                    <div className="mt-4 sm:mt-6 pt-2 sm:pt-4 pb-2 sm:pb-3 border-t border-gray-200 bg-white p-1.5 sm:p-3 relative z-10 shadow-sm rounded-sm">
                      <div className="flex justify-around items-center max-w-2xl mx-auto gap-1 sm:gap-2">
                        {bench.map((player, idx) => {
                          const roleLabel = idx === 0 
                            ? 'GKP' 
                            : `${idx}. ${player.pos}`;
                          return (
                            <RenderPitchPlayer
                              key={player.id}
                              player={player}
                              isBench={true}
                              benchRole={roleLabel}
                            />
                          );
                        })}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* ================= TRANSFERS TAB (OFFICIAL FPL TRANSFERS TEMPLATE - RED & WHITE THEME) ================= */}
        {activeTab === 'transfers' && (
          <div className="space-y-4">
            
            {/* Main 2-Panel Grid (Left: Player Selection, Right: Pitch & Transfers Summary) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:items-stretch">
              
              {/* ── LEFT PANEL: PLAYER SELECTION (5 Cols) ── */}
              <div className="lg:col-span-5 bg-white border border-gray-200 rounded-xl shadow-sm p-4 sm:p-5 flex flex-col h-full min-h-0">
                
                {/* 1. Header */}
                <div className="mb-3">
                  <h2 className="text-xl font-semibold uppercase tracking-tight text-gray-900">Player Selection</h2>
                  <p className="text-[11px] text-gray-500 mt-0.5 leading-tight font-medium">
                    Select a maximum of 3 players from a single team or 'Auto Pick' if you're short of time.
                  </p>
                </div>

                {/* 2. Find a player Search */}
                <div className="mb-3">
                  <label className="text-[10px] font-medium uppercase text-gray-500 mb-1 block">Find a player</label>
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by name"
                      value={transferSearch}
                      onChange={(e) => setTransferSearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-xs font-semibold focus:outline-none focus:border-[#e90052] bg-gray-50/50"
                    />
                  </div>
                </div>

                {/* 3. Filter Bar (Position, Sort, Max Price, Reset) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                  <select
                    value={transferPosFilter}
                    onChange={(e) => setTransferPosFilter(e.target.value)}
                    className="w-full px-2 py-1.5 border border-gray-300 rounded text-[11px] font-medium text-gray-800 focus:outline-none focus:border-[#e90052]"
                  >
                    <option value="ALL">All players</option>
                    <option value="GKP">Goalkeepers</option>
                    <option value="DEF">Defenders</option>
                    <option value="MID">Midfielders</option>
                    <option value="FWD">Forwards</option>
                  </select>

                  <select
                    value={transferSort}
                    onChange={(e) => setTransferSort(e.target.value)}
                    className="w-full px-2 py-1.5 border border-gray-300 rounded text-[11px] font-medium text-gray-800 focus:outline-none focus:border-[#e90052]"
                  >
                    <option value="pts">Total points</option>
                    <option value="price">Price</option>
                    <option value="tsb">Selected %</option>
                  </select>

                  <select
                    value={transferClubFilter}
                    onChange={(e) => setTransferClubFilter(e.target.value)}
                    className="w-full px-2 py-1.5 border border-gray-300 rounded text-[11px] font-medium text-gray-800 focus:outline-none focus:border-[#e90052]"
                  >
                    <option value="ALL">All Clubs</option>
                    <option value="DRAGONS">Dragons</option>
                    <option value="ELITES">Elites</option>
                    <option value="FALCONS">Falcons</option>
                    <option value="LIONS">Lions</option>
                    <option value="VIKINGS">Vikings</option>
                    <option value="WARRIORS">Warriors</option>
                  </select>

                  <button
                    onClick={() => {
                      setTransferSearch('');
                      setTransferPosFilter('ALL');
                      setTransferClubFilter('ALL');
                      setTransferSort('pts');
                    }}
                    className="px-2 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-[11px] font-medium rounded border border-gray-300 transition flex items-center justify-center gap-1"
                  >
                    Reset ↺
                  </button>
                </div>

                {/* 4. Player Count Banner */}
                <div className="bg-[#e90052] text-white text-center text-xs font-semibold py-1.5 px-3 rounded-md mb-3 tracking-wide shadow-xs">
                  {ALL_REAL_PLAYERS.filter(p => {
                    const matchSearch = p.name.toLowerCase().includes(transferSearch.toLowerCase());
                    const matchPos = transferPosFilter === 'ALL' || p.pos === transferPosFilter;
                    const matchClub = transferClubFilter === 'ALL' || p.team === transferClubFilter;
                    return matchSearch && matchPos && matchClub;
                  }).length} players shown
                </div>

                {/* 5. Categorized Player Selection List */}
                <div className="flex-none min-h-0 overflow-y-auto max-h-[1100px] pr-1 space-y-4 divide-y divide-gray-100">
                  {['GKP', 'DEF', 'MID', 'FWD'].map(posGroup => {
                    const groupTitle = posGroup === 'GKP' ? 'Goalkeepers' : posGroup === 'DEF' ? 'Defenders' : posGroup === 'MID' ? 'Midfielders' : 'Forwards';
                    const playersInGroup = ALL_REAL_PLAYERS
                      .filter(p => p.pos === posGroup)
                      .filter(p => {
                        const matchSearch = p.name.toLowerCase().includes(transferSearch.toLowerCase());
                        const matchPos = transferPosFilter === 'ALL' || p.pos === transferPosFilter;
                        const matchClub = transferClubFilter === 'ALL' || p.team === transferClubFilter;
                        return matchSearch && matchPos && matchClub;
                      })
                      .sort((a, b) => {
                        if (transferSort === 'pts') return b.pts - a.pts;
                        if (transferSort === 'price') return b.price - a.price;
                        if (transferSort === 'tsb') return parseFloat(b.tsb) - parseFloat(a.tsb);
                        return b.pts - a.pts;
                      });

                    if (playersInGroup.length === 0) return null;

                    return (
                      <div key={posGroup} className="pt-2 first:pt-0">
                        {/* Table Header Row */}
                        <div className="flex items-center justify-between py-1.5 px-1 bg-gray-50 border-b border-gray-200 text-[10px] font-medium uppercase text-gray-500 mb-1 rounded-t">
                          <span>{groupTitle}</span>
                          <div className="flex items-center gap-6 pr-12">
                            <span>Price</span>
                            <span>TP</span>
                          </div>
                        </div>

                        {/* Player Rows */}
                        <div className="space-y-1">
                          {playersInGroup.map(player => {
                            const inSquad = squad.some(sp => sp.id === player.id);
                            const teamObj = JERSEY_MAP[player.team] || JERSEY_MAP.DRAGONS;
                            const jerseyImg = player.pos === 'GKP' ? teamObj.gk : teamObj.outfield;

                            return (
                              <div
                                key={player.id}
                                className="flex items-center justify-between p-2 rounded-lg hover:bg-red-50/40 border border-gray-100 hover:border-red-100 transition group"
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  <button
                                    onClick={() => setModalPlayer(player)}
                                    className="text-gray-400 hover:text-[#e90052] font-semibold text-xs italic px-1 flex-shrink-0"
                                    title="View player info"
                                  >
                                    i
                                  </button>
                                  


                                  <img src={jerseyImg} alt="" className="w-7 h-7 object-contain flex-shrink-0" />
                                  <div className="min-w-0">
                                    <h4 className="font-medium text-gray-900 text-xs truncate leading-tight group-hover:text-[#e90052]">
                                      {player.name}
                                    </h4>
                                    <p className="text-[10px] text-gray-500 font-medium">
                                      {player.clubName} &nbsp;•&nbsp; <span className="uppercase">{player.pos}</span>
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-center gap-3">
                                  <div className="flex items-center gap-1 flex-shrink-0">
                                    {player.hasWarning && (
                                      <img
                                        src={player.warningType === 'red' || player.status === 'injured' ? cautionRedSignImg : cautionSignImg}
                                        alt="Caution"
                                        className="w-3.5 h-3.5 object-contain flex-shrink-0"
                                        title={player.warningMsg || (player.warningType === 'red' ? 'Injured / Out' : 'Knock / Doubt')}
                                      />
                                    )}
                                    <span className="font-medium text-gray-900 text-xs whitespace-nowrap">AC {player.price.toFixed(1)}m</span>
                                  </div>
                                  <span className="font-semibold text-[#e90052] text-xs w-6 text-right">{player.pts}</span>
                                  <button
                                    disabled={inSquad}
                                    onClick={() => {
                                      if (inSquad) return;

                                      if (!canAddPlayerToSquad(player)) {
                                        if (squad.length >= 15) {
                                          showToast('Squad is full. Remove a player before adding another.');
                                        } else if (squad.filter(p => p.team === player.team).length >= 3) {
                                          showToast(`You already have 3 ${player.clubName} players. Pick a different club.`);
                                        } else {
                                          showToast('This player cannot be added right now.');
                                        }
                                        return;
                                      }

                                      setSquad(prev => [...prev, {
                                        ...player,
                                        clubName: player.clubName,
                                        isStarter: false,
                                        benchOrder: 3,
                                        recentForm: [
                                          { gw: 'GW1', opp: 'ELITES', pts: 4, logo: elitesLogo },
                                          { gw: 'GW2', opp: 'VIKINGS', pts: 3, logo: vikingsLogo },
                                          { gw: 'GW3', opp: 'WARRIORS', pts: 6, logo: warriorsLogo },
                                        ],
                                        upcomingFixtures: [
                                          { gw: 'GW4', opp: 'WARRIORS', diff: 3, logo: warriorsLogo },
                                          { gw: 'GW5', opp: 'ELITES', diff: 2, logo: elitesLogo },
                                          { gw: 'GW6', opp: 'VIKINGS', diff: 4, logo: vikingsLogo },
                                        ]
                                      }]);
                                      showToast(`Added ${player.name} to squad!`);
                                    }}
                                    className={`w-6 h-6 rounded-full flex items-center justify-center font-medium text-xs transition ${
                                      inSquad
                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        : 'bg-[#e90052] text-white hover:bg-[#c0392b] shadow-xs'
                                    }`}
                                  >
                                    {inSquad ? '✓' : '+'}
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>


              {/* ── RIGHT PANEL: TRANSFERS PITCH & STATS (7 Cols) ── */}
              <div className="lg:col-span-7 bg-white border border-gray-200 rounded-xl shadow-sm p-4 sm:p-5 flex flex-col space-y-4">
                
                {/* 1. Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
                  <div>
<h2 className="text-xl font-semibold uppercase tracking-tight text-gray-900 flex items-center gap-1.5">
                      Transfers
                      <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-600 text-xs flex items-center justify-center font-medium">?</span>
                    </h2>
                    <p className="text-[11px] text-gray-500 mt-0.5 font-medium">
                      Select a maximum of 3 players from a single team or 'Auto Pick' if you are short of time.
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-medium text-gray-900">Gameweek 4 &nbsp;•&nbsp; </span>
                    <span className="text-xs font-semibold text-[#e90052]">Deadline: Sat 10 Oct, 13:00</span>
                  </div>
                </div>

                {/* 2. Top Chips & Budget Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 items-center bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <button
                    onClick={() => showToast('Wildcard activated!')}
                    className="bg-white border border-red-200 text-[#e90052] hover:bg-red-50 p-2 rounded text-center transition shadow-xs"
                  >
                    <p className="text-[10px] font-medium uppercase">Wildcard</p>
                    <p className="text-[9px] font-medium text-emerald-600">Play</p>
                  </button>

                  <button
                    onClick={() => showToast('Free Hit activated!')}
                    className="bg-white border border-red-200 text-[#e90052] hover:bg-red-50 p-2 rounded text-center transition shadow-xs"
                  >
                    <p className="text-[10px] font-medium uppercase">Free Hit</p>
                    <p className="text-[9px] font-medium text-emerald-600">Play</p>
                  </button>

                  <div className="bg-emerald-600 text-white p-2 rounded text-center shadow-xs">
                    <p className="text-[9px] font-bold uppercase text-white/80">Selected</p>
                    <p className="text-sm font-semibold">{visibleSquad.length} / 15</p>
                  </div>

                  <div className="bg-white border border-gray-200 p-2 rounded text-center shadow-xs">
                    <p className="text-[9px] font-bold uppercase text-gray-500">Budget</p>
                    <p className="text-sm font-semibold text-emerald-600">AC 1.8m</p>
                  </div>

                  <div className="bg-white border border-gray-200 p-2 rounded text-center shadow-xs">
                    <p className="text-[9px] font-bold uppercase text-gray-500">Free Transfers</p>
                    <p className="text-sm font-semibold text-gray-900">2</p>
                  </div>

                  <div className="bg-white border border-gray-200 p-2 rounded text-center shadow-xs">
                    <p className="text-[9px] font-bold uppercase text-gray-500">Cost</p>
                    <p className="text-sm font-semibold text-gray-900">0 pts</p>
                  </div>
                </div>

                {/* Status Warning Badge (FPL Style) */}
                <div className="bg-red-50 border border-red-200 text-[#e90052] px-3 py-1.5 rounded-md text-xs font-medium text-center flex items-center justify-center gap-2">
                  <Info className="w-4 h-4 text-[#e90052]" />
                  <span>Select up to 3 players per club &nbsp;•&nbsp; 15 players total squad size</span>
                </div>

                {/* 3. Pitch / List Toggle & Filter Controls */}
                <div className="flex items-center justify-between pt-1">
                  <div className="inline-flex p-1 bg-gray-100 rounded-lg border border-gray-200">
                    <button
                      onClick={() => setViewMode('pitch')}
                      className={`px-4 py-1.5 text-xs font-medium uppercase rounded-md transition ${
                        viewMode === 'pitch' ? 'bg-[#e90052] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Pitch
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`px-4 py-1.5 text-xs font-medium uppercase rounded-md transition ${
                        viewMode === 'list' ? 'bg-[#e90052] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      List
                    </button>
                  </div>

                  <select
                    value={displayFilter}
                    onChange={(e) => setDisplayFilter(e.target.value)}
                    className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs font-medium text-gray-800 focus:outline-none focus:border-[#e90052] bg-white shadow-xs"
                  >
                    <option value="Opponent">Display: Opponent</option>
                    <option value="Points">Display: Points</option>
                    <option value="Current Price">Display: Current Price</option>
                  </select>
                </div>

                {/* 4. Interactive Transfers Pitch View (Matching Pick Team Pitch Angle, Background, Padding & Dimensions) */}
                {viewMode === 'pitch' && (
                  <div className="border border-gray-200 bg-white p-1 sm:p-4 shadow-sm relative overflow-hidden">
                    <div
                      className="relative w-full min-h-[580px] min-[380px]:min-h-[640px] sm:min-h-[820px] md:min-h-[920px] bg-cover sm:bg-contain bg-no-repeat bg-center flex flex-col justify-between py-3 sm:py-4 px-1 sm:px-2 select-none"
                      style={{
                        backgroundImage: `url(${pitchBg})`,
                        backgroundColor: '#ffffff',
                      }}
                    >
                      {/* Pitch Rows for All 15 Players (Exact Pick Team Row Heights & Spacing) */}
                      <div className="space-y-4 sm:space-y-8 md:space-y-10 my-auto relative z-10 w-full">
                        
                        {/* 1. Goalkeepers Row (2 GKP slots total) */}
                        <div className="flex justify-center items-center gap-4 min-[380px]:gap-8 sm:gap-16">
                          {(() => {
                            const gks = visibleSquad.filter(p => p.pos === 'GKP');
                            const emptyCount = Math.max(0, 2 - gks.length);
                            return (
                              <>
                                {gks.map(player => (
                                  <RenderPitchPlayer key={player.id} player={player} />
                                ))}
                                {Array.from({ length: emptyCount }).map((_, i) => (
                                  <RenderEmptySlot
                                    key={`empty-gkp-${i}`}
                                    pos="GKP"
                                    previousPlayerName={removedSlot?.pos === 'GKP' ? removedSlot.name : null}
                                  />
                                ))}
                              </>
                            );
                          })()}
                        </div>

                        {/* 2. Defenders Row (5 DEF slots total) */}
                        <div className="flex justify-around items-center max-w-2xl mx-auto px-0.5 sm:px-2 gap-1 sm:gap-2">
                          {(() => {
                            const defs = visibleSquad.filter(p => p.pos === 'DEF');
                            const emptyCount = Math.max(0, 5 - defs.length);
                            return (
                              <>
                                {defs.map(player => (
                                  <RenderPitchPlayer key={player.id} player={player} />
                                ))}
                                {Array.from({ length: emptyCount }).map((_, i) => (
                                  <RenderEmptySlot
                                    key={`empty-def-${i}`}
                                    pos="DEF"
                                    previousPlayerName={removedSlot?.pos === 'DEF' ? removedSlot.name : null}
                                  />
                                ))}
                              </>
                            );
                          })()}
                        </div>

                        {/* 3. Midfielders Row (5 MID slots total) */}
                        <div className="flex justify-around items-center max-w-2xl mx-auto px-0.5 sm:px-2 gap-1 sm:gap-2">
                          {(() => {
                            const mids = visibleSquad.filter(p => p.pos === 'MID');
                            const emptyCount = Math.max(0, 5 - mids.length);
                            return (
                              <>
                                {mids.map(player => (
                                  <RenderPitchPlayer key={player.id} player={player} />
                                ))}
                                {Array.from({ length: emptyCount }).map((_, i) => (
                                  <RenderEmptySlot
                                    key={`empty-mid-${i}`}
                                    pos="MID"
                                    previousPlayerName={removedSlot?.pos === 'MID' ? removedSlot.name : null}
                                  />
                                ))}
                              </>
                            );
                          })()}
                        </div>

                        {/* 4. Forwards Row (3 FWD slots total) */}
                        <div className="flex justify-center items-center gap-4 min-[380px]:gap-8 sm:gap-16 md:gap-24 max-w-xl mx-auto px-0.5 sm:px-2">
                          {(() => {
                            const fwds = visibleSquad.filter(p => p.pos === 'FWD');
                            const emptyCount = Math.max(0, 3 - fwds.length);
                            return (
                              <>
                                {fwds.map(player => (
                                  <RenderPitchPlayer key={player.id} player={player} />
                                ))}
                                {Array.from({ length: emptyCount }).map((_, i) => (
                                  <RenderEmptySlot
                                    key={`empty-fwd-${i}`}
                                    pos="FWD"
                                    previousPlayerName={removedSlot?.pos === 'FWD' ? removedSlot.name : null}
                                  />
                                ))}
                              </>
                            );
                          })()}
                        </div>

                      </div>
                    </div>
                  </div>
                )}

                {/* 5. List View Table */}
                {viewMode === 'list' && (
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left">
                        <thead>
                          <tr className="text-gray-600 font-medium border-b border-gray-200 bg-gray-50 uppercase">
                            <th className="py-3 px-4">Player</th>
                            <th className="py-3 px-3 text-center">Price</th>
                            <th className="py-3 px-3 text-center">Form</th>
                            <th className="py-3 px-3 text-center">Total Pts</th>
                            <th className="py-3 px-4 text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {visibleSquad.map(player => (
                            <tr key={player.id} className="hover:bg-red-50/30 transition">
                              <td className="py-3 px-4 flex items-center gap-3">
                                <img src={getPlayerJersey(player)} alt="" className="w-7 h-7 object-contain" />
                                <div>
                                  <p className="font-medium text-gray-900 text-xs">{player.name}</p>
                                  <p className="text-[10px] text-gray-500">{player.clubName} • {player.pos}</p>
                                </div>
                              </td>
                              <td className="py-3 px-3 text-center font-medium text-gray-900">AC {player.price.toFixed(1)}m</td>
                              <td className="py-3 px-3 text-center font-medium text-gray-700">{player.form.toFixed(1)}</td>
                              <td className="py-3 px-3 text-center font-semibold text-[#e90052]">{player.pts}</td>
                              <td className="py-3 px-4 text-right">
                                <button
                                  onClick={() => {
                                    setRemovedSlot({ pos: player.pos, name: player.name });
                                    setSquad(prev => prev.filter(p => p.id !== player.id));
                                    showToast(`Removed ${player.name} from squad.`);
                                  }}
                                  className="px-2.5 py-1 bg-red-100 hover:bg-[#e90052] text-[#e90052] hover:text-white text-[10px] font-medium uppercase rounded transition"
                                >
                                  Remove
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* 6. Bottom Action Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <button
                    onClick={() => {
                      setSquad(ALL_REAL_PLAYERS.slice(0, 15).map((p, i) => ({
                        ...p,
                        isStarter: i < 11,
                        benchOrder: i >= 11 ? i - 10 : null
                      })));
                      showToast('Auto Pick completed!');
                    }}
                    className="py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium text-xs uppercase rounded-lg transition border border-gray-300 shadow-xs text-center"
                  >
                    Auto Pick
                  </button>
                  <button
                    onClick={() => {
                      setSquad(INITIAL_SQUAD);
                      showToast('Squad reset to default.');
                    }}
                    className="py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-xs uppercase rounded-lg transition border border-gray-300 shadow-xs text-center"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => showToast('Transfers saved successfully!')}
                    className="py-3 px-4 bg-[#e90052] hover:bg-[#c0392b] text-white font-medium text-xs uppercase rounded-lg transition shadow-md text-center"
                  >
                    Make Transfers
                  </button>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ================= FIXTURES TAB ================= */}
        {activeTab === 'fixtures' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div><p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#e90052]">Match centre</p><h2 className="text-xl sm:text-2xl font-semibold uppercase tracking-tight text-gray-900">Fixtures</h2><p className="text-xs text-gray-500 mt-1">Upcoming ACITY league matches and gameweek opponents.</p></div>
              <div className="flex gap-2">{[5, 6].map(week => <button key={week} onClick={() => setGameweek(week)} className={`px-3 py-1.5 text-[10px] font-medium uppercase border ${gameweek === week ? 'bg-[#e90052] border-[#e90052] text-white' : 'bg-white border-gray-300 text-gray-600 hover:border-[#e90052]'}`}>GW {week}</button>)}</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
              {FPL_FIXTURES.filter(fixture => fixture.gameweek === gameweek).map(fixture => { const homeLogo = LOGOS_LIST.find(team => team.key === fixture.home)?.logo; const awayLogo = LOGOS_LIST.find(team => team.key === fixture.away)?.logo; return <article key={`${fixture.gameweek}-${fixture.home}-${fixture.away}`} className="bg-white border border-gray-200 rounded-xl shadow-sm p-4"><div className="flex justify-between text-[10px] uppercase text-gray-500 font-medium"><span>{fixture.date}</span><span className="text-[#e90052]">Upcoming</span></div><div className="flex items-center justify-between gap-2 py-5"><div className="flex-1 flex flex-col items-center gap-2 text-center"><img src={homeLogo} alt={`${fixture.home} crest`} className="w-12 h-12 object-contain" /><span className="text-xs font-medium text-gray-900">{fixture.home}</span></div><div className="text-center shrink-0"><span className="block text-[10px] uppercase text-gray-400">Kickoff</span><span className="block text-lg font-semibold text-gray-900 mt-1">{fixture.time}</span><span className="block text-[10px] text-gray-500 mt-1">VS</span></div><div className="flex-1 flex flex-col items-center gap-2 text-center"><img src={awayLogo} alt={`${fixture.away} crest`} className="w-12 h-12 object-contain" /><span className="text-xs font-medium text-gray-900">{fixture.away}</span></div></div><div className="border-t border-gray-100 pt-2 text-center text-[10px] text-gray-500">{fixture.venue}</div></article>; })}
            </div>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"><div className="px-4 py-3 border-b border-gray-200 flex justify-between"><h3 className="text-xs font-semibold uppercase text-gray-900">All upcoming fixtures</h3><span className="text-[10px] text-gray-500">{FPL_FIXTURES.length} matches</span></div><div className="divide-y divide-gray-100">{FPL_FIXTURES.map(fixture => <div key={`row-${fixture.gameweek}-${fixture.home}-${fixture.away}`} className="grid grid-cols-[48px_1fr_auto] sm:grid-cols-[64px_1fr_120px_120px] items-center gap-3 px-4 py-3 text-xs"><span className="text-[10px] font-medium uppercase text-gray-500">GW {fixture.gameweek}</span><span className="font-medium text-gray-900">{fixture.home} <span className="text-gray-400 mx-1">vs</span> {fixture.away}</span><span className="hidden sm:block text-gray-500">{fixture.date}</span><span className="text-right text-gray-600">{fixture.time}</span></div>)}</div></div>
          </div>
        )}

        {/* ================= STATISTICS TAB ================= */}
        {activeTab === 'statistics' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm"><p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#e90052]">Squad analytics</p><h2 className="text-xl sm:text-2xl font-semibold uppercase tracking-tight text-gray-900">Statistics</h2><p className="text-xs text-gray-500 mt-1">Squad value, form, points, and team distribution.</p></div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">{[{ label: 'Squad points', value: squad.reduce((sum, player) => sum + player.pts, 0), detail: 'Total selected players' }, { label: 'Squad value', value: `AC ${squad.reduce((sum, player) => sum + player.price, 0).toFixed(1)}m`, detail: 'Current prices' }, { label: 'Average points', value: squad.length ? (squad.reduce((sum, player) => sum + player.pts, 0) / squad.length).toFixed(1) : '0.0', detail: 'Per player' }, { label: 'Players selected', value: `${squad.length}/15`, detail: 'Squad capacity' }].map(stat => <div key={stat.label} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"><p className="text-[10px] font-medium uppercase text-gray-500">{stat.label}</p><p className="text-xl sm:text-2xl font-semibold text-gray-900 mt-2">{stat.value}</p><p className="text-[10px] text-gray-500 mt-1">{stat.detail}</p></div>)}</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"><div className="px-4 py-3 border-b border-gray-200"><h3 className="text-xs font-semibold uppercase text-gray-900">Top performers</h3></div><div className="divide-y divide-gray-100">{[...squad].sort((a, b) => b.pts - a.pts).slice(0, 6).map((player, index) => <div key={player.id} className="flex items-center gap-3 px-4 py-3"><span className="w-5 text-[10px] font-medium text-gray-400">{String(index + 1).padStart(2, '0')}</span><img src={getPlayerJersey(player)} alt="" className="w-8 h-8 object-contain" /><div className="min-w-0 flex-1"><p className="text-xs font-medium text-gray-900 truncate">{player.name}</p><p className="text-[10px] text-gray-500">{player.clubName} • {player.pos}</p></div><span className="text-sm font-semibold text-[#e90052]">{player.pts}</span></div>)}</div></div>
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"><div className="px-4 py-3 border-b border-gray-200"><h3 className="text-xs font-semibold uppercase text-gray-900">Position breakdown</h3></div><div className="p-4 space-y-4">{['GKP', 'DEF', 'MID', 'FWD'].map(position => { const players = squad.filter(player => player.pos === position); const points = players.reduce((sum, player) => sum + player.pts, 0); const label = position === 'GKP' ? 'Goalkeepers' : position === 'DEF' ? 'Defenders' : position === 'MID' ? 'Midfielders' : 'Forwards'; return <div key={position}><div className="flex justify-between text-xs mb-1"><span className="font-medium text-gray-700">{label}</span><span className="text-gray-500">{players.length} players • {points} pts</span></div><div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-[#e90052]" style={{ width: `${Math.max(4, Math.min(100, points))}%` }} /></div></div>; })}</div></div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"><div className="px-4 py-3 border-b border-gray-200"><h3 className="text-xs font-semibold uppercase text-gray-900">Club ownership</h3></div><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y divide-gray-100">{Object.keys(TEAM_ACCENTS).map(team => { const count = squad.filter(player => player.team === team).length; return <div key={team} className="p-4 text-center"><img src={LOGOS_LIST.find(item => item.key === team)?.logo} alt={`${team} crest`} className="w-9 h-9 object-contain mx-auto mb-2" /><p className="text-[10px] font-medium uppercase text-gray-700">{team}</p><p className="text-lg font-semibold text-gray-900 mt-1">{count}</p><p className="text-[10px] text-gray-500">players</p></div>; })}</div></div>
          </div>
        )}

        {/* ================= HELP TAB ================= */}
        {activeTab === 'help' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-7 shadow-sm">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#e90052]">New to Fantasy Premier League?</p>
              <h2 className="text-2xl sm:text-3xl font-semibold uppercase tracking-tight text-gray-900 mt-1">Start here</h2>
              <p className="text-sm text-gray-600 mt-2 max-w-3xl">Build a squad, choose your starting line-up, captain a player, and manage your team across 38 Gameweeks. Players earn points from their real-life performances.</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {[
                  ['Help', 'https://fantasy.premierleague.com/en/help'],
                  ['Rules', 'https://fantasy.premierleague.com/en/help/rules'],
                  ['FAQs', 'https://fantasy.premierleague.com/en/help/faqs'],
                  ['T&Cs', 'https://fantasy.premierleague.com/en/help/terms'],
                ].map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer" className="px-3 py-1.5 border border-gray-300 text-[10px] font-medium uppercase text-gray-700 hover:border-[#e90052] hover:text-[#e90052] transition">{label}</a>)}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[] .map(section => (
                <article key={section.step} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm">
                  <span className="text-sm font-semibold text-[#e90052]">{section.step}</span>
                  <h3 className="text-sm font-semibold uppercase text-gray-900 mt-2">{section.title}</h3>
                  <p className="text-xs leading-relaxed text-gray-600 mt-2">{section.text}</p>
                </article>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h3 className="text-xs font-semibold uppercase text-gray-900">Gameweek checklist</h3>
                <ul className="mt-3 space-y-2 text-xs text-gray-600">
                  {['Pick your starting XI', 'Select your captain and vice-captain', 'Order your substitutes', 'Check injuries and suspensions', 'Review transfers and chips'].map(item => <li key={item} className="flex gap-2"><span className="text-[#e90052]">+</span>{item}</li>)}
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h3 className="text-xs font-semibold uppercase text-gray-900">FPL glossary</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-3 text-xs"><span><strong>Gameweek:</strong> one round of fixtures.</span><span><strong>Bench:</strong> your substitutes.</span><span><strong>Free transfer:</strong> a transfer without a points cost.</span><span><strong>Clean sheet:</strong> no goals conceded.</span><span><strong>Return:</strong> a goal, assist, or clean sheet.</span><span><strong>Blank Gameweek:</strong> a team does not play.</span></div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* ================= RIGHT-TO-LEFT PLAYER SIDEBAR DRAWER (RED & WHITE THEME) ================= */}
      {modalPlayer && (() => {
        const teamAccent = getTeamAccent(modalPlayer.team);
        const isLightTeam = ['FALCONS', 'WARRIORS'].includes(modalPlayer.team);
        const yellowTextOnDark = modalPlayer.team === 'WARRIORS' ? '#111827' : teamAccent.text;
        const bannerStyle = {
          background: `linear-gradient(135deg, ${teamAccent.primary} 0%, ${teamAccent.secondary} 100%)`,
          color: yellowTextOnDark,
        };

        return (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop Overlay */}
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-fade-in"
              onClick={() => setModalPlayer(null)}
            />

            {/* Slide-in Drawer Container */}
            <div className="fixed top-0 right-0 z-50 h-full w-full max-w-full sm:max-w-[500px] md:max-w-[540px] bg-white border-l border-gray-200 shadow-2xl flex flex-col justify-between p-4 sm:p-6 overflow-y-auto animate-slide-in-right text-gray-900">
              
              <div className="space-y-4">
                {/* Top bar with Title & Close 'X' Button */}
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: modalPlayer.team === 'WARRIORS' ? '#111827' : teamAccent.primary }}>Player Profile</span>
                  <button
                    onClick={() => setModalPlayer(null)}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-red-50 text-gray-400 hover:text-[#e90052] transition flex items-center justify-center"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Team-based banner card */}
                <div className="rounded-2xl p-4 sm:p-5 flex items-center gap-4 relative overflow-hidden shadow-md" style={bannerStyle}>
                  {/* Player Jersey / Graphic */}
                  <div className="w-28 h-32 sm:w-36 sm:h-40 flex-shrink-0 flex items-center justify-center relative z-10">
                    <img
                      src={getPlayerJersey(modalPlayer)}
                      alt={modalPlayer.name}
                      className="max-h-full max-w-full object-contain filter drop-shadow-xl transform hover:scale-105 transition"
                    />
                  </div>

                  {/* Player Text Details */}
                  <div className="min-w-0 flex-1 z-10">
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider" style={{ background: isLightTeam ? 'rgba(17,24,39,0.1)' : 'rgba(255,255,255,0.18)', color: yellowTextOnDark }}>
                      {modalPlayer.pos === 'FWD' ? 'Forward' : modalPlayer.pos === 'MID' ? 'Midfielder' : modalPlayer.pos === 'DEF' ? 'Defender' : 'Goalkeeper'}
                    </span>
                    <p className="text-sm font-medium mt-1 -mb-1" style={{ color: isLightTeam ? '#111827' : 'rgba(255,255,255,0.9)' }}>{modalPlayer.firstName}</p>
                    <h3 className="text-2xl sm:text-3xl font-semibold uppercase tracking-tight leading-tight truncate" style={{ color: isLightTeam ? '#111827' : '#ffffff' }}>
                      {modalPlayer.name}
                    </h3>
                    <p className="text-xs font-medium mt-0.5" style={{ color: isLightTeam ? '#111827' : 'rgba(255,255,255,0.82)' }}>{modalPlayer.clubName}</p>
                  </div>

                  {/* Decorative background watermark badge */}
                  <div
                    className="absolute -right-6 -bottom-6 flex items-center justify-center pointer-events-none rounded-[28px]"
                    style={{
                      width: '170px',
                      height: '170px',
                      background: `${teamAccent.primary}33`,
                      border: `1px solid ${teamAccent.primary}55`,
                      boxShadow: `inset 0 0 0 1px ${teamAccent.primary}22`,
                      opacity: 0.9,
                    }}
                  >
                    <img
                      src={JERSEY_MAP[modalPlayer.team]?.logo || dragonsLogo}
                      alt=""
                      className="w-28 h-28 sm:w-32 sm:h-32 object-contain drop-shadow-[0_4px_18px_rgba(0,0,0,0.25)]"
                      style={{ filter: 'saturate(1.1) contrast(1.04)' }}
                    />
                  </div>
                </div>

                {/* Top Action Pills: Player Profile & Buy Player Shirt */}
                <div className="grid grid-cols-2 gap-2">
                  <button className="py-2 px-3 bg-gray-50 hover:bg-red-50 text-gray-800 hover:text-[#e90052] text-xs font-bold rounded-full flex items-center justify-center gap-1.5 border border-gray-200 transition shadow-2xs">
                    Player Profile <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                  <button className="py-2 px-3 bg-gray-50 hover:bg-red-50 text-gray-800 hover:text-[#e90052] text-xs font-bold rounded-full flex items-center justify-center gap-1.5 border border-gray-200 transition shadow-2xs">
                    Buy Player Shirt <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>

              {/* Price & Price Predictions Card */}
              <div className="rounded-xl p-3.5 border flex items-center justify-between shadow-2xs" style={{ background: teamAccent.surface, borderColor: teamAccent.muted }}>
                <div>
                  <span className="text-xs font-medium" style={{ color: isLightTeam ? '#1f2937' : '#111827' }}>Price: <span className="text-sm font-semibold" style={{ color: '#111827' }}>AC {modalPlayer.price.toFixed(1)}m</span></span>
                  <div className="mt-1">
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full inline-block" style={{ background: teamAccent.primary, color: modalPlayer.team === 'WARRIORS' ? '#111827' : teamAccent.text }}>
                      {modalPlayer.form >= 3.0 ? 'Likely to rise' : 'Likely to drop'}
                    </span>
                  </div>
                </div>
                <button className="hover:underline text-xs font-medium flex items-center gap-1" style={{ color: modalPlayer.team === 'WARRIORS' ? '#111827' : teamAccent.primary }}>
                  View all Price Predictions <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* 3-Column Key Stats Card */}
              <div className="rounded-xl p-3.5 border grid grid-cols-3 text-center shadow-2xs" style={{ background: teamAccent.surface, borderColor: teamAccent.muted }}>
                <div className="border-r pr-2" style={{ borderColor: teamAccent.muted }}>
                  <p className="text-[10px] font-medium uppercase text-gray-500">Form</p>
                  <p className="text-xl font-semibold text-gray-900 mt-0.5">{modalPlayer.form.toFixed(1)}</p>
                </div>
                <div className="border-r px-2" style={{ borderColor: teamAccent.muted }}>
                  <p className="text-[10px] font-medium uppercase text-gray-500">Pts / Match</p>
                  <p className="text-xl font-semibold text-gray-900 mt-0.5">{modalPlayer.ppm.toFixed(1)}</p>
                  <p className="text-[9px] text-gray-400 mt-0.5">14 of 79</p>
                </div>
                <div className="pl-2">
                  <p className="text-[10px] font-medium uppercase text-gray-500">TSB %</p>
                  <p className="text-xl font-semibold mt-0.5" style={{ color: modalPlayer.team === 'WARRIORS' || modalPlayer.team === 'FALCONS' ? '#111827' : teamAccent.primary }}>{modalPlayer.tsb}</p>
                  <p className="text-[9px] text-gray-400 mt-0.5">1 of 79</p>
                </div>
              </div>

              {/* Form & Fixtures Card */}
              <div className="bg-gray-50 rounded-xl p-3.5 border border-gray-200 shadow-2xs">
                <div className="grid grid-cols-2 gap-3">
                  {/* Form column */}
                  <div>
                    <p className="text-xs font-medium text-gray-900 mb-2 uppercase">Form</p>
                    <div className="grid grid-cols-3 gap-1 text-center">
                      {modalPlayer.recentForm?.map((f, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <span className="text-[9px] font-medium text-gray-500">{f.gw}</span>
                          <img src={f.logo || dragonsLogo} alt="" className="w-8 h-8 sm:w-10 sm:h-10 object-contain my-1" />
                          <span className="text-[8px] font-medium text-gray-700 truncate w-full">{f.opp.split(' ')[0]}</span>
                          <span className="text-[10px] font-medium px-1.5 py-0.5 mt-1 rounded-sm w-full shadow-2xs" style={{ background: teamAccent.primary, color: modalPlayer.team === 'WARRIORS' ? '#111827' : teamAccent.text }}>
                            {f.pts}pts
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Fixtures column */}
                  <div>
                    <p className="text-xs font-bold text-gray-900 mb-2 uppercase">Fixtures</p>
                    <div className="grid grid-cols-3 gap-1 text-center">
                      {modalPlayer.upcomingFixtures?.map((fix, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <span className="text-[9px] font-medium text-gray-500">{fix.gw}</span>
                          <img src={fix.logo || lionsLogo} alt="" className="w-8 h-8 sm:w-10 sm:h-10 object-contain my-1" />
                          <span className="text-[8px] font-medium text-gray-700 truncate w-full">{fix.opp}</span>
                          <span className="text-[10px] font-medium border px-2 py-0.5 mt-1 rounded-sm shadow-2xs w-full" style={{
                            background: fix.diff <= 2 ? (teamAccent.primary) : fix.diff === 3 ? '#e5e7eb' : '#ef4444',
                            color: fix.diff <= 2 ? (modalPlayer.team === 'WARRIORS' ? '#111827' : teamAccent.text) : fix.diff === 3 ? '#111827' : '#ffffff',
                            borderColor: fix.diff <= 2 ? teamAccent.primary : fix.diff === 3 ? '#d1d5db' : '#dc2626',
                          }}>
                            {fix.diff}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Captain & Vice Captain Checkboxes if on Pick Team */}
              {activeTab === 'pick-team' && (
                <div className="flex items-center justify-around py-3 border border-gray-200 bg-gray-50 rounded-xl">
                  <label className="flex items-center gap-2.5 cursor-pointer text-xs font-medium text-gray-800 hover:text-[#e90052] transition">
                    <input
                      type="checkbox"
                      checked={captainId === modalPlayer.id}
                      onChange={() => {
                        if (captainId === modalPlayer.id) {
                          showToast('Must have a captain assigned.');
                        } else {
                          if (!modalPlayer.isStarter) {
                            showToast('Only starting players can be Captain.');
                            return;
                          }
                          if (viceCaptainId === modalPlayer.id) setViceCaptainId(captainId);
                          setCaptainId(modalPlayer.id);
                          showToast(`${modalPlayer.name} is now Captain.`);
                        }
                      }}
                      className="w-4 h-4 rounded border-gray-300 text-[#e90052] accent-[#e90052] focus:ring-0"
                    />
                    Captain
                  </label>

                  <label className="flex items-center gap-2.5 cursor-pointer text-xs font-medium text-gray-800 hover:text-[#e90052] transition">
                    <input
                      type="checkbox"
                      checked={viceCaptainId === modalPlayer.id}
                      onChange={() => {
                        if (viceCaptainId === modalPlayer.id) {
                          showToast('Must have a vice-captain assigned.');
                        } else {
                          if (!modalPlayer.isStarter) {
                            showToast('Only starting players can be Vice-Captain.');
                            return;
                          }
                          if (captainId === modalPlayer.id) setCaptainId(viceCaptainId);
                          setViceCaptainId(modalPlayer.id);
                          showToast(`${modalPlayer.name} is now Vice-Captain.`);
                        }
                      }}
                      className="w-4 h-4 rounded border-gray-300 text-[#e90052] accent-[#e90052] focus:ring-0"
                    />
                    Vice Captain
                  </label>
                </div>
              )}
            </div>

            {/* Bottom Action Buttons Footer */}
            <div className="pt-4 mt-auto space-y-2 border-t border-gray-100">
              {activeTab === 'transfers' ? (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => {
                        setRemovedSlot({ pos: modalPlayer.pos, name: modalPlayer.name });
                        setSquad(prev => prev.filter(p => p.id !== modalPlayer.id));
                        showToast(`Removed ${modalPlayer.name} from squad.`);
                        setModalPlayer(null);
                      }}
                      className="py-2.5 px-4 bg-white hover:bg-red-50 text-gray-900 border border-gray-300 hover:border-red-300 font-bold text-xs uppercase rounded-full transition shadow-2xs text-center"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => {
                        setTransferPosFilter(modalPlayer.pos);
                        showToast(`Filtering available ${modalPlayer.pos}s`);
                        setModalPlayer(null);
                      }}
                      className="py-2.5 px-4 bg-white hover:bg-red-50 text-gray-900 border border-gray-300 hover:border-red-300 font-bold text-xs uppercase rounded-full transition shadow-2xs text-center"
                    >
                      Select Replacement
                    </button>
                  </div>
                  <button
                    onClick={() => setModalPlayer(null)}
                    className="w-full py-3 px-4 bg-[#e90052] hover:bg-[#c00042] text-white font-bold text-xs uppercase rounded-full transition shadow-md text-center"
                  >
                    Full Profile
                  </button>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setModalPlayer(null)}
                    className="py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold text-xs uppercase rounded-full transition border border-gray-300 shadow-2xs text-center"
                  >
                    Full Profile
                  </button>
                  <button
                    onClick={() => {
                      setSwapSourcePlayer(modalPlayer);
                      setModalPlayer(null);
                    }}
                    className="py-3 px-4 hover:opacity-90 text-white font-bold text-xs uppercase rounded-full transition shadow-md text-center"
                    style={{ background: teamAccent.primary }}
                  >
                    Substitute
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
        )
      })()}

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default FPLPage;
