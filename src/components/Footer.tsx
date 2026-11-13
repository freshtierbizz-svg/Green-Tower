import React from 'react';
import { ActiveView } from '../types/storefront';
import { STORE_META, COMPLIANCE_STATEMENT, ENABLE_B2B_SECTION } from '../config/storefrontConfig';
import { Leaf, Shield, Lock, ArrowRight, Building2, Home } from 'lucide-react';

interface FooterProps {
  onSelectView?: (view: ActiveView) => void;
  onOpenCommercialTrial?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectView, onOpenCommercialTrial }) => {
  const handleNav = (view: ActiveView) => {
    if (onSelectView) {
      onSelectView(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ background: 'radial-gradient(circle at 50% 0%, #0d1a13 0%, #070c09 70%, #040705 100%)', borderTop: '1px solid rgba(34, 197, 94, 0.15)', paddingTop: '4rem', paddingBottom: '3rem' }}>
      <div className="container">
        
        {/* DUAL MARKET CONVERSION BANNER */}
        <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '3.5rem', borderRadius: '20px' }}>
          <div className="grid-2" style={{ alignItems: 'center', gap: '2rem' }}>
            <div>
              <span className="badge-emerald" style={{ marginBottom: '0.75rem' }}>
                FRESH FOOD GROWN CLOSER
              </span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '0.75rem', color: '#ffffff' }}>
                Ready to transform how you grow food?
              </h2>
              <p style={{ color: '#9CA3AF', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Whether you need a compact balcony tower for home or a full concierge pilot for your venue, AeroHarvest brings vertical soilless productivity directly to you.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <button
                onClick={() => handleNav('b2c')}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Home size={18} />
                Explore B2C Home Systems (From $299 AUD)
              </button>

              {ENABLE_B2B_SECTION && (
                <button
                  onClick={() => {
                    if (onOpenCommercialTrial) onOpenCommercialTrial();
                    else handleNav('b2b');
                  }}
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', borderColor: 'rgba(251, 191, 36, 0.4)', color: '#FCD34D' }}
                >
                  <Building2 size={18} color="#FBBF24" />
                  Book 6-Week Venue Pilot ($49.99/wk)
                </button>
              )}
            </div>
          </div>
        </div>

        {/* FOOTER NAVIGATION & LEGAL GRID */}
        <div className="grid-4" style={{ marginBottom: '3rem', fontSize: '0.9rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Leaf size={20} color="#34D399" />
              <span style={{ fontSize: '1.2rem', fontWeight: '800', color: '#ffffff' }}>
                AeroHarvest <span style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>AUSTRALIA</span>
              </span>
            </div>
            <p style={{ color: '#9CA3AF', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '0.75rem' }}>
              Compact vertical aeroponic growing platform for Australian homes, balconies, cafes, cocktail bars, and restaurants.
            </p>
            <div style={{ color: '#64748B', fontSize: '0.78rem', lineHeight: '1.6' }}>
              <div><strong>Location:</strong> {STORE_META.warehouseLocation}</div>
              <div><strong>System Architecture:</strong> Low-Voltage 24V DC</div>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '0.95rem' }}>Storefront Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#9CA3AF' }}>
              <li><button onClick={() => handleNav('home')} style={{ color: '#9CA3AF', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Homepage Gateway</button></li>
              <li><button onClick={() => handleNav('b2c')} style={{ color: '#9CA3AF', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>For Your Home (B2C)</button></li>
              {ENABLE_B2B_SECTION && (
                <li><button onClick={() => handleNav('b2b')} style={{ color: '#9CA3AF', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>For Your Business (B2B)</button></li>
              )}
              <li><button onClick={() => handleNav('nursery')} style={{ color: '#9CA3AF', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Seedling Nursery</button></li>
              <li><button onClick={() => handleNav('calculators')} style={{ color: '#9CA3AF', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Savings Calculators</button></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '0.95rem' }}>Customer Support</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', color: '#9CA3AF', fontSize: '0.85rem' }}>
              <li>📞 <strong>Phone:</strong> <a href={`tel:${STORE_META.phone.replace(/\s+/g, '')}`} style={{ color: '#E2E8F0', textDecoration: 'none' }}>{STORE_META.phone}</a></li>
              <li>✉️ <strong>Email:</strong> <a href={`mailto:${STORE_META.contactEmail}`} style={{ color: '#E2E8F0', textDecoration: 'none' }}>{STORE_META.contactEmail}</a></li>
              <li>🕒 <strong>Support Hours:</strong> Mon–Fri 9:00am–5:00pm AEST</li>
              <li>🚚 <strong>Warehouse:</strong> Victoria Metro Fast Dispatch</li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '0.95rem' }}>Australian Guarantees</h4>
            <p style={{ color: '#9CA3AF', fontSize: '0.8rem', lineHeight: '1.55', marginBottom: '0.75rem' }}>
              All purchases backed by 30-Day Money-Back Trial and 2-Year Australian Hardware Warranty under ACL statutory guarantees.
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.7rem', color: '#34D399', background: 'rgba(16,185,129,0.12)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>GST Included</span>
              <span style={{ fontSize: '0.7rem', color: '#38BDF8', background: 'rgba(56,189,248,0.12)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Shopify PCI Level-1</span>
            </div>
          </div>
        </div>

        {/* MANDATORY AUSTRALIAN CONSUMER LAW NOTICE */}
        <div style={{
          padding: '1.25rem',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          fontSize: '0.78rem',
          color: '#6B7280',
          lineHeight: '1.5',
          textAlign: 'center'
        }}>
          <p style={{ marginBottom: '0.4rem', color: '#9CA3AF' }}>
            <strong>Australian Consumer Law Notice:</strong> {COMPLIANCE_STATEMENT.aclNotice}
          </p>
          <p>
            © {new Date().getFullYear()} AeroHarvest Australia. All rights reserved. ABN:{' '}
            <a
              href={STORE_META.abnUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#9CA3AF', textDecoration: 'underline' }}
            >
              {STORE_META.abn}
            </a>
            . Privacy Policy compliant with Australian Privacy Principles (APPs).
          </p>
        </div>

      </div>
    </footer>
  );
};
