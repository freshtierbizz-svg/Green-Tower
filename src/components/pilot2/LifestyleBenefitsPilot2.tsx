import React from 'react';
import { ArrowRight, Check, Sparkles, Sprout, Heart, ShieldCheck, Sun } from 'lucide-react';

interface LifestyleBenefitsPilot2Props {
  onScrollToConfigurator: () => void;
}

export const LifestyleBenefitsPilot2: React.FC<LifestyleBenefitsPilot2Props> = ({
  onScrollToConfigurator,
}) => {
  return (
    <div>
      {/* BENEFIT SECTION 1: SOFT SAGE BACKGROUND (Priority 2 & 4: Alternating calm palette, confident editing) */}
      <section
        id="why-grow-at-home"
        style={{
          padding: 'clamp(4rem, 7vw, 6.5rem) 0',
          background: '#EEF4EE',
          borderBottom: '1px solid rgba(27, 67, 50, 0.08)',
        }}
      >
        <div className="container">
          {/* SECTION HEADER */}
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
            <span
              className="pilot2-badge"
              style={{
                marginBottom: '1rem',
                background: '#FFFFFF',
                border: '1px solid #D4E3D6',
                color: '#1B4332',
              }}
            >
              <Sprout size={13} color="#2D6A4F" />
              <span>CONFIDENT HOME HARVESTING</span>
            </span>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 800,
                color: '#142018',
                letterSpacing: '-0.03em',
                marginBottom: '1rem',
                lineHeight: 1.15,
              }}
            >
              Why Grow Food at Home?
            </h2>

            <p
              style={{
                fontSize: '1.1rem',
                color: '#495B50',
                lineHeight: 1.6,
              }}
            >
              Traditional vegetable gardening requires acreage, time, and weeding soil. FreshTier turns vertical space into your daily living produce section.
            </p>
          </div>

          {/* BENEFIT 1: PEAK FRESHNESS (Split Editorial Layout: Large Photo + Generous Whitespace) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2rem, 5vw, 4.5rem)',
              alignItems: 'center',
              marginBottom: '5.5rem',
            }}
          >
            {/* LARGE LIFESTYLE PHOTOGRAPH */}
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px -15px rgba(27, 67, 50, 0.15)',
                background: '#FFFFFF',
                border: '1px solid rgba(27, 67, 50, 0.08)',
                position: 'relative',
              }}
            >
              <img
                src="assets/harvest-macro.jpg"
                alt="Hand harvesting fresh basil and strawberries from vertical aeroponic cup"
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
                  bottom: '1rem',
                  left: '1rem',
                  background: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.45rem 0.9rem',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#1B4332',
                }}
              >
                🌿 2-Minute Plant-to-Plate Harvest
              </div>
            </div>

            {/* EDITORIAL CONTENT */}
            <div>
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  color: '#2D6A4F',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                01. LIVING NUTRITION
              </span>

              <h3
                style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.3rem)',
                  fontWeight: 800,
                  color: '#142018',
                  lineHeight: 1.2,
                  marginBottom: '0.75rem',
                }}
              >
                Peak Freshness in Minutes.
              </h3>

              <p
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: '#1B4332',
                  marginBottom: '1rem',
                }}
              >
                "Stop buying plastic bunches that turn slimy in the fridge."
              </p>

              <p
                style={{
                  fontSize: '1rem',
                  color: '#495B50',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem',
                }}
              >
                Supermarket herbs travel through commercial packing, cold freight, and distribution centers before sitting in plastic containers on store shelves. With FreshTier, your produce stays alive on the tower until the exact minute you snip it for lunch or dinner.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#27382F', fontSize: '0.95rem' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#D8F3DC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={14} color="#1B4332" />
                  </div>
                  <span>Snip only the few leaves of basil or mint you need for tonight's meal</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#27382F', fontSize: '0.95rem' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#D8F3DC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={14} color="#1B4332" />
                  </div>
                  <span>Zero single-use plastic packaging tubs or food waste</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#27382F', fontSize: '0.95rem' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#D8F3DC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={14} color="#1B4332" />
                  </div>
                  <span>Full volatile oils, rich natural aroma, and crisp cellular texture</span>
                </div>
              </div>
            </div>
          </div>

          {/* BENEFIT 2: SMALL BALCONY SPACES (Reversed Editorial Layout) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2rem, 5vw, 4.5rem)',
              alignItems: 'center',
            }}
          >
            {/* EDITORIAL CONTENT */}
            <div style={{ order: 1 }}>
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  color: '#2D6A4F',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                02. SPATIAL FREEDOM
              </span>

              <h3
                style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.3rem)',
                  fontWeight: 800,
                  color: '#142018',
                  lineHeight: 1.2,
                  marginBottom: '0.75rem',
                }}
              >
                A Full Garden in a 53 cm Base (60 × 60 cm Floor Space).
              </h3>

              <p
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: '#1B4332',
                  marginBottom: '1rem',
                }}
              >
                "Your apartment balcony, patio, or courtyard counts."
              </p>

              <p
                style={{
                  fontSize: '1rem',
                  color: '#495B50',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem',
                }}
              >
                You don't need a suburban quarter-acre backyard. By building vertically instead of horizontally, FreshTier houses between 20 and 44 high-density plant sites on a 53 cm base diameter (0.22 m²), needing only 60 × 60 cm of recommended clear floor space.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#27382F', fontSize: '0.95rem' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#D8F3DC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={14} color="#1B4332" />
                  </div>
                  <span>Clean soilless operation — no dirt under fingernails or muddy patio pavers</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#27382F', fontSize: '0.95rem' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#D8F3DC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={14} color="#1B4332" />
                  </div>
                  <span>Closed-loop 38L reservoir recirculates a top-down internal water cascade without runoff</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#27382F', fontSize: '0.95rem' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#D8F3DC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={14} color="#1B4332" />
                  </div>
                  <span>Upright ergonomic height (105 cm to 195 cm) eliminates painful bending and kneeling</span>
                </div>
              </div>
            </div>

            {/* LARGE LIFESTYLE PHOTOGRAPH */}
            <div
              style={{
                order: 2,
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px -15px rgba(27, 67, 50, 0.15)',
                background: '#FFFFFF',
                border: '1px solid rgba(27, 67, 50, 0.08)',
                position: 'relative',
              }}
            >
              <img
                src="assets/balcony-accurate.jpg"
                alt="FreshTier vertical growing tower on sunny Australian balcony timber deck"
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
                  bottom: '1rem',
                  left: '1rem',
                  background: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.45rem 0.9rem',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#1B4332',
                }}
              >
                ☀️ 53 cm Base • 60 × 60 cm Clear Floor Space
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFIT SECTION 2: WARM IVORY BACKGROUND (Priority 2 & 4: Family & Natural Education) */}
      <section
        style={{
          padding: 'clamp(4rem, 7vw, 6.5rem) 0',
          background: '#FAF9F5',
          borderBottom: '1px solid rgba(27, 67, 50, 0.08)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2rem, 5vw, 4.5rem)',
              alignItems: 'center',
            }}
          >
            {/* LARGE LIFESTYLE PHOTOGRAPH */}
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px -15px rgba(27, 67, 50, 0.12)',
                background: '#FFFFFF',
                border: '1px solid rgba(27, 67, 50, 0.08)',
                position: 'relative',
              }}
            >
              <img
                src="assets/family-kitchen.jpg"
                alt="Family and young children harvesting fresh strawberries and herbs from indoor tower"
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
                  bottom: '1rem',
                  left: '1rem',
                  background: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.45rem 0.9rem',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#1B4332',
                }}
              >
                🍓 Food-Contact Grade ABS Polymer
              </div>
            </div>

            {/* EDITORIAL CONTENT */}
            <div>
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  color: '#2D6A4F',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                03. FAMILY & SENSORY CONNECTION
              </span>

              <h3
                style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.3rem)',
                  fontWeight: 800,
                  color: '#142018',
                  lineHeight: 1.2,
                  marginBottom: '0.75rem',
                }}
              >
                Let Them See Where Food Comes From.
              </h3>

              <p
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: '#1B4332',
                  marginBottom: '1rem',
                }}
              >
                "Plant it. Watch it grow. Harvest it. Cook it. Eat it."
              </p>

              <p
                style={{
                  fontSize: '1rem',
                  color: '#495B50',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem',
                }}
              >
                In a world of cellophane wrapping and supermarket barcodes, vertical soilless growing gives kids an interactive, daily connection to natural biology. Children check the roots, see strawberries ripen in real time, and develop a genuine enthusiasm for eating fresh leafy greens.
              </p>

              {/* CLEAN PROGRESSION BADGE PILL (Replaces box cards) */}
              <div
                style={{
                  background: '#EEF4EE',
                  border: '1px solid #D4E3D6',
                  borderRadius: '12px',
                  padding: '0.85rem 1.25rem',
                  marginBottom: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#1B4332',
                }}
              >
                <span>SEED</span>
                <span style={{ color: '#2D6A4F' }}>→</span>
                <span>ROOTS</span>
                <span style={{ color: '#2D6A4F' }}>→</span>
                <span>WATER CASCADE</span>
                <span style={{ color: '#2D6A4F' }}>→</span>
                <span>GROWTH</span>
                <span style={{ color: '#2D6A4F' }}>→</span>
                <span style={{ color: '#1B4332' }}>HARVEST</span>
              </div>

              <button
                type="button"
                onClick={onScrollToConfigurator}
                className="pilot2-btn-primary"
              >
                <span>Choose Your Tower System</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
