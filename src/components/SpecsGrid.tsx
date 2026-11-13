import React from 'react';
import { PRODUCT_CONFIG } from '../config/product.config';
import { Check, AlertCircle, PackageCheck, Power, HelpCircle } from 'lucide-react';

export const SpecsGrid: React.FC = () => {
  return (
    <section id="inclusions" style={{ 
      padding: '6rem 0', 
      position: 'relative',
      background: "linear-gradient(180deg, rgba(11, 19, 14, 0.9) 0%, rgba(15, 23, 42, 0.94) 100%), url('assets/kitchen-bg.jpg') center/cover fixed no-repeat",
      borderTop: '1px solid rgba(16, 185, 129, 0.15)',
      borderBottom: '1px solid rgba(16, 185, 129, 0.15)'
    }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
          <span style={{ fontSize: '0.85rem', color: '#34D399', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
            Complete Hardware Transparency Checklist
          </span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>
            What's Included vs. What You Provide
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem' }}>
            No hidden extras or unexpected surprises. Know exactly what comes inside your FreshTier shipment and what standard household items you need before starting.
          </p>
        </div>

        <div className="grid-2">
          
          {/* Column 1: What Comes In The Box */}
          <div className="glass-panel" style={{ padding: '2.5rem', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                padding: '0.5rem',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(5, 150, 105, 0.12) 100%)',
                color: '#34D399'
              }}>
                <PackageCheck size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem' }}>What's In The FreshTier Box</h3>
                <span style={{ fontSize: '0.85rem', color: '#34D399' }}>Standard Base & Kit Shipments</span>
              </div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {PRODUCT_CONFIG.inclusions.basePackage.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: '#E5E7EB' }}>
                  <div style={{
                    minWidth: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3) 0%, rgba(5, 150, 105, 0.15) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '2px'
                  }}>
                    <Check size={12} color="#34D399" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            {/* Additional Kit Addons Highlight with Real Studio Photo */}
            <div style={{
              marginTop: '2rem',
              padding: '1.25rem',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.06) 100%)',
              borderRadius: '12px',
              border: '1px solid rgba(16, 185, 129, 0.2)'
            }}>
              <div style={{ borderRadius: '8px', overflow: 'hidden', marginBottom: '1rem', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                <img
                  src="assets/complete-kit.jpg"
                  alt="FreshTier Complete Kit Studio Photoshoot Inclusions"
                  style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
                />
              </div>

              <h4 style={{ fontSize: '1rem', color: '#34D399', marginBottom: '0.75rem' }}>
                Included With Complete Growing Kit (+$100 AUD):
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {PRODUCT_CONFIG.inclusions.completeKitAddons.map((addon, idx) => (
                  <li key={idx} style={{ fontSize: '0.85rem', color: '#D1D5DB', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#34D399', fontWeight: 'bold' }}>+</span> {addon}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: What Customer Must Provide */}
          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                padding: '0.5rem',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(217, 119, 6, 0.12) 100%)',
                color: '#F59E0B'
              }}>
                <Power size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem' }}>What You Provide</h3>
                <span style={{ fontSize: '0.85rem', color: '#F59E0B' }}>Standard Household Requirements</span>
              </div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {PRODUCT_CONFIG.inclusions.customerMustProvide.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: '#E5E7EB' }}>
                  <div style={{
                    minWidth: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.3) 0%, rgba(217, 119, 6, 0.15) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '2px'
                  }}>
                    <AlertCircle size={12} color="#F59E0B" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            {/* Mandatory Product Truth Safeguard Callout */}
            <div style={{
              padding: '1.25rem',
              background: 'linear-gradient(135deg, rgba(17, 26, 20, 0.92) 0%, rgba(11, 19, 14, 0.96) 100%)',
              borderRadius: '12px',
              border: '1px solid rgba(245, 158, 11, 0.3)'
            }}>
              <h4 style={{ fontSize: '0.9rem', color: '#F59E0B', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <HelpCircle size={16} /> Non-Negotiable Claim Truth Note
              </h4>
              <p style={{ fontSize: '0.8rem', color: '#9CA3AF', lineHeight: '1.5' }}>
                Per FreshTier Claim Control governance: Monthly harvest yields and specific kWh energy draw are undergoing rigorous independent Australian climate testing. All unverified figures are tagged as <span className="badge-warning">{PRODUCT_CONFIG.placeholders.yield}</span> and <span className="badge-warning">{PRODUCT_CONFIG.placeholders.powerConsumption}</span> to ensure zero fabricated claims.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
