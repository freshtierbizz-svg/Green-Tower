import React from 'react';
import { PRODUCT_CONFIG } from '../config/product.config';
import { Plane, Utensils, ShoppingCart, ExternalLink, ShieldCheck, MapPin } from 'lucide-react';

export const SocialProofLocations: React.FC = () => {
  return (
    <section style={{ 
      padding: '5.5rem 0', 
      position: 'relative',
      background: "linear-gradient(180deg, rgba(17, 24, 39, 0.88) 0%, rgba(15, 23, 42, 0.94) 100%), url('assets/sunroom-bg.jpg') center/cover fixed no-repeat",
      borderTop: '1px solid rgba(16, 185, 129, 0.15)',
      borderBottom: '1px solid rgba(16, 185, 129, 0.15)'
    }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <span style={{ fontSize: '0.85rem', color: '#34D399', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
            Fact-Checked Commercial Installations
          </span>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '1.25rem' }}>
            From International Airports & Michelin Dining to Your Balcony
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem' }}>
            You may have seen vertical aeroponic towers featured in major travel hubs, Michelin-recognized sustainable restaurants, or urban grocers. Now you can bring that exact soilless growing technology home.
          </p>
        </div>

        {/* 3 Location Proof Cards */}
        <div className="grid-3">
          
          {/* Airport Card */}
          <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(5, 150, 105, 0.12) 100%)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Plane size={24} color="#34D399" />
              </div>
              <span className="badge-emerald" style={{ fontSize: '0.75rem', marginBottom: '0.75rem' }}>
                <MapPin size={12} /> {PRODUCT_CONFIG.locationsProof[0].category}
              </span>
              <h3 style={{ fontSize: '1.25rem', margin: '0.5rem 0 0.75rem 0' }}>
                {PRODUCT_CONFIG.locationsProof[0].location}
              </h3>
              <p style={{ color: '#D1D5DB', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                {PRODUCT_CONFIG.locationsProof[0].details}
              </p>
            </div>

            <div style={{
              padding: '0.85rem',
              background: 'linear-gradient(135deg, rgba(17, 26, 20, 0.88) 0%, rgba(11, 19, 14, 0.92) 100%)',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.78rem',
              color: '#9CA3AF'
            }}>
              <span style={{ color: '#34D399', fontWeight: '600', display: 'block', marginBottom: '0.2rem' }}>
                Fact-Checked Verification Source:
              </span>
              {PRODUCT_CONFIG.locationsProof[0].source}
            </div>
          </div>

          {/* Michelin Restaurant Card */}
          <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(5, 150, 105, 0.12) 100%)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Utensils size={24} color="#34D399" />
              </div>
              <span className="badge-emerald" style={{ fontSize: '0.75rem', marginBottom: '0.75rem' }}>
                <MapPin size={12} /> {PRODUCT_CONFIG.locationsProof[1].category}
              </span>
              <h3 style={{ fontSize: '1.25rem', margin: '0.5rem 0 0.75rem 0' }}>
                {PRODUCT_CONFIG.locationsProof[1].location}
              </h3>
              <p style={{ color: '#D1D5DB', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                {PRODUCT_CONFIG.locationsProof[1].details}
              </p>
            </div>

            <div style={{
              padding: '0.85rem',
              background: 'linear-gradient(135deg, rgba(17, 26, 20, 0.88) 0%, rgba(11, 19, 14, 0.92) 100%)',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.78rem',
              color: '#9CA3AF'
            }}>
              <span style={{ color: '#34D399', fontWeight: '600', display: 'block', marginBottom: '0.2rem' }}>
                Fact-Checked Verification Source:
              </span>
              {PRODUCT_CONFIG.locationsProof[1].source}
            </div>
          </div>

          {/* Supermarkets Card */}
          <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(5, 150, 105, 0.12) 100%)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <ShoppingCart size={24} color="#34D399" />
              </div>
              <span className="badge-emerald" style={{ fontSize: '0.75rem', marginBottom: '0.75rem' }}>
                <MapPin size={12} /> {PRODUCT_CONFIG.locationsProof[2].category}
              </span>
              <h3 style={{ fontSize: '1.25rem', margin: '0.5rem 0 0.75rem 0' }}>
                {PRODUCT_CONFIG.locationsProof[2].location}
              </h3>
              <p style={{ color: '#D1D5DB', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                {PRODUCT_CONFIG.locationsProof[2].details}
              </p>
            </div>

            <div style={{
              padding: '0.85rem',
              background: 'linear-gradient(135deg, rgba(17, 26, 20, 0.88) 0%, rgba(11, 19, 14, 0.92) 100%)',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.78rem',
              color: '#9CA3AF'
            }}>
              <span style={{ color: '#34D399', fontWeight: '600', display: 'block', marginBottom: '0.2rem' }}>
                Fact-Checked Verification Source:
              </span>
              {PRODUCT_CONFIG.locationsProof[2].source}
            </div>
          </div>

        </div>

        {/* Residential Balcony Lifestyle Photoshoot Feature Card */}
        <div className="glass-panel" style={{ overflow: 'hidden', padding: 0, marginTop: '3rem' }}>
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div style={{ height: '100%', minHeight: '340px' }}>
              <img
                src="assets/balcony-accurate.jpg"
                alt="Happy Homeowner Harvesting Produce from FreshTier Tower on City Balcony"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ padding: '3rem' }}>
              <span style={{ fontSize: '0.85rem', color: '#34D399', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                Smaller Footprint. Bigger Harvests.
              </span>
              <h3 style={{ fontSize: '1.85rem', marginBottom: '1rem' }}>
                Engineered for Smaller Australian Backyards & Balconies
              </h3>
              <p style={{ color: '#9CA3AF', fontSize: '1.05rem', lineHeight: '1.65' }}>
                As Australian block sizes shrink and grocery store prices soar, FreshTier transforms any <strong>0.22 m² corner</strong> (60cm x 60cm base) into a high-yielding organic produce hub. Enjoy fresh basil, strawberries, and salad greens harvested seconds before eating — with zero soil dirt, zero weeding, and zero supermarket plastic waste.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

