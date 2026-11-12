import React, { useState } from 'react';
import { ActiveView } from '../types/storefront';
import { STORE_META, ENABLE_B2B_SECTION } from '../config/storefrontConfig';
import { Leaf, Menu, X, User, ArrowRight, Building2, Home } from 'lucide-react';

interface NavbarProps {
  activeView: ActiveView;
  onSelectView: (view: ActiveView) => void;
  onOpenCommercialTrial: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onSelectView,
  onOpenCommercialTrial,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: ActiveView) => {
    onSelectView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top E-Commerce Announcement Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #064E3B 0%, #047857 50%, #065F46 100%)',
        color: '#ECFDF5',
        fontSize: '0.8rem',
        fontWeight: 600,
        padding: '0.45rem 1rem',
        textAlign: 'center',
        borderBottom: '1px solid rgba(16, 185, 129, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        letterSpacing: '0.02em'
      }}>
        <span>🚀 <strong>Fresh Food Grown Closer:</strong> Free Victoria Metro Shipping</span>
        <span style={{ opacity: 0.6, display: 'none' }}>•</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
          🛡️ 2-Year AU Warranty & ACL Guarantee
        </span>
        <span style={{ opacity: 0.6 }}>•</span>
        <span>🇦🇺 <strong>{STORE_META.warehouseLocation}</strong></span>
      </div>

      <header className="glass-nav">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1.5rem' }}>
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', textAlign: 'left', border: 'none', background: 'none' }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)'
            }}>
              <Leaf size={22} color="#ffffff" />
            </div>
            <div>
              <span style={{ fontSize: '1.35rem', fontWeight: '800', letterSpacing: '-0.03em', color: '#ffffff' }}>
                Aero<span style={{ color: '#34D399' }}>Harvest</span>
              </span>
              <span style={{ display: 'block', fontSize: '0.625rem', color: '#9CA3AF', letterSpacing: '0.14em', marginTop: '-3px', fontWeight: 700 }}>
                {STORE_META.countryTag}
              </span>
            </div>
          </button>

          {/* Desktop Primary Navigation Links */}
          <nav className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button
              onClick={() => handleNavClick('b2c')}
              style={{
                fontSize: '0.9rem',
                fontWeight: activeView === 'b2c' ? '700' : '500',
                color: activeView === 'b2c' ? '#34D399' : '#E2E8F0',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.65rem',
                borderRadius: '6px',
                background: activeView === 'b2c' ? 'rgba(52, 211, 153, 0.12)' : 'transparent',
                border: activeView === 'b2c' ? '1px solid rgba(52, 211, 153, 0.3)' : '1px solid transparent',
                transition: 'all 0.2s',
              }}
            >
              <Home size={14} color={activeView === 'b2c' ? '#34D399' : '#9CA3AF'} />
              For Your Home
            </button>

            {ENABLE_B2B_SECTION && (
              <button
                onClick={() => handleNavClick('b2b')}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: activeView === 'b2b' ? '700' : '500',
                  color: activeView === 'b2b' ? '#34D399' : '#E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.65rem',
                  borderRadius: '6px',
                  background: activeView === 'b2b' ? 'rgba(52, 211, 153, 0.12)' : 'transparent',
                  border: activeView === 'b2b' ? '1px solid rgba(52, 211, 153, 0.3)' : '1px solid transparent',
                  transition: 'all 0.2s',
                }}
              >
                <Building2 size={14} color={activeView === 'b2b' ? '#34D399' : '#9CA3AF'} />
                For Your Business
              </button>
            )}

            <button
              onClick={() => handleNavClick('how-it-works')}
              style={{
                fontSize: '0.9rem',
                fontWeight: activeView === 'how-it-works' ? '700' : '500',
                color: activeView === 'how-it-works' ? '#34D399' : '#E2E8F0',
                transition: 'color 0.2s',
              }}
            >
              How Aeroponics Works
            </button>

            <button
              onClick={() => handleNavClick('nursery')}
              style={{
                fontSize: '0.9rem',
                fontWeight: activeView === 'nursery' ? '700' : '500',
                color: activeView === 'nursery' ? '#34D399' : '#E2E8F0',
                transition: 'color 0.2s',
              }}
            >
              Seedling Nursery
            </button>

            <button
              onClick={() => handleNavClick('calculators')}
              style={{
                fontSize: '0.9rem',
                fontWeight: activeView === 'calculators' ? '700' : '500',
                color: activeView === 'calculators' ? '#34D399' : '#E2E8F0',
                transition: 'color 0.2s',
              }}
            >
              Savings Calculator
            </button>

            <button
              onClick={() => handleNavClick('faq')}
              style={{
                fontSize: '0.9rem',
                fontWeight: activeView === 'faq' ? '700' : '500',
                color: activeView === 'faq' ? '#34D399' : '#E2E8F0',
                transition: 'color 0.2s',
              }}
            >
              FAQ
            </button>
          </nav>

          {/* Desktop Right Header Action CTA */}
          <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => (ENABLE_B2B_SECTION ? onOpenCommercialTrial() : handleNavClick('b2c'))}
              className="btn-primary"
              style={{ padding: '0.55rem 1.15rem', fontSize: '0.875rem' }}
            >
              {ENABLE_B2B_SECTION ? 'Book a Commercial Trial' : 'Build Your Tower'}
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            className="mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              color: '#ffffff',
              padding: '0.5rem',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{
            background: '#0b130e',
            borderBottom: '1px solid rgba(16, 185, 129, 0.2)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <button
              onClick={() => handleNavClick('b2c')}
              style={{
                textAlign: 'left',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                background: activeView === 'b2c' ? 'rgba(52, 211, 153, 0.15)' : 'rgba(255,255,255,0.03)',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Home size={18} color="#34D399" />
                For Your Home (B2C)
              </span>
              <ArrowRight size={16} color="#9CA3AF" />
            </button>

            {ENABLE_B2B_SECTION && (
              <button
                onClick={() => handleNavClick('b2b')}
                style={{
                  textAlign: 'left',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  background: activeView === 'b2b' ? 'rgba(52, 211, 153, 0.15)' : 'rgba(255,255,255,0.03)',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Building2 size={18} color="#34D399" />
                  For Your Business (B2B)
                </span>
                <ArrowRight size={16} color="#9CA3AF" />
              </button>
            )}

            <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.1)', margin: '0.25rem 0' }} />

            <button onClick={() => handleNavClick('how-it-works')} style={{ textAlign: 'left', padding: '0.5rem 0', color: '#D1D5DB', fontSize: '0.95rem' }}>
              How Aeroponics Works
            </button>
            <button onClick={() => handleNavClick('nursery')} style={{ textAlign: 'left', padding: '0.5rem 0', color: '#D1D5DB', fontSize: '0.95rem' }}>
              Seedling Nursery
            </button>
            <button onClick={() => handleNavClick('calculators')} style={{ textAlign: 'left', padding: '0.5rem 0', color: '#D1D5DB', fontSize: '0.95rem' }}>
              Savings Calculator
            </button>
            <button onClick={() => handleNavClick('faq')} style={{ textAlign: 'left', padding: '0.5rem 0', color: '#D1D5DB', fontSize: '0.95rem' }}>
              FAQ & ACL Warranty
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (ENABLE_B2B_SECTION) onOpenCommercialTrial();
                else handleNavClick('b2c');
              }}
              className="btn-primary"
              style={{ width: '100%', marginTop: '0.5rem', justifyContent: 'center' }}
            >
              {ENABLE_B2B_SECTION ? 'Book a Commercial Trial' : 'Build Your Tower'}
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </header>

      {/* Style overrides for responsive media queries */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-only { display: none !important; }
        }
        @media (min-width: 1025px) {
          .mobile-only { display: none !important; }
        }
      `}</style>
    </>
  );
};
