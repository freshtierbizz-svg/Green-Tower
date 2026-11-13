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
  const reviews = [
    {
      id: 1,
      author: 'Sarah M.',
      location: 'South Yarra, VIC',
      tower: '7-Section Standard (28 Sites)',
      quote:
        'Living in an apartment with a 2-metre balcony, I assumed fresh gardening was out of the question. The 7-tier tower fits perfectly in the corner. We snip butterhead lettuce and mint for lunch almost every day now.',
      verified: 'Verified Home Grower',
      date: 'October 2026',
    },
    {
      id: 2,
      author: 'David & Chloe T.',
      location: 'Richmond, VIC',
      tower: '11-Section Family Powerhouse',
      quote:
        'The unboxing and setup took about 25 minutes. Our two primary school kids treat checking the roots and strawberries like their morning ritual. Having living greens ready to pick without soil mess is fantastic.',
      verified: 'Verified Home Grower',
      date: 'September 2026',
    },
    {
      id: 3,
      author: 'Marcus B.',
      location: 'Fitzroy, VIC',
      tower: '5-Section Compact + LED Lights',
      quote:
        'Super quiet pump, draws hardly any power, and the Melbourne customer service team answered my pH balance question over the phone right away. Genuine peace of mind.',
      verified: 'Verified Home Grower',
      date: 'October 2026',
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
              ✓ Free Victoria Metro Delivery Included
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
              Melbourne Phone & Video
            </h3>

            <p style={{ fontSize: '0.9rem', color: '#495B50', lineHeight: 1.6, flex: 1, marginBottom: '1rem' }}>
              Direct access to our local Australian growing team. Call us on <strong>0432 777 813</strong> (Mon–Fri 9am–5pm AEST) or book a complimentary 15-minute 1-on-1 video onboarding call.
            </p>

            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1B4332' }}>
              ✓ Local Phone & Video Onboarding
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

        {/* VERIFIED CUSTOMER EXPERIENCES (Priority 6) */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginBottom: '0.5rem' }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={18} fill="#D97706" color="#D97706" />
              ))}
            </div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#142018' }}>
              Real Australian Home Harvests
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#6B7C72' }}>
              Verified feedback from Australian townhouse, apartment, and courtyard growers.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {reviews.map((r) => (
              <div
                key={r.id}
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
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={14} fill="#D97706" color="#D97706" />
                      ))}
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#6B7C72' }}>{r.date}</span>
                  </div>

                  <p style={{ fontSize: '0.925rem', color: '#37473E', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                    "{r.quote}"
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(27, 67, 50, 0.08)', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: 800, color: '#142018', fontSize: '0.95rem' }}>
                    {r.author}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#2D6A4F', fontWeight: 600 }}>
                    {r.location} • {r.tower}
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
