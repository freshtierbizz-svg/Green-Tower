import React from 'react';
import { ActiveView } from '../../types/storefront';
import { HeroPilot2 } from './HeroPilot2';
import { LifestyleBenefitsPilot2 } from './LifestyleBenefitsPilot2';
import { ConfiguratorPilot2 } from './ConfiguratorPilot2';
import { TrustProofSectionPilot2 } from './TrustProofSectionPilot2';
import { TechnologySciencePilot2 } from './TechnologySciencePilot2';
import { B2C_ROICalculator } from '../B2C_ROICalculator';

interface Pilot2HomeProps {
  onSelectView: (view: ActiveView) => void;
  onOpenCommercialTrial: () => void;
}

export const Pilot2Home: React.FC<Pilot2HomeProps> = ({
  onSelectView,
  onOpenCommercialTrial,
}) => {
  const scrollToConfigurator = () => {
    const elem = document.getElementById('b2c-configurator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBenefits = () => {
    const elem = document.getElementById('why-grow-at-home');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTrust = () => {
    const elem = document.getElementById('quality-and-trust');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pilot2-theme" style={{ minHeight: '100vh' }}>
      {/* 1. WIDE BRIGHT LIFESTYLE HERO (Priority 1: Photography-first with person harvesting on balcony) */}
      <HeroPilot2
        onScrollToConfigurator={scrollToConfigurator}
        onScrollToBenefits={scrollToBenefits}
      />

      {/* 2. CONFIDENT BENEFIT STORY (Priority 2 & 4: Calm soft sage & warm ivory alternating, no card grids) */}
      <LifestyleBenefitsPilot2
        onScrollToConfigurator={scrollToConfigurator}
      />

      {/* 3. PRODUCT CONFIGURATOR & CLARIFIED SHOPPING PATH (Priority 3 & 5: Real photography, best-for guide, base vs kit plain English, always-visible summary) */}
      <ConfiguratorPilot2 />

      {/* 4. THE SCIENCE OF AEROPONICS (Priority 2: Deep forest green technology section) */}
      <TechnologySciencePilot2
        onScrollToConfigurator={scrollToConfigurator}
      />

      {/* 5. HOUSEHOLD SAVINGS & PAYBACK CALCULATOR ON HOMEPAGE */}
      <section style={{ padding: 'clamp(3.5rem, 6vw, 5.5rem) 0', background: '#EEF4EE', borderBottom: '1px solid rgba(27, 67, 50, 0.08)' }}>
        <div className="container">
          <B2C_ROICalculator />
        </div>
      </section>

      {/* 6. QUALITY PROOF & AUSTRALIAN TRUST (Priority 6: Dispatch, warranty, Melbourne phone, supported harvest timeframes, tempered claims) */}
      <TrustProofSectionPilot2 />
    </div>
  );
};
