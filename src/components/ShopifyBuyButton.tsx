import React, { useEffect } from 'react';
import { PRODUCT_CONFIG, TowerTierOption, buildShopifyCheckoutUrl } from '../config/product.config';
import { ShoppingBag, CheckCircle, ShieldCheck } from 'lucide-react';

interface ShopifyBuyButtonProps {
  containerId: string;
  selectedTier: TowerTierOption;
  packageType: 'base' | 'kit';
  hasLedLights: boolean;
  hasPlantSupports: boolean;
}

export const ShopifyBuyButton: React.FC<ShopifyBuyButtonProps> = ({
  containerId,
  selectedTier,
  packageType,
  hasLedLights,
  hasPlantSupports
}) => {
  const isEnabled = PRODUCT_CONFIG.shopify.enabled;
  const isKit = packageType === 'kit';
  
  // Calculate total price dynamically
  let totalPrice = isKit ? selectedTier.kitPriceAUD : selectedTier.basePriceAUD;
  if (hasLedLights) totalPrice += PRODUCT_CONFIG.addons.ledGrowLights.priceAUD;
  if (hasPlantSupports) totalPrice += PRODUCT_CONFIG.addons.plantSupports.priceAUD;

  useEffect(() => {
    if (!isEnabled) return;

    // Load Shopify Buy Button JS SDK dynamically if enabled
    const scriptId = 'shopify-buy-button-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = PRODUCT_CONFIG.shopify.buyButtonScriptUrl;
      script.async = true;
      document.body.appendChild(script);
    }
  }, [isEnabled]);

  return (
    <div className="shopify-buy-container" style={{ width: '100%' }}>
      {/* Explicit Shopify Container Injection Point per Commerce Architecture Requirement */}
      <div id={containerId} className="shopify-buy-button-embed">
        {!isEnabled && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1.25rem',
            background: 'rgba(23, 38, 28, 0.95)',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            borderRadius: '16px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.5)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {selectedTier.name} — {isKit ? 'Complete Growing Kit' : 'Base Package'}
                </span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginTop: '0.2rem' }}>
                  <span style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', fontFamily: 'Outfit' }}>
                    ${totalPrice.toFixed(2)}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: '#34D399', fontWeight: '600' }}>
                    AUD (GST Inc.)
                  </span>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span className="badge-emerald" style={{ fontSize: '0.75rem' }}>
                  <CheckCircle size={12} /> System Stock Ready
                </span>
              </div>
            </div>

            {/* Selected Options Summary */}
            <div style={{ fontSize: '0.8rem', color: '#9CA3AF', background: 'rgba(11, 19, 14, 0.6)', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div>• <strong>Tower Model:</strong> {selectedTier.sectionsCount} Sections ({selectedTier.growPotsCount} Grow Sites)</div>
              <div>• <strong>LED Grow Lights:</strong> {hasLedLights ? 'Included (+$149 AUD)' : 'Not Included'}</div>
              <div>• <strong>Plant Support Trellis:</strong> {hasPlantSupports ? 'Included (+$49 AUD)' : 'Not Included'}</div>
              <div style={{ marginTop: '0.25rem', color: '#34D399', fontSize: '0.75rem' }}>
                • <strong>Shopify Store:</strong> {PRODUCT_CONFIG.shopify.storeDomain}
              </div>
            </div>

            <button
              onClick={() => {
                const checkout = buildShopifyCheckoutUrl({
                  tierId: selectedTier.id,
                  packageType,
                  hasLedLights,
                  hasPlantSupports,
                });
                if (checkout.isLive) {
                  window.location.href = checkout.url;
                } else {
                  window.open(checkout.url, '_blank', 'noopener,noreferrer');
                }
              }}
              className="btn-primary"
              style={{ width: '100%', padding: '1.1rem', fontSize: '1.05rem', cursor: 'pointer' }}
            >
              <ShoppingBag size={20} />
              Order Configured System — ${totalPrice} AUD
            </button>

            {/* Real E-Commerce Trust Badges & Accepted Payments */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#34D399', fontWeight: 600 }}>
                <ShieldCheck size={14} /> 24-Hour Dispatch from Victoria Warehouse • Free Metro AU Express
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                {['Shop Pay', 'Afterpay', 'Zip', 'Apple Pay', 'Visa', 'Mastercard'].map((pm, i) => (
                  <span key={i} style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: '#94A3B8',
                    background: 'rgba(255, 255, 255, 0.06)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}>
                    {pm}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
