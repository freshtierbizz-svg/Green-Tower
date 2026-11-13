import React, { useState } from 'react';
import { B2CTierOption, B2CPackageAddon } from '../../types/storefront';
import { B2C_TIERS, B2C_ADDONS, STORE_META } from '../../config/storefrontConfig';
import { buildShopifyCheckoutUrl } from '../../config/product.config';
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
  Leaf,
  X
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
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
  const [orderSubmitted, setOrderSubmitted] = useState<boolean>(false);
  const [orderReference, setOrderReference] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerPostcode, setCustomerPostcode] = useState<string>('');
  const [customerNotes, setCustomerNotes] = useState<string>('');

  // Consistent Product Photography Set (Priority 3: Consistent set showing tower, components, real home scale, and crops)
  const productGallery = [
    {
      id: 'tier-current',
      src: selectedTier.image || 'assets/tier-7-studio.png',
      title: `${selectedTier.name} (Height & Structure)`,
      caption: `Real Studio View: ${selectedTier.name} (${selectedTier.heightCm} cm / ${selectedTier.heightMeter} m)`
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

  const tierIdMap: Record<string, 'tier-5' | 'tier-7' | 'tier-11'> = {
    '5-tier': 'tier-5',
    '7-tier': 'tier-7',
    '11-tier': 'tier-11',
  };

  const checkoutLink = buildShopifyCheckoutUrl({
    tierId: tierIdMap[selectedTier.id] || 'tier-7',
    packageType: isCompleteKit ? 'kit' : 'base',
    hasLedLights: selectedAddons.includes('led-lighting'),
    hasPlantSupports: selectedAddons.includes('trellis-support'),
  });

  const handleCheckoutClick = () => {
    if (onProceedToCheckout) {
      onProceedToCheckout({
        tier: selectedTier,
        isCompleteKit,
        selectedAddons,
        total: grandTotal,
      });
      return;
    }

    if (checkoutLink.isLive) {
      window.location.href = checkoutLink.url;
      return;
    }

    setOrderSubmitted(false);
    setIsOrderModalOpen(true);
  };

  const handleOrderEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refId = `FT-${Date.now().toString().slice(-6)}`;
    setOrderReference(refId);

    const selectedAddonNames = selectedAddons
      .map((id) => {
        const a = B2C_ADDONS.find((item) => item.id === id);
        return a ? `${a.name} (+A$${a.price})` : id;
      })
      .join(', ');

    const orderRecord = {
      referenceId: refId,
      createdAt: new Date().toISOString(),
      tier: selectedTier.name,
      package: isCompleteKit ? 'Complete Growing Kit' : 'Standard Base Hardware',
      addons: selectedAddonNames || 'None',
      totalAUD: grandTotal,
      customerName,
      customerEmail,
      customerPhone,
      customerPostcode,
      customerNotes,
    };

    try {
      const existing = JSON.parse(localStorage.getItem('freshtier_b2c_orders') || '[]');
      localStorage.setItem('freshtier_b2c_orders', JSON.stringify([orderRecord, ...existing]));
    } catch {
      // Ignore storage errors in restricted environments
    }

    setOrderSubmitted(true);
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
            Choose Your FreshTier Home System
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#495B50', lineHeight: 1.6 }}>
            Select your tower height, choose your package inclusion level, and add optional accessories. All prices include 10% Australian GST and free Melbourne metro delivery (24–48h dispatch).
          </p>
        </div>

        {/* MAIN CONFIGURATOR GRID: 2-COLUMN DESKTOP, STACKED MOBILE (Priority 5) */}
        <div className="configurator-main-grid">
          {/* LEFT COLUMN: VISUALIZER + SELECTION STEPS */}
          <div style={{ minWidth: 0 }}>
            {/* 1. CONSISTENT PRODUCT VISUALIZER (Priority 3) */}
            <div
              className="pilot2-card"
              style={{
                padding: 'clamp(0.85rem, 2.5vw, 1.5rem)',
                marginBottom: '2rem',
                background: '#FAF9F5',
                border: '1px solid rgba(27, 67, 50, 0.1)',
              }}
            >
              <div
                style={{
                  height: 'clamp(260px, 62vw, 380px)',
                  width: '100%',
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
                    width: '100%',
                    height: '100%',
                    padding: '0.5rem',
                    objectFit: 'contain',
                    transition: 'all 0.3s ease',
                  }}
                />

                {/* CURRENT SELECTION BADGES */}
                <div
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                    maxWidth: 'calc(100% - 20px)',
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
                      letterSpacing: '0.02em',
                    }}
                  >
                    {selectedTier.name} ({selectedTier.heightCm} cm tall)
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

              {/* 3 TIER OPTIONS — NATIVE RADIO CONTROLS FOR KEYBOARD & MOBILE ACCESSIBILITY */}
              <div role="radiogroup" aria-label="Select Tower Height and Plant Capacity" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {B2C_TIERS.map((tier) => {
                  const isSelected = selectedTier.id === tier.id;
                  const priceToDisplay = isCompleteKit ? tier.completeKitPrice : tier.basePrice;

                  const bestForGuide =
                    tier.id === '5-tier'
                      ? 'Best for singles, couples, small balconies & cocktail herbs.'
                      : tier.id === '7-tier'
                      ? '⭐ Best for 2–4 people, daily salad greens & family herb rotation.'
                      : 'Best for 4+ people, high-yield salad production & serious home harvesting.';

                  return (
                    <label
                      key={tier.id}
                      htmlFor={`radio-tier-${tier.id}`}
                      className="pilot2-card"
                      style={{
                        display: 'block',
                        padding: isSelected ? '1.15rem 1.35rem' : '0.9rem 1.25rem',
                        cursor: 'pointer',
                        borderRadius: '12px',
                        border: isSelected ? '2px solid #1B4332' : '1px solid rgba(27, 67, 50, 0.12)',
                        background: isSelected ? '#F4F8F4' : '#FFFFFF',
                        boxShadow: isSelected ? '0 6px 20px -2px rgba(27, 67, 50, 0.12)' : 'none',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {/* COMPACT HEADER ROW: NATIVE RADIO + NAME + PRICE */}
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                          <input
                            id={`radio-tier-${tier.id}`}
                            type="radio"
                            name="tower-size"
                            value={tier.id}
                            checked={isSelected}
                            onChange={() => handleSelectTier(tier)}
                            style={{
                              width: '20px',
                              height: '20px',
                              accentColor: '#1B4332',
                              cursor: 'pointer',
                              flexShrink: 0,
                              margin: 0,
                            }}
                          />

                          <span style={{ fontSize: '1.05rem', fontWeight: 800, color: '#142018', margin: 0 }}>
                            {tier.name}
                          </span>

                          {tier.popular && (
                            <span
                              style={{
                                background: '#1B4332',
                                color: '#FFFFFF',
                                padding: '2px 8px',
                                borderRadius: '999px',
                                fontSize: '0.68rem',
                                fontWeight: 700,
                                letterSpacing: '0.04em',
                                textTransform: 'uppercase',
                              }}
                            >
                              Most Popular
                            </span>
                          )}
                        </div>

                        <div style={{ textAlign: 'right', flexShrink: 0 }}>
                          <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#142018' }}>
                            A${priceToDisplay}
                          </span>
                        </div>
                      </div>

                      {/* EXPANDED DETAILS (ONLY SHOWN WHEN SELECTED) */}
                      {isSelected && (
                        <div
                          style={{
                            marginTop: '0.85rem',
                            paddingTop: '0.85rem',
                            borderTop: '1px solid rgba(27, 67, 50, 0.12)',
                            paddingLeft: '2rem',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.45rem' }}>
                            <span
                              style={{
                                background: '#EEF4EE',
                                color: '#1B4332',
                                padding: '3px 9px',
                                borderRadius: '6px',
                                fontSize: '0.78rem',
                                fontWeight: 700,
                              }}
                            >
                              {tier.heightCm} cm ({tier.heightMeter} m) assembled height • {tier.growSites} grow sites
                            </span>
                          </div>

                          <div style={{ fontSize: '0.8rem', color: '#495B50', marginBottom: '0.4rem', lineHeight: 1.45 }}>
                            <strong>Base diameter:</strong> {tier.baseDiameterCm} cm (0.22 m² round 38L tub) ·{' '}
                            <strong>Recommended clear floor space:</strong> {tier.clearFloorSpace} (0.36 m²)
                          </div>

                          <p style={{ fontSize: '0.88rem', color: '#37473E', margin: 0, lineHeight: 1.5 }}>
                            {bestForGuide}
                          </p>
                        </div>
                      )}
                    </label>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: PACKAGE INCLUSION LEVEL — NATIVE RADIO CONTROLS */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#2D6A4F', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  STEP 2 OF 3
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#142018' }}>
                  Choose Your Package Inclusion Level
                </h3>
              </div>

              <div role="radiogroup" aria-label="Choose Your Package Inclusion Level" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {/* 1. STANDARD BASE TOWER */}
                <label
                  htmlFor="radio-package-base"
                  className="pilot2-card"
                  style={{
                    display: 'block',
                    padding: !isCompleteKit ? '1.15rem 1.35rem' : '0.9rem 1.25rem',
                    cursor: 'pointer',
                    borderRadius: '12px',
                    border: !isCompleteKit ? '2px solid #1B4332' : '1px solid rgba(27, 67, 50, 0.12)',
                    background: !isCompleteKit ? '#F4F8F4' : '#FFFFFF',
                    boxShadow: !isCompleteKit ? '0 6px 20px -2px rgba(27, 67, 50, 0.12)' : 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <input
                        id="radio-package-base"
                        type="radio"
                        name="package-type"
                        value="base"
                        checked={!isCompleteKit}
                        onChange={() => handleSelectPackageType(false)}
                        style={{
                          width: '20px',
                          height: '20px',
                          accentColor: '#1B4332',
                          cursor: 'pointer',
                          flexShrink: 0,
                          margin: 0,
                        }}
                      />
                      <span style={{ fontSize: '1.05rem', fontWeight: 800, color: '#142018', margin: 0 }}>
                        Standard Base Tower (Hardware Only)
                      </span>
                    </div>

                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#142018' }}>
                        A${selectedTier.basePrice}
                      </span>
                    </div>
                  </div>

                  {!isCompleteKit && (
                    <div
                      style={{
                        marginTop: '0.85rem',
                        paddingTop: '0.85rem',
                        borderTop: '1px solid rgba(27, 67, 50, 0.12)',
                        paddingLeft: '2rem',
                      }}
                    >
                      <p style={{ fontSize: '0.85rem', color: '#495B50', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                        <strong>The complete mechanical hardware.</strong> Best if you already own your own hydroponic nutrients, seedling plugs, and pH test kit. (Seeds and live plants are not included.)
                      </p>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.825rem', color: '#27382F' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                          <Check size={14} color="#1B4332" />
                          <span>Modular food-contact white ABS tiers ({selectedTier.growSites} grow sites)</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                          <Check size={14} color="#1B4332" />
                          <span>38L heavy-duty sealed sage green water reservoir (53 cm diameter)</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                          <Check size={14} color="#1B4332" />
                          <span>Submerged low-voltage DC water circulation pump (~12–15W)</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                          <Check size={14} color="#1B4332" />
                          <span>Automated programmable digital timer switch</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                          <Check size={14} color="#1B4332" />
                          <span>{selectedTier.growSites} reusable food-contact net grow cups</span>
                        </div>
                      </div>
                    </div>
                  )}
                </label>

                {/* 2. COMPLETE GROWING KIT (RECOMMENDED) */}
                <label
                  htmlFor="radio-package-kit"
                  className="pilot2-card"
                  style={{
                    display: 'block',
                    padding: isCompleteKit ? '1.15rem 1.35rem' : '0.9rem 1.25rem',
                    cursor: 'pointer',
                    borderRadius: '12px',
                    border: isCompleteKit ? '2px solid #1B4332' : '1px solid rgba(27, 67, 50, 0.12)',
                    background: isCompleteKit ? '#F4F8F4' : '#FFFFFF',
                    boxShadow: isCompleteKit ? '0 6px 20px -2px rgba(27, 67, 50, 0.12)' : 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <input
                        id="radio-package-kit"
                        type="radio"
                        name="package-type"
                        value="kit"
                        checked={isCompleteKit}
                        onChange={() => handleSelectPackageType(true)}
                        style={{
                          width: '20px',
                          height: '20px',
                          accentColor: '#1B4332',
                          cursor: 'pointer',
                          flexShrink: 0,
                          margin: 0,
                        }}
                      />
                      <span style={{ fontSize: '1.05rem', fontWeight: 800, color: '#142018', margin: 0 }}>
                        Complete Growing Kit
                      </span>
                      <span
                        style={{
                          background: '#1B4332',
                          color: '#FFFFFF',
                          padding: '2px 8px',
                          borderRadius: '999px',
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                        }}
                      >
                        Recommended (+A$100)
                      </span>
                    </div>

                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1B4332' }}>
                        A${selectedTier.completeKitPrice}
                      </span>
                    </div>
                  </div>

                  {isCompleteKit && (
                    <div
                      style={{
                        marginTop: '0.85rem',
                        paddingTop: '0.85rem',
                        borderTop: '1px solid rgba(27, 67, 50, 0.12)',
                        paddingLeft: '2rem',
                      }}
                    >
                      <p style={{ fontSize: '0.85rem', color: '#495B50', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                        <strong>Everything in Base PLUS starter nutrients & propagation kit.</strong> Seeds and live plants are not packed inside the hardware box—sow your own seeds in the included coco plugs (<strong>first harvest in 4–6 weeks</strong>) or plant pre-rooted nursery seedlings (<strong>first harvest in 2–3 weeks</strong>).
                      </p>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.825rem', color: '#27382F' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontWeight: 600 }}>
                          <Check size={14} color="#1B4332" />
                          <span>All Standard Base Tower hardware included ({selectedTier.growSites} sites)</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#1B4332', fontWeight: 600 }}>
                          <Check size={14} color="#1B4332" />
                          <span>1L FreshTier Premium A+B Liquid Nutrients</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#1B4332', fontWeight: 600 }}>
                          <Check size={14} color="#1B4332" />
                          <span>50x organic coco-coir seedling propagation plugs (ready for your seeds)</span>
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
                  )}
                </label>
              </div>
            </div>

            {/* STEP 3: OPTIONAL ADD-ONS — NATIVE CHECKBOX CONTROLS */}
            <div>
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#2D6A4F', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  STEP 3 OF 3
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#142018' }}>
                  Optional System Accessories
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {B2C_ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <label
                      key={addon.id}
                      htmlFor={`checkbox-addon-${addon.id}`}
                      className="pilot2-card"
                      style={{
                        display: 'block',
                        padding: isChecked ? '1.15rem 1.35rem' : '0.9rem 1.25rem',
                        cursor: 'pointer',
                        borderRadius: '12px',
                        border: isChecked ? '2px solid #1B4332' : '1px solid rgba(27, 67, 50, 0.12)',
                        background: isChecked ? '#F4F8F4' : '#FFFFFF',
                        boxShadow: isChecked ? '0 6px 20px -2px rgba(27, 67, 50, 0.12)' : 'none',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <input
                            id={`checkbox-addon-${addon.id}`}
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleToggleAddon(addon.id)}
                            style={{
                              width: '20px',
                              height: '20px',
                              accentColor: '#1B4332',
                              cursor: 'pointer',
                              flexShrink: 0,
                              margin: 0,
                            }}
                          />

                          <span style={{ fontSize: '1rem', fontWeight: 800, color: '#142018', margin: 0 }}>
                            {addon.name}
                          </span>
                        </div>

                        <span style={{ fontWeight: 800, color: '#1B4332', fontSize: '1rem', flexShrink: 0 }}>
                          +A${addon.price}
                        </span>
                      </div>

                      {isChecked && (
                        <div
                          style={{
                            marginTop: '0.75rem',
                            paddingTop: '0.75rem',
                            borderTop: '1px solid rgba(27, 67, 50, 0.12)',
                            paddingLeft: '2rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                          }}
                        >
                          {addon.image && (
                            <img
                              src={addon.image}
                              alt={addon.name}
                              style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '8px',
                                objectFit: 'contain',
                                background: '#FFFFFF',
                                border: '1px solid rgba(27, 67, 50, 0.12)',
                                padding: '2px',
                                flexShrink: 0,
                              }}
                            />
                          )}
                          <p style={{ fontSize: '0.85rem', color: '#495B50', margin: 0, lineHeight: 1.5 }}>
                            {addon.description}
                          </p>
                        </div>
                      )}
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ALWAYS-VISIBLE ORDER SUMMARY (Priority 5) */}
          <div className="configurator-summary-sticky" id="checkout-action" style={{ minWidth: 0 }}>
            <div
              className="pilot2-card"
              style={{
                padding: 'clamp(1.25rem, 3.5vw, 2rem)',
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.35rem', gap: '0.5rem' }}>
                  <span style={{ fontWeight: 700, color: '#142018', fontSize: '1rem' }}>
                    {selectedTier.name}
                  </span>
                  <span style={{ fontWeight: 700, color: '#142018', flexShrink: 0 }}>
                    A${selectedTier.basePrice}
                  </span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#495B50', lineHeight: 1.5 }}>
                  <div>• {selectedTier.growSites} grow sites • {selectedTier.heightCm} cm ({selectedTier.heightMeter} m) assembled height</div>
                  <div>• <strong>Base diameter:</strong> {selectedTier.baseDiameterCm} cm (0.22 m²)</div>
                  <div>• <strong>Recommended clear floor space:</strong> {selectedTier.clearFloorSpace} (0.36 m²)</div>
                </div>

                {isCompleteKit && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px dashed rgba(27, 67, 50, 0.1)' }}>
                    <div>
                      <span style={{ fontWeight: 700, color: '#1B4332', fontSize: '0.9rem', display: 'block' }}>
                        + Complete Growing Kit Upgrade
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#6B7C72' }}>
                        1L A+B nutrients, 50 coco plugs, nursery dome tray, pH test kit
                      </span>
                    </div>
                    <span style={{ fontWeight: 700, color: '#1B4332', fontSize: '0.9rem', flexShrink: 0 }}>
                      +A$100
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
                        gap: '0.5rem',
                      }}
                    >
                      <span style={{ color: '#37473E' }}>+ {addon.name}</span>
                      <span style={{ fontWeight: 700, color: '#142018', flexShrink: 0 }}>+A${addon.price}</span>
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
                  <span>Free Melbourne Metro Delivery (24–48h Dispatch)</span>
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
                    Total Before Regional Delivery (GST Inc.)
                  </span>
                  <div style={{ fontSize: '2.3rem', fontWeight: 800, color: '#142018', lineHeight: 1 }} data-testid="configurator-total">
                    A${grandTotal}{' '}
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#6B7C72' }}>AUD</span>
                  </div>
                </div>
              </div>

              {/* CHECKOUT / ORDER ENQUIRY ACTION BUTTON */}
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
                <span>
                  {checkoutLink.isLive ? 'Proceed to Secure Checkout' : `Order / Reserve System (A$${grandTotal})`}
                </span>
                <ArrowRight size={17} />
              </button>

              <div style={{ textAlign: 'center', fontSize: '0.75rem', color: '#6B7C72' }}>
                Dispatched from Melbourne warehouse within 24–48 hours. Covered by Australian Consumer Law.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ORDER / RESERVATION ENQUIRY MODAL (Matches Selected Items & Total) */}
      {isOrderModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="order-modal-title"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(11, 27, 19, 0.72)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            overflowY: 'auto',
          }}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              maxWidth: '540px',
              width: '100%',
              padding: 'clamp(1.25rem, 4vw, 2rem)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
              border: '1px solid rgba(27, 67, 50, 0.15)',
              color: '#142018',
              position: 'relative',
              maxHeight: '92vh',
              overflowY: 'auto',
            }}
          >
            <button
              type="button"
              onClick={() => setIsOrderModalOpen(false)}
              aria-label="Close Order Window"
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: '#EEF4EE',
                border: 'none',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#142018',
              }}
            >
              <X size={18} />
            </button>

            <span
              className="pilot2-badge"
              style={{ marginBottom: '0.75rem', background: '#EEF4EE', border: '1px solid #D4E3D6' }}
            >
              <ShoppingBag size={13} color="#2D6A4F" />
              <span>FRESHTIER ORDER & DISPATCH</span>
            </span>

            <h3 id="order-modal-title" style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', color: '#142018' }}>
              {orderSubmitted ? 'Order Request Received' : 'Complete Your Order Request'}
            </h3>

            {/* ITEMISED ORDER VERIFICATION BOX */}
            <div
              style={{
                background: '#F4F8F4',
                border: '1px solid #D4E3D6',
                borderRadius: '12px',
                padding: '1rem',
                marginBottom: '1.25rem',
                fontSize: '0.88rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, marginBottom: '0.35rem' }}>
                <span>{selectedTier.name} ({selectedTier.heightCm} cm · {selectedTier.growSites} sites)</span>
                <span>A${selectedTier.basePrice}</span>
              </div>
              {isCompleteKit && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#1B4332', fontWeight: 600, marginBottom: '0.35rem' }}>
                  <span>+ Complete Growing Kit Upgrade</span>
                  <span>+A$100</span>
                </div>
              )}
              {selectedAddons.map((addonId) => {
                const addon = B2C_ADDONS.find((a) => a.id === addonId);
                if (!addon) return null;
                return (
                  <div key={addon.id} style={{ display: 'flex', justifyContent: 'space-between', color: '#37473E', marginBottom: '0.35rem' }}>
                    <span>+ {addon.name}</span>
                    <span style={{ fontWeight: 700 }}>+A${addon.price}</span>
                  </div>
                );
              })}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderTop: '1px solid rgba(27, 67, 50, 0.15)',
                  paddingTop: '0.6rem',
                  marginTop: '0.5rem',
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  color: '#142018',
                }}
              >
                <span>Total (GST Inclusive, Before Any Regional Freight)</span>
                <span>A${grandTotal} AUD</span>
              </div>
            </div>

            {!orderSubmitted ? (
              <form onSubmit={handleOrderEnquirySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <p style={{ fontSize: '0.85rem', color: '#495B50', margin: 0, lineHeight: 1.5 }}>
                  Enter your delivery details below. Our Melbourne warehouse team will send your tax invoice and payment link (with free Melbourne metro delivery or exact regional courier rate) within 1 business day.
                </p>

                <div>
                  <label htmlFor="order-name" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem', color: '#142018' }}>
                    Full Name *
                  </label>
                  <input
                    id="order-name"
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Alex Taylor"
                    style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.92rem' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
                  <div>
                    <label htmlFor="order-email" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem', color: '#142018' }}>
                      Email Address *
                    </label>
                    <input
                      id="order-email"
                      type="email"
                      required
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="you@example.com.au"
                      style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.92rem' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="order-phone" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem', color: '#142018' }}>
                      Mobile Phone *
                    </label>
                    <input
                      id="order-phone"
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="04XX XXX XXX"
                      style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.92rem' }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="order-postcode" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem', color: '#142018' }}>
                    Delivery Suburb & Postcode *
                  </label>
                  <input
                    id="order-postcode"
                    type="text"
                    required
                    value={customerPostcode}
                    onChange={(e) => setCustomerPostcode(e.target.value)}
                    placeholder="e.g. Richmond VIC 3121"
                    style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.92rem' }}
                  />
                </div>

                <div>
                  <label htmlFor="order-notes" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem', color: '#142018' }}>
                    Delivery Notes or Questions (Optional)
                  </label>
                  <textarea
                    id="order-notes"
                    rows={2}
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    placeholder="Balcony access notes or seedling nursery questions..."
                    style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                  />
                </div>

                <button
                  type="submit"
                  className="pilot2-btn-primary"
                  style={{ width: '100%', padding: '0.95rem', fontSize: '1rem', borderRadius: '12px', marginTop: '0.25rem' }}
                >
                  <span>Submit Order Request (A${grandTotal} AUD)</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            ) : (
              <div style={{ fontSize: '0.92rem', color: '#27382F', lineHeight: 1.6 }}>
                <p style={{ marginBottom: '0.75rem' }}>
                  Thank you, <strong>{customerName}</strong>! Your order reference is <strong>{orderReference}</strong> for <strong>A${grandTotal} AUD</strong> ({customerPostcode}).
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  We have recorded your configuration and will email your invoice and courier dispatch confirmation to <strong>{customerEmail}</strong>. You can also send a copy directly via your email client below or call our Melbourne team on <strong>{STORE_META.phone}</strong>.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a
                    href={`mailto:${STORE_META.contactEmail}?subject=${encodeURIComponent(`FreshTier Order ${orderReference} — ${selectedTier.name} (A$${grandTotal})`)}&body=${encodeURIComponent(
                      `Order Reference: ${orderReference}\nCustomer: ${customerName}\nPhone: ${customerPhone}\nEmail: ${customerEmail}\nSuburb/Postcode: ${customerPostcode}\n\nSelected System: ${selectedTier.name} (${isCompleteKit ? 'Complete Growing Kit' : 'Standard Base'})\nAdd-ons: ${selectedAddons.join(', ') || 'None'}\nTotal (GST Inc.): A$${grandTotal} AUD\nNotes: ${customerNotes}`
                    )}`}
                    className="pilot2-btn-primary"
                    style={{ textDecoration: 'none', flex: 1, textAlign: 'center' }}
                  >
                    Email Copy to {STORE_META.contactEmail}
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsOrderModalOpen(false)}
                    className="pilot2-btn-secondary"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
