import { DocumentTemplate } from '../types';

export const DOCUMENT_TEMPLATES: DocumentTemplate[] = [
  {
    id: 'div-memo',
    title: 'Sample 1: Division Memorandum',
    docType: 'Division Memorandum',
    description: 'Standard DepEd division-level issuance announcing policies, orientations, or administrative guidelines.',
    rawText: `Republic of the Philippines
Department of Education
Region VI — Western Visayas
SCHOOLS DIVISION OFFICE OF NEGROS OCCIDENTAL
[Province Address, Contact Number, Email]

DIVISION MEMORANDUM
No. ________, s. 2026

TO:
Assistant Schools Division Superintendents
Public Schools District Supervisors
Public Elementary and Secondary School Heads
All Others Concerned

FROM:
[Name of SDS]
Schools Division Superintendent

SUBJECT:
DIVISION ORIENTATION ON THE UTILIZATION OF THE 2026 ENHANCED SCHOOL IMPROVEMENT PLAN (eSIP)

DATE:
July 6, 2026

1. In line with the Department's commitment to continuous quality improvement and data-driven school management, this Office announces the conduct of the Division Orientation on the Utilization of the 2026 Enhanced School Improvement Plan (eSIP) on July 24, 2026, at 8:00 o'clock in the morning at the Division Training Center, [Location].

2. The activity aims to orient participants on the enhanced planning process, data analysis tools, and alignment of programs with the SIP/AIP framework.

3. Attendance of all participants is required. Travel expenses shall be charged against local funds subject to the usual accounting and auditing rules.

4. Immediate dissemination of and strict compliance with this Memorandum is desired.


[NAME OF SUPERINTENDENT]
Schools Division Superintendent IV`
  },
  {
    id: 'transmittal-memo',
    title: 'Sample 2: School Transmittal Memorandum',
    docType: 'Transmittal Memorandum',
    description: 'Document forwarding workshop proposals up the chain of command using the THRU line and receiving acknowledgment.',
    rawText: `Republic of the Philippines
Department of Education
Region VI — Western Visayas
SCHOOLS DIVISION OFFICE OF NEGROS OCCIDENTAL
[NAME OF ELEMENTARY SCHOOL]
[School Address, Email, Contact Number]

SCHOOL MEMORANDUM

FOR:
[NAME OF SUPERINTENDENT]
Schools Division Superintendent
Schools Division Office of Negros Occidental

THRU:
[NAME OF PSDS]
Public Schools District Supervisor
[District Name]

FROM:
[NAME OF PRINCIPAL]
School Principal I

SUBJECT:
TRANSMITTAL OF DOCUMENTS FOR THE 2-DAY SCHOOL-BASED TRAINING WORKSHOP ON DIGITAL LITERACY

DATE:
[Current Date]

1. Respectfully forwarded to the Schools Division Superintendent, through the Public Schools District Supervisor, the attached documents for the 2-Day School-Based Training Workshop on Digital Literacy of [School Name] on August 6 to 7, 2026.

2. Enclosed are the following documents for your evaluation and favorable approval:
   a. Signed Project Proposal;
   b. Training Matrix; and
   c. List of Participants.

3. Expenses for this activity will be charged against the school's local In-Service Training (INSET) funds, subject to standard accounting and auditing rules.

4. For your information and favorable approval.


[NAME OF PRINCIPAL]
School Principal I

--------------------------------------------------
Received by: ___________________________
Signature over Printed Name
Date/Time:   ___________________________`
  },
  {
    id: 'notice-meeting',
    title: 'Sample 3: Notice of Meeting & Agenda',
    docType: 'Notice of Meeting',
    description: 'Official notice detailing meeting schedule, venue, and structured numbered agenda items.',
    rawText: `Republic of the Philippines
Department of Education
[NAME OF SCHOOL]

NOTICE OF MEETING

Please be informed that there will be an urgent meeting of the School Governance Council (SGC) on July 10, 2026, at 1:30 o'clock in the afternoon at the Principal's Office.

The agenda of the meeting will be as follows:
1. Call to Order and Roll Call of Attendance
2. Review and Approval of the Previous Minutes
3. Mid-Year Brigada Eskwela Implementation Progress Report
4. Proposed School MOOE Budget Realignments for Q3
5. Other Matters / Open Forum
6. Adjournment

Your presence and active participation are highly desired.

Attested:

[NAME OF PRINCIPAL]
School Principal I / SGC Chairperson`
  },
  {
    id: 'minutes-meeting',
    title: 'Sample 4: Minutes of the Meeting (Excerpt)',
    docType: 'Minutes of Meeting',
    description: 'Objective, third-person recording of discussions, actions agreed upon, and sign-offs.',
    rawText: `MINUTES OF THE FACULTY MEETING
[Date] | [Venue]

Attendees: [List of names and positions]
Presiding Officer: [Name of Principal]
Secretary: [Name of Secretary]

V. HIGHLIGHTS OF THE DISCUSSION

A. Learning Material Distribution Delay
Mrs. Maria Santos, Grade 3 Coordinator, raised a concern regarding the insufficient copies of Grade 3 Mathematics modules currently available for the tracking quarter.

In response, the School Principal, Dr. [Name], clarified that the bulk delivery of learning materials from the SDO Supply Section is officially scheduled for the third week of July 2026. Dr. [Name] advised the grade coordinators to utilize temporary digital copies or shared learning packets in the interim.

VI. ACTIONS AGREED UPON
1. Grade coordinators to prepare digital copies of modules for sharing.
2. Administrative Office to follow up with SDO Supply Section on the delivery schedule.

VII. ADJOURNMENT
The meeting was adjourned at [time] with no further matters to discuss.

Prepared by:
[NAME OF SECRETARY]
Secretary

Certified correct:
[NAME OF PRINCIPAL]
Presiding Officer`
  },
  {
    id: 'formal-request',
    title: 'Sample 5: Formal Request Letter',
    docType: 'Formal Request Letter',
    description: 'Formal correspondence requesting training authorization, stating objectives, participants, and funding.',
    rawText: `Republic of the Philippines
Department of Education
[NAME OF SCHOOL]

[Date]

[NAME OF SUPERINTENDENT]
Schools Division Superintendent
Schools Division Office of Negros Occidental
[Address]

Dear Madam/Sir:

The undersigned respectfully requests permission to conduct a 2-Day School-Based Training Workshop on Digital Literacy for twenty-five (25) teaching personnel of [School Name] from August 6 to August 7, 2026, at the School ICT Laboratory.

This program aims to capacitate our faculty with advanced spreadsheet and document processing skills essential for accurate financial and student data management. Expenses incurred for meals and training materials shall be charged against the school's local In-Service Training (INSET) fund, subject to standard accounting and auditing procedures.

Attached herewith are the training matrix, project proposal, and list of participants for your review and favorable approval.

Thank you very much for your continued support to our school's professional development initiatives.

Respectfully yours,

[NAME OF PRINCIPAL]
School Principal I`
  },
  {
    id: 'incident-report',
    title: 'Sample 6: Incident Report',
    docType: 'Incident Report',
    description: 'Chronological, factual documentation of safety hazards, emergency actions taken, and recommendations.',
    rawText: `INCIDENT REPORT

Nature of Incident: Electrical Malfunction / Equipment Hazard
Date and Time:      July 6, 2026, at approximately 9:15 AM
Location:           School ICT Laboratory, Building B
Reported by:        [Name of Property Custodian / AO II]

Details of the Incident:
At approximately 9:15 AM on July 6, 2026, the property custodian noticed visible sparks and light smoke originating from the main circuit breaker panel inside the School ICT Laboratory. The school's emergency response protocol was immediately activated; the laboratory was evacuated, and the main power isolation switch was safely shut off. The local bureau and representatives from the local electric cooperative were contacted for emergency inspection.

No injuries were reported, and no computers or central servers sustained damage. The system remains powered down pending structural clearance and repair.

Action Taken:
1. Evacuated the area and ensured safety of all personnel
2. Shut off main power supply
3. Notified School Head and local electric cooperative
4. Documented the incident for records and reporting

Recommendation:
Immediate inspection and repair by a licensed electrician is recommended before the ICT Laboratory is used again. A review of the building's electrical load capacity is also advised.

Prepared by:
[NAME OF AO II / PROPERTY CUSTODIAN]
Reporting Officer

Noted by:
[NAME OF PRINCIPAL]
School Principal I`
  },
  {
    id: 'inventory-ledger',
    title: 'Sample 7: Property Inventory Ledger',
    docType: 'Property Ledger',
    description: 'Official tracking register of capitalized school assets, property numbers, and operational statuses.',
    rawText: `DEPED SCHOOL PROPERTY & INVENTORY LEDGER
[School Name] | [Division]

Item No. | Property Number   | Description                          | Qty | Unit Value (PhP) | Acquisition Date | Status
-------------------------------------------------------------------------------------------------------------------------
001      | DEPED-NOC-026-01  | Laptop (Brand X, Core i5, 8GB RAM)   | 1   | 35,000.00        | July 2, 2026     | Functional
002      | DEPED-NOC-026-02  | Laptop (Brand X, Core i5, 8GB RAM)   | 1   | 35,000.00        | July 2, 2026     | Functional
003      | DEPED-NOC-026-03  | Laptop (Brand X, Core i5, 8GB RAM)   | 1   | 35,000.00        | July 2, 2026     | Functional
-------------------------------------------------------------------------------------------------------------------------
TOTAL    | Total Value       |                                      | 3   | 105,000.00       |                  |

Note: Assign distinct alphanumeric Property Numbers per asset unit. Update regularly after physical inventory.`
  },
  {
    id: 'mooe-liquidation',
    title: 'Sample 8: Cash Advance Liquidation Report',
    docType: 'Financial Liquidation',
    description: 'COA compliant cash advance liquidation report with UACS Object Codes, itemized receipts, and refund reconciliation.',
    rawText: `CASH ADVANCE LIQUIDATION REPORT
MOOE Fund | [School Name]

Date of Cash Advance:   July 1, 2026
Amount of Cash Advance: PhP 25,000.00
Purpose:                School Minor Repairs & Maintenance

Date       | DV/OR No. | Particulars / Payee                  | COA Object Code | Amount (PhP)
------------------------------------------------------------------------------------------------
07/01/2026 | OR-99831  | Hardware Supplies (Paints, Brushes)  | 5020308000      | 12,450.00
07/03/2026 | OR-44120  | Plumbing Maintenance (Labor)         | 5021304002      |  8,000.00
07/05/2026 | OR-11209  | Office Stationery Materials          | 5020301000      |  4,200.00
------------------------------------------------------------------------------------------------
Total Cash Outflow:                                                            | 24,650.00
Refund of Unutilized Balance:                                                  |    350.00
Accountability Status:                                                         | 100% Fully Liquidated

Prepared by:
[NAME OF AO II / DISBURSING OFFICER]
Preparing / Liquidating Officer

Certified Correct / Approved:
[NAME OF PRINCIPAL]
School Principal I`
  }
];
