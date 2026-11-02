import React, { useState } from 'react';
import { B2C_TIERS, B2C_ADDONS } from '../config/storefrontConfig';
import { B2CTierOption, ActiveView } from '../types/storefront';
import { buildShopifyCheckoutUrl } from '../config/product.config';
import { Check, ShieldCheck, Zap, Sparkles, Heart, Users, Compass, RefreshCw, ShoppingCart, Award, Leaf } from 'lucide-react';
import { B2C_ROICalculator } from './B2C_ROICalculator';

interface B2CStorefrontProps {
  onSelectView: (view: ActiveView) => void;
}

export const B2CStorefront: React.FC<B2CStorefrontProps> = ({ onSelectView }) => {
  const [selectedTier, setSelectedTier] = useState<B2CTierOption>(B2C_TIERS[1]); // 7-tier standard default
  const [isCompleteKit, setIsCompleteKit] = useState<boolean>(true); // Complete kit default
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['led-lighting']);
  const [activeConfigImg, setActiveConfigImg] = useState<string>(B2C_TIERS[1].image || '/assets/tier-7-studio.png');

  const handleSelectTier = (tier: B2CTierOption) => {
    setSelectedTier(tier);
    if (tier.image) {
      setActiveConfigImg(tier.image);
    }
  };

  const handleSelectPackageType = (kit: boolean) => {
    setIsCompleteKit(kit);
    if (kit) {
      setActiveConfigImg('/assets/complete-kit.jpg');
    } else {
      setActiveConfigImg('/assets/package-base-hardware.png');
    }
  };

  const handleToggleAddon = (addonId: string) => {
    const isCurrentlySelected = selectedAddons.includes(addonId);
    if (isCurrentlySelected) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
      const addon = B2C_ADDONS.find((a) => a.id === addonId);
      if (addon && addon.image) {
        setActiveConfigImg(addon.image);
      }
    }
  };

  const configGallery = [
    { src: selectedTier.image || '/assets/tier-7-studio.png', title: `${selectedTier.name} (${selectedTier.growSites} Sites)` },
    { src: isCompleteKit ? '/assets/complete-kit.jpg' : '/assets/package-base-hardware.png', title: isCompleteKit ? 'Complete Growing Kit Inclusions' : 'Standard Base Hardware Package' },
    { src: '/assets/addon-led-lights.png', title: '360° LED Grow Lights System' },
    { src: '/assets/tier-comparison-all.jpg', title: '5 vs 7 vs 9/11 Tier Height Chart' },
    { src: '/assets/real-tower-close.jpg', title: 'Fresh Living Produce Close-Up' },
    { src: '/assets/package-base-hardware.png', title: 'Base Hardware Components' },
  ];

  // Calculate current price
  const baseOrKitPrice = isCompleteKit ? selectedTier.completeKitPrice : selectedTier.basePrice;
  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = B2C_ADDONS.find((a) => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);
  const totalPrice = baseOrKitPrice + addonsTotal;

  return (
    <div style={{ color: '#F9FAFB' }}>
      {/* B2C HERO HEADER */}
      <section style={{
        padding: '3.5rem 0 2.5rem 0',
        background: "linear-gradient(180deg, rgba(11, 19, 14, 0.82) 0%, rgba(11, 19, 14, 0.95) 100%), url('/assets/patio-lifestyle.jpg') center/cover no-repeat"
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <div className="badge-emerald" style={{ marginBottom: '1rem' }}>
            <Leaf size={14} />
            <span>FOR YOUR HOME — VERTICAL AEROPONIC SYSTEMS</span>
          </div>

          <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem' }}>
            Grow Up. <span style={{ color: '#34D399' }}>Not Out.</span>
          </h1>

          <p style={{ fontSize: '1.25rem', color: '#A7F3D0', fontWeight: 700, marginBottom: '1rem' }}>
            "Fresh food doesn't need a huge backyard."
          </p>

          <p style={{ fontSize: '1.05rem', color: '#9CA3AF', lineHeight: 1.6, marginBottom: '2rem' }}>
            Grow herbs, greens, microgreens, strawberries and other compact crops in just 0.22 m² of space. Harvest what you need, when you need it — from your balcony, patio, courtyard or backyard.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#b2c-configurator" className="btn-primary" style={{ padding: '0.85rem 1.75rem' }}>
              Configure Your Home System
            </a>
            <a href="#why-grow" className="btn-secondary" style={{ padding: '0.85rem 1.75rem' }}>
              Why Grow Food At Home?
            </a>
          </div>
        </div>
      </section>

      {/* WHY GROW FOOD AT HOME - 6 CORE PAIN POINTS */}
      <section id="why-grow" style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            <span className="badge-emerald" style={{ marginBottom: '0.75rem' }}>CORE MOTIVATIONS</span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Why Grow Food At Home?
            </h2>
            <p style={{ color: '#9CA3AF' }}>
              Traditional vegetable gardening requires land, time, and weeding. AeroHarvest turns vertical space into your daily living produce section.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '1.75rem' }}>
            {/* Motivation 1 */}
            <div className="glass-panel" style={{ padding: '1.75rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(52, 211, 153, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34D399', marginBottom: '1.25rem' }}>
                <Compass size={22} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>
                1. Smaller Backyards
              </h3>
              <p style={{ fontSize: '1rem', fontWeight: 600, color: '#A7F3D0', marginBottom: '0.5rem' }}>
                "Your balcony counts."
              </p>
              <p style={{ fontSize: '0.925rem', color: '#9CA3AF', lineHeight: 1.6 }}>
                You don't need a quarter-acre backyard to grow fresh food. AeroHarvest turns a compact 60 × 60 cm footprint into a vertical growing tower for balconies, patios, townhouses, and courtyards.
              </p>
            </div>

            {/* Motivation 2 */}
            <div className="glass-panel" style={{ padding: '1.75rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(52, 211, 153, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34D399', marginBottom: '1.25rem' }}>
                <Zap size={22} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>
                2. Rising Food Costs
              </h3>
              <p style={{ fontSize: '1rem', fontWeight: 600, color: '#A7F3D0', marginBottom: '0.5rem' }}>
                "Grow the produce you buy most often."
              </p>
              <p style={{ fontSize: '0.925rem', color: '#9CA3AF', lineHeight: 1.6 }}>
                Stop buying an entire bunch of basil, mint, or salad greens at $4.50 a bunch when you only need a handful for dinner. Grow high-frequency herbs and salad greens at home.
              </p>
            </div>

            {/* Motivation 3 */}
            <div className="glass-panel" style={{ padding: '1.75rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(52, 211, 153, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34D399', marginBottom: '1.25rem' }}>
                <RefreshCw size={22} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>
                3. Food Waste
              </h3>
              <p style={{ fontSize: '1rem', fontWeight: 600, color: '#A7F3D0', marginBottom: '0.5rem' }}>
                "Harvest what you're actually going to eat."
              </p>
              <p style={{ fontSize: '0.925rem', color: '#9CA3AF', lineHeight: 1.6 }}>
                You buy a plastic container of spinach, use a little, and throw the slimy rest away 4 days later. With AeroHarvest, your produce stays alive in the tower until the minute you cook.
              </p>
            </div>

            {/* Motivation 4 */}
            <div className="glass-panel" style={{ padding: '1.75rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(52, 211, 153, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34D399', marginBottom: '1.25rem' }}>
                <Sparkles size={22} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>
                4. Peak Freshness
              </h3>
              <p style={{ fontSize: '1rem', fontWeight: 600, color: '#A7F3D0', marginBottom: '0.5rem' }}>
                "From plant to plate in minutes."
              </p>
              <p style={{ fontSize: '0.925rem', color: '#9CA3AF', lineHeight: 1.6 }}>
                Supermarket produce travels: Farm → Processing → Cold Freight → Distribution → Store → Fridge → Plate. AeroHarvest is simply: Grow → Harvest → Eat. Peak aroma and crisp texture.
              </p>
            </div>

            {/* Motivation 5 */}
            <div className="glass-panel" style={{ padding: '1.75rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(52, 211, 153, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34D399', marginBottom: '1.25rem' }}>
                <ShieldCheck size={22} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>
                5. Total Food Control
              </h3>
              <p style={{ fontSize: '1rem', fontWeight: 600, color: '#A7F3D0', marginBottom: '0.5rem' }}>
                "Know what you're growing."
              </p>
              <p style={{ fontSize: '0.925rem', color: '#9CA3AF', lineHeight: 1.6 }}>
                Choose your seeds, growing inputs, and harvest timing. You control the water quality and nutrition with complete peace of mind over what your family consumes.
              </p>
            </div>

            {/* Motivation 6 */}
            <div className="glass-panel" style={{ padding: '1.75rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(52, 211, 153, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34D399', marginBottom: '1.25rem' }}>
                <Heart size={22} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>
                6. Food Resilience
              </h3>
              <p style={{ fontSize: '1rem', fontWeight: 600, color: '#A7F3D0', marginBottom: '0.5rem' }}>
                "Put food production back in your hands."
              </p>
              <p style={{ fontSize: '0.925rem', color: '#9CA3AF', lineHeight: 1.6 }}>
                Your supermarket doesn't have to grow everything you eat. Having an active vertical tower gives your home direct daily access to nutrient-rich salad greens and herbs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* YOU GREW THIS - EMOTIONAL BENEFITS SECTION WITH AUTHENTIC PROJECT PHOTOS */}
      <section style={{ padding: '4.5rem 0', background: 'linear-gradient(180deg, #0b130e 0%, #122217 50%, #0b130e 100%)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div>
              <span className="badge-emerald" style={{ marginBottom: '1rem' }}>LIFESTYLE & EXPERIENCE</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
                You Grew This.
              </h2>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#34D399', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
                PLANT IT. WATCH IT GROW. HARVEST IT. COOK IT. EAT IT.
              </div>

              <p style={{ fontSize: '1rem', color: '#D1D5DB', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Gardening is not just technology — it's a sensory daily experience. Imagine snipping fresh Vietnamese mint for a Friday night cocktail, or harvesting crisp oakleaf lettuce minutes before serving Sunday lunch to friends.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#E2E8F0' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34D399' }} />
                  <span>Stunning living architectural feature for your home or balcony</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#E2E8F0' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34D399' }} />
                  <span>Clean soilless operation — no dirt under fingernails or muddy pots</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#E2E8F0' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34D399' }} />
                  <span>Continuous multi-tier growth for year-round fresh harvests</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="glass-panel" style={{ padding: '0.75rem', borderRadius: '20px', overflow: 'hidden' }}>
                <img
                  src="/assets/balcony-person.jpg"
                  alt="Harvesting fresh herbs on home balcony"
                  style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '14px' }}
                />
              </div>
              <div className="glass-panel" style={{ padding: '0.75rem', borderRadius: '20px', overflow: 'hidden' }}>
                <img
                  src="/assets/harvest-macro.jpg"
                  alt="Freshly harvested lettuce close up"
                  style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '14px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAMILY & EDUCATION SECTION WITH AUTHENTIC FAMILY PHOTO */}
      <section style={{ padding: '4.5rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div style={{ order: 2 }}>
              <span className="badge-emerald" style={{ marginBottom: '1rem' }}>FAMILY & EDUCATION</span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
                Let Them See Where Food Comes From.
              </h2>
              <p style={{ fontSize: '1rem', color: '#9CA3AF', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                In a modern world of supermarket plastic packaging, vertical gardening gives children a front-row seat to biological science and nature's cycle right inside the home.
              </p>

              <div className="glass-panel" style={{ padding: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700, color: '#34D399', fontSize: '0.9rem' }}>
                  <span>SEED</span> → <span>PLANT</span> → <span>ROOTS</span> → <span>GROWTH</span> → <span>HARVEST</span> → <span>FOOD</span>
                </div>
              </div>

              <div className="grid-2" style={{ gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                  <Users size={16} color="#34D399" />
                  <span>Interactive biology lesson</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                  <Users size={16} color="#34D399" />
                  <span>Hands-on responsibility</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                  <Users size={16} color="#34D399" />
                  <span>Encourages eating greens</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                  <Users size={16} color="#34D399" />
                  <span>Meaningful family activity</span>
                </div>
              </div>
            </div>

            <div style={{ order: 1 }}>
              <div className="glass-panel" style={{ padding: '0.75rem', borderRadius: '20px' }}>
                <img
                  src="/assets/family-kitchen.jpg"
                  alt="Happy family harvesting fresh greens in kitchen"
                  style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '16px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2C CONFIGURATOR & PRODUCT SELECTOR WITH HARDWARE GALLERY */}
      <section id="b2c-configurator" style={{ padding: '4.5rem 0', background: '#09100c', borderTop: '1px solid rgba(16, 185, 129, 0.2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <span className="badge-emerald" style={{ marginBottom: '0.75rem' }}>CONFIGURE YOUR SYSTEM</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Choose Your AeroHarvest Home System
            </h2>
            <p style={{ color: '#9CA3AF' }}>
              Select your tower height, active plant capacity, and package inclusion level. All prices GST inclusive with Australian Consumer Law guarantee.
            </p>
          </div>

          {/* HARDWARE INTERACTIVE PREVIEW PANEL */}
          <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: '20px', marginBottom: '2.5rem' }}>
            <div className="grid-2" style={{ alignItems: 'center', gap: '2rem' }}>
              <div style={{
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.15)',
                background: '#040806',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '340px'
              }}>
                <img
                  src={activeConfigImg}
                  alt="AeroHarvest Tower View"
                  style={{ width: '100%', height: '340px', objectFit: 'contain', padding: '0.75rem' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  left: '0.75rem',
                  background: 'rgba(0,0,0,0.8)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  color: '#34D399',
                  fontWeight: 600,
                  border: '1px solid rgba(52, 211, 153, 0.3)'
                }}>
                  Active View: {activeConfigImg.includes('complete-kit')
                    ? 'Complete Starter Kit Inclusions'
                    : activeConfigImg.includes('package-base')
                    ? 'Standard Base Components'
                    : activeConfigImg.includes('addon-led-lights')
                    ? '360° LED Grow Light System'
                    : activeConfigImg.includes('tier-comparison')
                    ? '5 vs 7 vs 9/11 Tier Height Comparison'
                    : `${selectedTier.name} (${selectedTier.heightMeter}m)`}
                </div>
              </div>

              <div>
                <span className="badge-emerald" style={{ marginBottom: '0.5rem' }}>LIVE PRODUCT VISUALIZER</span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                  {selectedTier.name} — {selectedTier.growSites} Grow Sites ({selectedTier.heightMeter} m)
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '1rem' }}>
                  Food-grade polymer modular sections, 38L sage green reservoir, low-voltage DC pump, and 60 × 60 cm compact footprint.
                </p>

                {/* ACTIVE CONFIGURATION BADGES */}
                <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(52, 211, 153, 0.15)', color: '#34D399', padding: '0.2rem 0.6rem', borderRadius: '4px', border: '1px solid rgba(52, 211, 153, 0.3)' }}>
                    ✓ {selectedTier.name}
                  </span>
                  <span style={{ fontSize: '0.75rem', background: isCompleteKit ? 'rgba(52, 211, 153, 0.15)' : 'rgba(255, 255, 255, 0.08)', color: isCompleteKit ? '#34D399' : '#D1D5DB', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                    ✓ {isCompleteKit ? 'Complete Starter Kit' : 'Standard Base Package'}
                  </span>
                  {selectedAddons.includes('led-lighting') && (
                    <span style={{ fontSize: '0.75rem', background: 'rgba(251, 191, 36, 0.15)', color: '#FBBF24', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                      ✓ 360° LED Grow Lights
                    </span>
                  )}
                  {selectedAddons.includes('trellis-support') && (
                    <span style={{ fontSize: '0.75rem', background: 'rgba(56, 189, 248, 0.15)', color: '#38BDF8', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                      ✓ Support Trellis
                    </span>
                  )}
                </div>

                {/* THUMBNAIL SWITCHER */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0.5rem' }}>
                  {configGallery.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveConfigImg(img.src)}
                      title={img.title}
                      style={{
                        borderRadius: '8px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: activeConfigImg === img.src ? '2px solid #34D399' : '1px solid rgba(255,255,255,0.1)',
                        opacity: activeConfigImg === img.src ? 1 : 0.6,
                        height: '56px',
                        background: '#040806'
                      }}
                    >
                      <img src={img.src} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '2px' }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* STEP 1: SELECT TIER */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#34D399', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Step 1: Select Tower Height & Capacity
              </h3>
              <button
                type="button"
                onClick={() => setActiveConfigImg('/assets/tier-comparison-all.jpg')}
                style={{
                  background: 'rgba(52, 211, 153, 0.1)',
                  border: '1px solid rgba(52, 211, 153, 0.3)',
                  color: '#34D399',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                📊 Compare All Heights Chart
              </button>
            </div>

            <div className="grid-3" style={{ gap: '1.5rem' }}>
              {B2C_TIERS.map((tier) => {
                const isSelected = selectedTier.id === tier.id;
                return (
                  <div
                    key={tier.id}
                    onClick={() => handleSelectTier(tier)}
                    className="glass-panel"
                    style={{
                      padding: '1.5rem',
                      cursor: 'pointer',
                      borderRadius: '16px',
                      border: isSelected ? '2px solid #34D399' : '1px solid rgba(255,255,255,0.12)',
                      background: isSelected ? 'linear-gradient(135deg, rgba(26, 46, 34, 0.95) 0%, rgba(15, 25, 18, 0.9) 100%)' : 'rgba(255,255,255,0.03)',
                      boxShadow: isSelected ? '0 0 25px rgba(52, 211, 153, 0.25)' : 'none',
                      position: 'relative',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    {tier.popular && (
                      <span style={{
                        position: 'absolute',
                        top: '-12px',
                        right: '1.5rem',
                        background: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
                        color: '#042F2E',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        padding: '0.25rem 0.75rem',
                        borderRadius: '999px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        MOST POPULAR
                      </span>
                    )}

                    {/* TIER IMAGE PREVIEW CONTAINER */}
                    <div style={{
                      height: '140px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      marginBottom: '1rem',
                      background: '#040806',
                      border: isSelected ? '1px solid rgba(52, 211, 153, 0.4)' : '1px solid rgba(255,255,255,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative'
                    }}>
                      <img
                        src={tier.image || '/assets/tier-7-studio.png'}
                        alt={tier.name}
                        style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '0.4rem' }}
                      />
                      <span style={{
                        position: 'absolute',
                        bottom: '6px',
                        right: '6px',
                        background: 'rgba(0,0,0,0.75)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontSize: '0.725rem',
                        color: '#34D399',
                        fontWeight: 700
                      }}>
                        {tier.heightMeter} m Tall
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.35rem', color: '#ffffff' }}>
                      {tier.name}
                    </h4>
                    <p style={{ fontSize: '0.825rem', color: '#9CA3AF', marginBottom: '1rem', minHeight: '38px' }}>
                      {tier.subtitle}
                    </p>

                    <div style={{ padding: '0.65rem 0.85rem', background: 'rgba(0,0,0,0.3)', borderRadius: '10px', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                        <span style={{ color: '#9CA3AF' }}>Growing Sites:</span>
                        <strong style={{ color: '#34D399' }}>{tier.growSites} Sites</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                        <span style={{ color: '#9CA3AF' }}>Tower Height:</span>
                        <strong style={{ color: '#ffffff' }}>{tier.heightMeter} m</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                        <span style={{ color: '#9CA3AF' }}>Footprint:</span>
                        <strong style={{ color: '#ffffff' }}>{tier.footprint}</strong>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                      <span style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff' }}>
                        ${isCompleteKit ? tier.completeKitPrice : tier.basePrice}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>AUD (GST Inc.)</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* STEP 2: SELECT PACKAGE LEVEL */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#34D399', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Step 2: Choose Package Inclusion Level
            </h3>

            <div className="grid-2" style={{ gap: '1.5rem' }}>
              {/* STANDARD BASE */}
              <div
                onClick={() => handleSelectPackageType(false)}
                className="glass-panel"
                style={{
                  padding: '1.5rem',
                  cursor: 'pointer',
                  borderRadius: '14px',
                  border: !isCompleteKit ? '2px solid #34D399' : '1px solid rgba(255,255,255,0.1)',
                  background: !isCompleteKit ? 'rgba(52, 211, 153, 0.08)' : 'rgba(255,255,255,0.02)',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'center'
                }}
              >
                <div style={{ width: '110px', height: '110px', flexShrink: 0, borderRadius: '10px', overflow: 'hidden', background: '#040806', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <img src="/assets/package-base-hardware.png" alt="Standard Base Package" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>Standard Base Tower</h4>
                    <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
                      ${selectedTier.basePrice} AUD
                    </span>
                  </div>
                  <p style={{ fontSize: '0.825rem', color: '#9CA3AF', marginBottom: '0.75rem' }}>
                    Includes modular tower sections, 38L reservoir base, and submerged low-voltage DC water circulation pump.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.8rem', color: '#D1D5DB' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Check size={13} color="#34D399" />
                      <span>Modular vertical tower ({selectedTier.growSites} sites)</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Check size={13} color="#34D399" />
                      <span>38L heavy-duty water reservoir</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Check size={13} color="#34D399" />
                      <span>Low-voltage DC circulation pump & automated timer</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* COMPLETE STARTER KIT */}
              <div
                onClick={() => handleSelectPackageType(true)}
                className="glass-panel"
                style={{
                  padding: '1.5rem',
                  cursor: 'pointer',
                  borderRadius: '14px',
                  border: isCompleteKit ? '2px solid #34D399' : '1px solid rgba(255,255,255,0.1)',
                  background: isCompleteKit ? 'rgba(52, 211, 153, 0.12)' : 'rgba(255,255,255,0.02)',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'center',
                  position: 'relative'
                }}
              >
                <div style={{ width: '110px', height: '110px', flexShrink: 0, borderRadius: '10px', overflow: 'hidden', background: '#040806', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <img src="/assets/complete-kit.jpg" alt="Complete Growing Kit" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <div>
                      <span style={{ fontSize: '0.675rem', color: '#34D399', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
                        RECOMMENDED (+$100 AUD)
                      </span>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>Complete Growing Kit</h4>
                    </div>
                    <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#34D399' }}>
                      ${selectedTier.completeKitPrice} AUD
                    </span>
                  </div>
                  <p style={{ fontSize: '0.825rem', color: '#9CA3AF', marginBottom: '0.75rem' }}>
                    Everything in Base PLUS organic-compatible nutrients, propagation dome, seedling plugs, and pH testing kit.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.8rem', color: '#D1D5DB' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Check size={13} color="#34D399" />
                      <span>Base Tower + 38L Reservoir & DC Pump</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Check size={13} color="#34D399" />
                      <span>Organic A+B liquid nutrient concentrate (1L)</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Check size={13} color="#34D399" />
                      <span>50x coco seedling plugs + nursery tray & dome</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Check size={13} color="#34D399" />
                      <span>Precision pH testing liquid kit & buffer solution</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 3: OPTIONAL ADDONS */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#34D399', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Step 3: Optional System Accessories
            </h3>

            <div className="grid-2" style={{ gap: '1.25rem' }}>
              {B2C_ADDONS.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => handleToggleAddon(addon.id)}
                    className="glass-panel"
                    style={{
                      padding: '1.25rem',
                      cursor: 'pointer',
                      borderRadius: '12px',
                      border: isSelected ? '1px solid #34D399' : '1px solid rgba(255,255,255,0.08)',
                      background: isSelected ? 'rgba(52, 211, 153, 0.08)' : 'rgba(255,255,255,0.02)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}
                  >
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '6px',
                      border: isSelected ? '2px solid #34D399' : '2px solid rgba(255,255,255,0.3)',
                      background: isSelected ? '#34D399' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#000000',
                      flexShrink: 0
                    }}>
                      {isSelected && <Check size={16} strokeWidth={3} />}
                    </div>

                    {addon.image && (
                      <div style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        background: '#040806',
                        border: '1px solid rgba(255,255,255,0.1)',
                        flexShrink: 0
                      }}>
                        <img src={addon.image} alt={addon.name} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '2px' }} />
                      </div>
                    )}

                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <strong style={{ color: '#ffffff', fontSize: '0.95rem' }}>{addon.name}</strong>
                        <span style={{ color: '#34D399', fontWeight: 700, fontSize: '0.95rem' }}>+${addon.price} AUD</span>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: '#9CA3AF', marginTop: '0.2rem' }}>
                        {addon.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CHECKOUT SUMMARY BAR */}
          <div className="glass-panel" style={{
            padding: '2rem',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(26, 46, 34, 0.98) 0%, rgba(15, 25, 18, 0.95) 100%)',
            border: '1px solid rgba(52, 211, 153, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '10px', overflow: 'hidden', background: '#040806', border: '1px solid rgba(52, 211, 153, 0.3)', flexShrink: 0 }}>
                <img src={activeConfigImg} alt="Selected configuration" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '3px' }} />
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', color: '#A7F3D0', fontWeight: 600, display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  YOUR CUSTOMIZED HOME SYSTEM
                </span>
                <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginTop: '0.2rem' }}>
                  {selectedTier.name} ({isCompleteKit ? 'Complete Kit' : 'Base'})
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#9CA3AF', marginTop: '0.2rem' }}>
                  {selectedTier.growSites} grow sites • {selectedTier.heightMeter} m tall • {selectedAddons.length > 0 ? `${selectedAddons.length} accessory selected` : 'Standard setup'} • Australia-wide dispatch
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.8rem', color: '#9CA3AF', display: 'block' }}>TOTAL INVESTMENT</span>
                <span style={{ fontSize: '2.4rem', fontWeight: 900, color: '#34D399', lineHeight: 1 }}>
                  ${totalPrice}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#9CA3AF', display: 'block', marginTop: '0.2rem' }}>
                  AUD GST Inclusive
                </span>
              </div>

              <button
                onClick={() => {
                  const tierIdMap: Record<string, 'tier-5' | 'tier-7' | 'tier-11'> = {
                    '5-tier': 'tier-5',
                    '7-tier': 'tier-7',
                    '11-tier': 'tier-11',
                  };
                  const checkout = buildShopifyCheckoutUrl({
                    tierId: tierIdMap[selectedTier.id] || 'tier-7',
                    packageType: isCompleteKit ? 'kit' : 'base',
                    hasLedLights: selectedAddons.includes('led-lighting'),
                    hasPlantSupports: selectedAddons.includes('trellis-cages'),
                  });
                  if (checkout.isLive) {
                    window.location.href = checkout.url;
                  } else {
                    window.open(checkout.url, '_blank', 'noopener,noreferrer');
                  }
                }}
                className="btn-primary"
                style={{ padding: '1rem 2.25rem', fontSize: '1.1rem' }}
              >
                <ShoppingCart size={20} />
                Order Home System
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* HARDWARE VALUE & SPECIFICATIONS */}
      <section style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            <span className="badge-emerald" style={{ marginBottom: '0.75rem' }}>MATERIAL & HARDWARE INTEGRITY</span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Engineered For Lifelong Home Growing
            </h2>
            <p style={{ color: '#9CA3AF' }}>
              No flimsy plastic pots or dangerous wiring. AeroHarvest hardware is built with food-grade UV-stabilized polymer materials designed for Australian weather conditions.
            </p>
          </div>

          <div className="grid-4" style={{ gap: '1.25rem' }}>
            <div className="glass-panel" style={{ padding: '1.25rem' }}>
              <ShieldCheck size={24} color="#34D399" style={{ marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem' }}>Food-Grade Polymer</h4>
              <p style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>Constructed with BPA-free, non-toxic food-grade polymer housing that will not leach chemicals under Australian sun.</p>
            </div>

            <div className="glass-panel" style={{ padding: '1.25rem' }}>
              <RefreshCw size={24} color="#34D399" style={{ marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem' }}>Closed-Loop Circulation</h4>
              <p style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>38-Litre heavy-duty reservoir continuously recirculates water mist straight to suspended roots without waste.</p>
            </div>

            <div className="glass-panel" style={{ padding: '1.25rem' }}>
              <Zap size={24} color="#34D399" style={{ marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem' }}>Low-Voltage DC Pump</h4>
              <p style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>Safe 12V/24V DC submerged pump with automated digital timer. Uses less electricity than a standard LED light bulb.</p>
            </div>

            <div className="glass-panel" style={{ padding: '1.25rem' }}>
              <Award size={24} color="#34D399" style={{ marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem' }}>Modular Interlocking</h4>
              <p style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>Tool-free stackable modular sections. Add or remove tiers easily as your household crop requirements expand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NASA & SPACE RESEARCH STORY SECTION WITH AUTHENTIC NASA LAB & MISTING IMAGES */}
      <section style={{
        padding: '4.5rem 0',
        background: "linear-gradient(180deg, rgba(11, 19, 14, 0.88) 0%, rgba(16, 28, 21, 0.94) 100%), url('/assets/nasa-lab-bg.jpg') center/cover no-repeat",
        borderTop: '1px solid rgba(255,255,255,0.06)'
      }}>
        <div className="container">
          <div className="glass-panel" style={{ padding: '3rem', borderRadius: '24px', border: '1px solid rgba(52, 211, 153, 0.3)' }}>
            <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
              <div>
                <span className="badge-emerald" style={{ marginBottom: '1rem', background: 'rgba(52, 211, 153, 0.15)' }}>
                  INSPIRATIONAL SCIENCE STORY
                </span>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                  From Space Research To Your Backyard.
                </h2>

                <p style={{ fontSize: '1.05rem', color: '#D1D5DB', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  NASA and international research partners have spent decades investigating soilless aeroponic and hydroponic growing systems for space agriculture. The reason is simple: when astronauts are aboard the International Space Station or deep space missions, they face severe constraints — <strong>limited space, limited water, and no soil.</strong>
                </p>

                <p style={{ fontSize: '1.05rem', color: '#D1D5DB', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  AeroHarvest does not claim to be space station hardware. But the core engineering principle is identical: by misting nutrient-rich water directly onto plant roots suspended in air, aeroponics maximizes oxygen delivery and crop density while drastically reducing footprint.
                </p>

                <div style={{ padding: '1.25rem 1.5rem', background: 'rgba(0,0,0,0.4)', borderRadius: '12px', borderLeft: '4px solid #34D399', fontSize: '1.1rem', fontWeight: 600, color: '#A7F3D0' }}>
                  "If we can investigate growing fresh food in space, imagine what we can harvest on an Australian balcony."
                </div>
              </div>

              <div>
                <div className="glass-panel" style={{ padding: '0.75rem', borderRadius: '18px' }}>
                  <img
                    src="/assets/misting-roots.jpg"
                    alt="Aeroponic misting suspended roots"
                    style={{ width: '100%', height: '340px', objectFit: 'cover', borderRadius: '12px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2C ROI CALCULATOR INTEGRATION */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <B2C_ROICalculator />
        </div>
      </section>
    </div>
  );
};
