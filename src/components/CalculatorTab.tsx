import React, { useState } from 'react';
import { Calculator, DollarSign, Receipt, Percent, Zap, AlertCircle } from 'lucide-react';

export const CalculatorTab: React.FC = () => {
  // 1. Daily Wage
  const [monthlySalary, setMonthlySalary] = useState<number>(33947);

  // 2. GSIS
  const [gsisBasic, setGsisBasic] = useState<number>(31705);

  // 3. Taxable Income
  const [grossIncome, setGrossIncome] = useState<number>(53818);
  const [mandatoryDeductions, setMandatoryDeductions] = useState<number>(5825);

  // 4. Prorated PERA
  const [daysAbsentLWOP, setDaysAbsentLWOP] = useState<number>(5);

  // 5. Withholding VAT & EWT
  const [grossBillAmount, setGrossBillAmount] = useState<number>(15000);

  // 6. MOOE Liquidation
  const [cashAdvanceAmount, setCashAdvanceAmount] = useState<number>(35000);
  const [liquidatedExpenses, setLiquidatedExpenses] = useState<number>(32450.5);

  // 7. Fund Utilization
  const [quarterAllocation, setQuarterAllocation] = useState<number>(120000);
  const [quarterDisbursement, setQuarterDisbursement] = useState<number>(95000);

  // 8. Electricity
  const [prevReading, setPrevReading] = useState<number>(1200);
  const [currReading, setCurrReading] = useState<number>(1500);
  const [ratePerKwh, setRatePerKwh] = useState<number>(11.2);

  // Calculations
  const dailyWage = monthlySalary > 0 ? (monthlySalary / 22).toFixed(2) : '0.00';

  const gsisPersonal = (gsisBasic * 0.09).toFixed(2);
  const gsisGov = (gsisBasic * 0.12).toFixed(2);
  const gsisTotal = (gsisBasic * 0.21).toFixed(2);

  const taxableIncome = Math.max(0, grossIncome - mandatoryDeductions).toFixed(2);

  const daysWorked = Math.max(0, 22 - daysAbsentLWOP);
  const proratedPera = ((2000 / 22) * daysWorked).toFixed(2);

  const netOfVatBase = grossBillAmount > 0 ? grossBillAmount / 1.12 : 0;
  const finalVat5 = netOfVatBase * 0.05;
  const ewt1 = netOfVatBase * 0.01;
  const netPayable = grossBillAmount - finalVat5 - ewt1;

  const mooeBalance = (cashAdvanceAmount - liquidatedExpenses).toFixed(2);

  const utilizationRate =
    quarterAllocation > 0 ? ((quarterDisbursement / quarterAllocation) * 100).toFixed(2) : '0.00';

  const kwhConsumed = Math.max(0, currReading - prevReading);
  const electricityCost = (kwhConsumed * ratePerKwh).toFixed(2);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-2xl border border-[#ddd8eb] bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center gap-2.5">
          <Calculator className="h-6 w-6 text-[#6d5cae]" />
          <div>
            <h2 className="text-xl font-extrabold text-[#514487] sm:text-2xl">
              AO II Practical Financial &amp; Payroll Calculators
            </h2>
            <p className="text-xs text-[#696579] sm:text-sm">
              Interactive calculators for standard Civil Service and DepEd MOOE mathematical formulas tested in the examination.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* 1. Daily Wage Divisor */}
        <div className="rounded-2xl border border-[#ddd8eb] bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 border-b border-[#ddd8eb] pb-2.5">
            <DollarSign className="h-4 w-4 text-[#6d5cae]" />
            <h3 className="text-sm font-bold text-[#514487]">Daily Wage Rate</h3>
          </div>
          <p className="mt-1.5 text-xs text-[#696579]">
            Civil service formula: <code>Monthly Salary ÷ 22 working days</code>
          </p>
          <div className="mt-3 space-y-2">
            <div>
              <label className="text-[11px] font-bold text-[#696579]">Monthly Basic Salary (₱):</label>
              <input
                type="number"
                value={monthlySalary}
                onChange={(e) => setMonthlySalary(Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-[#ddd8eb] px-3 py-1.5 text-xs focus:border-[#6d5cae] focus:outline-none"
              />
            </div>
            <div className="rounded-xl bg-[#f1effb] p-3 text-center">
              <span className="text-[11px] text-[#514487]">Computed Daily Wage Rate:</span>
              <div className="text-lg font-extrabold text-[#514487]">₱ {dailyWage}</div>
              <span className="text-[10px] text-[#696579]">based on standard 22-day divisor</span>
            </div>
          </div>
        </div>

        {/* 2. GSIS Shares */}
        <div className="rounded-2xl border border-[#ddd8eb] bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 border-b border-[#ddd8eb] pb-2.5">
            <Percent className="h-4 w-4 text-[#6d5cae]" />
            <h3 className="text-sm font-bold text-[#514487]">GSIS Contributions (9% & 12%)</h3>
          </div>
          <p className="mt-1.5 text-xs text-[#696579]">
            Personal share: 9% | Government share: 12%
          </p>
          <div className="mt-3 space-y-2">
            <div>
              <label className="text-[11px] font-bold text-[#696579]">Basic Salary (₱):</label>
              <input
                type="number"
                value={gsisBasic}
                onChange={(e) => setGsisBasic(Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-[#ddd8eb] px-3 py-1.5 text-xs focus:border-[#6d5cae] focus:outline-none"
              />
            </div>
            <div className="space-y-1 rounded-xl bg-[#faf9fd] p-2.5 text-xs">
              <div className="flex justify-between">
                <span>Personal Share (9%):</span>
                <strong className="text-[#514487]">₱ {gsisPersonal}</strong>
              </div>
              <div className="flex justify-between">
                <span>Gov. Share (12%):</span>
                <strong className="text-[#514487]">₱ {gsisGov}</strong>
              </div>
              <div className="flex justify-between border-t border-[#ddd8eb] pt-1 font-bold">
                <span>Total Remittance (21%):</span>
                <span className="text-[#6d5cae]">₱ {gsisTotal}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Taxable Income */}
        <div className="rounded-2xl border border-[#ddd8eb] bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 border-b border-[#ddd8eb] pb-2.5">
            <Receipt className="h-4 w-4 text-[#6d5cae]" />
            <h3 className="text-sm font-bold text-[#514487]">Taxable Income</h3>
          </div>
          <p className="mt-1.5 text-xs text-[#696579]">
            Gross Compensation − Mandatory Deductions
          </p>
          <div className="mt-3 space-y-2">
            <div>
              <label className="text-[11px] font-bold text-[#696579]">Gross Compensation (₱):</label>
              <input
                type="number"
                value={grossIncome}
                onChange={(e) => setGrossIncome(Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-[#ddd8eb] px-3 py-1.5 text-xs focus:border-[#6d5cae] focus:outline-none"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-[#696579]">Mandatory Deductions (₱):</label>
              <input
                type="number"
                value={mandatoryDeductions}
                onChange={(e) => setMandatoryDeductions(Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-[#ddd8eb] px-3 py-1.5 text-xs focus:border-[#6d5cae] focus:outline-none"
              />
            </div>
            <div className="rounded-xl bg-[#f1effb] p-2.5 text-center">
              <span className="text-[11px] text-[#514487]">Net Taxable Income:</span>
              <div className="text-base font-extrabold text-[#514487]">₱ {taxableIncome}</div>
            </div>
          </div>
        </div>

        {/* 4. Prorated PERA */}
        <div className="rounded-2xl border border-[#ddd8eb] bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 border-b border-[#ddd8eb] pb-2.5">
            <Receipt className="h-4 w-4 text-[#6d5cae]" />
            <h3 className="text-sm font-bold text-[#514487]">Prorated PERA (LWOP)</h3>
          </div>
          <p className="mt-1.5 text-xs text-[#696579]">
            Formula: (₱2,000 ÷ 22) × Days Worked
          </p>
          <div className="mt-3 space-y-2">
            <div>
              <label className="text-[11px] font-bold text-[#696579]">Days Absent on LWOP:</label>
              <input
                type="number"
                min={0}
                max={22}
                value={daysAbsentLWOP}
                onChange={(e) => setDaysAbsentLWOP(Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-[#ddd8eb] px-3 py-1.5 text-xs focus:border-[#6d5cae] focus:outline-none"
              />
            </div>
            <div className="rounded-xl bg-[#faf9fd] p-2.5 text-xs space-y-1">
              <div className="flex justify-between">
                <span>Days actually worked:</span>
                <strong className="text-[#514487]">{daysWorked} days</strong>
              </div>
              <div className="flex justify-between border-t border-[#ddd8eb] pt-1">
                <span>Prorated PERA:</span>
                <strong className="text-[#6d5cae]">₱ {proratedPera}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Withholding Tax (VAT & EWT) */}
        <div className="rounded-2xl border border-[#ddd8eb] bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 border-b border-[#ddd8eb] pb-2.5">
            <Percent className="h-4 w-4 text-[#6d5cae]" />
            <h3 className="text-sm font-bold text-[#514487]">Government VAT &amp; EWT</h3>
          </div>
          <p className="mt-1.5 text-xs text-[#696579]">
            Base = Gross ÷ 1.12 | 5% Final VAT + 1% EWT
          </p>
          <div className="mt-3 space-y-2">
            <div>
              <label className="text-[11px] font-bold text-[#696579]">Gross VAT-Inclusive Bill (₱):</label>
              <input
                type="number"
                value={grossBillAmount}
                onChange={(e) => setGrossBillAmount(Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-[#ddd8eb] px-3 py-1.5 text-xs focus:border-[#6d5cae] focus:outline-none"
              />
            </div>
            <div className="rounded-xl bg-[#faf9fd] p-2.5 text-xs space-y-1">
              <div className="flex justify-between">
                <span>Net of VAT Base:</span>
                <strong>₱ {netOfVatBase.toFixed(2)}</strong>
              </div>
              <div className="flex justify-between text-[#c94c4c]">
                <span>5% Final VAT:</span>
                <span>- ₱ {finalVat5.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#c94c4c]">
                <span>1% EWT (Goods):</span>
                <span>- ₱ {ewt1.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-[#ddd8eb] pt-1 font-bold text-[#2e8b57]">
                <span>Net Payable to Supplier:</span>
                <span>₱ {netPayable.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6. MOOE Cash Advance Liquidation */}
        <div className="rounded-2xl border border-[#ddd8eb] bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 border-b border-[#ddd8eb] pb-2.5">
            <DollarSign className="h-4 w-4 text-[#6d5cae]" />
            <h3 className="text-sm font-bold text-[#514487]">MOOE Liquidation Balance</h3>
          </div>
          <p className="mt-1.5 text-xs text-[#696579]">
            Cash Advance Received − Total Valid Expenses
          </p>
          <div className="mt-3 space-y-2">
            <div>
              <label className="text-[11px] font-bold text-[#696579]">Cash Advance Received (₱):</label>
              <input
                type="number"
                value={cashAdvanceAmount}
                onChange={(e) => setCashAdvanceAmount(Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-[#ddd8eb] px-3 py-1.5 text-xs focus:border-[#6d5cae] focus:outline-none"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-[#696579]">Liquidated Expenses (₱):</label>
              <input
                type="number"
                value={liquidatedExpenses}
                onChange={(e) => setLiquidatedExpenses(Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-[#ddd8eb] px-3 py-1.5 text-xs focus:border-[#6d5cae] focus:outline-none"
              />
            </div>
            <div className="rounded-xl bg-[#faf9fd] p-2.5 text-center">
              <span className="text-[11px] text-[#696579]">Unliquidated Balance to Refund:</span>
              <div className="text-base font-extrabold text-[#514487]">₱ {mooeBalance}</div>
            </div>
          </div>
        </div>

        {/* 7. Fund Utilization Rate */}
        <div className="rounded-2xl border border-[#ddd8eb] bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 border-b border-[#ddd8eb] pb-2.5">
            <Percent className="h-4 w-4 text-[#6d5cae]" />
            <h3 className="text-sm font-bold text-[#514487]">Fund Utilization Rate (%)</h3>
          </div>
          <p className="mt-1.5 text-xs text-[#696579]">
            Formula: (Disbursements ÷ Allocation) × 100
          </p>
          <div className="mt-3 space-y-2">
            <div>
              <label className="text-[11px] font-bold text-[#696579]">Cash Allocation (₱):</label>
              <input
                type="number"
                value={quarterAllocation}
                onChange={(e) => setQuarterAllocation(Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-[#ddd8eb] px-3 py-1.5 text-xs focus:border-[#6d5cae] focus:outline-none"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-[#696579]">Disbursement (₱):</label>
              <input
                type="number"
                value={quarterDisbursement}
                onChange={(e) => setQuarterDisbursement(Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-[#ddd8eb] px-3 py-1.5 text-xs focus:border-[#6d5cae] focus:outline-none"
              />
            </div>
            <div className="rounded-xl bg-[#faf9fd] p-2.5 text-center">
              <span className="text-[11px] text-[#696579]">Utilization Rate:</span>
              <div className="text-lg font-extrabold text-[#514487]">{utilizationRate}%</div>
              <span
                className={`text-[10px] font-bold ${
                  Number(utilizationRate) >= 90 ? 'text-[#2e8b57]' : 'text-[#d97706]'
                }`}
              >
                {Number(utilizationRate) >= 90
                  ? 'Compliant (Target: 90% - 100%)'
                  : 'Underutilized (< 90% target)'}
              </span>
            </div>
          </div>
        </div>

        {/* 8. Electricity Bill Computation */}
        <div className="rounded-2xl border border-[#ddd8eb] bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 border-b border-[#ddd8eb] pb-2.5">
            <Zap className="h-4 w-4 text-[#d97706]" />
            <h3 className="text-sm font-bold text-[#514487]">School Electricity Bill</h3>
          </div>
          <p className="mt-1.5 text-xs text-[#696579]">
            (Current − Previous) × Rate per kWh
          </p>
          <div className="mt-3 space-y-1.5">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[10px] font-bold text-[#696579]">Prev (kWh):</label>
                <input
                  type="number"
                  value={prevReading}
                  onChange={(e) => setPrevReading(Number(e.target.value))}
                  className="w-full rounded border border-[#ddd8eb] p-1 text-xs"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-[#696579]">Curr (kWh):</label>
                <input
                  type="number"
                  value={currReading}
                  onChange={(e) => setCurrReading(Number(e.target.value))}
                  className="w-full rounded border border-[#ddd8eb] p-1 text-xs"
                />
              </div>
            </div>
            <div>
              <label className="text-[10px] font-bold text-[#696579]">Rate per kWh (₱):</label>
              <input
                type="number"
                step="0.1"
                value={ratePerKwh}
                onChange={(e) => setRatePerKwh(Number(e.target.value))}
                className="w-full rounded border border-[#ddd8eb] p-1 text-xs"
              />
            </div>
            <div className="rounded-xl bg-[#faf9fd] p-2 text-center text-xs">
              <span className="text-[#696579]">Total Electricity Cost:</span>
              <div className="text-base font-extrabold text-[#514487]">₱ {electricityCost}</div>
              <span className="text-[10px] text-[#696579]">{kwhConsumed} kWh consumed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
