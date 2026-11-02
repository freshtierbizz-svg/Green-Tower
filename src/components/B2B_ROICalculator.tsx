import React, { useState } from 'react';
import { Calculator, Info, Building2, TrendingUp, Check } from 'lucide-react';

export const B2B_ROICalculator: React.FC = () => {
  const [weeklySpend, setWeeklySpend] = useState<number>(75); // default $75/wk
  const [operatingDays, setOperatingDays] = useState<number>(7);
  const [cropType, setCropType] = useState<string>('Cocktail garnishes');

  const annualSpend = weeklySpend * 52;
  // Estimate ~35% - 55% reduction in produce replacement & wilt waste
  const annualWasteSavings = Math.round(annualSpend * 0.45);
  const annualNetValue = Math.max(0, annualWasteSavings - 300);

  return (
    <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '24px', border: '1px solid rgba(251, 191, 36, 0.4)' }}>
      <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 2.5rem auto' }}>
        <div className="badge-emerald" style={{ background: 'rgba(251, 191, 36, 0.15)', color: '#FBBF24', borderColor: 'rgba(251, 191, 36, 0.4)', marginBottom: '0.75rem' }}>
          <Building2 size={14} />
          <span>VENUE COMMERCIAL ECONOMICS</span>
        </div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>
          Calculate Venue Produce Waste Reduction
        </h2>
        <p style={{ color: '#9CA3AF', fontSize: '0.975rem' }}>
          See how replacing coolroom plastic herb boxes with a living vertical tower reduces waste and delivers high-impact visual theater for guests.
        </p>
      </div>

      <div className="grid-2" style={{ gap: '2.5rem', alignItems: 'start' }}>
        {/* INPUT CONTROLS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {/* QUESTION 1: WEEKLY SPEND */}
          <div>
            <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
              1. Current weekly spend on herbs, microgreens & garnishes?
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.5rem' }}>
              {[
                { label: '$25/wk', value: 25 },
                { label: '$50/wk', value: 50 },
                { label: '$75/wk', value: 75 },
                { label: '$100/wk', value: 100 },
                { label: '$150+/wk', value: 160 },
              ].map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => setWeeklySpend(opt.value)}
                  style={{
                    padding: '0.65rem 0.25rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    border: weeklySpend === opt.value ? '2px solid #FBBF24' : '1px solid rgba(255,255,255,0.12)',
                    background: weeklySpend === opt.value ? 'rgba(251, 191, 36, 0.2)' : 'rgba(255,255,255,0.03)',
                    color: weeklySpend === opt.value ? '#FBBF24' : '#D1D5DB',
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* QUESTION 2: OPERATING DAYS */}
          <div>
            <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
              2. How many days per week is your venue open?
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
              {[
                { label: '5 Days / week', value: 5 },
                { label: '6 Days / week', value: 6 },
                { label: '7 Days / week', value: 7 },
              ].map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => setOperatingDays(opt.value)}
                  style={{
                    padding: '0.65rem 0.25rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    border: operatingDays === opt.value ? '2px solid #FBBF24' : '1px solid rgba(255,255,255,0.12)',
                    background: operatingDays === opt.value ? 'rgba(251, 191, 36, 0.2)' : 'rgba(255,255,255,0.03)',
                    color: operatingDays === opt.value ? '#FBBF24' : '#D1D5DB',
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* QUESTION 3: CROP TYPE */}
          <div>
            <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
              3. Primary crop category needed?
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
              {['Herbs', 'Microgreens', 'Edible flowers', 'Cocktail garnishes', 'Mixed'].map((cat) => {
                const isSelected = cropType === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setCropType(cat)}
                    style={{
                      padding: '0.55rem 0.75rem',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      border: isSelected ? '1px solid #FBBF24' : '1px solid rgba(255,255,255,0.1)',
                      background: isSelected ? 'rgba(251, 191, 36, 0.15)' : 'rgba(255,255,255,0.02)',
                      color: isSelected ? '#ffffff' : '#9CA3AF',
                    }}
                  >
                    <span>{cat}</span>
                    {isSelected && <Check size={14} color="#FBBF24" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* OUTPUT RESULTS PANEL */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%)',
          padding: '2rem',
          borderRadius: '16px',
          border: '1px solid rgba(251, 191, 36, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%'
        }}>
          <div>
            <span style={{ fontSize: '0.8rem', color: '#FCD34D', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              COMMERCIAL VALUE ESTIMATES
            </span>

            <div style={{ margin: '1.5rem 0 1.25rem 0' }}>
              <span style={{ fontSize: '0.85rem', color: '#9CA3AF', display: 'block' }}>Current Annual Garnish Spend</span>
              <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>
                ${annualSpend.toLocaleString()} AUD / yr
              </span>
            </div>

            <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.85rem', color: '#9CA3AF', display: 'block' }}>Estimated Potential Produce Waste Avoided</span>
              <span style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FBBF24' }}>
                ${annualWasteSavings.toLocaleString()} AUD / yr
              </span>
              <span style={{ fontSize: '0.8rem', color: '#FCD34D', display: 'block', marginTop: '0.2rem' }}>
                Replaces wilted coolroom stock with live on-demand harvest
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ fontSize: '0.9rem', color: '#D1D5DB' }}>6-Week Concierge Pilot Fee:</span>
              <strong style={{ fontSize: '1.1rem', color: '#34D399' }}>$49.99 / wk ($299.94 total)</strong>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.75rem', color: '#9CA3AF', lineHeight: 1.5 }}>
              <Info size={14} color="#9CA3AF" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>
                <strong>Disclaimer:</strong> Illustrative estimate based on typical venue usage, crop selection, and harvesting practices. Actual results depend on venue crop usage, staff training, and operating conditions.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
