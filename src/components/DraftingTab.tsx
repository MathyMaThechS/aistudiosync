import React, { useState } from 'react';
import { DOCUMENT_TEMPLATES } from '../data/documentTemplates';
import { Copy, Check, Printer, FileText, Info } from 'lucide-react';

export const DraftingTab: React.FC = () => {
  const [selectedTemplateId, setSelectedTemplateId] = useState(DOCUMENT_TEMPLATES[0].id);
  const [copied, setCopied] = useState(false);

  const activeTemplate =
    DOCUMENT_TEMPLATES.find((t) => t.id === selectedTemplateId) || DOCUMENT_TEMPLATES[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTemplate.rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="rounded-2xl border border-[#ddd8eb] bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-[#514487] sm:text-2xl">
              DepEd Official Document Drafting
            </h2>
            <p className="mt-1 text-xs text-[#696579] sm:text-sm">
              Authentic Microsoft Word-formatted administrative templates: Memorandums, Transmittals, Minutes, Request Letters, Incident Reports, and COA Liquidation Reports.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#ddd8eb] bg-[#faf9fd] px-3.5 py-2 text-xs font-bold text-[#514487] transition hover:bg-[#f1effb]"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-[#2e8b57]" /> Copied to Clipboard
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-[#6d5cae]" /> Copy Template Text
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#6d5cae] px-3.5 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-[#514487]"
            >
              <Printer className="h-4 w-4" /> Print / Save PDF
            </button>
          </div>
        </div>

        {/* Template Selector Pills */}
        <div className="mt-5 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {DOCUMENT_TEMPLATES.map((tmpl) => (
            <button
              key={tmpl.id}
              onClick={() => setSelectedTemplateId(tmpl.id)}
              className={`whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-bold transition ${
                selectedTemplateId === tmpl.id
                  ? 'bg-[#6d5cae] text-white shadow-sm'
                  : 'border border-[#ddd8eb] bg-white text-[#514487] hover:bg-[#faf9fd]'
              }`}
            >
              {tmpl.title.split(':')[1] || tmpl.title}
            </button>
          ))}
        </div>
      </div>

      {/* Guide Note */}
      <div className="flex items-start gap-2.5 rounded-xl border border-[#e1b93e]/40 bg-[#fff8df] p-3.5 text-xs text-[#514487]">
        <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#d97706]" />
        <div>
          <strong>Drafting Rules:</strong> Always use complete formal dates (&ldquo;July 24, 2026&rdquo; rather than &ldquo;next week&rdquo;), specify recipients in administrative hierarchy order, use the &ldquo;THRU&rdquo; line when transmittal passes through an intermediate supervisor, and verify all enclosures and signatory designations.
        </div>
      </div>

      {/* Realistic Microsoft Word Document Frame */}
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#ccc] bg-white shadow-md print:border-none print:shadow-none">
        <div className="bg-[#514487] px-4 py-2 text-xs font-semibold text-white flex justify-between items-center print:hidden">
          <span className="flex items-center gap-1.5">
            <FileText className="h-3.5 w-3.5 text-[#b7a9e8]" />
            Document Preview: {activeTemplate.title}
          </span>
          <span className="text-[11px] opacity-80">DepEd Standard Template</span>
        </div>

        {/* The "Paper" Container */}
        <div className="p-6 font-serif text-[13px] leading-relaxed text-[#111] sm:p-12 md:p-16">
          {/* Render specific rich formatted template */}
          {selectedTemplateId === 'div-memo' && (
            <div className="space-y-4">
              <div className="border-b-2 border-[#333] pb-3 text-center">
                <div className="font-bold uppercase tracking-wider text-[14px]">
                  Republic of the Philippines<br />
                  Department of Education<br />
                  Region VI &mdash; Western Visayas<br />
                  SCHOOLS DIVISION OFFICE OF NEGROS OCCIDENTAL
                </div>
                <div className="text-[11px] text-gray-600 mt-1">
                  [Province Address, Contact Number, Email]
                </div>
              </div>

              <div className="text-center font-bold text-base uppercase tracking-widest my-4">
                DIVISION MEMORANDUM
              </div>

              <div className="grid grid-cols-[80px_1fr] gap-y-1.5 text-xs sm:text-sm">
                <div className="font-bold">No.:</div>
                <div><u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>, s. 2026</div>

                <div className="font-bold">TO:</div>
                <div>
                  Assistant Schools Division Superintendents<br />
                  Public Schools District Supervisors<br />
                  Public Elementary and Secondary School Heads<br />
                  All Others Concerned
                </div>

                <div className="font-bold">FROM:</div>
                <div>
                  <strong>[Name of SDS]</strong><br />
                  Schools Division Superintendent
                </div>

                <div className="font-bold">SUBJECT:</div>
                <div className="font-bold uppercase">
                  DIVISION ORIENTATION ON THE UTILIZATION OF THE 2026 ENHANCED SCHOOL IMPROVEMENT PLAN (eSIP)
                </div>

                <div className="font-bold">DATE:</div>
                <div>July 6, 2026</div>
              </div>

              <hr className="my-3 border-gray-300" />

              <p>
                1. In line with the Department&rsquo;s commitment to continuous quality improvement and data-driven school management, this Office announces the conduct of the Division Orientation on the Utilization of the 2026 Enhanced School Improvement Plan (eSIP) on <strong>July 24, 2026</strong>, at <strong>8:00 o&rsquo;clock in the morning</strong> at the Division Training Center, [Location].
              </p>

              <p>
                2. The activity aims to orient participants on the enhanced planning process, data analysis tools, and alignment of programs with the SIP/AIP framework.
              </p>

              <p>
                3. Attendance of all participants is <strong>required</strong>. Travel expenses shall be charged against local funds subject to the usual accounting and auditing rules.
              </p>

              <p>
                4. Immediate dissemination of and strict compliance with this Memorandum is desired.
              </p>

              <div className="pt-8">
                <div className="w-64 border-t border-black pt-1">
                  <div className="font-bold uppercase">[NAME OF SUPERINTENDENT]</div>
                  <div className="text-xs">Schools Division Superintendent IV</div>
                </div>
              </div>
            </div>
          )}

          {selectedTemplateId === 'transmittal-memo' && (
            <div className="space-y-4">
              <div className="border-b-2 border-[#333] pb-3 text-center">
                <div className="font-bold uppercase tracking-wider text-[14px]">
                  Republic of the Philippines<br />
                  Department of Education<br />
                  Region VI &mdash; Western Visayas<br />
                  SCHOOLS DIVISION OFFICE OF NEGROS OCCIDENTAL<br />
                  [NAME OF ELEMENTARY SCHOOL]
                </div>
                <div className="text-[11px] text-gray-600 mt-1">
                  [School Address, Email, Contact Number]
                </div>
              </div>

              <div className="text-center font-bold text-base uppercase tracking-widest my-4">
                SCHOOL MEMORANDUM
              </div>

              <div className="grid grid-cols-[80px_1fr] gap-y-1.5 text-xs sm:text-sm">
                <div className="font-bold">FOR:</div>
                <div>
                  <strong>[NAME OF SUPERINTENDENT]</strong><br />
                  Schools Division Superintendent<br />
                  Schools Division Office of Negros Occidental
                </div>

                <div className="font-bold">THRU:</div>
                <div>
                  <strong>[NAME OF PSDS]</strong><br />
                  Public Schools District Supervisor<br />
                  [District Name]
                </div>

                <div className="font-bold">FROM:</div>
                <div>
                  <strong>[NAME OF PRINCIPAL]</strong><br />
                  School Principal I
                </div>

                <div className="font-bold">SUBJECT:</div>
                <div className="font-bold uppercase">
                  TRANSMITTAL OF DOCUMENTS FOR THE 2-DAY SCHOOL-BASED TRAINING WORKSHOP ON DIGITAL LITERACY
                </div>

                <div className="font-bold">DATE:</div>
                <div>[Current Date]</div>
              </div>

              <hr className="my-3 border-gray-300" />

              <p>
                1. Respectfully forwarded to the Schools Division Superintendent, through the Public Schools District Supervisor, the attached documents for the 2-Day School-Based Training Workshop on Digital Literacy of [School Name] on <strong>August 6 to 7, 2026</strong>.
              </p>

              <p>
                2. Enclosed are the following documents for your evaluation and favorable approval:
              </p>
              <ul className="ml-6 list-disc space-y-1">
                <li>Signed Project Proposal;</li>
                <li>Training Matrix; and</li>
                <li>List of Participants.</li>
              </ul>

              <p>
                3. Expenses for this activity will be charged against the school&rsquo;s local In-Service Training (INSET) funds, subject to standard accounting and auditing rules.
              </p>

              <p>
                4. For your information and favorable approval.
              </p>

              <div className="pt-8">
                <div className="w-64 border-t border-black pt-1">
                  <div className="font-bold uppercase">[NAME OF PRINCIPAL]</div>
                  <div className="text-xs">School Principal I</div>
                </div>
              </div>

              <div className="mt-8 border-t border-dashed border-gray-400 pt-3 text-xs">
                <div className="font-bold">Received by: ___________________________</div>
                <div>Signature over Printed Name</div>
                <div>Date/Time: ___________________________</div>
              </div>
            </div>
          )}

          {selectedTemplateId === 'notice-meeting' && (
            <div className="space-y-4">
              <div className="text-center">
                <div className="font-bold uppercase text-[14px]">
                  Republic of the Philippines<br />
                  Department of Education<br />
                  [NAME OF SCHOOL]
                </div>
                <div className="mt-4 font-bold text-base tracking-widest uppercase">
                  NOTICE OF MEETING
                </div>
              </div>

              <p>
                Please be informed that there will be an urgent meeting of the <strong>School Governance Council (SGC)</strong> on <strong>July 10, 2026</strong>, at <strong>1:30 o&rsquo;clock in the afternoon</strong> at the <strong>Principal&rsquo;s Office</strong>.
              </p>

              <p>The agenda of the meeting will be as follows:</p>
              <ol className="ml-6 list-decimal space-y-1.5 font-sans text-xs sm:text-sm">
                <li>Call to Order and Roll Call of Attendance</li>
                <li>Review and Approval of the Previous Minutes</li>
                <li>Mid-Year Brigada Eskwela Implementation Progress Report</li>
                <li>Proposed School MOOE Budget Realignments for Q3</li>
                <li>Other Matters / Open Forum</li>
                <li>Adjournment</li>
              </ol>

              <p>Your presence and active participation are highly desired.</p>

              <div className="pt-10">
                <div className="text-xs mb-1">Attested:</div>
                <div className="w-64 border-t border-black pt-1">
                  <div className="font-bold uppercase">[NAME OF PRINCIPAL]</div>
                  <div className="text-xs">School Principal I / SGC Chairperson</div>
                </div>
              </div>
            </div>
          )}

          {selectedTemplateId === 'minutes-meeting' && (
            <div className="space-y-4">
              <div className="text-center font-bold uppercase tracking-wider">
                MINUTES OF THE FACULTY MEETING<br />
                <span className="text-xs normal-case font-normal text-gray-700">[Date] | [Venue]</span>
              </div>

              <div className="text-xs">
                <strong>Attendees:</strong> [Complete List of faculty attendees]<br />
                <strong>Presiding Officer:</strong> [Name of Principal]<br />
                <strong>Secretary:</strong> [Name of Secretary]
              </div>

              <h4 className="font-bold text-sm uppercase mt-4">V. HIGHLIGHTS OF THE DISCUSSION</h4>
              <div>
                <strong>A. Learning Material Distribution Delay</strong>
                <p className="mt-1">
                  Mrs. Maria Santos, Grade 3 Coordinator, raised a concern regarding the insufficient copies of Grade 3 Mathematics modules currently available for the tracking quarter.
                </p>
                <p className="mt-1">
                  In response, the School Principal, Dr. [Name], clarified that the bulk delivery of learning materials from the SDO Supply Section is officially scheduled for the <strong>third week of July 2026</strong>. Dr. [Name] advised the grade coordinators to utilize temporary digital copies or shared learning packets in the interim.
                </p>
              </div>

              <h4 className="font-bold text-sm uppercase mt-4">VI. ACTIONS AGREED UPON</h4>
              <ol className="ml-6 list-decimal space-y-1">
                <li>Grade coordinators to prepare digital copies of modules for sharing.</li>
                <li>Administrative Office to follow up with SDO Supply Section on the delivery schedule.</li>
              </ol>

              <h4 className="font-bold text-sm uppercase mt-4">VII. ADJOURNMENT</h4>
              <p>The meeting was adjourned at [Time] with no further matters to discuss.</p>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <div className="text-xs">Prepared by:</div>
                  <div className="mt-8 border-t border-black pt-1 font-bold">[NAME OF SECRETARY]</div>
                  <div className="text-xs">Secretary</div>
                </div>
                <div>
                  <div className="text-xs">Certified correct:</div>
                  <div className="mt-8 border-t border-black pt-1 font-bold">[NAME OF PRINCIPAL]</div>
                  <div className="text-xs">Presiding Officer</div>
                </div>
              </div>
            </div>
          )}

          {selectedTemplateId === 'formal-request' && (
            <div className="space-y-4">
              <div className="text-center font-bold uppercase text-[14px]">
                Republic of the Philippines<br />
                Department of Education<br />
                [NAME OF SCHOOL]
              </div>

              <div className="my-4">[Date]</div>

              <div>
                <strong>[NAME OF SUPERINTENDENT]</strong><br />
                Schools Division Superintendent<br />
                Schools Division Office of Negros Occidental<br />
                [Office Address]
              </div>

              <p><strong>Dear Madam/Sir:</strong></p>

              <p>
                The undersigned respectfully requests permission to conduct a <strong>2-Day School-Based Training Workshop on Digital Literacy</strong> for twenty-five (25) teaching personnel of [School Name] from <strong>August 6 to August 7, 2026</strong>, at the School ICT Laboratory.
              </p>

              <p>
                This program aims to capacitate our faculty with advanced spreadsheet and document processing skills essential for accurate financial and student data management. Expenses incurred for meals and training materials shall be charged against the school&rsquo;s local In-Service Training (INSET) fund, subject to standard accounting and auditing procedures.
              </p>

              <p>
                Attached herewith are the training matrix, project proposal, and list of participants for your review and favorable approval.
              </p>

              <p>
                Thank you very much for your continued support to our school&rsquo;s professional development initiatives.
              </p>

              <div className="pt-8">
                <div className="text-xs">Respectfully yours,</div>
                <div className="mt-8 w-64 border-t border-black pt-1 font-bold uppercase">
                  [NAME OF PRINCIPAL]
                </div>
                <div className="text-xs">School Principal I</div>
              </div>
            </div>
          )}

          {selectedTemplateId === 'incident-report' && (
            <div className="space-y-4">
              <div className="text-center font-bold text-base uppercase tracking-widest my-2">
                INCIDENT REPORT
              </div>

              <table className="w-full border-collapse border border-black text-xs">
                <tbody>
                  <tr>
                    <td className="border border-black p-2 font-bold w-1/3">Nature of Incident:</td>
                    <td className="border border-black p-2">Electrical Malfunction / Equipment Hazard</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2 font-bold">Date and Time:</td>
                    <td className="border border-black p-2">July 6, 2026, at approximately 9:15 AM</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2 font-bold">Location:</td>
                    <td className="border border-black p-2">School ICT Laboratory, Building B</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2 font-bold">Reported by:</td>
                    <td className="border border-black p-2">[Name of Property Custodian / AO II]</td>
                  </tr>
                </tbody>
              </table>

              <h4 className="font-bold text-xs uppercase mt-3">Details of the Incident:</h4>
              <p>
                At approximately 9:15 AM on July 6, 2026, the property custodian noticed visible sparks and light smoke originating from the main circuit breaker panel inside the School ICT Laboratory. The school&rsquo;s emergency response protocol was immediately activated; the laboratory was evacuated, and the main power isolation switch was safely shut off. The local bureau and representatives from the local electric cooperative were contacted for emergency inspection.
              </p>
              <p>
                <strong>No injuries were reported</strong>, and no computers or central servers sustained damage. The system remains powered down pending structural clearance and repair.
              </p>

              <h4 className="font-bold text-xs uppercase mt-3">Action Taken:</h4>
              <ol className="ml-6 list-decimal space-y-1">
                <li>Evacuated the area and ensured safety of all personnel</li>
                <li>Shut off main power supply</li>
                <li>Notified School Head and local electric cooperative</li>
                <li>Documented the incident for records and reporting</li>
              </ol>

              <h4 className="font-bold text-xs uppercase mt-3">Recommendation:</h4>
              <p>
                Immediate inspection and repair by a licensed electrician is recommended before the ICT Laboratory is used again. A review of the building&rsquo;s electrical load capacity is also advised.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <div className="mt-8 border-t border-black pt-1 font-bold">[NAME OF AO II / PROPERTY CUSTODIAN]</div>
                  <div className="text-xs">Reporting Officer</div>
                </div>
                <div>
                  <div className="mt-8 border-t border-black pt-1 font-bold">[NAME OF PRINCIPAL]</div>
                  <div className="text-xs">School Principal I</div>
                </div>
              </div>
            </div>
          )}

          {selectedTemplateId === 'inventory-ledger' && (
            <div className="space-y-4">
              <div className="text-center font-bold uppercase tracking-wider">
                DEPED SCHOOL PROPERTY & INVENTORY LEDGER<br />
                <span className="text-xs normal-case font-normal">[School Name] | [Division]</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-black text-xs">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-black p-2">Item No.</th>
                      <th className="border border-black p-2">Property Number</th>
                      <th className="border border-black p-2">Description</th>
                      <th className="border border-black p-2">Qty</th>
                      <th className="border border-black p-2">Unit Value (PhP)</th>
                      <th className="border border-black p-2">Acquisition Date</th>
                      <th className="border border-black p-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-black p-2 text-center">001</td>
                      <td className="border border-black p-2 font-mono">DEPED-NOC-026-01</td>
                      <td className="border border-black p-2">Laptop (Brand X, Core i5, 8GB RAM)</td>
                      <td className="border border-black p-2 text-center">1</td>
                      <td className="border border-black p-2 text-right">35,000.00</td>
                      <td className="border border-black p-2">July 2, 2026</td>
                      <td className="border border-black p-2 text-green-700 font-semibold">Functional</td>
                    </tr>
                    <tr>
                      <td className="border border-black p-2 text-center">002</td>
                      <td className="border border-black p-2 font-mono">DEPED-NOC-026-02</td>
                      <td className="border border-black p-2">Laptop (Brand X, Core i5, 8GB RAM)</td>
                      <td className="border border-black p-2 text-center">1</td>
                      <td className="border border-black p-2 text-right">35,000.00</td>
                      <td className="border border-black p-2">July 2, 2026</td>
                      <td className="border border-black p-2 text-green-700 font-semibold">Functional</td>
                    </tr>
                    <tr>
                      <td className="border border-black p-2 text-center">003</td>
                      <td className="border border-black p-2 font-mono">DEPED-NOC-026-03</td>
                      <td className="border border-black p-2">Laptop (Brand X, Core i5, 8GB RAM)</td>
                      <td className="border border-black p-2 text-center">1</td>
                      <td className="border border-black p-2 text-right">35,000.00</td>
                      <td className="border border-black p-2">July 2, 2026</td>
                      <td className="border border-black p-2 text-green-700 font-semibold">Functional</td>
                    </tr>
                    <tr className="font-bold bg-gray-50">
                      <td className="border border-black p-2 text-center">TOTAL</td>
                      <td colSpan={2} className="border border-black p-2">Total Inventory Capitalization Value</td>
                      <td className="border border-black p-2 text-center">3</td>
                      <td className="border border-black p-2 text-right">105,000.00</td>
                      <td colSpan={2} className="border border-black p-2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-[11px] text-gray-500 italic mt-2">
                Note: Assign distinct alphanumeric Property Numbers per asset unit. Update regularly after physical inventory.
              </div>
            </div>
          )}

          {selectedTemplateId === 'mooe-liquidation' && (
            <div className="space-y-4">
              <div className="text-center font-bold uppercase tracking-wider">
                CASH ADVANCE LIQUIDATION REPORT<br />
                <span className="text-xs normal-case font-normal">MOOE Fund | [School Name]</span>
              </div>

              <div className="text-xs">
                <strong>Date of Cash Advance:</strong> July 1, 2026<br />
                <strong>Amount of Cash Advance:</strong> PhP 25,000.00<br />
                <strong>Purpose:</strong> School Minor Repairs &amp; Maintenance
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-black text-xs">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-black p-2">Date</th>
                      <th className="border border-black p-2">DV/OR No.</th>
                      <th className="border border-black p-2">Particulars / Payee</th>
                      <th className="border border-black p-2">COA Object Code</th>
                      <th className="border border-black p-2">Amount (PhP)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-black p-2">07/01/2026</td>
                      <td className="border border-black p-2 font-mono">OR-99831</td>
                      <td className="border border-black p-2">Hardware Supplies (Paints, Brushes)</td>
                      <td className="border border-black p-2 font-mono">5020308000</td>
                      <td className="border border-black p-2 text-right">12,450.00</td>
                    </tr>
                    <tr>
                      <td className="border border-black p-2">07/03/2026</td>
                      <td className="border border-black p-2 font-mono">OR-44120</td>
                      <td className="border border-black p-2">Plumbing Maintenance (Labor Services)</td>
                      <td className="border border-black p-2 font-mono">5021304002</td>
                      <td className="border border-black p-2 text-right">8,000.00</td>
                    </tr>
                    <tr>
                      <td className="border border-black p-2">07/05/2026</td>
                      <td className="border border-black p-2 font-mono">OR-11209</td>
                      <td className="border border-black p-2">Office Stationery Materials</td>
                      <td className="border border-black p-2 font-mono">5020301000</td>
                      <td className="border border-black p-2 text-right">4,200.00</td>
                    </tr>
                    <tr className="font-bold">
                      <td colSpan={4} className="border border-black p-2 text-right">Total Cash Outflow:</td>
                      <td className="border border-black p-2 text-right">24,650.00</td>
                    </tr>
                    <tr className="font-bold">
                      <td colSpan={4} className="border border-black p-2 text-right">Refund of Unutilized Balance:</td>
                      <td className="border border-black p-2 text-right">350.00</td>
                    </tr>
                    <tr className="font-bold bg-green-50 text-green-900">
                      <td colSpan={4} className="border border-black p-2 text-right">Accountability Status:</td>
                      <td className="border border-black p-2 text-right">100% Fully Liquidated</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <div className="mt-8 border-t border-black pt-1 font-bold">[NAME OF AO II / DISBURSING OFFICER]</div>
                  <div className="text-xs">Preparing / Liquidating Officer</div>
                </div>
                <div>
                  <div className="mt-8 border-t border-black pt-1 font-bold">[NAME OF PRINCIPAL]</div>
                  <div className="text-xs">Certified Correct / Approved</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
