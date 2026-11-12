import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Droplets, MapPin, Sparkles, Sprout } from 'lucide-react';

interface HeroPilot2Props {
  onScrollToConfigurator: () => void;
  onScrollToBenefits: () => void;
}

export const HeroPilot2: React.FC<HeroPilot2Props> = ({
  onScrollToConfigurator,
  onScrollToBenefits,
}) => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '82vh',
        display: 'flex',
        alignItems: 'center',
        background: '#FAF9F5',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(27, 67, 50, 0.08)',
      }}
    >
      {/* WIDE BRIGHT LIFESTYLE BACKGROUND IMAGE (Priority 1: Authentic Australian Balcony Harvest) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(assets/balcony-person.jpg)',
          backgroundPosition: 'right 35% center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* SUBTLE LEGIBILITY GRADIENT OVERLAY (Priority 1: Preserves lifestyle photo visibility while ensuring readable text) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'linear-gradient(90deg, rgba(250, 249, 245, 0.98) 0%, rgba(250, 249, 245, 0.92) 42%, rgba(250, 249, 245, 0.55) 68%, rgba(250, 249, 245, 0.15) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '4.5rem 1.5rem' }}>
        <div style={{ maxWidth: '640px' }}>
          {/* BOTANICAL BADGE */}
          <div
            className="pilot2-badge"
            style={{ marginBottom: '1.25rem', background: '#E8F5E9', border: '1px solid #C8E6C9' }}
          >
            <Sparkles size={13} color="#1B4332" />
            <span>Australian Vertical Aeroponics</span>
          </div>

          {/* HEADLINE: GROW UP. NOT OUT. */}
          <h1
            style={{
              fontSize: 'clamp(2.75rem, 5.5vw, 4.25rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              color: '#142018',
              marginBottom: '1rem',
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

          {/* QUOTE / SUBHEAD */}
          <p
            style={{
              fontSize: '1.35rem',
              fontWeight: 700,
              color: '#2D6A4F',
              marginBottom: '1rem',
              lineHeight: 1.35,
            }}
          >
            "Fresh food doesn't need a huge backyard."
          </p>

          {/* EDITORIAL NARRATIVE */}
          <p
            style={{
              fontSize: '1.05rem',
              color: '#37473E',
              lineHeight: 1.65,
              marginBottom: '2rem',
              maxWidth: '560px',
            }}
          >
            Harvest crisp salad greens, vibrant cocktail herbs, and sweet strawberries straight from your balcony, patio, or courtyard. In just 0.22 m² of space, enjoy food that stays alive until the minute you eat.
          </p>

          {/* PRIMARY CTAS (Priority 7: Home-Shopper Focused) */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '2.5rem',
              alignItems: 'center',
            }}
          >
            <button
              type="button"
              onClick={onScrollToConfigurator}
              className="pilot2-btn-primary"
              style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}
            >
              <span>Configure Your Home System</span>
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              onClick={onScrollToBenefits}
              className="pilot2-btn-secondary"
              style={{ padding: '1rem 1.75rem', fontSize: '1rem' }}
            >
              <span>Why Grow at Home?</span>
            </button>
          </div>

          {/* TRUST PILLARS ROW (Priority 6: Concrete, Specific Proof) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(27, 67, 50, 0.12)',
            }}
          >
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#142018' }}>0.22 m²</div>
              <div style={{ fontSize: '0.8rem', color: '#6B7C72' }}>Compact Balcony Footprint</div>
            </div>

            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#1B4332' }}>20–44</div>
              <div style={{ fontSize: '0.8rem', color: '#6B7C72' }}>Modular Growing Sites</div>
            </div>

            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#142018' }}>95% Less</div>
              <div style={{ fontSize: '0.8rem', color: '#6B7C72' }}>Water Than Soil Beds</div>
            </div>

            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#1B4332' }}>2-Year</div>
              <div style={{ fontSize: '0.8rem', color: '#6B7C72' }}>Australian Replacement Warranty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
