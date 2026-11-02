import React from 'react';
import { Droplets, Zap, Shield, Sun, Activity, RefreshCw, Rocket } from 'lucide-react';


export const TechnologyExplainer: React.FC = () => {
  return (
    <section id="technology" style={{ 
      padding: '6rem 0', 
      position: 'relative',
      background: "linear-gradient(180deg, rgba(15, 23, 42, 0.86) 0%, rgba(11, 19, 14, 0.94) 100%), url('/assets/sunroom-bg.jpg') center/cover fixed no-repeat",
      borderTop: '1px solid rgba(16, 185, 129, 0.15)',
      borderBottom: '1px solid rgba(16, 185, 129, 0.15)'
    }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
          <span style={{ fontSize: '0.85rem', color: '#34D399', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
            Aeroponic Hardware Science
          </span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>
            How Vertical Aeroponics Works
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem' }}>
            Unlike soil farming or water-submerged hydroponics, our vertical tower trickles oxygenated nutrient water directly down over plant roots suspended in air.
          </p>
        </div>

        {/* 3 Step Scientific Process Grid */}
        <div className="grid-3" style={{ marginBottom: '4rem' }}>
          
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(5, 150, 105, 0.12) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <Droplets size={26} color="#34D399" />
            </div>
            <span style={{ fontSize: '0.8rem', color: '#34D399', fontWeight: '700', letterSpacing: '0.1em' }}>STEP 01</span>
            <h3 style={{ fontSize: '1.35rem', margin: '0.5rem 0 1rem 0' }}>Automated Cascade Drip</h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.95rem' }}>
              An energy-efficient submersible DC water pump sends nutrient solution up the central tower column on a timed cycle, cascading water smoothly down over suspended roots.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(5, 150, 105, 0.12) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <Zap size={26} color="#34D399" />
            </div>
            <span style={{ fontSize: '0.8rem', color: '#34D399', fontWeight: '700', letterSpacing: '0.1em' }}>STEP 02</span>
            <h3 style={{ fontSize: '1.35rem', margin: '0.5rem 0 1rem 0' }}>100% Root Oxygenation</h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.95rem' }}>
              Because roots hang freely in oxygen-rich air instead of suffocating in dense soil, nutrient absorption is up to 3x more efficient, accelerating crop cycles.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(5, 150, 105, 0.12) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <RefreshCw size={26} color="#34D399" />
            </div>
            <span style={{ fontSize: '0.8rem', color: '#34D399', fontWeight: '700', letterSpacing: '0.1em' }}>STEP 03</span>
            <h3 style={{ fontSize: '1.35rem', margin: '0.5rem 0 1rem 0' }}>Closed-Loop Water Recycling</h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.95rem' }}>
              Excess water drains smoothly back into the 38L Light Green sealed reservoir base without runoff or waste, saving up to 95% of water compared to traditional gardens.
            </p>
          </div>

        </div>

        {/* NASA Aerospace Research Feature Banner */}
        <div className="glass-panel" style={{ 
          marginBottom: '3rem', 
          padding: '2.5rem 3rem',
          background: "linear-gradient(135deg, rgba(15, 23, 42, 0.88) 0%, rgba(30, 41, 59, 0.94) 100%), url('/assets/nasa-lab-bg.jpg') center/cover no-repeat",
          border: '1px solid rgba(56, 189, 248, 0.35)',
          boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.5)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              padding: '0.35rem 0.85rem', 
              borderRadius: '9999px', 
              background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.22) 0%, rgba(14, 165, 233, 0.10) 100%)', 
              border: '1px solid rgba(56, 189, 248, 0.3)',
              color: '#38BDF8', 
              fontSize: '0.825rem', 
              fontWeight: 600,
              letterSpacing: '0.04em'
            }}>
              <Rocket size={14} /> NASA Research & Aerospace Spinoff
            </span>
          </div>
          <h3 style={{ fontSize: '1.85rem', color: '#F8FAFC', marginBottom: '1rem' }}>
            Pioneered for Zero-Gravity Orbital Agriculture
          </h3>
          <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '880px', marginBottom: '1.25rem' }}>
            In the 1990s, NASA scientists partnered with BioServe Space Technologies to evaluate aeroponics aboard the <strong>Mir Space Station</strong> and <strong>Space Shuttle</strong> missions. Seeking an ultra-lightweight, soil-free system for long-duration space travel, NASA proved that gravity-drip aeroponics delivers <strong>up to 98% water savings</strong>, faster growth rates, and sterile pesticide-free cultivation in zero gravity.
          </p>
          <div style={{
            fontSize: '0.825rem',
            color: '#64748B',
            fontStyle: 'italic',
            borderTop: '1px solid rgba(148, 163, 184, 0.15)',
            paddingTop: '0.85rem'
          }}>
            *Compliance Disclosure: NASA pioneered and published foundational research on aeroponic plant growth physics for space missions (Spinoff Report CLM-013). AeroHarvest utilizes these verified aeroponic engineering principles for residential consumer gardens.
          </div>
        </div>

        {/* Feature Macro Photo Banner */}
        <div className="glass-panel" style={{ overflow: 'hidden', padding: 0 }}>
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div style={{ padding: '3rem' }}>
              <div className="badge-emerald" style={{ marginBottom: '1rem' }}>
                Studio Produce Harvest Macro
              </div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                Hyper-Fresh Living Crop Harvest
              </h3>
              <p style={{ color: '#9CA3AF', fontSize: '1.05rem', lineHeight: '1.6' }}>
                Harvest fresh organic sweet basil, butterhead lettuce, and bright red strawberries directly from your tower grow ports seconds before eating. Zero grocery store food miles, zero single-use plastic waste, and zero soil washing needed.
              </p>
            </div>
            <div style={{ height: '100%', minHeight: '340px' }}>
              <img
                src="/assets/harvest-macro.jpg"
                alt="Culinary Macro Harvest Photograph of Fresh Basil and Strawberries"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

