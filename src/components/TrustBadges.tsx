import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Award } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  return (
    <div style={{
      background: 'linear-gradient(180deg, rgba(23, 38, 28, 0.75) 0%, rgba(11, 19, 14, 0.65) 100%)',
      borderTop: '1px solid rgba(34, 197, 94, 0.15)',
      borderBottom: '1px solid rgba(34, 197, 94, 0.15)',
      padding: '1.5rem 0'
    }}>
      <div className="container">
        <div className="grid-4" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.85rem' }}>
            <div style={{
              padding: '0.6rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.22) 0%, rgba(5, 150, 105, 0.08) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <ShieldCheck size={22} color="#34D399" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '700' }}>2-Year AU Warranty</h4>
              <p style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>ACL Guaranteed Protection</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.85rem' }}>
            <div style={{
              padding: '0.6rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.22) 0%, rgba(5, 150, 105, 0.08) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <Truck size={22} color="#34D399" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '700' }}>Free Metro AU Shipping</h4>
              <p style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>Tracked Express Delivery</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.85rem' }}>
            <div style={{
              padding: '0.6rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.22) 0%, rgba(5, 150, 105, 0.08) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <RotateCcw size={22} color="#34D399" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '700' }}>30-Day Money Back</h4>
              <p style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>100% Risk-Free Trial</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.85rem' }}>
            <div style={{
              padding: '0.6rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.22) 0%, rgba(5, 150, 105, 0.08) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <Award size={22} color="#34D399" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '700' }}>Food-Grade Polymers</h4>
              <p style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>100% BPA-Free & Non-Toxic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
