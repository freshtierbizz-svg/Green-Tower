import React from 'react';
import { ShieldCheck, FileText, Lock, Truck, RotateCcw, ArrowLeft } from 'lucide-react';

interface LegalPoliciesProps {
  activePolicy: 'terms' | 'privacy' | 'refunds' | 'shipping';
  onSelectPolicy: (policy: 'terms' | 'privacy' | 'refunds' | 'shipping') => void;
  onBackToStore: () => void;
}

export const LegalPolicies: React.FC<LegalPoliciesProps> = ({
  activePolicy,
  onSelectPolicy,
  onBackToStore,
}) => {
  const tabs: { id: 'terms' | 'privacy' | 'refunds' | 'shipping'; label: string; icon: React.ReactNode }[] = [
    { id: 'terms', label: 'Terms of Service', icon: <FileText size={16} /> },
    { id: 'privacy', label: 'Privacy Policy', icon: <Lock size={16} /> },
    { id: 'refunds', label: 'Refund & Warranty Policy', icon: <RotateCcw size={16} /> },
    { id: 'shipping', label: 'Shipping Policy', icon: <Truck size={16} /> },
  ];

  return (
    <section
      style={{
        padding: 'clamp(2.5rem, 5vw, 4.5rem) 0',
        background: '#FAF9F5',
        color: '#142018',
        minHeight: '75vh',
      }}
    >
      <div className="container" style={{ maxWidth: '880px' }}>
        {/* Back button */}
        <button
          type="button"
          onClick={onBackToStore}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            background: '#FFFFFF',
            border: '1px solid rgba(27, 67, 50, 0.15)',
            color: '#1B4332',
            padding: '0.5rem 0.95rem',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '0.85rem',
            cursor: 'pointer',
            marginBottom: '1.5rem',
          }}
        >
          <ArrowLeft size={15} />
          <span>Back to Storefront</span>
        </button>

        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div
            className="pilot2-badge"
            style={{ marginBottom: '0.75rem', background: '#EEF4EE', border: '1px solid #D4E3D6' }}
          >
            <ShieldCheck size={13} color="#1B4332" />
            <span>FRESHTIER AUSTRALIA • STORE POLICIES & LEGAL</span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(1.9rem, 4vw, 2.75rem)',
              fontWeight: 800,
              color: '#142018',
              letterSpacing: '-0.025em',
              marginBottom: '0.5rem',
            }}
          >
            Store Policies & Terms
          </h1>
          <p style={{ color: '#495B50', fontSize: '0.98rem', lineHeight: 1.6 }}>
            Standard e-commerce terms, privacy protections under the Australian Privacy Principles (APPs), and statutory guarantees under the Australian Consumer Law (ACL).
          </p>
        </div>

        {/* Policy Selector Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2rem',
            borderBottom: '1px solid rgba(27, 67, 50, 0.12)',
            paddingBottom: '1rem',
          }}
        >
          {tabs.map((tab) => {
            const isActive = activePolicy === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelectPolicy(tab.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.65rem 1.1rem',
                  borderRadius: '10px',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: isActive ? '2px solid #1B4332' : '1px solid rgba(27, 67, 50, 0.15)',
                  background: isActive ? '#1B4332' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#37473E',
                  transition: 'all 0.15s ease',
                }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Policy Document Card */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(27, 67, 50, 0.12)',
            borderRadius: '18px',
            padding: 'clamp(1.5rem, 4vw, 2.75rem)',
            boxShadow: '0 10px 30px -10px rgba(27, 67, 50, 0.08)',
            lineHeight: 1.7,
            fontSize: '0.94rem',
            color: '#2D3A32',
          }}
        >
          {activePolicy === 'terms' && (
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#142018', marginBottom: '0.35rem' }}>
                Terms of Service
              </h2>
              <p style={{ fontSize: '0.82rem', color: '#6B7280', marginBottom: '1.5rem' }}>
                Last updated: November 2026 • FreshTier Australia (ABN 30 783 236 188)
              </p>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#142018', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                1. Overview
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                This website is operated by <strong>FreshTier Australia</strong> (ABN 30 783 236 188). Throughout the site, the terms “we”, “us” and “our” refer to FreshTier Australia. FreshTier Australia offers this website, including all information, tools, and vertical gardening products available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                By visiting our site and/or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein. Our online checkout and order processing are hosted by <strong>Shopify Inc.</strong> (`nvz0jw-0g.myshopify.com`), which provides the e-commerce platform that allows us to sell our products and services to you.
              </p>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#142018', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                2. Online Store Terms & Safe Operation
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or territory of residence. Our vertical hydroponic/aeroponic tower systems include a low-voltage DC submersible water pump and electrical power adapter designed for standard Australian 230V/240V AC household outlets. Customers must follow the supplied setup guide, ensure electrical connections remain dry and elevated above splash zones, and supervise children or pets around water reservoirs.
              </p>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#142018', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                3. Products, Specifications & Growing Performance
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                We have made every effort to display as accurately as possible the colours, dimensions (53 cm reservoir diameter, 60 × 60 cm recommended clear floor space, and 105 cm / 135 cm / 195 cm assembled heights), and inclusions of our products. Crop growth rates, harvest timeframes, and grocery savings estimates provided on our website or calculator are illustrative benchmarks based on trial harvests; actual yields depend on sunlight exposure, ambient temperature, water pH/nutrient maintenance, and crop selection.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Unless explicitly ordered via our separate Seedling Nursery service, Complete Growing Kits include dry propagation consumables (coco-coir plugs, A+B nutrients, nursery tray, and pH kit) and do not include live plants or seeds.
              </p>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#142018', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                4. Pricing & Australian GST
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                All prices displayed on this storefront are in <strong>Australian Dollars (AUD)</strong> and include 10% Australian Goods and Services Tax (GST) where applicable. Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue a product or package without notice.
              </p>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#142018', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                5. Accuracy of Billing and Account Information
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                We reserve the right to refuse any order you place with us. You agree to provide current, complete, and accurate purchase, delivery, and contact information for all purchases made at our store so that we can complete your transactions and contact you regarding dispatch or delivery updates as needed.
              </p>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#142018', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                6. Australian Consumer Law & Limitation of Liability
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                Nothing in these Terms of Service excludes, restricts, or modifies any consumer guarantee, right, or remedy conferred on you by the <strong>Australian Consumer Law</strong> (Schedule 2 of the <em>Competition and Consumer Act 2010 (Cth)</em>) or any other applicable Australian law that cannot be excluded, restricted, or modified by agreement.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                To the maximum extent permitted by law, FreshTier Australia shall not be liable for any indirect, incidental, or consequential damages (including water damage resulting from improper indoor placement or failure to inspect hose/seal fittings) arising from your use of any product purchased from us.
              </p>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#142018', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                7. Governing Law & Statutory Contact Information
              </h3>
              <p style={{ marginBottom: '0.5rem' }}>
                These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of the <strong>State of Victoria, Australia</strong>.
              </p>
              <div
                style={{
                  marginTop: '1rem',
                  padding: '1rem 1.25rem',
                  background: '#F4F8F4',
                  border: '1px solid #D4E3D6',
                  borderRadius: '10px',
                  fontSize: '0.84rem',
                  color: '#37473E',
                }}
              >
                <div><strong>Entity:</strong> FreshTier Australia (ABN 30 783 236 188)</div>
                <div><strong>Location:</strong> Melbourne, Victoria, Australia</div>
                <div><strong>Primary Support & Legal Notices:</strong> hello@freshtier.com.au</div>
                <div><strong>Statutory Regulatory Contact:</strong> +61 432 777 813 (written email enquiries preferred for fastest order tracking and warranty resolution)</div>
              </div>
            </div>
          )}

          {activePolicy === 'privacy' && (
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#142018', marginBottom: '0.35rem' }}>
                Privacy Policy
              </h2>
              <p style={{ fontSize: '0.82rem', color: '#6B7280', marginBottom: '1.5rem' }}>
                Last updated: November 2026 • Compliant with the Privacy Act 1988 (Cth) & Australian Privacy Principles (APPs)
              </p>

              <p style={{ marginBottom: '1rem' }}>
                This Privacy Policy describes how <strong>FreshTier Australia</strong> (ABN 30 783 236 188) collects, uses, and discloses your personal information when you visit or make a purchase from our storefront or checkout via Shopify.
              </p>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#142018', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                1. Personal Information We Collect
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                When you visit the Site, we automatically collect certain technical information about your device, including information about your web browser, IP address, time zone, and cookies needed to operate the Shopify cart and checkout session.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                When you make a purchase or submit an order enquiry through the Site, we collect your name, billing address, shipping address, payment confirmation details (processed via Shopify PCI-DSS Level 1 encrypted payment gateways; we never store raw credit card numbers), email address, and delivery phone number (“Order Information”).
              </p>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#142018', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                2. How We Use Your Personal Information
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                We use the Order Information that we collect generally to fulfil any orders placed through the Site (including processing your payment information, arranging courier dispatch from our Victoria warehouse, and providing you with tax invoices and order confirmations). Additionally, we use this Order Information to communicate with you and screen orders for potential risk or fraud.
              </p>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#142018', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                3. Sharing Your Personal Information
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                We share your Personal Information only with essential service providers required to fulfil your order:
              </p>
              <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
                <li style={{ marginBottom: '0.4rem' }}>
                  <strong>Shopify Inc.:</strong> We use Shopify to power our online checkout and order management. You can read more about how Shopify uses your Personal Information at `https://www.shopify.com/legal/privacy`.
                </li>
                <li style={{ marginBottom: '0.4rem' }}>
                  <strong>Delivery & Freight Partners:</strong> Your name, delivery address, and courier notification details are shared with Australia Post or our Victorian courier partners solely to deliver your order.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> We may also share your Personal Information to comply with applicable Australian laws and regulations.
                </li>
              </ul>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#142018', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                4. Data Retention & Your Rights Under Australian Law
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                When you place an order through the Site, we will maintain your Order Information for our tax and warranty records unless and until you ask us to delete this information (subject to Australian Taxation Office record-keeping requirements). Under the Australian Privacy Principles, you have the right to request access to or correction of the personal information we hold about you by contacting `hello@freshtier.com.au`.
              </p>
            </div>
          )}

          {activePolicy === 'refunds' && (
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#142018', marginBottom: '0.35rem' }}>
                Refund, Returns & 2-Year Warranty Policy
              </h2>
              <p style={{ fontSize: '0.82rem', color: '#6B7280', marginBottom: '1.5rem' }}>
                Last updated: November 2026 • Backed by Australian Consumer Law (ACL) Statutory Guarantees
              </p>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#142018', marginTop: '1.25rem', marginBottom: '0.5rem' }}>
                1. Australian Consumer Law Guarantees
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                Our goods come with guarantees that cannot be excluded under the <strong>Australian Consumer Law</strong>. You are entitled to a replacement or refund for a major failure and compensation for any other reasonably foreseeable loss or damage. You are also entitled to have the goods repaired or replaced if the goods fail to be of acceptable quality and the failure does not amount to a major failure.
              </p>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#142018', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                2. 2-Year Australian Hardware Replacement Warranty
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                In addition to your statutory rights under the ACL, every FreshTier home system is covered by our <strong>2-Year Australian Replacement Warranty</strong> from the date of delivery. This covers manufacturing defects in:
              </p>
              <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
                <li>Modular White ABS Tower Sections, Top Cap, and 38L Hydro-Reservoir Base</li>
                <li>Low-Voltage DC Submersible Water Pump & Power Supply</li>
                <li>Automated Timer Switch & Optional 24V DC LED Grow Light Bars</li>
              </ul>
              <p style={{ marginBottom: '1rem' }}>
                If a covered component fails under normal residential use within 2 years, we will dispatch a replacement component or unit free of charge from our Melbourne warehouse.
              </p>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#142018', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                3. 30-Day Change-of-Mind Returns
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                We have a 30-day return policy, which means you have 30 days after receiving your item to request a return if you change your mind. To be eligible for a change-of-mind return, your hardware must be clean, undamaged, and in its original packaging. Opened or used liquid nutrient bottles and hydrated coco-coir seedling plugs are non-returnable for hygiene reasons. Return shipping costs for change-of-mind returns are the responsibility of the buyer.
              </p>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#142018', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                4. How to Start a Return or Warranty Claim
              </h3>
              <p style={{ marginBottom: '0.5rem' }}>
                To start a return or warranty replacement, email us at <strong>hello@freshtier.com.au</strong> with your order number and a brief photo or description of the issue. Approved refunds are processed back to your original payment method within 5–10 business days.
              </p>
            </div>
          )}

          {activePolicy === 'shipping' && (
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#142018', marginBottom: '0.35rem' }}>
                Shipping & Dispatch Policy
              </h2>
              <p style={{ fontSize: '0.82rem', color: '#6B7280', marginBottom: '1.5rem' }}>
                Last updated: November 2026 • Melbourne, Victoria Warehouse Distribution
              </p>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#142018', marginTop: '1.25rem', marginBottom: '0.5rem' }}>
                1. Dispatch Timeframe (24–48 Hours)
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                All orders are packed and dispatched from our Melbourne, Victoria warehouse within <strong>24 to 48 business hours</strong> (Monday to Friday, excluding Victorian public holidays). You will receive an automated email with your tracking link as soon as your parcel is scanned for dispatch.
              </p>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#142018', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                2. Delivery Areas & Rates
              </h3>
              <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
                <li style={{ marginBottom: '0.4rem' }}>
                  <strong>Greater Melbourne Metro & Eligible Victoria Postcodes:</strong> Complimentary (Free) Express Delivery on all complete tower systems.
                </li>
                <li style={{ marginBottom: '0.4rem' }}>
                  <strong>Regional Victoria & Interstate Australia (NSW, QLD, SA, ACT, TAS, WA, NT):</strong> Calculated automatically at Shopify checkout based on parcel dimensions and your delivery postcode.
                </li>
              </ul>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#142018', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                3. Transit Damage Protection
              </h3>
              <p style={{ marginBottom: '0.5rem' }}>
                Please inspect your order upon reception and contact us immediately at <strong>hello@freshtier.com.au</strong> if any section is cracked, damaged in transit, or missing so that we can dispatch a replacement part immediately at zero cost to you.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
