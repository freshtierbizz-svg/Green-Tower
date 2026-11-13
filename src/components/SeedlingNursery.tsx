import React, { useState } from 'react';
import { NURSERY_CATALOG, STORE_META } from '../config/storefrontConfig';
import { NurseryItem } from '../types/storefront';
import { buildNurseryCheckoutUrl } from '../config/product.config';
import { Leaf, RefreshCw, ShoppingCart, CheckCircle2, ArrowRight, X } from 'lucide-react';

export const SeedlingNursery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [subscriptionMode, setSubscriptionMode] = useState<boolean>(true);
  const [addedItem, setAddedItem] = useState<{ name: string; price: number; isSub: boolean; checkoutUrl: string; isLive: boolean } | null>(null);
  const [orderSubmitted, setOrderSubmitted] = useState<boolean>(false);
  const [orderRef, setOrderRef] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerPostcode, setCustomerPostcode] = useState<string>('');

  const categories = [
    'All',
    'Cocktail Herbs',
    'Kitchen Herbs',
    'Salad Greens',
    'Microgreens',
    'Edible Flowers',
    'Family Favourites',
  ];

  // Map Nursery items to local project image assets
  const localImageMap: Record<string, string> = {
    'mint-spearmint': 'assets/harvest-macro.jpg',
    'thai-basil': 'assets/real-tower-close.jpg',
    'salad-crunch': 'assets/balcony-person.jpg',
    'microgreens-spicy': 'assets/real-tower-lifestyle.png',
    'edible-viola': 'assets/patio-lifestyle.jpg',
    'family-starter': 'assets/family-kitchen.jpg',
  };

  const filteredItems = selectedCategory === 'All'
    ? NURSERY_CATALOG
    : NURSERY_CATALOG.filter((item) => item.category === selectedCategory);

  return (
    <div style={{ color: '#F9FAFB', padding: '3.5rem 0 4rem 0' }}>
      <div className="container">
        {/* HEADER BANNER */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          <div className="badge-emerald" style={{ marginBottom: '1rem' }}>
            <Leaf size={14} />
            <span>FRESHTIER NURSERY REPLENISHMENT</span>
          </div>

          <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '0.75rem' }}>
            Your tower doesn't stop growing.
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#9CA3AF', lineHeight: 1.6, marginBottom: '2rem' }}>
            Pre-rooted mature seedling pods, organic-compatible nutrients, and curated crop bundles delivered directly to your home or venue door.
          </p>

          {/* SUBSCRIPTION TOGGLE BANNER */}
          <div className="glass-panel" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '0.65rem 1.25rem',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, rgba(26, 46, 34, 0.9) 0%, rgba(15, 25, 18, 0.8) 100%)',
            border: '1px solid rgba(52, 211, 153, 0.3)'
          }}>
            <RefreshCw size={16} color="#34D399" />
            <span style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 600 }}>
              Subscribe & Save 15% on Monthly Nursery Replenishment
            </span>
            <button
              onClick={() => setSubscriptionMode(!subscriptionMode)}
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                padding: '0.35rem 0.85rem',
                borderRadius: '999px',
                background: subscriptionMode ? '#34D399' : 'rgba(255,255,255,0.1)',
                color: subscriptionMode ? '#000000' : '#ffffff',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {subscriptionMode ? '15% Auto-Refill Active' : 'Enable Subscription'}
            </button>
          </div>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.65rem', marginBottom: '3rem' }}>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: '10px',
                  fontSize: '0.875rem',
                  fontWeight: isSelected ? 700 : 500,
                  border: isSelected ? '1px solid #34D399' : '1px solid rgba(255,255,255,0.1)',
                  background: isSelected ? 'rgba(52, 211, 153, 0.18)' : 'rgba(255,255,255,0.03)',
                  color: isSelected ? '#34D399' : '#D1D5DB',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* NURSERY ITEMS GRID */}
        <div className="grid-3" style={{ gap: '2rem' }}>
          {filteredItems.map((item) => {
            const finalPrice = subscriptionMode ? Math.round(item.price * 0.85 * 100) / 100 : item.price;
            const imgSrc = localImageMap[item.id] || item.image;
            return (
              <div key={item.id} className="glass-panel" style={{
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(255,255,255,0.1)',
              }}>
                <div>
                  <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                    <img
                      src={imgSrc}
                      alt={item.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: 'rgba(11, 19, 14, 0.88)',
                      backdropFilter: 'blur(8px)',
                      color: '#34D399',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.35rem 0.75rem',
                      borderRadius: '6px',
                      border: '1px solid rgba(52, 211, 153, 0.3)'
                    }}>
                      {item.category}
                    </span>
                  </div>

                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem' }}>
                      {item.name}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#9CA3AF', lineHeight: 1.5, marginBottom: '1.25rem', minHeight: '52px' }}>
                      {item.description}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                      {item.tags.map((tag) => (
                        <span key={tag} style={{ fontSize: '0.75rem', color: '#A7F3D0', background: 'rgba(52, 211, 153, 0.1)', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ padding: '1.25rem 1.5rem', background: 'rgba(0,0,0,0.3)', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff' }}>
                      ${finalPrice.toFixed(2)}
                    </span>
                    {subscriptionMode && (
                      <span style={{ fontSize: '0.75rem', color: '#34D399', display: 'block', fontWeight: 600 }}>
                        Save 15% Subscribed
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      const checkout = buildNurseryCheckoutUrl({
                        itemId: item.id,
                        isSubscription: subscriptionMode,
                      });
                      if (checkout.isLive) {
                        window.location.href = checkout.url;
                        return;
                      }
                      setOrderSubmitted(false);
                      setAddedItem({
                        name: item.name,
                        price: finalPrice,
                        isSub: subscriptionMode,
                        checkoutUrl: checkout.url,
                        isLive: checkout.isLive,
                      });
                    }}
                    className="btn-primary"
                    style={{ padding: '0.55rem 1.15rem', fontSize: '0.85rem' }}
                  >
                    <ShoppingCart size={15} />
                    Order Pod Bundle
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* RECURRING ECOSYSTEM FOOTER BANNER */}
        <div className="glass-panel" style={{
          marginTop: '4rem',
          padding: '2.5rem',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, rgba(26, 46, 34, 0.95) 0%, rgba(15, 25, 18, 0.9) 100%)',
          border: '1px solid rgba(52, 211, 153, 0.3)',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem', color: '#ffffff' }}>
            Keep Your Tower Growing Season After Season
          </h3>
          <p style={{ color: '#9CA3AF', maxWidth: '650px', margin: '0 auto 1.5rem auto' }}>
            Set up automatic monthly seedling deliveries or order replacement plant pods whenever your tower requires a fresh rotation.
          </p>

          <button
            onClick={() => {
              setSubscriptionMode(true);
              window.scrollTo({ top: 350, behavior: 'smooth' });
            }}
            className="btn-primary"
            style={{ padding: '0.85rem 2rem' }}
          >
            Explore Nursery Subscriptions (15% Off Refills)
          </button>
        </div>

        {/* NURSERY ORDER / RESERVATION MODAL */}
        {addedItem && (
          <div
            role="dialog"
            aria-modal="true"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(11, 27, 19, 0.78)',
              backdropFilter: 'blur(6px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
            }}
          >
            <div style={{
              background: '#FFFFFF',
              color: '#142018',
              borderRadius: '20px',
              padding: '1.75rem',
              maxWidth: '480px',
              width: '100%',
              position: 'relative',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
            }}>
              <button
                type="button"
                onClick={() => setAddedItem(null)}
                style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#EEF4EE', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <X size={16} />
              </button>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', color: '#142018' }}>
                {orderSubmitted ? 'Nursery Order Received' : 'Order Pre-Rooted Seedling Pods'}
              </h3>

              <div style={{ background: '#F4F8F4', border: '1px solid #D4E3D6', borderRadius: '10px', padding: '0.85rem 1rem', marginBottom: '1rem', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                  <span>{addedItem.name}</span>
                  <span>A${addedItem.price.toFixed(2)} AUD</span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#2D6A4F', marginTop: '0.2rem' }}>
                  {addedItem.isSub ? 'Monthly Subscription (15% Auto-Refill Discount Applied)' : 'One-Off Nursery Dispatch'}
                </div>
              </div>

              {!orderSubmitted ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const ref = `FT-NUR-${Date.now().toString().slice(-6)}`;
                    setOrderRef(ref);
                    try {
                      const existing = JSON.parse(localStorage.getItem('freshtier_nursery_orders') || '[]');
                      localStorage.setItem(
                        'freshtier_nursery_orders',
                        JSON.stringify([
                          {
                            referenceId: ref,
                            createdAt: new Date().toISOString(),
                            bundle: addedItem.name,
                            priceAUD: addedItem.price,
                            subscription: addedItem.isSub,
                            customerName,
                            customerEmail,
                            customerPhone,
                            customerPostcode,
                          },
                          ...existing,
                        ])
                      );
                    } catch {
                      // ignore storage error
                    }
                    setOrderSubmitted(true);
                  }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
                >
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Phone *"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Delivery Suburb & Postcode *"
                    value={customerPostcode}
                    onChange={(e) => setCustomerPostcode(e.target.value)}
                    style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                  />
                  <button type="submit" className="pilot2-btn-primary" style={{ width: '100%', padding: '0.85rem', borderRadius: '10px', fontSize: '0.95rem' }}>
                    <span>Submit Seedling Order (A${addedItem.price.toFixed(2)})</span>
                    <ArrowRight size={15} />
                  </button>
                </form>
              ) : (
                <div style={{ fontSize: '0.9rem', color: '#27382F', lineHeight: 1.55 }}>
                  <p style={{ marginBottom: '0.75rem' }}>
                    Thank you, <strong>{customerName}</strong>! Your nursery order reference is <strong>{orderRef}</strong>. Our Melbourne nursery team will confirm your dispatch window to <strong>{customerEmail}</strong>.
                  </p>
                  <div style={{ display: 'flex', gap: '0.6rem' }}>
                    <a
                      href={`mailto:${STORE_META.contactEmail}?subject=${encodeURIComponent(`FreshTier Nursery Order ${orderRef} — ${addedItem.name}`)}&body=${encodeURIComponent(
                        `Reference: ${orderRef}\nBundle: ${addedItem.name} (A$${addedItem.price.toFixed(2)})\nPlan: ${addedItem.isSub ? 'Monthly Subscription (15% Off)' : 'One-off'}\nName: ${customerName}\nPhone: ${customerPhone}\nEmail: ${customerEmail}\nPostcode: ${customerPostcode}`
                      )}`}
                      className="pilot2-btn-primary"
                      style={{ textDecoration: 'none', flex: 1, textAlign: 'center', fontSize: '0.85rem' }}
                    >
                      Email Copy to {STORE_META.contactEmail}
                    </a>
                    <button type="button" onClick={() => setAddedItem(null)} className="pilot2-btn-secondary">
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
