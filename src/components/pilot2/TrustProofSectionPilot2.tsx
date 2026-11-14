import React from 'react';
import {
  ShieldCheck,
  Truck,
  PhoneCall,
  CheckCircle2,
  Clock,
  Sparkles,
  MapPin,
  Star,
  FileCheck2,
  HelpCircle
} from 'lucide-react';

export const TrustProofSectionPilot2: React.FC = () => {
  const growStages = [
    {
      id: 1,
      stage: 'Weeks 1–2: Seed Germination or Seedling Transfer',
      cropExample: 'Included in Complete Kit: 50× Coco Plugs & Humidity Dome',
      detail:
        'Sow your own seeds into the moistened coco-coir starter plugs inside the propagation dome (germinates in 5–10 days), or insert pre-rooted starter seedlings directly into the net cups.',
      timeframe: 'Days 1–14',
    },
    {
      id: 2,
      stage: 'Weeks 2–4: Root Suspension & Water Cascade',
      cropExample: '38L Reservoir + 1L A+B Liquid Nutrients',
      detail:
        'Transfer rooted plugs into the tower ports. The timed 15W DC pump lifts nutrient solution to the top cap so water cascades down the internal column over bare roots.',
      timeframe: 'First pick: Wk 2–3 (from seedlings)',
    },
    {
      id: 3,
      stage: 'Weeks 4–8+: Continuous Cut-and-Come-Again Harvest',
      cropExample: 'Lettuce, Basil, Mint, Bok Choy & Compact Greens',
      detail:
        'Snip outer leaves as needed while the central crown keeps growing. Our Aug–Oct 2026 7-section trial harvested ~3.4 kg of greens & herbs over 8 weeks at ~A$24 total running cost.',
      timeframe: 'First pick: Wk 4–6 (from seed)',
    },
  ];

  return (
    <section
      id="quality-and-trust"
      style={{
        padding: 'clamp(4rem, 7vw, 6.5rem) 0',
        background: '#FAF9F5',
        borderBottom: '1px solid rgba(27, 67, 50, 0.08)',
      }}
    >
      <div className="container">
        {/* SECTION HEADER (Priority 6: Strengthen Trust with Specific Proof) */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <span
            className="pilot2-badge"
            style={{ marginBottom: '1rem', background: '#EEF4EE', border: '1px solid #D4E3D6' }}
          >
            <ShieldCheck size={13} color="#2D6A4F" />
            <span>TRANSPARENCY & GUARANTEES</span>
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
            Australian Standards & Proof of Quality
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#495B50', lineHeight: 1.6 }}>
            We believe premium home products must be backed by verifiable standards, local Australian inventory, and accessible direct human support.
          </p>
        </div>

        {/* 4 CONCRETE SPECIFIC PROOF PILLARS (Priority 6: Concrete Proof Over Vague Claims) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4.5rem',
          }}
        >
          {/* 1. DISPATCH ESTIMATES */}
          <div
            className="pilot2-card"
            style={{ padding: '2rem 1.75rem', display: 'flex', flexDirection: 'column' }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: '#EEF4EE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1B4332',
                marginBottom: '1.25rem',
              }}
            >
              <Truck size={24} />
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#142018', marginBottom: '0.5rem' }}>
              24–48h Express Dispatch
            </h3>

            <p style={{ fontSize: '0.9rem', color: '#495B50', lineHeight: 1.6, flex: 1, marginBottom: '1rem' }}>
              All orders are held in physical inventory in our Melbourne warehouse. Every system is packed and dispatched within 24 to 48 hours via insured express road courier with real-time tracking.
            </p>

            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1B4332' }}>
              ✓ Free Melbourne Metro Delivery Included
            </div>
          </div>

          {/* 2. 2-YEAR WARRANTY */}
          <div
            className="pilot2-card"
            style={{ padding: '2rem 1.75rem', display: 'flex', flexDirection: 'column' }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: '#EEF4EE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1B4332',
                marginBottom: '1.25rem',
              }}
            >
              <FileCheck2 size={24} />
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#142018', marginBottom: '0.5rem' }}>
              2-Year Australian Warranty
            </h3>

            <p style={{ fontSize: '0.9rem', color: '#495B50', lineHeight: 1.6, flex: 1, marginBottom: '1rem' }}>
              Full replacement coverage on the 38L reservoir tub, low-voltage DC pump, digital timer, and modular sections. Backed by statutory guarantees under Australian Consumer Law (ACL).
            </p>

            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1B4332' }}>
              ✓ Hassle-Free Part Replacement
            </div>
          </div>

          {/* 3. DIRECT LOCAL SUPPORT */}
          <div
            className="pilot2-card"
            style={{ padding: '2rem 1.75rem', display: 'flex', flexDirection: 'column' }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: '#EEF4EE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1B4332',
                marginBottom: '1.25rem',
              }}
            >
              <PhoneCall size={24} />
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#142018', marginBottom: '0.5rem' }}>
              Melbourne Local Support
            </h3>

            <p style={{ fontSize: '0.9rem', color: '#495B50', lineHeight: 1.6, flex: 1, marginBottom: '1rem' }}>
              Direct access to our local Australian growing team at <strong>hello@freshtier.com.au</strong> (Mon–Fri 9am–5pm AEST) or book a complimentary 15-minute 1-on-1 video onboarding session.
            </p>

            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1B4332' }}>
              ✓ Local Support & Video Onboarding
            </div>
          </div>

          {/* 4. CERTIFIED MATERIALS (Carefully Phrased Claim) */}
          <div
            className="pilot2-card"
            style={{ padding: '2rem 1.75rem', display: 'flex', flexDirection: 'column' }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: '#EEF4EE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1B4332',
                marginBottom: '1.25rem',
              }}
            >
              <ShieldCheck size={24} />
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#142018', marginBottom: '0.5rem' }}>
              Food-Contact ABS Polymer
            </h3>

            <p style={{ fontSize: '0.9rem', color: '#495B50', lineHeight: 1.6, flex: 1, marginBottom: '1rem' }}>
              Moulded from supplier-specified food-contact grade ABS polymer for indoor and sheltered balcony growing, paired with a low-voltage DC circulation pump (~12–15W).
            </p>

            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1B4332' }}>
              ✓ Food-Contact ABS & Low-Voltage DC Pump
            </div>
          </div>
        </div>

        {/* SUPPORTED HARVEST TIMEFRAMES & GROW PROGRESSION */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#142018', marginBottom: '0.35rem' }}>
              Supported Harvest Timeframe: Seed to Plate
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#6B7C72', maxWidth: '640px', margin: '0 auto' }}>
              What comes in the box, what you add (your choice of seeds or nursery seedlings), and realistic harvest milestones.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {growStages.map((item) => (
              <div
                key={item.id}
                className="pilot2-card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: '#FFFFFF',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: '#1B4332',
                        background: '#EEF4EE',
                        padding: '3px 9px',
                        borderRadius: '6px',
                      }}
                    >
                      {item.timeframe}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#142018', marginBottom: '0.5rem' }}>
                    {item.stage}
                  </h4>

                  <p style={{ fontSize: '0.9rem', color: '#37473E', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {item.detail}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(27, 67, 50, 0.08)', paddingTop: '0.85rem' }}>
                  <div style={{ fontSize: '0.8rem', color: '#2D6A4F', fontWeight: 700 }}>
                    {item.cropExample}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
