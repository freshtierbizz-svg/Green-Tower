import React, { useState } from 'react';
import { B2CTierOption, B2CPackageAddon } from '../../types/storefront';
import { B2C_TIERS, B2C_ADDONS } from '../../config/storefrontConfig';
import {
  Check,
  ShieldCheck,
  Truck,
  Sparkles,
  ArrowRight,
  Info,
  CheckCircle2,
  Maximize2,
  HelpCircle,
  ShoppingBag,
  Leaf
} from 'lucide-react';

interface ConfiguratorPilot2Props {
  onProceedToCheckout?: (config: any) => void;
}

export const ConfiguratorPilot2: React.FC<ConfiguratorPilot2Props> = ({
  onProceedToCheckout,
}) => {
  const [selectedTier, setSelectedTier] = useState<B2CTierOption>(B2C_TIERS[1]); // Default 7-tier
  const [isCompleteKit, setIsCompleteKit] = useState<boolean>(true); // Default recommended complete kit
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [activeVisualizerImg, setActiveVisualizerImg] = useState<string>('assets/tier-7-studio.png');
  const [showHeightScaleModal, setShowHeightScaleModal] = useState<boolean>(false);

  // Consistent Product Photography Set (Priority 3: Consistent set showing tower, components, real home scale, and crops)
  const productGallery = [
    {
      id: 'tier-current',
      src: selectedTier.image || 'assets/tier-7-studio.png',
      title: `${selectedTier.name} (Height & Structure)`,
      caption: `Real Studio View: ${selectedTier.name} (${selectedTier.heightMeter}m)`
    },
    {
      id: 'scale-all',
      src: 'assets/tier-comparison-all.jpg',
      title: 'Full Height Lineup Comparison',
      caption: 'Side-by-side scale comparison of 5, 7, and 11-section heights'
    },
    {
      id: 'hardware-unboxed',
      src: 'assets/package-base-hardware.png',
      title: 'Unboxed System Hardware Components',
      caption: '38L Reservoir tub, modular tiers, low-voltage DC pump & timer'
    },
    {
      id: 'consumables-pack',
      src: 'assets/complete-kit.jpg',
      title: 'Complete Starter Consumables Kit',
      caption: '1L A+B nutrients, 50 coco plugs, nursery dome tray & pH tester'
    },
    {
      id: 'balcony-lifestyle',
      src: 'assets/balcony-person.jpg',
      title: 'Scale on Australian Balcony',
      caption: 'Real home setup on apartment timber balcony in Melbourne'
    },
    {
      id: 'crop-harvest',
      src: 'assets/real-tower-close.jpg',
      title: 'Living Crop Maturity in Pods',
      caption: 'Fresh oakleaf lettuce, herbs & strawberries ready to harvest'
    }
  ];

  // Price Calculation
  const basePrice = isCompleteKit ? selectedTier.completeKitPrice : selectedTier.basePrice;
  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = B2C_ADDONS.find((a) => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);
  const grandTotal = basePrice + addonsTotal;

  // Option Handlers with dynamic image updates
  const handleSelectTier = (tier: B2CTierOption) => {
    setSelectedTier(tier);
    if (tier.id === '5-tier') {
      setActiveVisualizerImg('assets/tier-comparison-all.jpg');
    } else if (tier.id === '11-tier') {
      setActiveVisualizerImg('assets/tier-11-commercial.png');
    } else {
      setActiveVisualizerImg('assets/tier-7-studio.png');
    }
  };

  const handleSelectPackageType = (complete: boolean) => {
    setIsCompleteKit(complete);
    if (complete) {
      setActiveVisualizerImg('assets/complete-kit.jpg');
    } else {
      setActiveVisualizerImg('assets/package-base-hardware.png');
    }
  };

  const handleToggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
      if (addonId === 'led-lighting') {
        setActiveVisualizerImg('assets/addon-led-lights.png');
      }
    }
  };

  const handleCheckoutClick = () => {
    if (onProceedToCheckout) {
      onProceedToCheckout({
        tier: selectedTier,
        isCompleteKit,
        selectedAddons,
        total: grandTotal,
      });
    } else {
      const summaryElem = document.getElementById('checkout-action');
      if (summaryElem) {
        summaryElem.scrollIntoView({ behavior: 'smooth' });
      }
      alert(`Order Configuration: ${selectedTier.name} (${isCompleteKit ? 'Complete Starter Kit' : 'Base Hardware'})\nTotal: $${grandTotal} AUD (GST Inc.)\nDispatch: 24–48h from Melbourne warehouse.\n\nProceeding to secure checkout...`);
    }
  };

  return (
    <section
      id="b2c-configurator"
      style={{
        padding: 'clamp(4rem, 7vw, 6.5rem) 0',
        background: '#FFFFFF',
        borderBottom: '1px solid rgba(27, 67, 50, 0.08)',
      }}
    >
      <div className="container">
        {/* SECTION HEADER (Priority 5: Clear Shopping Path) */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <span
            className="pilot2-badge"
            style={{ marginBottom: '1rem', background: '#EEF4EE', border: '1px solid #D4E3D6' }}
          >
            <Sparkles size={13} color="#2D6A4F" />
            <span>CUSTOMISE YOUR SETUP</span>
          </span>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
              fontWeight: 800,
              color: '#142018',
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              lineHeight: 1.15,
            }}
          >
            Choose Your AeroHarvest Home System
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#495B50', lineHeight: 1.6 }}>
            Select your tower height, choose your package inclusion level, and add optional accessories. All prices include 10% Australian GST and free Victoria express shipping.
          </p>
        </div>

        {/* MAIN CONFIGURATOR GRID: 2-COLUMN WITH ALWAYS-VISIBLE SUMMARY (Priority 5) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.35fr) minmax(320px, 0.95fr)',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="configurator-main-grid"
        >
          {/* LEFT COLUMN: VISUALIZER + SELECTION STEPS */}
          <div>
            {/* 1. CONSISTENT PRODUCT VISUALIZER (Priority 3) */}
            <div
              className="pilot2-card"
              style={{
                padding: '1.5rem',
                marginBottom: '2.5rem',
                background: '#FAF9F5',
                border: '1px solid rgba(27, 67, 50, 0.1)',
              }}
            >
              <div
                style={{
                  height: '380px',
                  borderRadius: '12px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(27, 67, 50, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  marginBottom: '1rem',
                }}
              >
                <img
                  src={activeVisualizerImg}
                  alt={selectedTier.name}
                  style={{
                    maxWidth: '92%',
                    maxHeight: '92%',
                    objectFit: 'contain',
                    transition: 'all 0.3s ease',
                  }}
                />

                {/* CURRENT SELECTION BADGES */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                  }}
                >
                  <span
                    style={{
                      background: '#1B4332',
                      color: '#FFFFFF',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.03em',
                    }}
                  >
                    {selectedTier.name} ({selectedTier.heightMeter}m)
                  </span>

                  <span
                    style={{
                      background: isCompleteKit ? '#2D6A4F' : '#E5E7EB',
                      color: isCompleteKit ? '#FFFFFF' : '#374151',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      fontSize: '0.725rem',
                      fontWeight: 600,
                    }}
                  >
                    {isCompleteKit ? '✓ Complete Starter Kit' : 'Standard Base Hardware'}
                  </span>
                </div>

                {/* EXPAND HEIGHT SCALE BUTTON */}
                <button
                  type="button"
                  onClick={() => setActiveVisualizerImg('assets/tier-comparison-all.jpg')}
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(27, 67, 50, 0.2)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#1B4332',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <Maximize2 size={12} />
                  <span>View Height Lineup Chart</span>
                </button>
              </div>

              {/* CONSISTENT PRODUCT GALLERY SWITCHER (Priority 3) */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(6, 1fr)',
                  gap: '0.5rem',
                }}
              >
                {productGallery.map((item) => {
                  const isActive = activeVisualizerImg === item.src;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveVisualizerImg(item.src)}
                      title={item.title}
                      style={{
                        height: '62px',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: isActive ? '2px solid #1B4332' : '1px solid rgba(27, 67, 50, 0.12)',
                        background: '#FFFFFF',
                        opacity: isActive ? 1 : 0.65,
                        transition: 'all 0.2s ease',
                        padding: '2px',
                      }}
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* STEP 1: SELECT TOWER HEIGHT WITH "BEST FOR" GUIDE (Priority 5) */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#2D6A4F', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    STEP 1 OF 3
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#142018' }}>
                    Select Tower Height & Plant Capacity
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveVisualizerImg('assets/tier-comparison-all.jpg')}
                  style={{
                    background: '#EEF4EE',
                    border: '1px solid #D4E3D6',
                    color: '#1B4332',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  📊 Height Scale Guide
                </button>
              </div>

              {/* 3 TIER CARDS WITH "BEST FOR" GUIDANCE */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {B2C_TIERS.map((tier) => {
                  const isSelected = selectedTier.id === tier.id;
                  const priceToDisplay = isCompleteKit ? tier.completeKitPrice : tier.basePrice;

                  // Clear "Best For" Descriptions (Priority 5)
                  const bestForGuide =
                    tier.id === '5-tier'
                      ? 'Best for singles, couples, small balconies & cocktail herbs.'
                      : tier.id === '7-tier'
                      ? '⭐ Best for 2–4 people, daily salad greens & family herb rotation.'
                      : 'Best for 4+ people, high-yield salad production & serious home harvesting.';

                  return (
                    <div
                      key={tier.id}
                      onClick={() => handleSelectTier(tier)}
                      className="pilot2-card"
                      style={{
                        padding: '1.25rem 1.5rem',
                        cursor: 'pointer',
                        borderRadius: '14px',
                        border: isSelected ? '2px solid #1B4332' : '1px solid rgba(27, 67, 50, 0.1)',
                        background: isSelected ? '#F4F8F4' : '#FFFFFF',
                        boxShadow: isSelected ? '0 6px 20px -2px rgba(27, 67, 50, 0.12)' : 'none',
                        position: 'relative',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {tier.popular && (
                        <span
                          className="pilot2-badge"
                          style={{
                            position: 'absolute',
                            top: '-10px',
                            right: '1.5rem',
                            background: '#1B4332',
                            color: '#FFFFFF',
                            borderColor: '#1B4332',
                            fontSize: '0.725rem',
                          }}
                        >
                          MOST POPULAR CHOICE
                        </span>
                      )}

                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                          {/* RADIO SELECTOR */}
                          <div
                            style={{
                              width: '22px',
                              height: '22px',
                              borderRadius: '50%',
                              border: isSelected ? '6px solid #1B4332' : '2px solid #9CA3AF',
                              background: '#FFFFFF',
                              flexShrink: 0,
                            }}
                          />

                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.2rem' }}>
                              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#142018' }}>
                                {tier.name}
                              </h4>
                              <span
                                style={{
                                  background: '#EEF4EE',
                                  color: '#1B4332',
                                  padding: '2px 8px',
                                  borderRadius: '6px',
                                  fontSize: '0.75rem',
                                  fontWeight: 700,
                                }}
                              >
                                {tier.heightMeter} m tall • {tier.growSites} sites
                              </span>
                            </div>

                            <p style={{ fontSize: '0.85rem', color: '#495B50', marginBottom: '0.25rem' }}>
                              {bestForGuide}
                            </p>

                            <div style={{ fontSize: '0.775rem', color: '#6B7C72' }}>
                              Footprint: 60 × 60 cm (0.22 m²) • 38L Reservoir Base
                            </div>
                          </div>
                        </div>

                        {/* PRICE DISPLAY */}
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#142018' }}>
                            ${priceToDisplay}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#6B7C72' }}>
                            AUD GST Inc.
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: PLAIN ENGLISH PACKAGE COMPARISON (Priority 5: Explain Base vs Kit plainly) */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#2D6A4F', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  STEP 2 OF 3
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#142018' }}>
                  Choose Your Package Inclusion Level
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#495B50' }}>
                  Decide between bare-bones hardware or the complete starter kit with nutrients and propagation dome.
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.25rem',
                }}
              >
                {/* 1. STANDARD BASE TOWER */}
                <div
                  onClick={() => handleSelectPackageType(false)}
                  className="pilot2-card"
                  style={{
                    padding: '1.5rem',
                    cursor: 'pointer',
                    borderRadius: '16px',
                    border: !isCompleteKit ? '2px solid #1B4332' : '1px solid rgba(27, 67, 50, 0.1)',
                    background: !isCompleteKit ? '#F4F8F4' : '#FFFFFF',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#142018' }}>
                      Standard Base Tower
                    </h4>
                    <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#142018' }}>
                      ${selectedTier.basePrice} <span style={{ fontSize: '0.8rem', fontWeight: 500, color: '#6B7C72' }}>AUD</span>
                    </span>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: '#495B50', lineHeight: 1.5, marginBottom: '1rem', minHeight: '40px' }}>
                    <strong>The complete mechanical hardware.</strong> Best if you already own your own hydroponic nutrients, seedlings, and testing meters.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.825rem', color: '#27382F' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Check size={14} color="#1B4332" />
                      <span>Modular food-grade white tiers ({selectedTier.growSites} grow sites)</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Check size={14} color="#1B4332" />
                      <span>38L heavy-duty sealed sage green water reservoir</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Check size={14} color="#1B4332" />
                      <span>Submerged low-voltage DC water circulation pump</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Check size={14} color="#1B4332" />
                      <span>Automated programmable digital timer switch</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Check size={14} color="#1B4332" />
                      <span>{selectedTier.growSites} reusable food-grade net grow cups</span>
                    </div>
                  </div>
                </div>

                {/* 2. COMPLETE GROWING KIT (RECOMMENDED) */}
                <div
                  onClick={() => handleSelectPackageType(true)}
                  className="pilot2-card"
                  style={{
                    padding: '1.5rem',
                    cursor: 'pointer',
                    borderRadius: '16px',
                    border: isCompleteKit ? '2px solid #1B4332' : '1px solid rgba(27, 67, 50, 0.1)',
                    background: isCompleteKit ? '#F4F8F4' : '#FFFFFF',
                    boxShadow: isCompleteKit ? '0 8px 24px -3px rgba(27, 67, 50, 0.12)' : 'none',
                    position: 'relative',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span
                    className="pilot2-badge"
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '1.5rem',
                      background: '#1B4332',
                      color: '#FFFFFF',
                      borderColor: '#1B4332',
                      fontSize: '0.725rem',
                    }}
                  >
                    RECOMMENDED (+$100 AUD)
                  </span>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#142018' }}>
                      Complete Growing Kit
                    </h4>
                    <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#1B4332' }}>
                      ${selectedTier.completeKitPrice} <span style={{ fontSize: '0.8rem', fontWeight: 500, color: '#6B7C72' }}>AUD</span>
                    </span>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: '#495B50', lineHeight: 1.5, marginBottom: '1rem', minHeight: '40px' }}>
                    <strong>Everything in Base PLUS all living consumables.</strong> Recommended for 95% of first-time growers to begin harvesting Day 1.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.825rem', color: '#27382F' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontWeight: 600 }}>
                      <Check size={14} color="#1B4332" />
                      <span>All Standard Base Tower hardware included</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#1B4332', fontWeight: 600 }}>
                      <Check size={14} color="#1B4332" />
                      <span>1L AeroHarvest Premium A+B Liquid Nutrients</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#1B4332', fontWeight: 600 }}>
                      <Check size={14} color="#1B4332" />
                      <span>50x organic coco-coir seedling propagation plugs</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#1B4332', fontWeight: 600 }}>
                      <Check size={14} color="#1B4332" />
                      <span>Seedling nursery tray + clear humidity dome</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#1B4332', fontWeight: 600 }}>
                      <Check size={14} color="#1B4332" />
                      <span>Precision water pH testing liquid kit & calibration buffer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 3: OPTIONAL ADD-ONS */}
            <div>
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#2D6A4F', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  STEP 3 OF 3
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#142018' }}>
                  Optional System Accessories
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {B2C_ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => handleToggleAddon(addon.id)}
                      className="pilot2-card"
                      style={{
                        padding: '1.25rem 1.5rem',
                        cursor: 'pointer',
                        borderRadius: '14px',
                        border: isChecked ? '2px solid #1B4332' : '1px solid rgba(27, 67, 50, 0.1)',
                        background: isChecked ? '#F4F8F4' : '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div
                          style={{
                            width: '22px',
                            height: '22px',
                            borderRadius: '6px',
                            border: isChecked ? 'none' : '2px solid #9CA3AF',
                            background: isChecked ? '#1B4332' : '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          {isChecked && <Check size={15} color="#FFFFFF" />}
                        </div>

                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#142018' }}>
                              {addon.name}
                            </h4>
                            <span style={{ fontWeight: 800, color: '#1B4332', fontSize: '0.95rem' }}>
                              +${addon.price} AUD
                            </span>
                          </div>
                          <p style={{ fontSize: '0.825rem', color: '#6B7C72' }}>
                            {addon.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ALWAYS-VISIBLE ORDER SUMMARY (Priority 5) */}
          <div style={{ position: 'sticky', top: '95px' }} id="checkout-action">
            <div
              className="pilot2-card"
              style={{
                padding: '2rem',
                borderRadius: '20px',
                border: '1.5px solid rgba(27, 67, 50, 0.15)',
                boxShadow: '0 12px 36px -6px rgba(27, 67, 50, 0.12)',
                background: '#FFFFFF',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <ShoppingBag size={20} color="#1B4332" />
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#142018' }}>
                  Your Order Summary
                </h3>
              </div>

              {/* ITEM SPECIFICATION */}
              <div style={{ paddingBottom: '1.25rem', borderBottom: '1px solid rgba(27, 67, 50, 0.1)', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.35rem' }}>
                  <span style={{ fontWeight: 700, color: '#142018', fontSize: '1rem' }}>
                    {selectedTier.name}
                  </span>
                  <span style={{ fontWeight: 700, color: '#142018' }}>
                    ${selectedTier.basePrice} AUD
                  </span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#6B7C72' }}>
                  {selectedTier.growSites} grow sites • {selectedTier.heightMeter}m tall • 60 × 60 cm footprint
                </div>

                {isCompleteKit && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px dashed rgba(27, 67, 50, 0.1)' }}>
                    <div>
                      <span style={{ fontWeight: 700, color: '#1B4332', fontSize: '0.9rem', display: 'block' }}>
                        + Complete Starter Kit Upgrade
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#6B7C72' }}>
                        1L nutrients, 50 plugs, humidity dome, pH tester
                      </span>
                    </div>
                    <span style={{ fontWeight: 700, color: '#1B4332', fontSize: '0.9rem' }}>
                      +$100 AUD
                    </span>
                  </div>
                )}

                {selectedAddons.map((addonId) => {
                  const addon = B2C_ADDONS.find((a) => a.id === addonId);
                  if (!addon) return null;
                  return (
                    <div
                      key={addon.id}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        marginTop: '0.5rem',
                        fontSize: '0.85rem',
                      }}
                    >
                      <span style={{ color: '#37473E' }}>+ {addon.name}</span>
                      <span style={{ fontWeight: 700, color: '#142018' }}>+${addon.price} AUD</span>
                    </div>
                  );
                })}
              </div>

              {/* SHIPPING & DISPATCH GUARANTEE */}
              <div
                style={{
                  background: '#EEF4EE',
                  padding: '0.85rem 1rem',
                  borderRadius: '10px',
                  marginBottom: '1.5rem',
                  fontSize: '0.8rem',
                  color: '#1B4332',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontWeight: 700 }}>
                  <Truck size={14} color="#2D6A4F" />
                  <span>Free Victoria Metro Express Shipping</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <ShieldCheck size={14} color="#2D6A4F" />
                  <span>2-Year Australian Replacement Warranty</span>
                </div>
              </div>

              {/* TOTAL AMOUNT */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.5rem' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: '#6B7C72', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Total Investment (GST Inc.)
                  </span>
                  <div style={{ fontSize: '2.3rem', fontWeight: 800, color: '#142018', lineHeight: 1 }}>
                    ${grandTotal}{' '}
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#6B7C72' }}>AUD</span>
                  </div>
                </div>
              </div>

              {/* CHECKOUT ACTION BUTTON */}
              <button
                type="button"
                onClick={handleCheckoutClick}
                className="pilot2-btn-primary"
                style={{
                  width: '100%',
                  padding: '1.15rem',
                  fontSize: '1.05rem',
                  borderRadius: '14px',
                  marginBottom: '1rem',
                }}
              >
                <span>Proceed to Secure Checkout</span>
                <ArrowRight size={17} />
              </button>

              <div style={{ textAlign: 'center', fontSize: '0.75rem', color: '#6B7C72' }}>
                Dispatched from Melbourne warehouse within 24–48 hours. Covered by Australian Consumer Law.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
