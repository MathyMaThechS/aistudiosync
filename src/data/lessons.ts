import { LessonSection } from '../types';

export const LESSONS: LessonSection[] = [
  {
    id: 'lesson-1',
    categoryKey: 'admin',
    title: 'Lesson 1: Administrative & Records Management',
    summary: 'Core functions of receiving, recording, classifying, routing, filing, and secure disposition of public records.',
    keyPoints: [
      'Core Functions: Receiving, recording, classifying, routing, filing, retrieving, protecting, retaining, and properly disposing of records.',
      'Accuracy Principle: Always verify names, dates, figures, signatures, attachments, and reference numbers before releasing any document.',
      'Confidentiality & Data Privacy (RA 10173): Access only when authorized and strictly necessary for official duties. Classify records as Public, Internal, Confidential, or Restricted. Secure physical documents in locked cabinets and digital records with strong passwords.',
      'Standard Tools & Forms: Routing Slips (tracks movement), Transmittal Memorandums (with THRU line), Action Sheets, Records Disposition Schedule, CS Form 48 (DTR), Official Logbooks.',
      'DepEd School Forms: SF 1 (School Register), SF 4 (Monthly Report of Attendance of Learners), SF 7 (School Personnel Assignment List & Profile).',
      'Document Processing Rule (RA 6713): Official documents must require no more than 3 signatories as far as practicable to minimize red tape.'
    ],
    importantLaws: ['RA 10173 (Data Privacy Act of 2012)', 'RA 6713 (Code of Conduct)', 'RA 11032 (Ease of Doing Business Act)'],
    formsMentioned: ['CS Form 48 (DTR)', 'CS Form 212 (PDS)', 'SF 1, SF 4, SF 7', 'Document Routing Slip', 'Records Disposition Schedule']
  },
  {
    id: 'lesson-2',
    categoryKey: 'civil',
    title: 'Lesson 2: Civil Service & Employment Statuses',
    summary: 'Merit and fitness, appointment types, qualification standards, plantilla positions, and security of tenure.',
    keyPoints: [
      'Constitutional Principle: Merit and Fitness is the foundational criterion for all career civil service appointments (Constitution, Art. IX-B, Sec. 3).',
      'Permanent Appointment: Issued to an appointee who meets all minimum Qualification Standards (Education, Experience, Training, Eligibility). Enjoys constitutional security of tenure.',
      'Temporary Appointment: Issued to an appointee meeting all standards except eligibility. Valid for not more than one (1) year only.',
      'Coterminous: Tenure is coexistent with the appointing official or specified project duration.',
      'Substitute: Temporarily fills a regular position whose incumbent is on extended leave of absence.',
      'Casual & Contractual / COS / JO: Casuals perform temporary/seasonal work paid on daily wage. Job Order (JO) and Contract of Service (COS) workers have NO employer-employee relationship and are NOT entitled to leave credits, 13th-month pay, or PERA.',
      'Plantilla of Personnel: Official list of authorized and funded regular positions within an agency.',
      'Magna Carta of PWDs (RA 10524): Mandates at least 1% of all regular positions in government agencies be reserved for persons with disabilities.'
    ],
    importantLaws: ['Constitution Art. IX-B', 'RA 11466 (SSL V)', 'RA 10524 (PWD Employment Quota)', 'RA 11313 (Safe Spaces Act)', 'EO 64, s.2024'],
    formsMentioned: ['CS Form 33 (Appointment Form)', 'Plantilla of Personnel', 'CS Form 212 (Personal Data Sheet)']
  },
  {
    id: 'lesson-3',
    categoryKey: 'leave',
    title: 'Lesson 3: Omnibus Rules on Leave (CSC MC 41, s.1998 & MC 6, s.2020)',
    summary: 'Monthly accrual, Vacation Leave, Sick Leave, Maternity (RA 11210), Paternity, Solo Parent, VAWC, and PVP.',
    keyPoints: [
      'Standard Accrual: 1.25 days Vacation Leave (VL) + 1.25 days Sick Leave (SL) per month of actual service = 15 days VL + 15 days SL per year.',
      'Leave Without Pay (LWOP): No leave credits are earned during an entire month of LWOP. Incurring LWOP directly affects the computation of prorated PERA and service records.',
      'Vacation Leave (VL): Must be applied for at least 5 days in advance and is subject to the exigencies/necessities of the service.',
      'Sick Leave (SL): For personal illness; absences exceeding 5 consecutive days require a Medical Certificate signed by a licensed physician.',
      'Maternity Leave (RA 11210): 105 days full pay for live childbirth; 60 days full pay for miscarriage or emergency termination. Solo parent mothers get an additional 15 days (120 days total). Up to 7 days may be allocated to the child’s father.',
      'Paternity Leave (RA 8187): 7 days full pay per delivery, up to the first 4 deliveries of the legitimate spouse with whom the male employee is cohabiting.',
      'Solo Parent Leave (RA 8972 / RA 11861): 7 days paid leave per year granted after at least 6 months of continuous service.',
      'Special Leave for Women (RA 9710): Up to 2 months full pay following gynecological surgeries.',
      'VAWC Leave (RA 9262): Up to 10 days paid leave for female victims of physical, sexual, or psychological violence.',
      'Special Privilege Leave (SPL): 3 days per calendar year; non-cumulative and non-commutative.',
      'Mandatory/Forced Leave: 5 days per year required for employees with 10 or more days of accumulated VL.',
      'Teachers’ Proportional Vacation Pay (PVP): Public school teachers do not earn monthly VL/SL credits; instead, they receive PVP during summer and Christmas vacations. Vacation service earns Service Credits to offset future absences.',
      'Habitual Absenteeism / AWOL: Continuous unauthorized absence of 30 working days or more causes the employee to be automatically dropped from the rolls.'
    ],
    importantLaws: ['CSC MC No. 41, s.1998', 'CSC MC No. 6, s.2020', 'RA 11210 (Maternity Leave)', 'RA 8187 (Paternity)', 'RA 8972 / 11861 (Solo Parent)', 'RA 9710', 'RA 9262'],
    formsMentioned: ['CS Form 6 (Application for Leave)', 'Medical Certificate', 'Barangay Protection Order (BPO) / Police Blotter']
  },
  {
    id: 'lesson-4',
    categoryKey: 'grammar',
    title: 'Lesson 4: Grammar & Error Recognition Rules',
    summary: 'Subject-verb agreement, collective nouns, prepositions, idiomatic usage, subjunctive mood, and parallelism.',
    keyPoints: [
      'Singular Indefinite Pronouns: Each, Every, Everyone, Everybody, Nobody, One of, Either, Neither take SINGULAR verbs.',
      '"A number of" vs "The number of": "A number of..." takes a PLURAL verb (a number of issues are pending). "The number of..." takes a SINGULAR verb (the number of applicants is growing).',
      'Neither...nor / Either...or: The verb must agree with the NEAREST subject (Neither the supervisor nor the clerks WERE present; Neither the clerks nor the supervisor WAS present).',
      'Intervening Phrases: Phrases like "along with", "together with", "as well as", "in addition to", and "accompanied by" do NOT change the number of the subject (The Principal, along with the teachers, IS attending).',
      'Prepositional Idioms: "Similar TO", "senior TO", "junior TO", "preferable TO", "interested IN", "capable OF", "responsible FOR". NEVER say "senior than me" (use "senior to me").',
      'Despite vs In Spite Of: "Despite" NEVER takes "of" (Say "Despite the storm" or "In spite of the storm").',
      'Look forward to: "To" here is a preposition, followed by a gerund ("I look forward to meeting you", NOT "to meet").',
      'Hypothetical Subjunctive: Use "WERE" for contrary-to-fact conditions ("If I WERE the superintendent, I would...", NOT "If I was").',
      'Redundancies to Eliminate: "Return back" -> "Return"; "Supposing if" -> "Supposing" or "If"; "Advance planning" -> "Planning".',
      'Discrepancy Rule: In financial or legal bids, when figures and words disagree, the amount in WORDS prevails.'
    ],
    rulesOrFormulas: [
      'Each / Everyone / Somebody = Singular Verb',
      'A number of = Plural Verb | The number of = Singular Verb',
      'Either/Neither closest subject agreement rule',
      'Look forward to + Verb(-ing)',
      'Despite [NO OF] vs In spite of'
    ]
  },
  {
    id: 'lesson-5',
    categoryKey: 'verbal',
    title: 'Lesson 5: Verbal Ability & Paragraph Organization',
    summary: 'Word relationships, context clues, prefixes/suffixes, cohesive reading comprehension, and structured sequencing.',
    keyPoints: [
      'Vocabulary & Context Clues: Examine the surrounding words, contrasts, and tone before determining word meanings.',
      'Key Prefixes: "pre-" (before: preview, preliminary), "post-" (after: postpone, post-qualification), "re-" (again: review, reconcile), "mis-" (wrong/bad: misplace, miscalculation), "un-/dis-/in-/im-" (negation: ineligible, unauthorized), "inter-" (between: inter-agency), "trans-" (across: transmittal).',
      'Core Civil Service Vocabulary: Concise (brief and clear), Verify (confirm truth), Expedite (speed up processing), Stringent (strict and binding), Redundant (unnecessary repetition), Mitigate (lessen severity), Prudent (careful and wise), Ostentatious (showy display of wealth).',
      'Paragraph Organization Strategy: Locate the Topic Sentence first (usually introduces the overarching concept or thesis). Look for transitional signposts: "However" (contrast), "Therefore" (consequence/result), "Furthermore/Moreover" (addition), "Finally/In conclusion" (closing).',
      'Reading Comprehension: Government passages prioritize literal textual evidence over speculative inferences. Always ground your answer in explicit textual details.'
    ],
    rulesOrFormulas: [
      'Topic Sentence -> Supporting Evidence -> Transition -> Conclusion',
      'However / On the contrary = Contrast indicator',
      'Therefore / Consequently = Outcome indicator'
    ]
  },
  {
    id: 'lesson-6',
    categoryKey: 'ethics',
    title: 'Lesson 6: Ethics & Code of Conduct (RA 6713)',
    summary: 'Public trust, 8 norms of conduct, SALN compliance, gift prohibitions, and the 15-day response rule.',
    keyPoints: [
      'Guiding Principle: "Public office is a public trust. Public officers and employees must at all times be accountable to the people, serve them with utmost responsibility, integrity, loyalty, and efficiency..."',
      '8 Norms of Conduct: 1. Commitment to Public Interest, 2. Professionalism, 3. Justness & Sincerity, 4. Political Neutrality, 5. Responsiveness to the Public, 6. Nationalism & Patriotism, 7. Commitment to Democracy, 8. Simple Living.',
      'Simple Living: Public officials and their families shall lead modest lives appropriate to their positions and income; ostentatious displays of wealth are prohibited.',
      'Gift Prohibition: Prohibited from soliciting or accepting gifts, gratuities, entertainment, loans, or favors of monetary value in the course of official duties. EXCEPTION: Unsolicited gifts of nominal or insignificant value given during traditional occasions (e.g. Christmas) without strings attached.',
      'Mandatory Response Deadline: Must respond to all letters, requests, and queries from the public within fifteen (15) working days from receipt. If full resolution is pending, send an acknowledgment explaining the delay and expected completion.',
      'Signatory Rule: Official documents shall require no more than three (3) signatories to reduce red tape.',
      'SALN Filing: Required within 30 days after assumption of office; on or before April 30 annually; and within 30 days after separation from government service.',
      'Post-Employment Ban: 1-year ban on representing any client or practicing one’s profession on matters previously handled or acted upon in their former office.',
      'Frontline Duty: Serve all clients who arrive within official working hours, even if transaction extends past 5:00 PM.'
    ],
    importantLaws: ['RA 6713', '1987 Philippine Constitution Art. XI', 'CSC Rules Implementing RA 6713'],
    rulesOrFormulas: [
      'Response Time = ≤ 15 working days',
      'Max Document Signatories = ≤ 3 signatories',
      'Post-employment cool-off = 1 year'
    ]
  },
  {
    id: 'lesson-7',
    categoryKey: 'proc',
    title: 'Lesson 7: Government Procurement (RA 12009 & RA 9184)',
    summary: 'RA 12009 (Current New Law), BAC duties, HOPE prohibitions, PhilGEPS, LCB/LCRB, and procurement observers.',
    keyPoints: [
      'Governing Law: RA 12009 (The New Government Procurement Act of 2024) is the CURRENT and MAIN law; RA 9184 is the previous 2003 law.',
      'BAC Composition: 5 to 7 members appointed by the Head of the Procuring Entity (HOPE). Term is one (1) year, renewable. Quorum requires a majority with the Chair or Vice-Chair present.',
      'HOPE Separation: The HOPE appoints the BAC but CANNOT be a member of the BAC. The Chief Accountant or officials who certify funds/vouchers also CANNOT sit as regular BAC members to avoid conflict of interest.',
      'Technical Working Group (TWG): Created by the BAC to perform eligibility checks, technical evaluations, and post-qualification.',
      'Jury Duty Principle: Procurement assignments take utmost priority over all other regular office duties until completed.',
      'Observers: At least 3 observers (1 from COA, 2 from recognized private sector/NGOs). Must be invited in writing at least 5 calendar days prior to procurement stages.',
      'Pre-Bid Conference: Mandatory for Goods and Infrastructure projects with an ABC of ₱1,000,000 or more.',
      'Evaluation Rule: For Goods & Infrastructure: BAC determines the Lowest Calculated Bid (LCB), which undergoes Post-Qualification to become the Lowest Calculated Responsive Bid (LCRB). For Consulting Services, BAC determines the Highest Rated Bid (HRB).',
      'Bids Exceeding ABC: Automatically disqualified. No bid negotiation on price exceeding the approved budget is allowed.',
      'Discrepancy Rule: If words and figures in a bid differ, the amount in words prevails.',
      'Failure of Bidding: Declared if no bids are received, all bids fail to qualify, or the winning bidder refuses the award without justifiable cause. After 2 consecutive failed biddings, Negotiated Procurement may be recommended.'
    ],
    importantLaws: ['RA 12009 (New Government Procurement Act)', 'RA 9184 & its IRR', 'GPPB Resolutions'],
    formsMentioned: ['PPMP', 'APP', 'PhilGEPS Posting', 'Notice of Award (NOA)', 'Notice to Proceed (NTP)', 'Performance Security']
  },
  {
    id: 'lesson-8',
    categoryKey: 'computer',
    title: 'Lesson 8: Computer & Office Skills (Excel, Word, Cybersecurity)',
    summary: 'Formulas (=SUM, =VLOOKUP, =COUNTIF, =IF), formatting, keyboard shortcuts, password hygiene, and phishing awareness.',
    keyPoints: [
      'Formula Starting Rule: All spreadsheet formulas must strictly begin with an equals sign (=).',
      'Essential Functions: =SUM(range), =AVERAGE(range), =COUNT(numeric), =COUNTA(non-empty), =COUNTIF(range, criteria), =SUMIF(range, criteria, sum_range), =IF(condition, true_val, false_val), =VLOOKUP(lookup_value, table, col_index, [exact_match=FALSE]).',
      'Absolute References: $A$1 locks column and row when dragging or copying formulas across rows and columns.',
      '### Error: Cell display width is too narrow to show numbers or dates. Fix by widening the column header.',
      'Data Validation: Restricts input values in a cell (e.g., ensuring disbursement does not exceed cash allocation).',
      'Freeze Panes: Locks top row or header columns so they remain visible while scrolling down large ledgers.',
      'Conditional Formatting: Dynamically highlights cells (e.g., highlighting expenses > ₱50,000 in red).',
      'Shortcuts: Ctrl+Z (Undo), Ctrl+C (Copy), Ctrl+V (Paste), Ctrl+X (Cut), Ctrl+Shift+Down Arrow (Select column to end).',
      'Office Cybersecurity: Never share passwords, lock workstation (Win+L) when stepping away, avoid clicking unverified links in phishing emails, and maintain offsite physical/cloud backups.'
    ],
    rulesOrFormulas: [
      '=SUM(A1:A10)',
      '=COUNTIF(B2:B50, "Serviceable")',
      '=SUMIF(CategoryRange, "Office Supplies", AmountRange)',
      '=VLOOKUP(TargetID, MasterTable, 3, FALSE)'
    ]
  },
  {
    id: 'lesson-9',
    categoryKey: 'drrm',
    title: 'Lesson 9: Disaster Risk Reduction & Management (RA 10121)',
    summary: '4 thematic areas, Risk formula, Safe Schools framework, RADaR, fire triangle, and evacuation protocols.',
    keyPoints: [
      'Foundational Law: RA 10121 (Philippine DRRM Act of 2010); DepEd Order No. 37, s. 2015 institutionalized the Comprehensive DRRM in Basic Education Framework.',
      '4 Thematic Areas: 1. Disaster Prevention & Mitigation (avoid hazards & reduce risks), 2. Disaster Preparedness (plans, early warning, drills), 3. Disaster Response (rescue, relief, assessment during/immediately after), 4. Rehabilitation & Recovery ("Build Back Better").',
      'Disaster Risk Formula: Risk = (Hazard × Vulnerability) / Capacity. Risk increases when vulnerability is high and decreases when capacity is strong.',
      'Hazard Types: Natural Geological (earthquakes, volcanoes, tsunamis - PHIVOLCS); Hydrometeorological (typhoons, floods, storm surges - PAGASA); Biological (pandemics, dengue); Human-induced / Anthropogenic (fires, structural collapse, chemical spills).',
      'School Drills: Earthquake and fire drills must be conducted QUARTERLY (every 3 months). Standard action: Duck, Cover, and Hold.',
      'Fire Safety: Fire Triangle requires Oxygen, Fuel, and Heat. If clothes catch fire: Stop, Drop, and Roll.',
      'RADaR (Rapid Assessment of Damages Report): Must be prepared and submitted to DepEd DRRMS within 24 to 72 hours post-calamity.',
      'Evacuation Center Guideline: Schools should be utilized as evacuation centers only as an ABSOLUTE LAST RESORT, and for a maximum of 15 days to avoid disrupting classes.',
      'Incident Command System (ICS): Standardized emergency protocol where the Incident Commander maintains overall on-scene command authority.'
    ],
    importantLaws: ['RA 10121', 'DO 37, s. 2015', 'EO 66, s. 2012 (Class Suspensions)', 'Sendai Framework for DRR (2015-2030)'],
    rulesOrFormulas: [
      'Risk = (Hazard × Vulnerability) / Capacity',
      'Drill Frequency = Quarterly (every 3 months)',
      'RADaR Timeline = 24 to 72 hours',
      'Max School Evac Duration = ≤ 15 days'
    ]
  },
  {
    id: 'lesson-10',
    categoryKey: 'eo64',
    title: 'Lesson 10: Executive Order No. 64, s. 2024 (Salary Schedule Update)',
    summary: '4 tranches, Tranche 3 on Jan 1, 2026, ₱7,000 medical allowance, coverage, and exclusions (JO/COS).',
    keyPoints: [
      'Official Title: Updating the Salary Schedule for Civilian Government Personnel and Authorizing the Grant of an Additional Allowance, and for Other Purposes (Signed August 2, 2024 by ES Lucas Bersamin).',
      'Implementation Schedule: 4 tranches across FY 2024–2027: Tranche 1 (Jan 1, 2024, retroactive); Tranche 2 (Jan 1, 2025); Tranche 3 (January 1, 2026); Tranche 4 (January 1, 2027).',
      'Medical Allowance: Up to ₱7,000 per annum (yearly, NOT monthly). Primarily for HMO coverage, or granted in cash for employees paying their own HMO (DBM Budget Circular 2024-6).',
      'Covered Personnel: Civilian government personnel in NGAs, GOCCs, Constitutional Commissions, and LGUs (subject to PS limitations of RA 7160).',
      'EXCLUDED Personnel: Military and Uniformed Personnel (separate compensation system); Job Order (JO) and Contract of Service (COS) workers (no employer-employee relationship).',
      'Computation Rules: New hires start at Step 1 of the designated Salary Grade. For casuals, the daily wage is computed as Monthly Salary ÷ 22 workdays. If current salary exceeds new Step 8, adjusted to Step 8 rate; if still higher, no salary increase is awarded.',
      'Compulsory Retirees: Retirees on extended service authorized by CSC are expressly entitled to the salary increase.',
      'Funding Source: General Appropriations Act (GAA) for national agencies; respective local sanggunian ordinance for LGUs.'
    ],
    importantLaws: ['EO 64, s. 2024', 'DBM Budget Circular No. 2024-6', 'DBM Local Budget Circular No. 160', 'RA 11466 (SSL V)', 'RA 7160'],
    rulesOrFormulas: [
      'Daily Wage = Monthly Rate ÷ 22 days',
      'Annual Medical Allowance = ≤ ₱7,000 / year',
      'Tranche 3 Effective Date = January 1, 2026'
    ]
  },
  {
    id: 'lesson-11',
    categoryKey: 'situational',
    title: 'Lesson 11: Situational Judgment & Professional Problem Solving',
    summary: 'Ethical decision-making matrix: Lawful -> Ethical -> Documented -> Fair -> Within Authority.',
    keyPoints: [
      'Core Matrix: Every administrative action must pass the filter: Is it Lawful? Is it Ethical? Is it Properly Documented? Is it Fair? Is it Within My Authority?',
      'Confidential Record Demands: If an unauthorized person (even a colleague or influential visitor) asks for student/teacher records, decline politely and explain RA 10173 and verification policies.',
      'Illegal Instructions from Superiors: Politely request clarification; cite the governing rule or circular professionally; offer lawful alternatives. If pressured, follow established administrative channels.',
      'Discovered Errors: If an error is detected in an already-submitted liquidation or report, notify your supervisor immediately, prepare an erratum or amended report, and document the correction transparently.',
      'Conflict of Interest: When a relative or personal contact bids on a school contract, the AO II must formally declare the conflict of interest in writing and inhibit completely from all BAC discussions and evaluations.',
      'Gift Offers: Politely refuse gifts of monetary value from suppliers, contractors, or parents seeking enrollment or grading accommodations.',
      'Frontline Protocol: A client who arrives at 4:55 PM must be accommodated with courtesy; never turn away clients arriving within office hours.'
    ],
    importantLaws: ['RA 6713 (Section 4 & 7)', 'RA 10173 (Section 20)', 'DepEd Child Protection Policy (DO 40, s. 2012)']
  },
  {
    id: 'lesson-12',
    categoryKey: 'deped',
    title: 'Lesson 12: DepEd Compliance, Property & Financial Protocols',
    summary: 'RA 9155, Core Values, 201 Files, Property Custodianship (PAR/ICS), MOOE liquidation, and COA guidelines.',
    keyPoints: [
      'Governance of Basic Education (RA 9155): Mandates school-based management; the school level is the heart of the formal education system.',
      'DepEd Core Values: Maka-Diyos, Makatao, Makakalikasan, Makabansa. ("Makasarili" is NOT a core value).',
      'Personnel Documents: 201 File (employee master personnel dossier), Service Record (chronological career history), CS Form 212 (PDS), CS Form 48 (DTR), IPCRF (performance review for non-teaching staff).',
      'Property Management Documents: PAR (Property Acknowledgement Receipt) for high-value capitalized equipment (>₱50,000 threshold); ICS (Inventory Custodian Slip) for semi-expendable equipment; RIS (Requisition & Issue Slip) for expendable supplies; IAR (Inspection & Acceptance Report) for deliveries; Waste Material Report for condemnation of unserviceable assets.',
      'Notice of Loss: Must be filed with COA within 30 days of property loss due to force majeure or theft.',
      'School MOOE Funds: Maintenance and Other Operating Expenses. Used for utility bills, classroom instructional supplies, minor facility repairs, and training expenses. CANNOT be used for personal travel, permanent teacher salaries, or major capital infrastructure.',
      'COA Liquidation Mandate: No succeeding cash advance may be granted to any accountable officer unless the prior cash advance is 100% liquidated. Cash advances for local travel must be liquidated within 10 days upon return.'
    ],
    importantLaws: ['RA 9155', 'COA Circular No. 97-002', 'DepEd Order No. 40, s. 2012', 'Manual on the New Government Accounting System (NGAS)'],
    formsMentioned: ['PAR', 'ICS', 'RIS', 'IAR', 'DV (Disbursement Voucher)', 'Liquidation Report', 'IPCRF', 'Waste Material Report']
  },
  {
    id: 'lesson-13',
    categoryKey: 'drafting',
    title: 'Lesson 13: Official Document & Memorandum Drafting',
    summary: 'Standard DepEd memorandum structure, Transmittals with THRU line, Minutes of Meeting, and Incident Reports.',
    keyPoints: [
      'Standard Memorandum Structure: Letterhead (Republic of the Philippines, DepEd, Region, Division/School) -> Document Type & Series ("DIVISION MEMORANDUM No. ___, s. 2026") -> TO: (hierarchical order) -> FROM: (official position) -> SUBJECT: (concise, uppercase) -> DATE: -> Body (numbered paragraphs) -> Signature Block.',
      'Series Number Meaning: "s. 2026" means "series of 2026".',
      'Transmittal Memorandums: Forward documents officially up or down the organization. Always include a "THRU:" line to respect the chain of command (e.g. THRU: Public Schools District Supervisor), list enclosures/annexes (a, b, c), and provide a "Received By" acknowledgment section.',
      'Minutes of the Meeting: Written objectively in the third person. Must contain: Name of presiding officer, date, venue, attendance, highlights of discussions with speakers, agreed actionable decisions, and time of adjournment.',
      'Formal Request Letters: Courteous tone; clearly state the event, purpose, date/venue, target participants, funding source (e.g., local INSET funds), and attachments.',
      'Incident Reports: Objective, factual, and chronological (Who, What, When, Where, Why, How). State injuries or damage, immediate actions taken, and specific recommendations.',
      'OIC Signing Protocol: An Officer-in-Charge signs their own name over "For: [Name of Principal]" or "Officer-in-Charge" above the official title.'
    ],
    formsMentioned: ['Division Memorandum', 'School Memorandum', 'Transmittal Memo', 'Notice of Meeting', 'Minutes of Meeting', 'Incident Report']
  },
  {
    id: 'lesson-14',
    categoryKey: 'financial',
    title: 'Lesson 14: Spreadsheet & Financial Computations',
    summary: 'Daily wage divisor (22), GSIS 9%/12%, Taxable income, Prorated PERA, VAT withholding, MOOE liquidation.',
    keyPoints: [
      'Daily Wage Formula: Daily Wage = Monthly Basic Salary ÷ 22 working days.',
      'GSIS Mandatory Shares: Personal Share = Basic Salary × 9%. Government Share = Basic Salary × 12%.',
      'Taxable Income: Taxable Income = Gross Compensation - Mandatory Non-Taxable Deductions (GSIS 9% + PhilHealth + Pag-IBIG).',
      'Prorated PERA: When an employee incurs Leave Without Pay (LWOP), PERA (₱2,000/mo) is prorated as (₱2,000 ÷ 22) × Days actually worked.',
      'Government VAT Withholding: Gross VAT-inclusive ÷ 1.12 = Net of VAT base. Final Withholding VAT = Net of VAT Base × 5%. Expanded Withholding Tax (EWT for Goods) = Net of VAT Base × 1%. Net Payable to Supplier = Gross - 5% VAT - 1% EWT.',
      'MOOE Unliquidated Balance: Cash Advance Received - Total Valid Liquidated Expenses = Remaining Cash to be Refunded.',
      'Quarterly Utilization Rate: (Disbursements ÷ Cash Allocation) × 100. Target performance is between 90% and 100%.',
      'Centavo Precision: Use the =ROUND(formula, 2) function in Excel to prevent rounding discrepancies in government financial ledgers.'
    ],
    rulesOrFormulas: [
      'Daily Wage = Monthly Salary ÷ 22',
      'GSIS Personal Share = Basic Salary × 9%',
      'GSIS Gov Share = Basic Salary × 12%',
      'Net of VAT Base = Gross Amount ÷ 1.12',
      'Final VAT = Net Base × 5% | EWT = Net Base × 1%',
      'Utilization Rate = (Disbursement ÷ Allocation) × 100%'
    ]
  }
];
