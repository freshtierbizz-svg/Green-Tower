import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ShieldCheck, Phone, Mail } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'B2C Home Systems' | 'B2B Commercial Pilot' | 'Seedling Nursery' | 'Compliance & ACL Warranty';
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<string>('All');

  const faqItems: FAQItem[] = [
    {
      category: 'B2C Home Systems',
      question: 'How much balcony space do I need for an AeroHarvest Home Tower?',
      answer: 'The AeroHarvest tower has a compact 60 × 60 cm (0.22 m²) base footprint. It is engineered specifically for Australian apartment balconies, patios, townhouses, and small courtyards.'
    },
    {
      category: 'B2C Home Systems',
      question: 'How often do I need to top up the 38-Litre water reservoir?',
      answer: 'Under standard conditions, a full 38-litre reservoir lasts approximately 2 to 3 weeks for a 7-tier home tower. Water recirculates continuously in a closed loop, drastically reducing evaporation.'
    },
    {
      category: 'B2B Commercial Pilot',
      question: 'How does the 6-Week Hospitality Pilot concierge service work?',
      answer: 'For $49.99/week (6 weekly service payments = $299.94 total), we deliver a fully assembled 11-tier commercial tower pre-stocked with mature starter plants. Our technician visits weekly to swap spent plants, refill nutrients, check root health, and train venue staff.'
    },
    {
      category: 'B2B Commercial Pilot',
      question: 'What happens at the end of the 6-Week Hospitality Pilot?',
      answer: 'At Week 5, you receive an automated choice: (1) Keep your tower by unlocking the $799 Pilot Graduate Ownership Price (Save $300 off $1,099 RRP), or (2) Return the tower for a simple $49.99 packdown & collection fee.'
    },
    {
      category: 'Seedling Nursery',
      question: 'Where do seedling replacement plant pods come from?',
      answer: 'All plant pods are pre-rooted in our Australian nursery using food-safe plugs. They arrive mature and ready for immediate insertion into your tower grow sites.'
    },
    {
      category: 'Compliance & ACL Warranty',
      question: 'What consumer protection and warranty guarantees apply under Australian law?',
      answer: 'Our goods come with guarantees that cannot be excluded under the Australian Consumer Law (ACL). You are entitled to a replacement or refund for a major failure and compensation for any other reasonably foreseeable loss. We also provide a 2-Year Australian Hardware Warranty.'
    },
    {
      category: 'Compliance & ACL Warranty',
      question: 'Is the electrical system safe for outdoor balcony & restaurant wet environments?',
      answer: 'Yes. AeroHarvest utilizes a certified low-voltage 24V/12V DC power architecture. The submerged circulation pump operates on low-voltage DC power step-down isolated from Australian 240V mains.'
    }
  ];

  const filteredItems = activeTab === 'All'
    ? faqItems
    : faqItems.filter((item) => item.category === activeTab);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ padding: '5rem 0', background: '#0b130e', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <span className="badge-emerald" style={{ marginBottom: '0.5rem' }}>HELP & SUPPORT</span>
          <h2 style={{ fontSize: '2.5rem', color: '#F8FAFC', marginBottom: '0.75rem' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '1.05rem' }}>
            Everything you need to know about AeroHarvest home towers, commercial venue pilots, nursery subscriptions, and Australian Consumer Law guarantees.
          </p>
        </div>

        {/* TAB FILTER BUTTONS */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.5rem' }}>
          {['All', 'B2C Home Systems', 'B2B Commercial Pilot', 'Seedling Nursery', 'Compliance & ACL Warranty'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '0.55rem 1.1rem',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: activeTab === tab ? 700 : 500,
                border: activeTab === tab ? '1px solid #34D399' : '1px solid rgba(255,255,255,0.1)',
                background: activeTab === tab ? 'rgba(52, 211, 153, 0.18)' : 'rgba(255,255,255,0.03)',
                color: activeTab === tab ? '#34D399' : '#D1D5DB',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ACCORDION FAQ ITEMS */}
        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  borderRadius: '14px',
                  background: isOpen
                    ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.88) 0%, rgba(15, 23, 42, 0.92) 100%)'
                    : 'rgba(255,255,255,0.02)',
                  border: isOpen ? '1px solid rgba(52, 211, 153, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    background: 'none',
                    border: 'none',
                    color: '#ffffff',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: isOpen ? '#34D399' : '#64748B',
                      background: isOpen ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px'
                    }}>
                      {item.category}
                    </span>
                    <span style={{ fontSize: '1.05rem', fontWeight: 600, color: isOpen ? '#ffffff' : '#E2E8F0' }}>
                      {item.question}
                    </span>
                  </div>
                  <div>
                    {isOpen ? <ChevronUp size={20} color="#34D399" /> : <ChevronDown size={20} color="#94A3B8" />}
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 1.5rem 1.35rem 1.5rem',
                    color: '#94A3B8',
                    fontSize: '0.95rem',
                    lineHeight: '1.65',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    paddingTop: '1rem'
                  }}>
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* HUMAN CONTACT SUPPORT BOX */}
        <div style={{
          maxWidth: '820px',
          margin: '3rem auto 0 auto',
          padding: '1.5rem 2rem',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(5, 150, 105, 0.05) 100%)',
          border: '1px solid rgba(16, 185, 129, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#F8FAFC' }}>
              Have questions about your home balcony setup or venue trial?
            </div>
            <div style={{ fontSize: '0.875rem', color: '#94A3B8', marginTop: '0.2rem' }}>
              Talk with our Australian support team in Victoria: <a href="tel:0432777813" style={{ color: '#34D399', textDecoration: 'none' }}><strong>0432 777 813</strong></a> (Mon–Fri 9am–5pm AEST)
            </div>
          </div>
          <a
            href="mailto:hello@aeroharvest.com.au"
            style={{
              padding: '0.65rem 1.25rem',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.875rem',
              textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)'
            }}
          >
            Email Support Desk
          </a>
        </div>
      </div>
    </section>
  );
};
