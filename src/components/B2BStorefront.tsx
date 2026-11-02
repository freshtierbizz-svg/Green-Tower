import React from 'react';
import { B2B_OFFERS } from '../config/storefrontConfig';
import { Building2, ArrowRight, CheckCircle2, RefreshCcw, Sparkles, Utensils, GlassWater, ChevronRight } from 'lucide-react';
import { B2B_ROICalculator } from './B2B_ROICalculator';

interface B2BStorefrontProps {
  onOpenCommercialTrial: () => void;
  onOpenWeek5Preview: () => void;
}

export const B2BStorefront: React.FC<B2BStorefrontProps> = ({
  onOpenCommercialTrial,
  onOpenWeek5Preview,
}) => {
  return (
    <div style={{ color: '#F9FAFB' }}>
      {/* B2B HERO HEADER WITH AUTHENTIC GREENHOUSE KITCHEN BACKGROUND */}
      <section style={{
        padding: '3.5rem 0 3rem 0',
        background: "linear-gradient(180deg, rgba(15, 23, 42, 0.88) 0%, rgba(11, 19, 14, 0.95) 100%), url('/assets/kitchen-bg.jpg') center/cover no-repeat"
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <div className="badge-emerald" style={{ background: 'rgba(251, 191, 36, 0.15)', borderColor: 'rgba(251, 191, 36, 0.4)', color: '#FBBF24', marginBottom: '1rem' }}>
            <Building2 size={14} />
            <span>FOR YOUR VENUE — HOSPITALITY CONCIERGE PROGRAM</span>
          </div>

          <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem', color: '#ffffff' }}>
            Your garnish shouldn't arrive in a <span style={{ color: '#FBBF24' }}>plastic box.</span>
          </h1>

          <p style={{ fontSize: '1.3rem', color: '#FCD34D', fontWeight: 700, marginBottom: '1rem' }}>
            Grow What You Serve. Harvest What You Need.
          </p>

          <p style={{ fontSize: '1.05rem', color: '#9CA3AF', lineHeight: 1.6, marginBottom: '2rem' }}>
            Turn part of your venue into a living ingredient inventory. AeroHarvest brings living herbs, microgreens, and edible flowers directly into cafes, cocktail bars, restaurants, and hotels across Australia.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenCommercialTrial}
              className="btn-primary"
              style={{
                padding: '0.85rem 1.75rem',
                background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                boxShadow: '0 4px 20px rgba(245, 158, 11, 0.35)'
              }}
            >
              Apply For 6-Week Hospitality Pilot
              <ArrowRight size={18} />
            </button>

            <a href="#commercial-offers" className="btn-secondary" style={{ padding: '0.85rem 1.75rem' }}>
              View Commercial Pricing
            </a>
          </div>
        </div>
      </section>

      {/* B2B PROBLEM VISUAL FLOW */}
      <section style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <span className="badge-warning" style={{ marginBottom: '0.75rem' }}>THE HOSPITALITY PRODUCE CYCLE</span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              The Problem With Traditional Garnish Purchasing
            </h2>
            <p style={{ color: '#9CA3AF' }}>
              Hospitality venues spend significant money on herbs, microgreens and garnishes that deteriorate quickly in coolrooms after harvest.
            </p>
          </div>

          {/* TRADITIONAL CYCLE FLOW */}
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '20px', marginBottom: '3rem', background: 'rgba(255,255,255,0.02)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', textAlign: 'center' }}>
              <div style={{ flex: 1, minWidth: '120px' }}>
                <span style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: 700 }}>STEP 1</span>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>ORDER</h4>
                <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>Bulk produce order</span>
              </div>
              <ChevronRight size={20} color="#FBBF24" />
              <div style={{ flex: 1, minWidth: '120px' }}>
                <span style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: 700 }}>STEP 2</span>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>DELIVER</h4>
                <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>Plastic box freight</span>
              </div>
              <ChevronRight size={20} color="#FBBF24" />
              <div style={{ flex: 1, minWidth: '120px' }}>
                <span style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: 700 }}>STEP 3</span>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>STORE</h4>
                <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>Coolroom storage</span>
              </div>
              <ChevronRight size={20} color="#EF4444" />
              <div style={{ flex: 1, minWidth: '120px' }}>
                <span style={{ fontSize: '0.8rem', color: '#EF4444', fontWeight: 700 }}>STEP 4</span>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#EF4444' }}>WILT</h4>
                <span style={{ fontSize: '0.75rem', color: '#EF4444' }}>Loss of aroma & leaves</span>
              </div>
              <ChevronRight size={20} color="#EF4444" />
              <div style={{ flex: 1, minWidth: '120px' }}>
                <span style={{ fontSize: '0.8rem', color: '#EF4444', fontWeight: 700 }}>STEP 5</span>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#EF4444' }}>WASTE</h4>
                <span style={{ fontSize: '0.75rem', color: '#EF4444' }}>Thrown in bin</span>
              </div>
              <ChevronRight size={20} color="#FBBF24" />
              <div style={{ flex: 1, minWidth: '120px' }}>
                <span style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: 700 }}>STEP 6</span>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>REORDER</h4>
                <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>Repeat cost</span>
              </div>
            </div>
          </div>

          {/* AEROHARVEST SOLUTION */}
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '20px', background: 'linear-gradient(135deg, rgba(26, 46, 34, 0.95) 0%, rgba(15, 25, 18, 0.9) 100%)', border: '1px solid rgba(52, 211, 153, 0.4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div>
                <span className="badge-emerald" style={{ marginBottom: '0.5rem' }}>THE AEROHARVEST SOLUTION</span>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>Your Living Ingredient Inventory</h3>
                <p style={{ color: '#D1D5DB', fontSize: '0.95rem', marginTop: '0.35rem' }}>
                  Keep plants alive inside your bar or kitchen. Bartenders & chefs harvest exact leaves required on demand.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '2rem' }}>
                <div>
                  <span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#34D399' }}>0%</span>
                  <span style={{ fontSize: '0.8rem', color: '#9CA3AF', display: 'block' }}>Coolroom Wilt Waste</span>
                </div>
                <div>
                  <span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#34D399' }}>100%</span>
                  <span style={{ fontSize: '0.8rem', color: '#9CA3AF', display: 'block' }}>Fresh Living Aromatics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B 11-TIER COMMERCIAL HARDWARE SPECS WITH AUTHENTIC PRODUCTION IMAGES */}
      <section style={{ padding: '4rem 0', background: '#09100c' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <span className="badge-emerald" style={{ marginBottom: '1rem', color: '#FBBF24', borderColor: 'rgba(251, 191, 36, 0.4)' }}>COMMERCIAL TOWER SPECIFICATIONS</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
                11-Tier Commercial AeroHarvest Tower
              </h2>
              <p style={{ fontSize: '1rem', color: '#9CA3AF', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Specifically designed for high-turnover venue environments. Compact 60 × 60 cm footprint with 44 active growing sites and heavy-duty mobility casters.
              </p>

              <div className="grid-2" style={{ gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ padding: '0.85rem', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>Active Growing Sites</span>
                  <strong style={{ fontSize: '1.25rem', color: '#ffffff', display: 'block' }}>44 Sites</strong>
                </div>

                <div style={{ padding: '0.85rem', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>Lighting Architecture</span>
                  <strong style={{ fontSize: '1.25rem', color: '#ffffff', display: 'block' }}>24V DC Grow LED</strong>
                </div>

                <div style={{ padding: '0.85rem', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>Mobility Base</span>
                  <strong style={{ fontSize: '1.25rem', color: '#ffffff', display: 'block' }}>Heavy-Duty Casters</strong>
                </div>

                <div style={{ padding: '0.85rem', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>Service Support</span>
                  <strong style={{ fontSize: '1.25rem', color: '#ffffff', display: 'block' }}>Weekly Concierge</strong>
                </div>
              </div>

              <button
                onClick={onOpenCommercialTrial}
                className="btn-primary"
                style={{
                  background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                  padding: '0.85rem 1.75rem'
                }}
              >
                Apply For Pilot Onboarding
              </button>
            </div>

            <div>
              <div className="glass-panel" style={{ padding: '0.75rem', borderRadius: '20px' }}>
                <img
                  src="/assets/real-tower-farm.jpg"
                  alt="AeroHarvest Commercial Farm Harvest"
                  style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '16px', border: '1px solid rgba(251, 191, 36, 0.3)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B CONCIERGE 4-STEP CADENCE */}
      <section style={{ padding: '4.5rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <span className="badge-emerald" style={{ marginBottom: '0.75rem' }}>WEEKLY CONCIERGE SERVICE</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              We Keep The System Productive.
            </h2>
            <p style={{ color: '#9CA3AF' }}>
              Your venue staff shouldn't worry about plant biology. Our trained technician manages the system weekly so your kitchen and bar only do the harvesting.
            </p>
          </div>

          <div className="grid-4" style={{ gap: '1.5rem' }}>
            {/* Step 1 */}
            <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#FBBF24', marginBottom: '0.5rem' }}>STEP 1</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>ARRIVE & INSPECT</h4>
              <p style={{ fontSize: '0.875rem', color: '#9CA3AF', lineHeight: 1.5 }}>
                Check plant health, root development, pump flow rate, and EC/pH nutrient balance in the reservoir.
              </p>
            </div>

            {/* Step 2 */}
            <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#FBBF24', marginBottom: '0.5rem' }}>STEP 2</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>SWAP PLANTS</h4>
              <p style={{ fontSize: '0.875rem', color: '#9CA3AF', lineHeight: 1.5 }}>
                Replace heavily harvested or spent crop pods with fresh, mature nursery plants ready for immediate harvest.
              </p>
            </div>

            {/* Step 3 */}
            <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#FBBF24', marginBottom: '0.5rem' }}>STEP 3</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>REFILL & BALANCE</h4>
              <p style={{ fontSize: '0.875rem', color: '#9CA3AF', lineHeight: 1.5 }}>
                Top up water reservoir, balance nutrient concentrations, clean external housing, and inspect pest traps.
              </p>
            </div>

            {/* Step 4 */}
            <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#FBBF24', marginBottom: '0.5rem' }}>STEP 4</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>TRAIN & HANDOVER</h4>
              <p style={{ fontSize: '0.875rem', color: '#9CA3AF', lineHeight: 1.5 }}>
                Brief kitchen or bar team on optimal leaf-snapping techniques to promote continuous plant regrowth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* B2B COMMERCIAL PRICING & OFFER CARDS */}
      <section id="commercial-offers" style={{ padding: '4.5rem 0', background: 'linear-gradient(180deg, #0b130e 0%, #132018 50%, #0b130e 100%)', borderTop: '1px solid rgba(251, 191, 36, 0.3)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <span className="badge-emerald" style={{ background: 'rgba(251, 191, 36, 0.15)', color: '#FBBF24', borderColor: 'rgba(251, 191, 36, 0.4)', marginBottom: '0.75rem' }}>COMMERCIAL PROGRAM PRICING</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Flexible Commercial Options For Your Venue
            </h2>
            <p style={{ color: '#9CA3AF' }}>
              Start with our risk-mitigated 6-Week Hospitality Concierge Pilot or choose direct hardware ownership.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '2rem', alignItems: 'stretch' }}>
            {/* OFFER 1: 6-WEEK PILOT */}
            <div className="glass-panel" style={{
              padding: '2.5rem',
              borderRadius: '24px',
              border: '2px solid #FBBF24',
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.9) 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                top: '-14px',
                right: '2rem',
                background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 800,
                padding: '0.3rem 0.85rem',
                borderRadius: '999px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                MOST POPULAR FOR VENUES
              </span>

              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                  6-Week Hospitality Pilot
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '1.5rem' }}>
                  Low-risk concierge pilot service designed for cafes, cocktail bars, and restaurants.
                </p>

                <div style={{ padding: '1.25rem', background: 'rgba(0,0,0,0.3)', borderRadius: '14px', marginBottom: '1.5rem', borderLeft: '4px solid #FBBF24' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                    <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FBBF24', lineHeight: 1 }}>$49.99</span>
                    <span style={{ fontSize: '1rem', color: '#D1D5DB' }}>AUD / week (6 weekly payments)</span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#9CA3AF', display: 'block', marginTop: '0.35rem' }}>
                    Total 6-Week Concierge Service Fee: <strong>$299.94 AUD</strong>
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={18} color="#FBBF24" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Delivered fully assembled 11-tier tower + 24V DC grow lights & caster base</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={18} color="#FBBF24" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Pre-stocked with mature starter plants ready for immediate kitchen/bar harvest</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={18} color="#FBBF24" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Weekly on-site visits (plant swaps, water refill, nutrient balance, staff training)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#A7F3D0', fontWeight: 600 }}>
                    <Sparkles size={18} color="#34D399" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Pilot Graduation Offer:</strong> Unlock $799 Pilot Graduate Ownership Price at Week 6 (Save $300 off $1,099 AUD RRP)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#9CA3AF' }}>
                    <RefreshCcw size={18} color="#6B7280" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Return Option:</strong> If you choose not to continue, we pack down & collect system for a $49.99 fee</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  onClick={onOpenCommercialTrial}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                    boxShadow: '0 4px 20px rgba(245, 158, 11, 0.35)'
                  }}
                >
                  Apply For 6-Week Venue Pilot
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={onOpenWeek5Preview}
                  style={{ fontSize: '0.85rem', color: '#FBBF24', background: 'none', border: 'none', textAlign: 'center', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Preview Week 5 Customer Automation Journey
                </button>
              </div>
            </div>

            {/* OFFER 2: DIRECT PURCHASE */}
            <div className="glass-panel" style={{
              padding: '2.5rem',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.12)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                  Commercial Direct Purchase
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '1.5rem' }}>
                  Outright commercial hardware purchase for hospitality groups & established venues.
                </p>

                <div style={{ padding: '1.25rem', background: 'rgba(0,0,0,0.3)', borderRadius: '14px', marginBottom: '1.5rem', borderLeft: '4px solid #34D399' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                    <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>$1,099</span>
                    <span style={{ fontSize: '1rem', color: '#D1D5DB' }}>AUD GST Inclusive</span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#9CA3AF', display: 'block', marginTop: '0.35rem' }}>
                    Full Commercial System Hardware Ownership
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={18} color="#34D399" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Complete 11-tier commercial tower with 44 active growing sites</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={18} color="#34D399" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>24V DC full-spectrum grow light kit & heavy-duty caster base</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={18} color="#34D399" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Commercial starter pack (nutrients, pH/EC testing meters, starter pods)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={18} color="#34D399" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>2-Year Commercial Australian Hardware Warranty</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={18} color="#34D399" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Access to optional ongoing nursery seedling pod subscription & technician service</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => alert('Redirecting to Commercial Purchase Checkout ($1,099 AUD)...')}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Own Your Commercial Tower ($1,099 AUD)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* B2B PLANT COLLECTIONS */}
      <section style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <span className="badge-emerald" style={{ marginBottom: '0.75rem' }}>CURATED HOSPITALITY CROPS</span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Specialist Venue Plant Collections
            </h2>
            <p style={{ color: '#9CA3AF' }}>
              We pre-grow living plants in our nursery so your team receives mature stock ready for harvest.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '2rem' }}>
            {/* Cocktail Collection */}
            <div className="glass-panel" style={{ padding: '2rem', borderRadius: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <GlassWater size={24} color="#FBBF24" />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff' }}>Cocktail Collection</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '1.25rem' }}>
                Engineered for cocktail bars, rooftop lounges, and high-volume beverage menus.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Vietnamese Mint', 'Spearmint', 'Thai Basil', 'Lemon Balm', 'Shiso', 'Nasturtium Blossoms', 'Edible Violas'].map((crop) => (
                  <span key={crop} style={{ padding: '0.35rem 0.75rem', background: 'rgba(251, 191, 36, 0.12)', border: '1px solid rgba(251, 191, 36, 0.3)', color: '#FCD34D', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600 }}>
                    {crop}
                  </span>
                ))}
              </div>
            </div>

            {/* Brunch & Kitchen Collection */}
            <div className="glass-panel" style={{ padding: '2rem', borderRadius: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Utensils size={24} color="#34D399" />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff' }}>Brunch & Kitchen Collection</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '1.25rem' }}>
                Engineered for cafes, bistro kitchens, and farm-to-table dining spaces.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Genovese Basil', 'Coriander', 'Pea Shoots', 'Radish Microgreens', 'Mustard Greens', 'Chives', 'Micro Red Sorrel'].map((crop) => (
                  <span key={crop} style={{ padding: '0.35rem 0.75rem', background: 'rgba(52, 211, 153, 0.12)', border: '1px solid rgba(52, 211, 153, 0.3)', color: '#A7F3D0', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600 }}>
                    {crop}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B ROI CALCULATOR */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <B2B_ROICalculator />
        </div>
      </section>
    </div>
  );
};
