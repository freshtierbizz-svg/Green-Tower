import React, { useState, useEffect } from 'react';
import { ActiveView } from './types/storefront';
import { ENABLE_B2B_SECTION } from './config/storefrontConfig';
import { Navbar } from './components/Navbar';
import { SplitMarketHero } from './components/SplitMarketHero';
import { B2CStorefront } from './components/B2CStorefront';
import { B2BStorefront } from './components/B2BStorefront';
import { SeedlingNursery } from './components/SeedlingNursery';
import { TechnologyExplainer } from './components/TechnologyExplainer';
import { B2C_ROICalculator } from './components/B2C_ROICalculator';
import { B2B_ROICalculator } from './components/B2B_ROICalculator';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StructuredData } from './components/StructuredData';
import { TrustBadges } from './components/TrustBadges';
import { B2BIntakeForm } from './components/B2BIntakeForm';
import { Week5AutomationModal } from './components/Week5AutomationModal';

// Pilot 2 Imports
import { PilotVersionSwitcher } from './components/pilot2/PilotVersionSwitcher';
import { NavbarPilot2 } from './components/pilot2/NavbarPilot2';
import { Pilot2Home } from './components/pilot2/Pilot2Home';
import { FooterPilot2 } from './components/pilot2/FooterPilot2';

export const App: React.FC = () => {
  // Check URL query parameter for pilot version (e.g., ?pilot=1 or ?pilot=2)
  const getInitialPilotVersion = (): 'pilot1' | 'pilot2' => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const pilotParam = params.get('pilot') || params.get('version');
      if (pilotParam === '1' || pilotParam === 'pilot1') return 'pilot1';
    }
    return 'pilot2'; // Pilot 2 is active by default
  };

  const [pilotVersion, setPilotVersion] = useState<'pilot1' | 'pilot2'>(getInitialPilotVersion);
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [isB2BFormOpen, setIsB2BFormOpen] = useState<boolean>(false);
  const [isWeek5PreviewOpen, setIsWeek5PreviewOpen] = useState<boolean>(false);
  const [calculatorTab, setCalculatorTab] = useState<'b2c' | 'b2b'>('b2c');

  const handleTogglePilotVersion = (version: 'pilot1' | 'pilot2') => {
    setPilotVersion(version);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('pilot', version === 'pilot1' ? '1' : '2');
      window.history.replaceState({}, '', url.toString());
    }
  };

  const handleSelectView = (view: ActiveView) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCommercialTrial = () => {
    setIsB2BFormOpen(true);
  };

  const scrollToPilot2Section = (elementId: string) => {
    if (activeView !== 'home') {
      setActiveView('home');
      setTimeout(() => {
        const elem = document.getElementById(elementId);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const elem = document.getElementById(elementId);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showDebugPilotSwitcher = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('debug') === 'pilot';

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: pilotVersion === 'pilot2' ? '#FAF9F5' : '#0b130e',
      }}
    >
      {/* Schema.org Product & Offer Structured Data */}
      <StructuredData />

      {/* VERSION SWITCHER: Hidden from public view; accessible via ?debug=pilot */}
      {showDebugPilotSwitcher && (
        <PilotVersionSwitcher
          currentVersion={pilotVersion}
          onToggleVersion={handleTogglePilotVersion}
        />
      )}

      {/* =========================================================================
          PILOT 2 NAVIGATION OR PILOT 1 NAVIGATION
          ========================================================================= */}
      {pilotVersion === 'pilot2' ? (
        <NavbarPilot2
          activeView={activeView}
          onSelectView={handleSelectView}
          onOpenCommercialTrial={handleOpenCommercialTrial}
          onScrollToConfigurator={() => scrollToPilot2Section('b2c-configurator')}
          onScrollToBenefits={() => scrollToPilot2Section('why-grow-at-home')}
          onScrollToTrust={() => scrollToPilot2Section('quality-and-trust')}
        />
      ) : (
        <Navbar
          activeView={activeView}
          onSelectView={handleSelectView}
          onOpenCommercialTrial={handleOpenCommercialTrial}
        />
      )}

      {/* =========================================================================
          MAIN VIEW ROUTER
          ========================================================================= */}
      <main style={{ flex: 1 }}>
        {/* PILOT 2 MASTER VIEW (When Pilot 2 is active and viewing Home or B2C) */}
        {pilotVersion === 'pilot2' && (activeView === 'home' || activeView === 'b2c') && (
          <Pilot2Home
            onSelectView={handleSelectView}
            onOpenCommercialTrial={handleOpenCommercialTrial}
          />
        )}

        {/* PILOT 1 HOMEPAGE VIEW (When Pilot 1 is active) */}
        {pilotVersion === 'pilot1' && activeView === 'home' && (
          <>
            <SplitMarketHero
              onSelectView={handleSelectView}
              onOpenCommercialTrial={handleOpenCommercialTrial}
            />
            <TrustBadges />

            {/* Quick Teaser Split */}
            <section style={{ padding: '4rem 0', background: 'radial-gradient(circle at 50% 0%, #162a1e 0%, #0b130e 100%)' }}>
              <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                <span className="badge-emerald" style={{ marginBottom: '1rem' }}>CHOOSE YOUR HARVEST JOURNEY</span>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
                  Vertical Aeroponics Engineered For Australian Spaces
                </h2>
                <p style={{ color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                  Select whether you are growing fresh food at home or building a living ingredient inventory for your commercial venue.
                </p>

                <div className={ENABLE_B2B_SECTION ? 'grid-2' : ''} style={{ gap: '2rem', maxWidth: ENABLE_B2B_SECTION ? undefined : '520px', margin: '0 auto' }}>
                  <div
                    onClick={() => handleSelectView('b2c')}
                    className="glass-panel"
                    style={{ padding: '2rem', textAlign: 'left', cursor: 'pointer', borderRadius: '16px' }}
                  >
                    <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '0.5rem' }}>FOR YOUR HOME</h3>
                    <p style={{ color: '#9CA3AF', fontSize: '0.95rem', marginBottom: '1rem' }}>
                      Compact 5, 7, and 11-tier towers for balconies, patios, and townhouses. Stop buying supermarket bunches that rot in your fridge.
                    </p>
                    <span style={{ color: '#34D399', fontWeight: 700, fontSize: '0.9rem' }}>Explore Home Systems →</span>
                  </div>

                  {ENABLE_B2B_SECTION && (
                    <div
                      onClick={() => handleSelectView('b2b')}
                      className="glass-panel"
                      style={{ padding: '2rem', textAlign: 'left', cursor: 'pointer', borderRadius: '16px', border: '1px solid rgba(251, 191, 36, 0.3)' }}
                    >
                      <h3 style={{ fontSize: '1.6rem', color: '#FBBF24', marginBottom: '0.5rem' }}>FOR YOUR BUSINESS</h3>
                      <p style={{ color: '#9CA3AF', fontSize: '0.95rem', marginBottom: '1rem' }}>
                        6-Week Hospitality Concierge Pilot ($49.99/wk). Living herbs and garnishes on-site with weekly technician support and plant swaps.
                      </p>
                      <span style={{ color: '#FBBF24', fontWeight: 700, fontSize: '0.9rem' }}>Explore Commercial Program →</span>
                    </div>
                  )}
                </div>
              </div>
            </section>

            <FAQ />
          </>
        )}

        {/* PILOT 1 B2C STOREFRONT VIEW */}
        {pilotVersion === 'pilot1' && activeView === 'b2c' && (
          <B2CStorefront onSelectView={handleSelectView} />
        )}

        {/* B2B COMMERCIAL STOREFRONT VIEW (Shared across both pilots via distinct route) */}
        {activeView === 'b2b' && (
          <B2BStorefront
            onOpenCommercialTrial={handleOpenCommercialTrial}
            onOpenWeek5Preview={() => setIsWeek5PreviewOpen(true)}
          />
        )}

        {/* SEEDLING NURSERY CATALOG VIEW */}
        {activeView === 'nursery' && (
          <SeedlingNursery />
        )}

        {/* HOW AEROPONICS WORKS VIEW */}
        {activeView === 'how-it-works' && (
          <>
            <TechnologyExplainer />
            <FAQ />
          </>
        )}

        {/* CALCULATORS VIEW */}
        {activeView === 'calculators' && (
          <section style={{ padding: '4rem 0', background: pilotVersion === 'pilot2' ? '#FAF9F5' : 'transparent' }}>
            <div className="container">
              <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
                <span className="pilot2-badge" style={{ marginBottom: '0.75rem', background: '#EEF4EE', color: '#1B4332' }}>
                  HOUSEHOLD SAVINGS MODEL
                </span>
                <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '0.5rem', color: pilotVersion === 'pilot2' ? '#142018' : '#FFFFFF' }}>
                  Household Grocery Savings Calculator
                </h1>
                <p style={{ color: pilotVersion === 'pilot2' ? '#495B50' : '#9CA3AF' }}>
                  Calculate your potential grocery payback and yearly produce savings by growing fresh herbs and greens at home.
                </p>

                {/* Calculator Tab Switcher (only shown if B2B is enabled) */}
                {ENABLE_B2B_SECTION && (
                  <div style={{ display: 'inline-flex', gap: '0.5rem', background: pilotVersion === 'pilot2' ? '#EEF4EE' : 'rgba(255,255,255,0.05)', padding: '0.35rem', borderRadius: '12px', marginTop: '1.5rem' }}>
                    <button
                      onClick={() => setCalculatorTab('b2c')}
                      style={{
                        padding: '0.65rem 1.5rem',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        border: 'none',
                        cursor: 'pointer',
                        background: calculatorTab === 'b2c' ? (pilotVersion === 'pilot2' ? '#1B4332' : '#34D399') : 'transparent',
                        color: calculatorTab === 'b2c' ? '#FFFFFF' : (pilotVersion === 'pilot2' ? '#37473E' : '#ffffff'),
                      }}
                    >
                      B2C Household Grocery Calculator
                    </button>
                    <button
                      onClick={() => setCalculatorTab('b2b')}
                      style={{
                        padding: '0.65rem 1.5rem',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        border: 'none',
                        cursor: 'pointer',
                        background: calculatorTab === 'b2b' ? '#FBBF24' : 'transparent',
                        color: calculatorTab === 'b2b' ? '#000000' : (pilotVersion === 'pilot2' ? '#37473E' : '#ffffff'),
                      }}
                    >
                      B2B Venue Garnish Calculator
                    </button>
                  </div>
                )}
              </div>

              {!ENABLE_B2B_SECTION || calculatorTab === 'b2c' ? <B2C_ROICalculator /> : <B2B_ROICalculator />}
            </div>
          </section>
        )}

        {/* FAQ VIEW */}
        {activeView === 'faq' && (
          <div style={{ background: pilotVersion === 'pilot2' ? '#FAF9F5' : 'transparent' }}>
            <FAQ />
          </div>
        )}
      </main>

      {/* Global Modals */}
      <B2BIntakeForm
        isOpen={isB2BFormOpen}
        onClose={() => setIsB2BFormOpen(false)}
      />

      <Week5AutomationModal
        isOpen={isWeek5PreviewOpen}
        onClose={() => setIsWeek5PreviewOpen(false)}
      />

      {/* =========================================================================
          PILOT 2 FOOTER OR PILOT 1 FOOTER
          ========================================================================= */}
      {pilotVersion === 'pilot2' ? (
        <FooterPilot2
          onSelectView={handleSelectView}
          onOpenCommercialTrial={handleOpenCommercialTrial}
          onScrollToConfigurator={() => scrollToPilot2Section('b2c-configurator')}
        />
      ) : (
        <Footer
          onSelectView={handleSelectView}
          onOpenCommercialTrial={handleOpenCommercialTrial}
        />
      )}
    </div>
  );
};

export default App;

