import { CategoryInfo, CategoryKey } from '../types';

export const CATEGORIES_LIST: CategoryInfo[] = [
  {
    key: 'admin',
    name: 'Administrative / Records',
    count: 10,
    iconName: 'FolderArchive',
    description: 'Filing, routing slips, 201 files, classification, retention, and RA 10173 compliance.',
  },
  {
    key: 'civil',
    name: 'Civil Service & Employment',
    count: 10,
    iconName: 'Award',
    description: 'Merit and fitness, appointment types, Plantilla, qualification standards, tenure.',
  },
  {
    key: 'leave',
    name: 'Omnibus Rules on Leave',
    count: 15,
    iconName: 'CalendarClock',
    description: 'CSC MC 41/6, VL/SL credits, Maternity (RA 11210), Paternity, Solo Parent, VAWC, PVP.',
  },
  {
    key: 'grammar',
    name: 'Grammar / Error Recognition',
    count: 30,
    iconName: 'CheckCircle2',
    description: 'Subject-verb agreement, idioms, prepositions, subjunctive mood, redundancies.',
  },
  {
    key: 'verbal',
    name: 'Verbal Ability',
    count: 15,
    iconName: 'BookOpen',
    description: 'Vocabulary context clues, root words, prefixes/suffixes, paragraph organization.',
  },
  {
    key: 'ethics',
    name: 'Ethics / RA 6713',
    count: 20,
    iconName: 'ShieldCheck',
    description: '8 Norms of conduct, SALN deadlines, gift prohibitions, 15-day response rule.',
  },
  {
    key: 'proc',
    name: 'Government Procurement',
    count: 25,
    iconName: 'ShoppingBag',
    description: 'RA 12009 (Current) & RA 9184, BAC composition, HOPE, PhilGEPS, LCB/LCRB, observers.',
  },
  {
    key: 'computer',
    name: 'Computer / Office Skills',
    count: 20,
    iconName: 'Laptop',
    description: 'Excel formulas (=SUM, =VLOOKUP, =IF, =COUNTIF), shortcuts, security, email etiquette.',
  },
  {
    key: 'drrm',
    name: 'DRRM (Disaster Risk Reduction)',
    count: 25,
    iconName: 'Flame',
    description: 'RA 10121, 4 thematic areas, Risk formula, RADaR, Safe Schools, PHIVOLCS, PAGASA.',
  },
  {
    key: 'eo64',
    name: 'EO 64, s. 2024 (Salary Update)',
    count: 24,
    iconName: 'TrendingUp',
    description: '4 tranches, Tranche 3 (Jan 1, 2026), ₱7,000 medical allowance, coverage & exclusions.',
  },
  {
    key: 'situational',
    name: 'Situational Judgment',
    count: 15,
    iconName: 'Compass',
    description: 'Lawful, ethical, documented decision-making framework in public school settings.',
  },
  {
    key: 'deped',
    name: 'DepEd Compliance & Protocols',
    count: 25,
    iconName: 'School',
    description: 'RA 9155, Core Values, MOOE, COA rules, PAR/ICS property management, liquidation.',
  },
  {
    key: 'drafting',
    name: 'Document Drafting',
    count: 20,
    iconName: 'FileText',
    description: 'Memorandums, Transmittals, Minutes of Meeting, Request Letters, Incident Reports.',
  },
  {
    key: 'financial',
    name: 'Spreadsheet & Financial Computation',
    count: 25,
    iconName: 'Calculator',
    description: 'Daily wage divisor (22), GSIS 9%/12%, VAT withholding, MOOE liquidation, utilization.',
  },
];

export const CATEGORIES_MAP: Record<CategoryKey, string> = CATEGORIES_LIST.reduce(
  (acc, item) => {
    acc[item.key] = item.name;
    return acc;
  },
  {} as Record<CategoryKey, string>
);
