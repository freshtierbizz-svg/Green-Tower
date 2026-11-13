import React, { useState } from 'react';
import { PRODUCT_CONFIG, TowerTierOption } from '../config/product.config';
import { ShopifyBuyButton } from './ShopifyBuyButton';
import { Sparkles, CheckCircle2, Zap, Sun, ShieldCheck, Layers, Shield } from 'lucide-react';

export const Hero: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<TowerTierOption>(PRODUCT_CONFIG.towerTiers[1]); // Default 7-section
  const [packageType, setPackageType] = useState<'base' | 'kit'>('base');
  const [hasLedLights, setHasLedLights] = useState<boolean>(false);
  const [hasPlantSupports, setHasPlantSupports] = useState<boolean>(false);
  const [activeImage, setActiveImage] = useState<string>('assets/real-tower-studio.png');

  const galleryImages = [
    { src: 'assets/real-tower-studio.png', title: 'Real Product Studio View — 7-Tier Column & Sage Green Basin' },
    { src: 'assets/real-tower-hardware.png', title: 'Real Unplanted Hardware View — Funnel Ports & Circular Deck' },
    { src: 'assets/real-tower-close.jpg', title: 'Real Crop Harvest — Red Oakleaf & Butterhead Lettuce' },
    { src: 'assets/real-tower-farm.jpg', title: 'Real Commercial Greenhouse Harvest Production' },
    { src: 'assets/family-kitchen.jpg', title: 'Happy Family Kitchen Harvest' },
    { src: 'assets/complete-kit.jpg', title: 'Complete Starter Kit Inclusions' },
  ];

  return (
    <section id="hardware" style={{ 
      padding: '4rem 0 5rem 0', 
      position: 'relative', 
      overflow: 'hidden',
      background: "linear-gradient(180deg, rgba(11, 19, 14, 0.82) 0%, rgba(11, 19, 14, 0.94) 100%), url('assets/kitchen-bg.jpg') center/cover no-repeat",
      borderBottom: '1px solid rgba(16, 185, 129, 0.15)'
    }}>
      {/* Subtle Background Glow Elements */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.18) 0%, rgba(11, 19, 14, 0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        <div className="grid-2" style={{ alignItems: 'flex-start', gap: '3.5rem' }}>
          
          {/* Left Column: Tower Configurator & Order Form */}
          <div>
            <div className="badge-emerald" style={{ marginBottom: '1.25rem' }}>
              <Sparkles size={14} /> Modular Vertical Aeroponics
            </div>

            <h1 style={{ fontSize: '3.1rem', lineHeight: '1.15', marginBottom: '1.25rem' }}>
              Backyards Are Shrinking. <br />
              <span style={{
                background: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Food Prices Are Rising.
              </span>
            </h1>

            <p style={{ fontSize: '1.1rem', color: '#CBD5E1', marginBottom: '2rem', maxWidth: '540px', lineHeight: '1.6' }}>
              Grow 28 to 44 fresh organic crops in a tiny <strong>0.22 m² footprint</strong>. Beat supermarket food inflation and harvest living produce on your balcony or patio — zero backyard needed.
            </p>

            {/* STEP 1: Select Tower Section Size */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#34D399', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
                1. Choose Tower Section Height:
              </label>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {PRODUCT_CONFIG.towerTiers.map((tier) => {
                  const isSelected = selectedTier.id === tier.id;
                  return (
                    <button
                      key={tier.id}
                      onClick={() => setSelectedTier(tier)}
                      style={{
                        padding: isSelected ? '0.9rem 1rem' : '0.7rem 1rem',
                        borderRadius: '12px',
                        background: isSelected ? 'linear-gradient(135deg, rgba(31, 51, 38, 0.95) 0%, rgba(16, 185, 129, 0.25) 100%)' : 'linear-gradient(135deg, rgba(23, 38, 28, 0.7) 0%, rgba(15, 23, 42, 0.6) 100%)',
                        border: isSelected ? '1px solid #10B981' : '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                          <input
                            type="checkbox"
                            checked={isSelected}
                            readOnly
                            style={{ width: '18px', height: '18px', accentColor: '#10B981', pointerEvents: 'none' }}
                          />
                          <div style={{ fontSize: '0.95rem', fontWeight: '700' }}>{tier.name}</div>
                        </div>
                        <div style={{ fontSize: '1rem', fontWeight: '800', color: '#34D399' }}>${tier.basePriceAUD} AUD</div>
                      </div>
                      {isSelected && (
                        <div style={{ fontSize: '0.8rem', color: '#D1D5DB', marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1.75rem' }}>
                          {tier.sectionsCount} Modular Tiers • {tier.growPotsCount} Grow Sites ({tier.height}) — {tier.recommendedFor}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: Choose Package Inclusions */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#34D399', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
                2. Select Package Type:
              </label>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <button
                  onClick={() => setPackageType('base')}
                  style={{
                    padding: packageType === 'base' ? '0.9rem 1rem' : '0.7rem 1rem',
                    borderRadius: '12px',
                    background: packageType === 'base' ? 'linear-gradient(135deg, rgba(31, 51, 38, 0.95) 0%, rgba(16, 185, 129, 0.25) 100%)' : 'linear-gradient(135deg, rgba(23, 38, 28, 0.7) 0%, rgba(15, 23, 42, 0.6) 100%)',
                    border: packageType === 'base' ? '1px solid #10B981' : '1px solid rgba(255, 255, 255, 0.1)',
                    textAlign: 'left',
                    color: '#ffffff',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <input type="checkbox" checked={packageType === 'base'} readOnly style={{ width: '18px', height: '18px', accentColor: '#10B981', pointerEvents: 'none' }} />
                      <div style={{ fontSize: '0.95rem', fontWeight: '700' }}>Standard Base Tower</div>
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: '800', color: '#ffffff' }}>${selectedTier.basePriceAUD} AUD</div>
                  </div>
                  {packageType === 'base' && (
                    <div style={{ fontSize: '0.8rem', color: '#D1D5DB', marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1.75rem' }}>
                      Includes modular tower sections, 38L reservoir base, DC water pump & automated timer.
                    </div>
                  )}
                </button>

                <button
                  onClick={() => setPackageType('kit')}
                  style={{
                    padding: packageType === 'kit' ? '0.9rem 1rem' : '0.7rem 1rem',
                    borderRadius: '12px',
                    background: packageType === 'kit' ? 'linear-gradient(135deg, rgba(31, 51, 38, 0.95) 0%, rgba(16, 185, 129, 0.25) 100%)' : 'linear-gradient(135deg, rgba(23, 38, 28, 0.7) 0%, rgba(15, 23, 42, 0.6) 100%)',
                    border: packageType === 'kit' ? '1px solid #10B981' : '1px solid rgba(255, 255, 255, 0.1)',
                    textAlign: 'left',
                    color: '#ffffff',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <input type="checkbox" checked={packageType === 'kit'} readOnly style={{ width: '18px', height: '18px', accentColor: '#10B981', pointerEvents: 'none' }} />
                      <div style={{ fontSize: '0.95rem', fontWeight: '700' }}>Complete Starter Kit (Recommended)</div>
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: '800', color: '#34D399' }}>${selectedTier.kitPriceAUD} AUD</div>
                  </div>
                  {packageType === 'kit' && (
                    <div style={{ fontSize: '0.8rem', color: '#34D399', marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1.75rem' }}>
                      Everything in Base + 1L A/B Nutrients, 50 Coco Plugs, Nursery Dome & pH Kit (+$100 AUD).
                    </div>
                  )}
                </button>
              </div>
            </div>

            {/* STEP 3: Modular Add-On Toggles (LED Lights & Supports) */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#34D399', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
                3. Optional Add-On Hardware:
              </label>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {/* LED Lights Toggle */}
                <label style={{
                  display: 'block',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, rgba(23, 38, 28, 0.7) 0%, rgba(15, 23, 42, 0.6) 100%)',
                  border: hasLedLights ? '1px solid #10B981' : '1px solid rgba(255, 255, 255, 0.1)',
                  cursor: 'pointer'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <input
                        type="checkbox"
                        checked={hasLedLights}
                        onChange={(e) => setHasLedLights(e.target.checked)}
                        style={{ width: '18px', height: '18px', accentColor: '#10B981', cursor: 'pointer' }}
                      />
                      <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#ffffff' }}>Full-Spectrum LED Grow Lights</div>
                    </div>
                    <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#34D399' }}>+${PRODUCT_CONFIG.addons.ledGrowLights.priceAUD} AUD</span>
                  </div>
                  {hasLedLights && (
                    <div style={{ fontSize: '0.78rem', color: '#D1D5DB', marginTop: '0.45rem', paddingTop: '0.45rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1.85rem' }}>
                      {PRODUCT_CONFIG.addons.ledGrowLights.description}
                    </div>
                  )}
                </label>

                {/* Plant Supports Toggle */}
                <label style={{
                  display: 'block',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, rgba(23, 38, 28, 0.7) 0%, rgba(15, 23, 42, 0.6) 100%)',
                  border: hasPlantSupports ? '1px solid #10B981' : '1px solid rgba(255, 255, 255, 0.1)',
                  cursor: 'pointer'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <input
                        type="checkbox"
                        checked={hasPlantSupports}
                        onChange={(e) => setHasPlantSupports(e.target.checked)}
                        style={{ width: '18px', height: '18px', accentColor: '#10B981', cursor: 'pointer' }}
                      />
                      <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#ffffff' }}>Growth Support Trellis Rings</div>
                    </div>
                    <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#34D399' }}>+${PRODUCT_CONFIG.addons.plantSupports.priceAUD} AUD</span>
                  </div>
                  {hasPlantSupports && (
                    <div style={{ fontSize: '0.78rem', color: '#D1D5DB', marginTop: '0.45rem', paddingTop: '0.45rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1.85rem' }}>
                      {PRODUCT_CONFIG.addons.plantSupports.description}
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Shopify Buy Button Container */}
            <div id="order">
              <ShopifyBuyButton
                containerId="shopify-buy-button-hero"
                selectedTier={selectedTier}
                packageType={packageType}
                hasLedLights={hasLedLights}
                hasPlantSupports={hasPlantSupports}
              />
            </div>
          </div>

          {/* Right Column: Real Pure White Product Photo & Specs */}
          <div className="glass-panel" style={{ padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '0.5rem'
            }}>
              <span className="badge-emerald" style={{ background: 'linear-gradient(135deg, rgba(17, 26, 20, 0.94) 0%, rgba(11, 19, 14, 0.88) 100%)', backdropFilter: 'blur(10px)' }}>
                FOOD-GRADE WHITE ABS
              </span>
              <span className="badge-warning">
                YIELD: {PRODUCT_CONFIG.placeholders.yield}
              </span>
            </div>

            {/* Pure White Glossy Tower Hero Photo */}
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
              background: 'radial-gradient(circle at 50% 50%, #16261c 0%, #080d09 100%)',
              height: '460px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: activeImage.includes('real-tower-studio') || activeImage.includes('real-tower-hardware') ? '0.5rem' : '0'
            }}>
              <img
                src={activeImage}
                alt="FreshTier Vertical Aeroponic Garden Tower Photoshoot"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'block',
                  objectFit: activeImage.includes('real-tower-studio') || activeImage.includes('real-tower-hardware') ? 'contain' : 'cover',
                  transition: 'all 0.3s ease'
                }}
              />
            </div>

            {/* Micro Gallery Thumbnails */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0.4rem', marginTop: '1rem' }}>
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImage(img.src)}
                  style={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: activeImage === img.src ? '2px solid #34D399' : '1px solid rgba(255, 255, 255, 0.15)',
                    cursor: 'pointer',
                    opacity: activeImage === img.src ? 1 : 0.75,
                    transition: 'all 0.2s ease'
                  }}
                  title={img.title}
                >
                  <img src={img.src} alt={img.title} style={{ width: '100%', height: '60px', objectFit: 'cover', display: 'block' }} />
                </div>
              ))}
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(23, 38, 28, 0.9) 0%, rgba(11, 19, 14, 0.85) 100%)',
              padding: '1.25rem',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              marginTop: '1rem'
            }}>
              <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#34D399', marginBottom: '0.5rem' }}>
                Active Selection Specifications:
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                <span style={{ color: '#9CA3AF' }}>Model Size:</span>
                <span style={{ color: '#ffffff', fontWeight: '600' }}>{selectedTier.name}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                <span style={{ color: '#9CA3AF' }}>Height & Pots:</span>
                <span style={{ color: '#ffffff', fontWeight: '600' }}>{selectedTier.height} ({selectedTier.growPotsCount} Grow Sites)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                <span style={{ color: '#9CA3AF' }}>Reservoir Tank:</span>
                <span style={{ color: '#ffffff', fontWeight: '600' }}>38L Light Sage Green Basin Tub with White Cover Deck</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ color: '#9CA3AF' }}>Finish & Material:</span>
                <span style={{ color: '#34D399', fontWeight: '600' }}>{PRODUCT_CONFIG.specifications.colorFinish}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
