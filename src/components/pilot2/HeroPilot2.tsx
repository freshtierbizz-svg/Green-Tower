import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroPilot2Props {
  onScrollToConfigurator: () => void;
  onScrollToBenefits: () => void;
}

export const HeroPilot2: React.FC<HeroPilot2Props> = ({
  onScrollToConfigurator,
}) => {
  const [heroPhoto, setHeroPhoto] = useState<'tower' | 'balcony'>('tower');

  return (
    <section
      style={{
        position: 'relative',
        background: '#FAF9F5',
        borderBottom: '1px solid rgba(27, 67, 50, 0.08)',
        padding: 'clamp(2rem, 5vw, 4rem) 0',
      }}
    >
      <div className="container">
        <div className="hero-pilot2-grid">
          {/* LEFT COLUMN: HEADLINE, PRICING & "CHOOSE YOUR TOWER" CTA */}
          <div>
            <div
              className="pilot2-badge"
              style={{ marginBottom: '1rem', background: '#E8F5E9', border: '1px solid #C8E6C9' }}
            >
              <Sparkles size={13} color="#1B4332" />
              <span>Australian Vertical Home Gardening</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.85rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.035em',
                color: '#142018',
                marginBottom: '0.85rem',
              }}
            >
              Grow Up.{' '}
              <span
                style={{
                  color: '#1B4332',
                  fontStyle: 'italic',
                  fontWeight: 800,
                }}
              >
                Not Out.
              </span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.15rem, 2.2vw, 1.35rem)',
                fontWeight: 700,
                color: '#2D6A4F',
                marginBottom: '0.85rem',
                lineHeight: 1.35,
              }}
            >
              "Fresh food doesn't need a huge backyard."
            </p>

            <p
              style={{
                fontSize: '1.02rem',
                color: '#37473E',
                lineHeight: 1.65,
                marginBottom: '1.75rem',
                maxWidth: '560px',
              }}
            >
              Harvest crisp salad greens, herbs, and strawberries straight from your balcony, patio, or courtyard. The round 38L base measures <strong>53 cm in diameter (0.22 m²)</strong> and fits comfortably in a <strong>60 × 60 cm clear floor space</strong>.
            </p>

            {/* PRIMARY CTA BESIDE PRICING SUMMARY */}
            <div
              style={{
                display: 'flex',
                gap: '1.15rem',
                flexWrap: 'wrap',
                marginBottom: '2rem',
                alignItems: 'center',
              }}
            >
              <button
                type="button"
                onClick={onScrollToConfigurator}
                className="pilot2-btn-primary"
                style={{ padding: '0.95rem 1.75rem', fontSize: '1.05rem' }}
              >
                <span>Choose your tower</span>
                <ArrowRight size={17} />
              </button>

              <div
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: '#142018',
                  background: '#EEF4EE',
                  border: '1px solid #D4E3D6',
                  padding: '0.7rem 1rem',
                  borderRadius: '10px',
                  lineHeight: 1.35,
                }}
              >
                Towers from <strong>A$299</strong> · Complete growing kits from <strong>A$399</strong>
              </div>
            </div>

            {/* CLEAR MEASURED DIMENSIONS & TRUST ROW */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))',
                gap: '0.85rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(27, 67, 50, 0.12)',
              }}
            >
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#142018' }}>53 cm Base</div>
                <div style={{ fontSize: '0.78rem', color: '#495B50' }}>0.22 m² tub • 60 × 60 cm clear space</div>
              </div>

              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1B4332' }}>105–195 cm</div>
                <div style={{ fontSize: '0.78rem', color: '#495B50' }}>5, 7 (135 cm), or 11-Section heights</div>
              </div>

              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#142018' }}>20–44 Sites</div>
                <div style={{ fontSize: '0.78rem', color: '#495B50' }}>Closed-loop water cascade</div>
              </div>

              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1B4332' }}>2-Year</div>
                <div style={{ fontSize: '0.78rem', color: '#495B50' }}>Australian replacement warranty</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: UNWASHED, FULL-CONTRAST TOWER VISUAL */}
          <div>
            <div
              className="pilot2-card"
              style={{
                padding: '1rem',
                background: '#FFFFFF',
                border: '1px solid rgba(27, 67, 50, 0.12)',
                borderRadius: '20px',
                boxShadow: '0 16px 36px -10px rgba(27, 67, 50, 0.12)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  background: '#F4F2EB',
                  aspectRatio: '4 / 4.2',
                  maxHeight: '500px',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={heroPhoto === 'tower' ? 'assets/real-tower-studio.png' : 'assets/balcony-person.jpg'}
                  alt={
                    heroPhoto === 'tower'
                      ? 'Full AeroHarvest 7-Section Vertical Tower (135 cm tall, 53 cm base diameter)'
                      : 'AeroHarvest Vertical Tower on an Apartment Balcony'
                  }
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: heroPhoto === 'tower' ? 'contain' : 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(20, 32, 24, 0.88)',
                    color: '#FFFFFF',
                    padding: '5px 11px',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                  }}
                >
                  {heroPhoto === 'tower'
                    ? '7-Section Standard Tower • 135 cm tall • 53 cm base'
                    : 'Balcony Scale • 60 × 60 cm recommended floor space'}
                </div>
              </div>

              {/* VIEW SWITCHER PILLS SO BOTH FULL TOWER & BALCONY SCENE ARE CLEAR */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.5rem',
                  marginTop: '0.75rem',
                }}
              >
                <button
                  type="button"
                  onClick={() => setHeroPhoto('tower')}
                  style={{
                    padding: '0.55rem 0.75rem',
                    borderRadius: '10px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    border: heroPhoto === 'tower' ? '2px solid #1B4332' : '1px solid rgba(27, 67, 50, 0.15)',
                    background: heroPhoto === 'tower' ? '#EEF4EE' : '#FFFFFF',
                    color: '#142018',
                    cursor: 'pointer',
                  }}
                >
                  Full Tower View (135 cm)
                </button>
                <button
                  type="button"
                  onClick={() => setHeroPhoto('balcony')}
                  style={{
                    padding: '0.55rem 0.75rem',
                    borderRadius: '10px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    border: heroPhoto === 'balcony' ? '2px solid #1B4332' : '1px solid rgba(27, 67, 50, 0.15)',
                    background: heroPhoto === 'balcony' ? '#EEF4EE' : '#FFFFFF',
                    color: '#142018',
                    cursor: 'pointer',
                  }}
                >
                  Balcony Harvest View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
