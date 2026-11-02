import React, { useState } from 'react';
import { ActiveView } from '../types/storefront';
import { Home, Building2, ArrowRight, Sparkles, CheckCircle2, Leaf, Eye } from 'lucide-react';

interface SplitMarketHeroProps {
  onSelectView: (view: ActiveView) => void;
  onOpenCommercialTrial: () => void;
}

export const SplitMarketHero: React.FC<SplitMarketHeroProps> = ({
  onSelectView,
  onOpenCommercialTrial,
}) => {
  const [activeGalleryImg, setActiveGalleryImg] = useState<string>('/assets/real-tower-studio.png');

  const galleryImages = [
    { src: '/assets/real-tower-studio.png', title: 'Real Product Studio View — 7-Tier Column & Sage Green Basin' },
    { src: '/assets/real-tower-hardware.png', title: 'Real Unplanted Hardware View — Funnel Ports & Circular Deck' },
    { src: '/assets/real-tower-close.jpg', title: 'Real Crop Harvest — Red Oakleaf & Butterhead Lettuce' },
    { src: '/assets/real-tower-farm.jpg', title: 'Real Commercial Greenhouse Harvest Production' },
    { src: '/assets/family-kitchen.jpg', title: 'Happy Family Kitchen Harvest' },
    { src: '/assets/complete-kit.jpg', title: 'Complete Starter Kit Inclusions' },
  ];

  return (
    <section style={{ position: 'relative', padding: '3rem 0 4rem 0', overflow: 'hidden' }}>
      {/* Subtle Background Glow Spheres */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '15%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        {/* Brand Headline Banner */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 2.5rem auto' }}>
          <div className="badge-emerald" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>Australian Vertical Aeroponics Platform</span>
          </div>

          <h1 style={{ fontSize: '2.85rem', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            FRESH FOOD, <span style={{ color: '#34D399', background: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>GROWN CLOSER.</span>
          </h1>

          <p style={{ fontSize: '1.2rem', color: '#9CA3AF', lineHeight: 1.6 }}>
            AeroHarvest brings compact, vertical, soilless growing into Australian homes, balconies, patios, cafes, cocktail bars, and restaurants.
          </p>
        </div>

        {/* Dual Split Market Gateway Cards */}
        <div className="grid-2" style={{ gap: '2rem', alignItems: 'stretch', marginBottom: '3rem' }}>
          {/* B2C CARD - FOR YOUR HOME */}
          <div className="glass-panel" style={{
            padding: '2.25rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            borderTop: '3px solid #34D399',
            borderRadius: '20px',
            background: "linear-gradient(180deg, rgba(23, 38, 28, 0.9) 0%, rgba(11, 19, 14, 0.95) 100%), url('/assets/balcony-accurate.jpg') center/cover no-repeat",
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span className="badge-emerald" style={{ background: 'rgba(52, 211, 153, 0.2)', borderColor: 'rgba(52, 211, 153, 0.4)' }}>
                  <Home size={14} />
                  FOR YOUR HOME
                </span>
                <span style={{ fontSize: '0.8rem', color: '#A7F3D0', fontWeight: 700 }}>0.22 m² Footprint</span>
              </div>

              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.5rem', color: '#ffffff' }}>
                Grow Up. <span style={{ color: '#34D399' }}>Not Out.</span>
              </h2>

              <p style={{ fontSize: '1.15rem', fontWeight: 700, color: '#A7F3D0', marginBottom: '1rem' }}>
                "Fresh food doesn't need a huge backyard."
              </p>

              <p style={{ fontSize: '0.975rem', color: '#D1D5DB', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Grow herbs, greens, microgreens, strawberries and other compact crops in just 0.22 m² of space. Harvest what you need, when you need it — from your balcony, patio, courtyard or backyard.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                  <CheckCircle2 size={16} color="#34D399" />
                  <span>Harvest from plant to plate in under 2 minutes</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                  <CheckCircle2 size={16} color="#34D399" />
                  <span>20 to 44 crop sites in a compact 60 × 60 cm tower</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                  <CheckCircle2 size={16} color="#34D399" />
                  <span>Stop buying plastic supermarket bunches that rot in the fridge</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                onClick={() => onSelectView('b2c')}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Explore Home Systems
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => onSelectView('how-it-works')}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem', padding: '0.75rem 1.25rem' }}
              >
                See How It Works
              </button>
            </div>
          </div>

          {/* B2B CARD - FOR YOUR BUSINESS */}
          <div className="glass-panel" style={{
            padding: '2.25rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            borderTop: '3px solid #FBBF24',
            borderRadius: '20px',
            background: "linear-gradient(180deg, rgba(30, 41, 59, 0.92) 0%, rgba(15, 23, 42, 0.95) 100%), url('/assets/real-tower-farm.jpg') center/cover no-repeat",
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span className="badge-emerald" style={{ background: 'rgba(251, 191, 36, 0.2)', borderColor: 'rgba(251, 191, 36, 0.5)', color: '#FBBF24' }}>
                  <Building2 size={14} />
                  FOR YOUR BUSINESS
                </span>
                <span style={{ fontSize: '0.8rem', color: '#FBBF24', fontWeight: 700 }}>Hospitality Concierge</span>
              </div>

              <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem', color: '#ffffff', lineHeight: 1.2 }}>
                Your garnish shouldn't arrive in a <span style={{ color: '#FBBF24' }}>plastic box.</span>
              </h2>

              <p style={{ fontSize: '0.975rem', color: '#D1D5DB', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Grow living herbs, microgreens and edible flowers directly in your venue and harvest them when your kitchen or bar actually needs them. Zero wilt, zero waste, pure visual theater for guests.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                  <CheckCircle2 size={16} color="#FBBF24" />
                  <span><strong>6-Week Hospitality Pilot:</strong> $49.99/wk with full concierge support</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                  <CheckCircle2 size={16} color="#FBBF24" />
                  <span>Weekly technician plant swaps & water balance maintenance</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                  <CheckCircle2 size={16} color="#FBBF24" />
                  <span>Complete pilot & unlock $799 Pilot Graduate Ownership (Save $300)</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                onClick={onOpenCommercialTrial}
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                  boxShadow: '0 4px 20px rgba(245, 158, 11, 0.35)',
                }}
              >
                Start a 6-Week Hospitality Pilot
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => onSelectView('b2b')}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem', padding: '0.75rem 1.25rem' }}
              >
                See The Commercial Program
              </button>
            </div>
          </div>
        </div>

        {/* AUTHENTIC PRODUCT GALLERY SHOWCASE */}
        <div className="glass-panel" style={{ padding: '2rem', borderRadius: '20px', border: '1px solid rgba(52, 211, 153, 0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="badge-emerald" style={{ marginBottom: '0.35rem' }}>AUTHENTIC PRODUCT PHOTOGRAPHY</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff' }}>Real AeroHarvest Hardware & Harvest Views</h3>
            </div>
            <span style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>Click thumbnails to inspect hardware details</span>
          </div>

          <div className="grid-2" style={{ gap: '2rem', alignItems: 'center' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.15)', background: '#070d09' }}>
              <img
                src={activeGalleryImg}
                alt="AeroHarvest Tower View"
                style={{ width: '100%', height: '360px', objectFit: 'cover' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.85rem' }}>
              {galleryImages.map((img) => (
                <div
                  key={img.src}
                  onClick={() => setActiveGalleryImg(img.src)}
                  style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: activeGalleryImg === img.src ? '2px solid #34D399' : '1px solid rgba(255,255,255,0.1)',
                    opacity: activeGalleryImg === img.src ? 1 : 0.7,
                    transition: 'all 0.2s ease',
                    height: '110px'
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Proof Trust Strip */}
        <div style={{
          marginTop: '3.5rem',
          padding: '1.25rem 2rem',
          borderRadius: '14px',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '1.5rem',
          textAlign: 'center'
        }}>
          <div>
            <span style={{ display: 'block', fontSize: '1.35rem', fontWeight: 800, color: '#34D399' }}>0.22 m²</span>
            <span style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>Ultra-Compact Footprint</span>
          </div>
          <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.1)' }} />
          <div>
            <span style={{ display: 'block', fontSize: '1.35rem', fontWeight: 800, color: '#34D399' }}>20–44</span>
            <span style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>Active Crop Sites</span>
          </div>
          <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.1)' }} />
          <div>
            <span style={{ display: 'block', fontSize: '1.35rem', fontWeight: 800, color: '#34D399' }}>Zero</span>
            <span style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>Food Miles to Plate</span>
          </div>
          <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.1)' }} />
          <div>
            <span style={{ display: 'block', fontSize: '1.35rem', fontWeight: 800, color: '#34D399' }}>2-Year</span>
            <span style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>Australian Warranty</span>
          </div>
        </div>
      </div>
    </section>
  );
};
