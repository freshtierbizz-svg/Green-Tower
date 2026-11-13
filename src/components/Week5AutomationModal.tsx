import React from 'react';
import { X, Mail, CheckCircle2, RefreshCcw, Sparkles } from 'lucide-react';

interface Week5AutomationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Week5AutomationModal: React.FC<Week5AutomationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
      background: 'rgba(5, 10, 8, 0.85)',
      backdropFilter: 'blur(16px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      overflowY: 'auto'
    }}>
      <div className="glass-panel" style={{
        maxWidth: '750px',
        width: '100%',
        padding: '2.5rem',
        borderRadius: '24px',
        border: '1px solid rgba(251, 191, 36, 0.5)',
        background: '#0a140e',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
      }}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            color: '#9CA3AF',
            background: 'rgba(255,255,255,0.05)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <span className="badge-warning">WEEK 5 AUTOMATION WORKFLOW PREVIEW</span>
        </div>

        <div style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.03)', borderRadius: '14px', border: '1px dashed rgba(251, 191, 36, 0.4)', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#FBBF24', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.35rem' }}>
            <Mail size={16} />
            <span>Automated Customer Journey Email (Triggered Day 35 of Pilot)</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>
            This workflow executes via Shopify Flow + CRM subscription software at Week 5 of every hospitality concierge pilot.
          </p>
        </div>

        {/* EMAIL BODY MOCKUP */}
        <div style={{ background: '#121f17', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ fontSize: '0.75rem', color: '#34D399', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            FRESHTIER HOSPITALITY PILOT JOURNEY
          </span>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginTop: '0.25rem', marginBottom: '0.75rem' }}>
            Your Hospitality Pilot Is Nearly Complete
          </h3>
          <p style={{ fontSize: '0.975rem', color: '#D1D5DB', lineHeight: 1.6, marginBottom: '2rem' }}>
            "You've now had almost six weeks to see what an on-site living harvest system looks like in your venue. Here are your two options for moving forward:"
          </p>

          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {/* OPTION A: KEEP YOUR TOWER */}
            <div style={{
              padding: '1.5rem',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(26, 46, 34, 0.95) 0%, rgba(15, 25, 18, 0.9) 100%)',
              border: '2px solid #34D399',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span className="badge-emerald" style={{ marginBottom: '0.5rem', fontSize: '0.75rem' }}>OPTION 1: GRADUATE & OWN</span>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem' }}>
                  KEEP YOUR TOWER
                </h4>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#34D399', marginBottom: '0.5rem' }}>
                  $799 AUD <span style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: 400 }}>Pilot Graduate Price</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#D1D5DB', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  Make the system yours and continue growing. Unlocks $300 promotional buyout savings off regular $1,099 RRP.
                </p>
              </div>
              <button
                onClick={() => alert('Customer selected: Keep My Tower ($799 Buyout)...')}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem', padding: '0.65rem 1rem' }}
              >
                Keep My Tower ($799)
              </button>
            </div>

            {/* OPTION B: RETURN YOUR TOWER */}
            <div style={{
              padding: '1.5rem',
              borderRadius: '14px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.12)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#9CA3AF', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                  OPTION 2: PACKDOWN & RETURN
                </span>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem' }}>
                  RETURN YOUR TOWER
                </h4>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#D1D5DB', marginBottom: '0.5rem' }}>
                  $49.99 AUD <span style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: 400 }}>Packdown & Collection Fee</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#9CA3AF', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  Not quite right for your venue? We'll arrange a technician to decommission, pack down and collect the system.
                </p>
              </div>
              <button
                onClick={() => alert('Customer selected: Schedule Pickup ($49.99 Fee)...')}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem', padding: '0.65rem 1rem' }}
              >
                Schedule Pickup ($49.99)
              </button>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
          <button onClick={onClose} className="btn-secondary" style={{ padding: '0.6rem 1.5rem' }}>
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
