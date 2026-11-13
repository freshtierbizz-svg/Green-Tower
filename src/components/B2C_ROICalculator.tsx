import React, { useState } from 'react';
import { Calculator, Info, Check, Calendar } from 'lucide-react';

interface SystemPurchaseOption {
  id: string;
  label: string;
  priceAUD: number;
  sites: number;
}

const SYSTEM_PURCHASE_OPTIONS: SystemPurchaseOption[] = [
  { id: '5-base', label: '5-Section Base (A$299)', priceAUD: 299, sites: 20 },
  { id: '5-kit', label: '5-Section Complete Kit (A$399)', priceAUD: 399, sites: 20 },
  { id: '7-base', label: '7-Section Base (A$349)', priceAUD: 349, sites: 28 },
  { id: '7-kit', label: '7-Section Complete Kit (A$449 · Recommended)', priceAUD: 449, sites: 28 },
  { id: '11-base', label: '11-Section Base (A$449)', priceAUD: 449, sites: 44 },
  { id: '11-kit', label: '11-Section Complete Kit (A$549)', priceAUD: 549, sites: 44 },
];

export const B2C_ROICalculator: React.FC = () => {
  const [selectedSystemId, setSelectedSystemId] = useState<string>('7-kit'); // Default recommended A$449 Complete Kit
  const [weeklySpendOption, setWeeklySpendOption] = useState<number>(30); // default $20-$40 ($30 midpoint)
  const [householdSizeOption, setHouseholdSizeOption] = useState<number>(3); // 3-4 people
  const [startMethod, setStartMethod] = useState<'seed' | 'seedling'>('seed'); // Seed (5 wks ramp-up) vs Seedling (2.5 wks ramp-up)
  const [selectedCrops, setSelectedCrops] = useState<string[]>(['Herbs', 'Leafy greens']);

  const cropOptions = [
    { name: 'Herbs', share: 0.18 },
    { name: 'Leafy greens', share: 0.22 },
    { name: 'Microgreens', share: 0.10 },
    { name: 'Strawberries', share: 0.10 },
    { name: 'Edible flowers', share: 0.05 },
    { name: 'Other compact crops', share: 0.08 },
  ];

  const toggleCrop = (crop: string) => {
    if (selectedCrops.includes(crop)) {
      setSelectedCrops(selectedCrops.filter((c) => c !== crop));
    } else {
      setSelectedCrops([...selectedCrops, crop]);
    }
  };

  const selectedSystem =
    SYSTEM_PURCHASE_OPTIONS.find((s) => s.id === selectedSystemId) || SYSTEM_PURCHASE_OPTIONS[3];

  const hasCropsSelected = selectedCrops.length > 0;

  // Time to first harvest (weeks before picking begins in Year 1)
  const weeksToFirstHarvest = startMethod === 'seed' ? 5 : 2.5;
  const activeHarvestWeeksYear1 = 52 - weeksToFirstHarvest; // 47 weeks from seed, 49.5 weeks from seedlings

  // Household size factor: models how effectively household demand matches tower output
  // 1 person uses slightly less of a large tower's output; larger households consume more up to tower site limits
  const householdFactor =
    householdSizeOption === 1
      ? 0.82
      : householdSizeOption === 2
      ? 0.94
      : householdSizeOption === 3
      ? 1.0
      : 1.1;

  // Sum only the shares of crops actually selected (0 when no crops are selected)
  const rawCropShare = cropOptions
    .filter((c) => selectedCrops.includes(c.name))
    .reduce((sum, c) => sum + c.share, 0);

  // Scale by tower capacity (20 vs 28 vs 44 sites) and household size
  const capacityMultiplier = selectedSystem.sites === 20 ? 0.85 : selectedSystem.sites === 44 ? 1.15 : 1.0;
  const cropFactor = hasCropsSelected
    ? Math.min(0.68, rawCropShare * capacityMultiplier * householdFactor)
    : 0;

  // Weekly produce replaced once harvesting begins
  const weeklyProduceReplaced = hasCropsSelected ? weeklySpendOption * cropFactor : 0;
  const annualSpend = weeklySpendOption * 52;

  // Gross Year-1 produce replaced accounts for the initial grow-in ramp-up before first harvest
  const grossAnnualReplacementValue = hasCropsSelected
    ? Math.round(weeklyProduceReplaced * activeHarvestWeeksYear1)
    : 0;

  // Deduct estimated annual running costs:
  // ~A$24/yr low-voltage pump electricity (~15W on timer) & water + ~A$120/yr replacement A+B nutrients & seedling plugs = A$144/yr
  const annualRunningCost = hasCropsSelected ? 144 : 0;
  const netAnnualSavings = hasCropsSelected ? Math.max(0, grossAnnualReplacementValue - annualRunningCost) : 0;

  // Payback against the selected purchase price (includes initial weeks to first harvest)
  const monthlyNetSavings = netAnnualSavings / 12;
  const paybackMonths =
    monthlyNetSavings > 0 ? Math.round((selectedSystem.priceAUD / monthlyNetSavings) * 10) / 10 : null;

  return (
    <div
      className="glass-panel"
      style={{
        padding: 'clamp(1.25rem, 4vw, 2.5rem)',
        borderRadius: '24px',
        border: '1px solid rgba(52, 211, 153, 0.3)',
        background: 'linear-gradient(135deg, #0F2218 0%, #09150F 100%)',
        color: '#FFFFFF',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2rem auto' }}>
        <div className="badge-emerald" style={{ marginBottom: '0.75rem' }}>
          <Calculator size={14} />
          <span>HOUSEHOLD SAVINGS CALCULATOR</span>
        </div>
        <h2 style={{ fontSize: 'clamp(1.65rem, 3.5vw, 2.2rem)', fontWeight: 800, marginBottom: '0.5rem', color: '#FFFFFF' }}>
          Calculate Your Home Grocery Payback
        </h2>
        <p style={{ color: '#D1D5DB', fontSize: '0.95rem' }}>
          Estimate your net annual savings after deducting water, power, and nutrient running costs—calculated against your chosen tower package.
        </p>
      </div>

      <div className="grid-2" style={{ gap: '2rem', alignItems: 'start' }}>
        {/* INPUT CONTROLS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* STEP 0: SELECTED PURCHASE PRICE */}
          <div>
            <label
              htmlFor="calc-system-select"
              style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}
            >
              1. Which tower & package price are you comparing?
            </label>
            <select
              id="calc-system-select"
              value={selectedSystemId}
              onChange={(e) => setSelectedSystemId(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 0.9rem',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1.5px solid #34D399',
                color: '#FFFFFF',
                fontSize: '0.92rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              {SYSTEM_PURCHASE_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id} style={{ background: '#0F2218', color: '#FFFFFF' }}>
                  {opt.label} — {opt.sites} grow sites
                </option>
              ))}
            </select>
          </div>

          {/* QUESTION 1: WEEKLY SPEND */}
          <div>
            <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.6rem' }}>
              2. Weekly household spend on herbs, leafy greens & berries:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(58px, 1fr))', gap: '0.45rem' }}>
              {[
                { label: '<A$20', value: 15 },
                { label: 'A$20–40', value: 30 },
                { label: 'A$40–60', value: 50 },
                { label: 'A$60–100', value: 80 },
                { label: 'A$100+', value: 120 },
              ].map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setWeeklySpendOption(opt.value)}
                  style={{
                    padding: '0.6rem 0.25rem',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    border: weeklySpendOption === opt.value ? '2px solid #34D399' : '1px solid rgba(255,255,255,0.15)',
                    background: weeklySpendOption === opt.value ? 'rgba(52, 211, 153, 0.2)' : 'rgba(255,255,255,0.04)',
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
            <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.6rem' }}>
              3. Household size:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))', gap: '0.45rem' }}>
              {[
                { label: '1 Person', value: 1 },
                { label: '2 People', value: 2 },
                { label: '3–4 People', value: 3 },
                { label: '5+ People', value: 5 },
              ].map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setHouseholdSizeOption(opt.value)}
                  style={{
                    padding: '0.6rem 0.25rem',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    border: householdSizeOption === opt.value ? '2px solid #34D399' : '1px solid rgba(255,255,255,0.15)',
                    background: householdSizeOption === opt.value ? 'rgba(52, 211, 153, 0.2)' : 'rgba(255,255,255,0.04)',
                    color: householdSizeOption === opt.value ? '#34D399' : '#D1D5DB',
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* QUESTION 3: STARTING METHOD (TIME TO FIRST HARVEST) */}
          <div>
            <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.6rem' }}>
              4. How will you start your crops? (Time to first harvest)
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <button
                type="button"
                onClick={() => setStartMethod('seed')}
                style={{
                  padding: '0.6rem 0.75rem',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textAlign: 'left',
                  border: startMethod === 'seed' ? '2px solid #34D399' : '1px solid rgba(255,255,255,0.15)',
                  background: startMethod === 'seed' ? 'rgba(52, 211, 153, 0.2)' : 'rgba(255,255,255,0.04)',
                  color: startMethod === 'seed' ? '#34D399' : '#D1D5DB',
                }}
              >
                From Seed in Coco Plugs (~4–6 wks to first pick)
              </button>
              <button
                type="button"
                onClick={() => setStartMethod('seedling')}
                style={{
                  padding: '0.6rem 0.75rem',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textAlign: 'left',
                  border: startMethod === 'seedling' ? '2px solid #34D399' : '1px solid rgba(255,255,255,0.15)',
                  background: startMethod === 'seedling' ? 'rgba(52, 211, 153, 0.2)' : 'rgba(255,255,255,0.04)',
                  color: startMethod === 'seedling' ? '#34D399' : '#D1D5DB',
                }}
              >
                Pre-Rooted Seedlings (~2–3 wks to first pick)
              </button>
            </div>
          </div>

          {/* QUESTION 4: CROP MULTI-SELECT */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.6rem', gap: '0.5rem', flexWrap: 'wrap' }}>
              <label style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff' }}>
                5. Which crops will you grow? ({selectedCrops.length} selected)
              </label>
              {selectedCrops.length > 0 && (
                <button
                  type="button"
                  onClick={() => setSelectedCrops([])}
                  style={{ fontSize: '0.75rem', color: '#9CA3AF', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  Clear all
                </button>
              )}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.5rem' }}>
              {cropOptions.map((crop) => {
                const isSelected = selectedCrops.includes(crop.name);
                return (
                  <button
                    key={crop.name}
                    type="button"
                    onClick={() => toggleCrop(crop.name)}
                    style={{
                      padding: '0.55rem 0.75rem',
                      borderRadius: '8px',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      border: isSelected ? '1.5px solid #34D399' : '1px solid rgba(255,255,255,0.12)',
                      background: isSelected ? 'rgba(52, 211, 153, 0.16)' : 'rgba(255,255,255,0.03)',
                      color: isSelected ? '#ffffff' : '#9CA3AF',
                    }}
                  >
                    <span>{crop.name}</span>
                    {isSelected && <Check size={14} color="#34D399" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* OUTPUT RESULTS PANEL */}
        <div
          style={{
            background: 'rgba(11, 25, 18, 0.9)',
            padding: '1.5rem',
            borderRadius: '16px',
            border: '1px solid rgba(52, 211, 153, 0.35)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <span style={{ fontSize: '0.78rem', color: '#A7F3D0', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              NET SAVINGS & PAYBACK ESTIMATE
            </span>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', margin: '1rem 0', padding: '0.85rem', background: 'rgba(255,255,255,0.04)', borderRadius: '10px', fontSize: '0.82rem' }}>
              <div>
                <span style={{ color: '#9CA3AF', display: 'block' }}>Selected System Price:</span>
                <strong style={{ color: '#FFFFFF', fontSize: '1.05rem' }}>A${selectedSystem.priceAUD}</strong>
              </div>
              <div>
                <span style={{ color: '#9CA3AF', display: 'block' }}>Gross Produce Replaced (Yr 1):</span>
                <strong style={{ color: '#D1D5DB', fontSize: '1.05rem' }}>A${grossAnnualReplacementValue.toLocaleString()}/yr</strong>
              </div>
              <div style={{ gridColumn: '1 / -1', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.5rem' }}>
                <span style={{ color: '#9CA3AF' }}>Time to First Harvest: </span>
                <strong style={{ color: '#A7F3D0' }}>
                  {startMethod === 'seed' ? '4–6 weeks from seed (47 harvest wks in Yr 1)' : '2–3 weeks from seedlings (49.5 harvest wks in Yr 1)'}
                </strong>
              </div>
              <div style={{ gridColumn: '1 / -1', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.5rem' }}>
                <span style={{ color: '#9CA3AF' }}>Less Est. Running Costs (nutrients, plugs, water & ~15W pump): </span>
                <strong style={{ color: '#FBBF24' }}>-A${annualRunningCost}/yr (~A$12/mo)</strong>
              </div>
            </div>

            <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.35)', borderRadius: '12px', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.82rem', color: '#9CA3AF', display: 'block' }}>
                Estimated Net Year-1 Savings (After Ramp-Up & Running Costs)
              </span>
              <span style={{ fontSize: '2.1rem', fontWeight: 900, color: hasCropsSelected ? '#34D399' : '#9CA3AF' }} data-testid="calculator-net-savings">
                A${netAnnualSavings.toLocaleString()} / yr
              </span>
              <span style={{ fontSize: '0.78rem', color: '#A7F3D0', display: 'block', marginTop: '0.2rem' }}>
                {hasCropsSelected
                  ? `Replaces ~A$${Math.round(weeklyProduceReplaced)}/wk across ${activeHarvestWeeksYear1} active harvest weeks (of A$${annualSpend.toLocaleString()}/yr spend), less A$144/yr running costs`
                  : '0 crops selected — select at least one crop on the left to estimate savings'}
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ fontSize: '0.9rem', color: '#D1D5DB' }}>
                Payback vs. A${selectedSystem.priceAUD} Purchase Price:
              </span>
              <strong style={{ fontSize: '1.15rem', color: '#FBBF24' }} data-testid="calculator-payback">
                {paybackMonths !== null ? `~${paybackMonths} Months` : '—'}
              </strong>
            </div>

            {/* DATED EXAMPLE GROW BASIS */}
            <div
              style={{
                marginTop: '1rem',
                padding: '0.9rem 1rem',
                borderRadius: '10px',
                background: 'rgba(52, 211, 153, 0.08)',
                border: '1px solid rgba(52, 211, 153, 0.25)',
                fontSize: '0.78rem',
                color: '#E2E8F0',
                lineHeight: 1.5,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, color: '#34D399', marginBottom: '0.3rem' }}>
                <Calendar size={13} />
                <span>Sample 8-Week Grow Log (7-Section Trial, Aug–Oct 2026)</span>
              </div>
              <div>
                <strong>28 sites planted:</strong> 12× Butterhead & Oakleaf lettuce, 8× Sweet Basil & Mint, 8× Baby Spinach & Bok Choy.
                Continuous leaf-by-leaf harvesting yielded ~18 salad bowls + 24 herb bunches over 8 weeks (~A$128 supermarket value), minus A$24 in A+B nutrients, coco plugs, and 15W timed pump power = <strong>~A$104 net value per 8-week cycle (~A$676/yr)</strong>.
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.74rem', color: '#9CA3AF', lineHeight: 1.45 }}>
              <Info size={14} color="#9CA3AF" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>
                <strong>Basis of Estimate:</strong> Figures are illustrative estimates based on typical Australian supermarket bunch prices (A$3.50–A$5.00/bunch) and regular home care. Actual yields vary with season, sunlight hours, and crop variety.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
