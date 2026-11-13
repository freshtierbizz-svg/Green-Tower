import React from 'react';
import { Sparkles, Droplets, Wind, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

interface TechnologySciencePilot2Props {
  onScrollToConfigurator: () => void;
}

export const TechnologySciencePilot2: React.FC<TechnologySciencePilot2Props> = ({
  onScrollToConfigurator,
}) => {
  return (
    <section
      style={{
        padding: 'clamp(4.5rem, 7vw, 6.5rem) 0',
        background: '#0B1B13',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'center',
          }}
        >
          {/* LEFT: EDITORIAL NARRATIVE (Carefully Phrased Engineering Principles) */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'rgba(52, 211, 153, 0.15)',
                border: '1px solid rgba(52, 211, 153, 0.3)',
                color: '#34D399',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '1.25rem',
              }}
            >
              <Sparkles size={13} />
              <span>HOW THE SYSTEM WORKS</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '1rem',
                color: '#FFFFFF',
              }}
            >
              Top-Down Internal Water Cascade Over Suspended Roots.
            </h2>

            <p
              style={{
                fontSize: '1.1rem',
                color: '#A7F3D0',
                lineHeight: 1.6,
                marginBottom: '1.25rem',
                fontWeight: 600,
              }}
            >
              How suspended roots bathed in a timed internal water cascade grow crisper while using significantly less water than open soil beds.
            </p>

            <p
              style={{
                fontSize: '0.95rem',
                color: '#D1D5DB',
                lineHeight: 1.7,
                marginBottom: '1.75rem',
              }}
            >
              Inspired by closed-loop soilless growing systems, AeroHarvest suspends bare plant roots inside the dark central column. A quiet low-voltage DC pump in the 38L base reservoir lifts nutrient-rich water to the top distributor cap, where it cascades evenly down the inside of the tower over each tier of roots before draining back into the basin to be reused.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(52, 211, 153, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34D399', flexShrink: 0, marginTop: '2px' }}>
                  <Wind size={14} />
                </div>
                <div>
                  <strong style={{ color: '#FFFFFF', fontSize: '0.95rem' }}>Oxygenated Root Chamber:</strong>
                  <span style={{ color: '#9CA3AF', fontSize: '0.9rem', display: 'block' }}>
                    Roots hang in humid air between watering cycles, absorbing oxygen directly without soil compaction.
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(52, 211, 153, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34D399', flexShrink: 0, marginTop: '2px' }}>
                  <Droplets size={14} />
                </div>
                <div>
                  <strong style={{ color: '#FFFFFF', fontSize: '0.95rem' }}>Closed-Loop Water Recirculation:</strong>
                  <span style={{ color: '#9CA3AF', fontSize: '0.9rem', display: 'block' }}>
                    Water that cascades past the roots flows straight back into the covered 38L reservoir, avoiding ground runoff and soil evaporation.
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(52, 211, 153, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34D399', flexShrink: 0, marginTop: '2px' }}>
                  <Zap size={14} />
                </div>
                <div>
                  <strong style={{ color: '#FFFFFF', fontSize: '0.95rem' }}>Low-Voltage DC Pump (~12–15W):</strong>
                  <span style={{ color: '#9CA3AF', fontSize: '0.9rem', display: 'block' }}>
                    Automated timer runs the top-down cascade in short intervals, drawing minimal household power.
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onScrollToConfigurator}
              style={{
                background: '#34D399',
                color: '#0B1B13',
                padding: '0.95rem 1.85rem',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 20px rgba(52, 211, 153, 0.3)',
              }}
            >
              <span>Choose Your Tower</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* RIGHT: REAL MISTING ROOTS PHOTO IN CHOSEN ENVIRONMENT */}
          <div>
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(52, 211, 153, 0.25)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
                background: '#040806',
                position: 'relative',
              }}
            >
              <img
                src="assets/misting-roots.jpg"
                alt="Suspended plant roots inside the vertical water cascade chamber"
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '380px',
                  maxHeight: '480px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.25rem',
                  right: '1.25rem',
                  background: 'rgba(11, 27, 19, 0.88)',
                  backdropFilter: 'blur(12px)',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(52, 211, 153, 0.2)',
                  fontSize: '0.85rem',
                  color: '#A7F3D0',
                }}
              >
                🔬 <strong>Internal Root Chamber:</strong> Top-down cascading nutrient water bathes bare root tips while leaving air space for oxygen uptake.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
