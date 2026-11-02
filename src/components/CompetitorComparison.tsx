import React from 'react';
import { Check, X, ShieldCheck, HelpCircle } from 'lucide-react';

export const CompetitorComparison: React.FC = () => {
  return (
    <section id="comparison" style={{ 
      padding: '6rem 0', 
      position: 'relative',
      background: "linear-gradient(180deg, rgba(15, 23, 42, 0.94) 0%, rgba(11, 19, 14, 0.96) 100%), url('/assets/sunroom-bg.jpg') center/cover fixed no-repeat",
      borderTop: '1px solid rgba(16, 185, 129, 0.15)',
      borderBottom: '1px solid rgba(16, 185, 129, 0.15)'
    }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
          <span style={{ fontSize: '0.85rem', color: '#34D399', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
            Competitive Hardware Benchmarking
          </span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>
            Why Choose AeroHarvest?
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem' }}>
            Compare AeroHarvest aeroponic technology against traditional soil gardening and budget PVC drip kits.
          </p>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className="custom-table">
            <thead>
              <tr>
                <th style={{ width: '28%' }}>Feature / Capability</th>
                <th style={{ width: '24%', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(5, 150, 105, 0.12) 100%)', color: '#34D399' }}>
                  AeroHarvest ($349 AUD)
                </th>
                <th style={{ width: '24%' }}>Airgarden ($799 AUD)</th>
                <th style={{ width: '24%' }}>Cheap PVC Imports ($150 AUD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: '600', color: '#ffffff' }}>Aeroponic Drip-Cascade Technology</td>
                <td><span style={{ color: '#34D399', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Check size={16} /> Yes (High Precision)</span></td>
                <td><span style={{ color: '#34D399', fontWeight: '700' }}>Yes</span></td>
                <td><span style={{ color: '#EF4444', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><X size={16} /> No (Basic Pipe)</span></td>
              </tr>
              <tr>
                <td style={{ fontWeight: '600', color: '#ffffff' }}>Plant Capacity & Footprint</td>
                <td><span style={{ color: '#ffffff' }}>28 Plants (0.22 m²)</span></td>
                <td><span style={{ color: '#ffffff' }}>30 Plants (0.20 m²)</span></td>
                <td><span style={{ color: '#9CA3AF' }}>24 Plants (Unsealed Pipe)</span></td>
              </tr>
              <tr>
                <td style={{ fontWeight: '600', color: '#ffffff' }}>Food-Grade UV Polymers</td>
                <td><span style={{ color: '#34D399', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Check size={16} /> Yes (BPA-Free)</span></td>
                <td><span style={{ color: '#34D399', fontWeight: '700' }}>Yes</span></td>
                <td><span style={{ color: '#EF4444', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><X size={16} /> Unverified PVC Risk</span></td>
              </tr>
              <tr>
                <td style={{ fontWeight: '600', color: '#ffffff' }}>Reservoir Volume</td>
                <td><span style={{ color: '#ffffff' }}>38 Liters (Closed Loop)</span></td>
                <td><span style={{ color: '#ffffff' }}>50 Liters</span></td>
                <td><span style={{ color: '#9CA3AF' }}>20 Liters (Frequent Fills)</span></td>
              </tr>
              <tr>
                <td style={{ fontWeight: '600', color: '#ffffff' }}>Retail Price Point</td>
                <td><span style={{ color: '#34D399', fontWeight: '800', fontSize: '1.1rem' }}>$349 AUD</span></td>
                <td><span style={{ color: '#9CA3AF' }}>$799 AUD</span></td>
                <td><span style={{ color: '#9CA3AF' }}>$150 AUD</span></td>
              </tr>
              <tr>
                <td style={{ fontWeight: '600', color: '#ffffff' }}>Australian Warranty Support</td>
                <td><span style={{ color: '#34D399', fontWeight: '700' }}>2-Year Replacement (ACL)</span></td>
                <td><span style={{ color: '#ffffff' }}>1-Year Warranty</span></td>
                <td><span style={{ color: '#EF4444' }}>None / 30-Day Seller</span></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
