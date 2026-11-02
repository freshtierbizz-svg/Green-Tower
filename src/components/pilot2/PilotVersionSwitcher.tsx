import React from 'react';
import { Sparkles, History, ArrowRight } from 'lucide-react';

interface PilotVersionSwitcherProps {
  currentVersion: 'pilot1' | 'pilot2';
  onToggleVersion: (version: 'pilot1' | 'pilot2') => void;
}

export const PilotVersionSwitcher: React.FC<PilotVersionSwitcherProps> = ({
  currentVersion,
  onToggleVersion,
}) => {
  return (
    <div
      style={{
        background: currentVersion === 'pilot2' ? '#14281D' : '#040806',
        color: '#FFFFFF',
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        padding: '0.45rem 1rem',
        fontSize: '0.825rem',
        position: 'sticky',
        top: 0,
        zIndex: 110,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.5rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <span
          style={{
            background: currentVersion === 'pilot2' ? '#34D399' : '#6B7280',
            color: '#000000',
            padding: '2px 8px',
            borderRadius: '4px',
            fontWeight: 800,
            fontSize: '0.725rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          {currentVersion === 'pilot2' ? 'Pilot 2 Active' : 'Pilot 1 Active'}
        </span>
        <span style={{ color: '#D1D5DB' }}>
          {currentVersion === 'pilot2'
            ? '✨ New Version: Warm ivory & soft sage palette, wide lifestyle photography & clarified shopping path'
            : '🌑 Version 1: Original dark tech dashboard layout'}
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <button
          type="button"
          onClick={() => onToggleVersion(currentVersion === 'pilot2' ? 'pilot1' : 'pilot2')}
          style={{
            background: currentVersion === 'pilot2' ? 'rgba(255, 255, 255, 0.12)' : '#34D399',
            color: currentVersion === 'pilot2' ? '#FFFFFF' : '#000000',
            border: 'none',
            padding: '0.25rem 0.75rem',
            borderRadius: '6px',
            fontWeight: 700,
            fontSize: '0.75rem',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            transition: 'all 0.2s ease',
          }}
        >
          {currentVersion === 'pilot2' ? (
            <>
              <History size={13} />
              <span>Switch to Pilot 1 (Original Dark Tech)</span>
            </>
          ) : (
            <>
              <Sparkles size={13} />
              <span>Switch to Pilot 2 (Warm Lifestyle)</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
