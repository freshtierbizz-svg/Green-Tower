import React, { useState } from 'react';
import { ActiveView } from '../../types/storefront';
import { ENABLE_B2B_SECTION } from '../../config/storefrontConfig';
import { Sprout, Menu, X, ArrowRight, ShieldCheck, Truck, MapPin, Building2, Mail } from 'lucide-react';

interface NavbarPilot2Props {
  activeView: ActiveView;
  onSelectView: (view: ActiveView) => void;
  onOpenCommercialTrial: () => void;
  onScrollToConfigurator: () => void;
  onScrollToBenefits: () => void;
  onScrollToTrust: () => void;
}

export const NavbarPilot2: React.FC<NavbarPilot2Props> = ({
  activeView,
  onSelectView,
  onOpenCommercialTrial,
  onScrollToConfigurator,
  onScrollToBenefits,
  onScrollToTrust,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      {/* SIMPLIFIED, UNCLUTTERED TOP ANNOUNCEMENT STRIP (Priority 6) */}
      <div
        style={{
          background: '#0B1B13',
          color: '#E2E8F0',
          padding: '0.45rem 1rem',
          fontSize: '0.8rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#A7F3D0', fontWeight: 600 }}>
              <Truck size={13} color="#34D399" />
              Free Melbourne Metro Delivery (24–48h Dispatch)
            </span>
            <span className="announcement-secondary-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#D1D5DB' }}>
              <ShieldCheck size={13} color="#34D399" />
              2-Year Australian Replacement Warranty
            </span>
            <span className="announcement-secondary-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#D1D5DB' }}>
              <MapPin size={13} color="#34D399" />
              Melbourne Owned & Stocked
            </span>
          </div>

          <div className="announcement-secondary-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="mailto:hello@freshtier.com.au"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: '#A7F3D0',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <Mail size={12} color="#34D399" />
              <span>hello@freshtier.com.au</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION BAR (Priority 7: Home-Shopper First, Clearly Separated Commercial Route) */}
      <nav
        style={{
          background: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(27, 67, 50, 0.08)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '74px',
          }}
        >
          {/* BRAND LOGO */}
          <div
            onClick={() => onSelectView('home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 4px 10px rgba(27, 67, 50, 0.25)',
              }}
            >
              <Sprout size={22} />
            </div>
            <div>
              <span
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: '#142018',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  display: 'block',
                }}
              >
                FreshTier
              </span>
              <span
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: '#2D6A4F',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                AUSTRALIA
              </span>
            </div>
          </div>

          {/* DESKTOP NAV LINKS */}
          <div className="desktop-nav-links">
            <button
              type="button"
              onClick={onScrollToConfigurator}
              style={{
                fontSize: '0.925rem',
                fontWeight: 600,
                color: '#142018',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#2D6A4F')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#142018')}
            >
              Home Systems
            </button>

            <button
              type="button"
              onClick={onScrollToBenefits}
              style={{
                fontSize: '0.925rem',
                fontWeight: 600,
                color: '#495B50',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#2D6A4F')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#495B50')}
            >
              Why Grow at Home
            </button>

            <button
              type="button"
              onClick={onScrollToTrust}
              style={{
                fontSize: '0.925rem',
                fontWeight: 600,
                color: '#495B50',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#2D6A4F')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#495B50')}
            >
              Quality & Proof
            </button>

            <button
              type="button"
              onClick={() => onSelectView('nursery')}
              style={{
                fontSize: '0.925rem',
                fontWeight: 600,
                color: activeView === 'nursery' ? '#2D6A4F' : '#495B50',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#2D6A4F')}
              onMouseLeave={(e) => (e.currentTarget.style.color = activeView === 'nursery' ? '#2D6A4F' : '#495B50')}
            >
              Seedling Nursery
            </button>

            <button
              type="button"
              onClick={() => onSelectView('calculators')}
              style={{
                fontSize: '0.925rem',
                fontWeight: 600,
                color: activeView === 'calculators' ? '#2D6A4F' : '#495B50',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#2D6A4F')}
              onMouseLeave={(e) => (e.currentTarget.style.color = activeView === 'calculators' ? '#2D6A4F' : '#495B50')}
            >
              Savings Calculator
            </button>

            {/* SEPARATE, CLEARLY LABELLED COMMERCIAL ROUTE (Priority 7) */}
            {ENABLE_B2B_SECTION && (
              <>
                <div style={{ height: '24px', width: '1px', background: 'rgba(27, 67, 50, 0.15)', margin: '0 0.25rem' }} />

                <button
                  type="button"
                  onClick={() => onSelectView('b2b')}
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: activeView === 'b2b' ? '#1B4332' : '#55655C',
                    background: 'rgba(27, 67, 50, 0.05)',
                    border: '1px solid rgba(27, 67, 50, 0.12)',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(27, 67, 50, 0.1)';
                    e.currentTarget.style.color = '#1B4332';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(27, 67, 50, 0.05)';
                    e.currentTarget.style.color = activeView === 'b2b' ? '#1B4332' : '#55655C';
                  }}
                >
                  <Building2 size={13} color="#2D6A4F" />
                  <span>Hospitality & Commercial</span>
                </button>
              </>
            )}
          </div>

          {/* PRIMARY CALL TO ACTION: HOME CONSUMER FOCUSED (Priority 7) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            <button
              type="button"
              onClick={onScrollToConfigurator}
              className="pilot2-btn-primary navbar-cta-btn"
              style={{
                padding: '0.65rem 1.15rem',
                fontSize: '0.88rem',
                whiteSpace: 'nowrap',
              }}
            >
              <span>Choose Tower</span>
              <ArrowRight size={14} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: '#EEF4EE',
                border: '1px solid #D4E3D6',
                borderRadius: '8px',
                cursor: 'pointer',
                padding: '0.45rem',
                color: '#142018',
              }}
              className="mobile-hamburger-btn"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              background: '#FFFFFF',
              borderTop: '1px solid rgba(27, 67, 50, 0.1)',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <button
              type="button"
              onClick={() => {
                onScrollToConfigurator();
                setMobileMenuOpen(false);
              }}
              style={{ textAlign: 'left', fontSize: '1rem', fontWeight: 600, color: '#142018', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Home Systems Configurator
            </button>
            <button
              type="button"
              onClick={() => {
                onScrollToBenefits();
                setMobileMenuOpen(false);
              }}
              style={{ textAlign: 'left', fontSize: '1rem', fontWeight: 600, color: '#495B50', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Why Grow at Home
            </button>
            <button
              type="button"
              onClick={() => {
                onScrollToTrust();
                setMobileMenuOpen(false);
              }}
              style={{ textAlign: 'left', fontSize: '1rem', fontWeight: 600, color: '#495B50', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Quality & Proof
            </button>
            <button
              type="button"
              onClick={() => {
                onSelectView('nursery');
                setMobileMenuOpen(false);
              }}
              style={{ textAlign: 'left', fontSize: '1rem', fontWeight: 600, color: '#495B50', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Seedling Nursery
            </button>
            <button
              type="button"
              onClick={() => {
                onSelectView('calculators');
                setMobileMenuOpen(false);
              }}
              style={{ textAlign: 'left', fontSize: '1rem', fontWeight: 600, color: '#495B50', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Savings Calculator
            </button>
            {ENABLE_B2B_SECTION && (
              <>
                <div style={{ height: '1px', background: 'rgba(27, 67, 50, 0.1)', margin: '0.25rem 0' }} />
                <button
                  type="button"
                  onClick={() => {
                    onSelectView('b2b');
                    setMobileMenuOpen(false);
                  }}
                  style={{
                    textAlign: 'left',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: '#1B4332',
                    background: 'rgba(27, 67, 50, 0.05)',
                    border: '1px solid rgba(27, 67, 50, 0.12)',
                    padding: '0.6rem 0.85rem',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <Building2 size={15} color="#2D6A4F" />
                  <span>Hospitality & Commercial Portal</span>
                </button>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};
