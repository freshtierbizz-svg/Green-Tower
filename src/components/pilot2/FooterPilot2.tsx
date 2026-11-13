import React from 'react';
import { ActiveView } from '../../types/storefront';
import { ENABLE_B2B_SECTION } from '../../config/storefrontConfig';
import { Sprout, Phone, Mail, Clock, MapPin, ShieldCheck, Building2, ArrowRight } from 'lucide-react';

interface FooterPilot2Props {
  onSelectView: (view: ActiveView) => void;
  onOpenCommercialTrial: () => void;
  onScrollToConfigurator: () => void;
}

export const FooterPilot2: React.FC<FooterPilot2Props> = ({
  onSelectView,
  onOpenCommercialTrial,
  onScrollToConfigurator,
}) => {
  return (
    <footer
      style={{
        background: '#07120D',
        color: '#E2E8F0',
        padding: '5rem 0 3rem 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="container">
        {/* TOP CALLOUT BAR */}
        <div
          style={{
            background: 'linear-gradient(135deg, #132B1E 0%, #0B1B13 100%)',
            border: '1px solid rgba(52, 211, 153, 0.2)',
            borderRadius: '20px',
            padding: '2.5rem',
            marginBottom: '4.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <span
              style={{
                color: '#34D399',
                fontSize: '0.8rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                display: 'block',
                marginBottom: '0.35rem',
              }}
            >
              AUSTRALIAN HOME HARVESTING
            </span>
            <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
              Ready to grow fresh food on your balcony?
            </h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.95rem', maxWidth: '600px' }}>
              Choose between 5, 7, and 11-tier systems with free Victoria express delivery and 2-year Australian replacement warranty.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={onScrollToConfigurator}
              style={{
                background: '#34D399',
                color: '#07120D',
                padding: '0.95rem 1.75rem',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
              }}
            >
              <span>Build Your Tower</span>
              <ArrowRight size={16} />
            </button>

            {ENABLE_B2B_SECTION && (
              <button
                type="button"
                onClick={() => onSelectView('b2b')}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  padding: '0.95rem 1.5rem',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                }}
              >
                <Building2 size={15} color="#FBBF24" />
                <span>Commercial Venue Program</span>
              </button>
            )}
          </div>
        </div>

        {/* 4-COLUMN FOOTER NAVIGATION */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4rem',
          }}
        >
          {/* COL 1: BRAND SUMMARY */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: '#1B4332',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#34D399',
                }}
              >
                <Sprout size={20} />
              </div>
              <div>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', display: 'block', lineHeight: 1 }}>
                  FreshTier
                </span>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#34D399', letterSpacing: '0.12em' }}>
                  AUSTRALIA
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', color: '#9CA3AF', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Vertical home growing systems engineered for Australian balconies, courtyards, and homes. Soilless, mud-free, and living food grown closer.
            </p>

            <div style={{ fontSize: '0.8rem', color: '#D1D5DB' }}>
              Melbourne, Victoria (Australian Owned & Stocked)
            </div>
          </div>

          {/* COL 2: STOREFRONT NAVIGATION */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              Explore FreshTier
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              <a
                href="#b2c-configurator"
                onClick={(e) => {
                  e.preventDefault();
                  onScrollToConfigurator();
                }}
                style={{ color: '#D1D5DB', textDecoration: 'none' }}
              >
                Home Systems Configurator
              </a>
              <a
                href="#why-grow-at-home"
                style={{ color: '#D1D5DB', textDecoration: 'none' }}
              >
                Why Grow at Home?
              </a>
              <a
                href="#quality-and-trust"
                style={{ color: '#D1D5DB', textDecoration: 'none' }}
              >
                Quality Standards & Warranty
              </a>
              <button
                type="button"
                onClick={() => onSelectView('nursery')}
                style={{ textAlign: 'left', color: '#D1D5DB', background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontSize: '0.9rem' }}
              >
                Seedling Nursery Catalog
              </button>
              <button
                type="button"
                onClick={() => onSelectView('calculators')}
                style={{ textAlign: 'left', color: '#D1D5DB', background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontSize: '0.9rem' }}
              >
                Grocery Savings Calculator
              </button>
              <button
                type="button"
                onClick={() => onSelectView('faq')}
                style={{ textAlign: 'left', color: '#D1D5DB', background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontSize: '0.9rem' }}
              >
                Frequently Asked Questions
              </button>
            </div>
          </div>

          {/* COL 3: HOSPITALITY & COMMERCIAL (Separate Route) */}
          {ENABLE_B2B_SECTION && (
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FBBF24', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
                Commercial & Venues
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#9CA3AF', lineHeight: 1.6, marginBottom: '1rem' }}>
                Living cocktail herbs and microgreens for bars, restaurants, and hospitality groups.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
                <button
                  type="button"
                  onClick={() => onSelectView('b2b')}
                  style={{ textAlign: 'left', color: '#FBBF24', background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontWeight: 700 }}
                >
                  6-Week Hospitality Pilot ($49.99/wk) →
                </button>
                <button
                  type="button"
                  onClick={onOpenCommercialTrial}
                  style={{ textAlign: 'left', color: '#D1D5DB', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                >
                  Book a Venue Site Assessment
                </button>
              </div>
            </div>
          )}

          {/* COL 4: CONTACT & AUSTRALIAN PROOF */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              Direct Australian Support
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <a
                href="tel:0432777813"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#34D399', fontWeight: 700, textDecoration: 'none' }}
              >
                <Phone size={15} />
                <span>Phone: 0432 777 813</span>
              </a>

              <a
                href="mailto:hello@freshtier.com.au"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#D1D5DB', textDecoration: 'none' }}
              >
                <Mail size={15} color="#9CA3AF" />
                <span>hello@freshtier.com.au</span>
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9CA3AF' }}>
                <Clock size={15} />
                <span>Mon–Fri 9:00am–5:00pm AEST</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9CA3AF' }}>
                <MapPin size={15} />
                <span>Melbourne Warehouse Distribution</span>
              </div>
            </div>
          </div>
        </div>

        {/* COMPLIANCE & AUSTRALIAN CONSUMER LAW NOTICE (Priority 6) */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2rem',
            fontSize: '0.8rem',
            color: '#6B7280',
            lineHeight: 1.6,
          }}
        >
          <p style={{ marginBottom: '0.75rem' }}>
            <strong>Australian Consumer Law Notice:</strong> All FreshTier systems come with guarantees that cannot be excluded under the Australian Consumer Law (ACL). You are entitled to a replacement or refund for a major failure and compensation for any other reasonably foreseeable loss or damage. Covered by a 2-Year Australian Hardware Replacement Warranty.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span>© 2026 FreshTier Australia. All rights reserved. Australian Owned & Operated.</span>
            <span>
              Australian Business Number (ABN):{' '}
              <a
                href="https://abr.business.gov.au/ABN/View?abn=30783236188"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#9CA3AF', textDecoration: 'underline' }}
              >
                30 783 236 188
              </a>{' '}
              • Melbourne, Victoria
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
