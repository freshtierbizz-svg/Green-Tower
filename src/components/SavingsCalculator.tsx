import React, { useState } from 'react';
import { Calculator, DollarSign, Droplets, ShoppingBag, Clock, Sparkles, ShieldCheck } from 'lucide-react';

export const SavingsCalculator: React.FC = () => {
  const [weeklySpend, setWeeklySpend] = useState<number>(40);
  const [towerCount, setTowerCount] = useState<number>(1);

  // Calculations
  // Assume ~85% of target organic produce spend replaced per tower (up to pot capacity)
  const annualGrocerySavings = Math.round(weeklySpend * 52 * 0.85 * Math.min(towerCount, 2.5));
  // Aeroponics saves ~2,400 Litres per year vs soil garden per tower site
  const annualWaterSaved = Math.round(2400 * towerCount);
  // Plastic clamshell containers saved per year (~3 per week per tower)
  const plasticContainersSaved = Math.round(156 * towerCount);
  // System base cost AUD $349 (Standard Tier)
  const systemCost = 349 * towerCount;
  const monthlySavings = annualGrocerySavings / 12;
  const paybackMonths = monthlySavings > 0 ? Math.max(2, Math.round(systemCost / monthlySavings)) : 12;

  return (
    <section id="savings-calculator" style={{ 
      padding: '6rem 0', 
      position: 'relative',
      background: "linear-gradient(180deg, rgba(11, 19, 14, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%), url('assets/kitchen-bg.jpg') center/cover fixed no-repeat"
    }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <span style={{ fontSize: '0.85rem', color: '#34D399', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
            Interactive Financial & Environmental ROI Model
          </span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>
            Calculate Your Annual Savings & ROI
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem', lineHeight: '1.6' }}>
            As supermarket produce prices continue to climb, growing your own organic herbs and leafy greens is the most effective way to beat food inflation. See how quickly an FreshTier tower pays for itself.
          </p>
        </div>

        {/* Calculator Main Panel */}
        <div className="glass-panel" style={{ 
          padding: '3rem', 
          background: "linear-gradient(135deg, rgba(17, 24, 39, 0.88) 0%, rgba(15, 23, 42, 0.96) 100%), url('assets/sunroom-bg.jpg') center/cover no-repeat",
          border: '1px solid rgba(16, 185, 129, 0.3)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
        }}>
          
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
            
            {/* Left Controls Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Slider 1: Weekly Spend */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <label htmlFor="weekly-spend-slider" style={{ color: '#E2E8F0', fontWeight: 600, fontSize: '1rem' }}>
                    Weekly Organic Grocery Spend
                  </label>
                  <span style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 700, 
                    color: '#34D399', 
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.22) 0%, rgba(5, 150, 105, 0.10) 100%)', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '8px',
                    border: '1px solid rgba(16, 185, 129, 0.3)'
                  }}>
                    ${weeklySpend} <span style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: 400 }}>/ wk</span>
                  </span>
                </div>
                <input
                  id="weekly-spend-slider"
                  type="range"
                  min={15}
                  max={120}
                  step={5}
                  value={weeklySpend}
                  onChange={(e) => setWeeklySpend(Number(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '4px',
                    outline: 'none',
                    accentColor: '#10B981',
                    cursor: 'pointer'
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: '0.8rem', marginTop: '0.4rem' }}>
                  <span>$15 (Basics)</span>
                  <span>$60 (Family)</span>
                  <span>$120+ (Gourmet Organic)</span>
                </div>
              </div>

              {/* Slider 2: Towers Owned */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <label htmlFor="tower-count-slider" style={{ color: '#E2E8F0', fontWeight: 600, fontSize: '1rem' }}>
                    FreshTier Towers Installed
                  </label>
                  <span style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 700, 
                    color: '#38BDF8', 
                    background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.22) 0%, rgba(14, 165, 233, 0.10) 100%)', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '8px',
                    border: '1px solid rgba(56, 189, 248, 0.3)'
                  }}>
                    {towerCount} {towerCount === 1 ? 'Tower' : 'Towers'}
                  </span>
                </div>
                <input
                  id="tower-count-slider"
                  type="range"
                  min={1}
                  max={4}
                  step={1}
                  value={towerCount}
                  onChange={(e) => setTowerCount(Number(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '4px',
                    outline: 'none',
                    accentColor: '#38BDF8',
                    cursor: 'pointer'
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: '0.8rem', marginTop: '0.4rem' }}>
                  <span>1 Tower (30 Ports)</span>
                  <span>2 Towers (60 Ports)</span>
                  <span>4 Towers (120 Ports)</span>
                </div>
              </div>

              {/* High Tech Callout Note */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
                borderRadius: '12px',
                padding: '1.25rem',
                border: '1px solid rgba(255, 255, 255, 0.07)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F3F4F6', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                  <Sparkles size={16} color="#34D399" /> Micro-Misting Efficiency Factor
                </div>
                <p style={{ color: '#9CA3AF', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                  Because aeroponic roots receive continuous 100% oxygenation, crop harvest cycles are 3x faster than soil. A single 30-port tower yields up to 3–5kg of fresh herbs and produce monthly.
                </p>
              </div>

            </div>

            {/* Right Output Metrics Grid */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.70) 100%)',
              borderRadius: '20px',
              padding: '2rem',
              border: '1px solid rgba(16, 185, 129, 0.2)'
            }}>
              
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                  Estimated Annual Value
                </span>
                <div style={{ 
                  fontSize: '3.25rem', 
                  fontWeight: 800, 
                  color: '#10B981', 
                  letterSpacing: '-0.02em',
                  margin: '0.2rem 0'
                }}>
                  ${annualGrocerySavings.toLocaleString()} <span style={{ fontSize: '1rem', color: '#9CA3AF', fontWeight: 400 }}>AUD / year</span>
                </div>
                <p style={{ color: '#64748B', fontSize: '0.85rem', margin: 0 }}>
                  Direct savings on store-bought herbs, leafy greens & strawberries
                </p>
              </div>

              {/* 3 Metric Cards Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem' }}>
                
                {/* Payback Period */}
                <div style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.85) 0%, rgba(15, 23, 42, 0.75) 100%)',
                  borderRadius: '14px',
                  padding: '1.25rem 1rem',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <Clock size={20} color="#F59E0B" style={{ marginBottom: '0.4rem' }} />
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#F8FAFC' }}>
                    ~{paybackMonths} Mo.
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.2rem' }}>
                    Full ROI Payback
                  </div>
                </div>

                {/* Water Saved */}
                <div style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.85) 0%, rgba(15, 23, 42, 0.75) 100%)',
                  borderRadius: '14px',
                  padding: '1.25rem 1rem',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <Droplets size={20} color="#38BDF8" style={{ marginBottom: '0.4rem' }} />
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#F8FAFC' }}>
                    {annualWaterSaved.toLocaleString()}L
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.2rem' }}>
                    Water Conserved
                  </div>
                </div>

                {/* Plastic Waste Saved */}
                <div style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.85) 0%, rgba(15, 23, 42, 0.75) 100%)',
                  borderRadius: '14px',
                  padding: '1.25rem 1rem',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <ShoppingBag size={20} color="#34D399" style={{ marginBottom: '0.4rem' }} />
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#F8FAFC' }}>
                    {plasticContainersSaved}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.2rem' }}>
                    Plastics Avoided
                  </div>
                </div>

              </div>

              {/* Call to Action Button */}
              <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <a 
                  href="#buy"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
                    transition: 'transform 0.2s ease'
                  }}
                >
                  <ShieldCheck size={18} /> Reserve Your FreshTier Tower (From $299 AUD)
                </a>
              </div>

            </div>

          </div>

          {/* Compliance Disclaimer Footer */}
          <div style={{
            marginTop: '2.5rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            fontSize: '0.8rem',
            color: '#64748B',
            textAlign: 'center',
            fontStyle: 'italic'
          }}>
            *Disclaimers: Savings estimates are based on replacing store-bought organic herbs ($4–$6/bunch) and salad greens with continuous 30-site aeroponic harvests. Individual crop yields vary by seed species, ambient light, and nutrient balance. Water savings calculated against standard 1.5m² soil garden beds requiring 6–8L daily watering.
          </div>

        </div>

      </div>
    </section>
  );
};
