import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, Info, Check } from 'lucide-react';

export const B2C_ROICalculator: React.FC = () => {
  const [weeklySpendOption, setWeeklySpendOption] = useState<number>(30); // default $20-$40 ($30 midpoint)
  const [householdSizeOption, setHouseholdSizeOption] = useState<number>(3); // 3-4 people
  const [selectedCrops, setSelectedCrops] = useState<string[]>(['Herbs', 'Leafy greens']);

  const cropOptions = [
    'Herbs',
    'Leafy greens',
    'Microgreens',
    'Strawberries',
    'Edible flowers',
    'Other compact crops',
  ];

  const toggleCrop = (crop: string) => {
    if (selectedCrops.includes(crop)) {
      setSelectedCrops(selectedCrops.filter((c) => c !== crop));
    } else {
      setSelectedCrops([...selectedCrops, crop]);
    }
  };

  // Calculations
  const annualSpend = weeklySpendOption * 52;
  // Conservative estimate: vertical tower replaces 40% - 65% of high-frequency specialty herb/salad spend depending on crops selected
  const cropFactor = Math.min(0.7, 0.35 + selectedCrops.length * 0.08);
  const annualReplacementValue = Math.round(annualSpend * cropFactor);
  
  // Payback calculation against 7-tier standard ($349 base)
  const paybackMonths = Math.max(3, Math.round((349 / (annualReplacementValue / 12)) * 10) / 10);

  return (
    <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '24px', border: '1px solid rgba(52, 211, 153, 0.3)' }}>
      <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 2.5rem auto' }}>
        <div className="badge-emerald" style={{ marginBottom: '0.75rem' }}>
          <Calculator size={14} />
          <span>HOUSEHOLD SAVINGS CALCULATOR</span>
        </div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>
          Calculate Your Home Grocery Payback
        </h2>
        <p style={{ color: '#9CA3AF', fontSize: '0.975rem' }}>
          See how much your household can save by replacing expensive store-bought herb bunches and packaged salad greens with living home harvests.
        </p>
      </div>

      <div className="grid-2" style={{ gap: '2.5rem', alignItems: 'start' }}>
        {/* INPUT CONTROLS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {/* QUESTION 1: WEEKLY SPEND */}
          <div>
            <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
              1. How much do you spend on herbs, leafy greens & produce each week?
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.5rem' }}>
              {[
                { label: '<$20', value: 15 },
                { label: '$20–$40', value: 30 },
                { label: '$40–$60', value: 50 },
                { label: '$60–$100', value: 80 },
                { label: '$100+', value: 120 },
              ].map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => setWeeklySpendOption(opt.value)}
                  style={{
                    padding: '0.65rem 0.25rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    border: weeklySpendOption === opt.value ? '2px solid #34D399' : '1px solid rgba(255,255,255,0.12)',
                    background: weeklySpendOption === opt.value ? 'rgba(52, 211, 153, 0.2)' : 'rgba(255,255,255,0.03)',
                    color: weeklySpendOption === opt.value ? '#34D399' : '#D1D5DB',
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* QUESTION 2: HOUSEHOLD SIZE */}
          <div>
            <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
              2. How many people are you growing for?
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
              {[
                { label: '1 Person', value: 1 },
                { label: '2 People', value: 2 },
                { label: '3–4 People', value: 3 },
                { label: '5+ People', value: 5 },
              ].map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => setHouseholdSizeOption(opt.value)}
                  style={{
                    padding: '0.65rem 0.25rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    border: householdSizeOption === opt.value ? '2px solid #34D399' : '1px solid rgba(255,255,255,0.12)',
                    background: householdSizeOption === opt.value ? 'rgba(52, 211, 153, 0.2)' : 'rgba(255,255,255,0.03)',
                    color: householdSizeOption === opt.value ? '#34D399' : '#D1D5DB',
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* QUESTION 3: CROP MULTI-SELECT */}
          <div>
            <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
              3. Which crops would you grow at home? (Multi-select)
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
              {cropOptions.map((crop) => {
                const isSelected = selectedCrops.includes(crop);
                return (
                  <button
                    key={crop}
                    onClick={() => toggleCrop(crop)}
                    style={{
                      padding: '0.55rem 0.75rem',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      border: isSelected ? '1px solid #34D399' : '1px solid rgba(255,255,255,0.1)',
                      background: isSelected ? 'rgba(52, 211, 153, 0.15)' : 'rgba(255,255,255,0.02)',
                      color: isSelected ? '#ffffff' : '#9CA3AF',
                    }}
                  >
                    <span>{crop}</span>
                    {isSelected && <Check size={14} color="#34D399" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* OUTPUT RESULTS PANEL */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(26, 46, 34, 0.9) 0%, rgba(15, 25, 18, 0.95) 100%)',
          padding: '2rem',
          borderRadius: '16px',
          border: '1px solid rgba(52, 211, 153, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%'
        }}>
          <div>
            <span style={{ fontSize: '0.8rem', color: '#A7F3D0', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              ILLUSTRATIVE ESTIMATED METRICS
            </span>

            <div style={{ margin: '1.5rem 0 1.25rem 0' }}>
              <span style={{ fontSize: '0.85rem', color: '#9CA3AF', display: 'block' }}>Estimated Annual Produce Grocery Spend</span>
              <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>
                ${annualSpend.toLocaleString()} AUD / yr
              </span>
            </div>

            <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.85rem', color: '#9CA3AF', display: 'block' }}>Estimated Potential Home Harvest Replacement</span>
              <span style={{ fontSize: '2.2rem', fontWeight: 900, color: '#34D399' }}>
                ${annualReplacementValue.toLocaleString()} AUD / yr
              </span>
              <span style={{ fontSize: '0.8rem', color: '#A7F3D0', display: 'block', marginTop: '0.2rem' }}>
                Replaces ~{Math.round(cropFactor * 100)}% of store-bought specialty greens & herbs
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ fontSize: '0.9rem', color: '#D1D5DB' }}>Estimated Payback Period:</span>
              <strong style={{ fontSize: '1.15rem', color: '#FBBF24' }}>~{paybackMonths} Months</strong>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.75rem', color: '#9CA3AF', lineHeight: 1.5 }}>
              <Info size={14} color="#9CA3AF" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>
                <strong>Disclaimer:</strong> Savings calculations are illustrative estimates based on typical Australian household grocery spend patterns and proper plant care. Actual savings vary based on crop selection, harvesting habits, and regional pricing.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
