import React, { useState } from 'react';
import { B2BIntakeFormData } from '../types/storefront';
import { submitB2BApplication, LeadSubmissionResult } from '../services/leadService';
import { X, CheckCircle2, Building2, Send, ArrowRight, ShieldAlert, Mail, Loader2, ExternalLink } from 'lucide-react';

interface B2BIntakeFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const B2BIntakeForm: React.FC<B2BIntakeFormProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionResult, setSubmissionResult] = useState<LeadSubmissionResult | null>(null);
  const [formData, setFormData] = useState<B2BIntakeFormData>({
    businessName: '',
    abn: '',
    venueAddress: '',
    contactName: '',
    email: '',
    phone: '',
    venueType: 'Cocktail Bar',
    plantMix: 'Cocktail Herbs',
    weeklySpend: '$75/week',
    deliveryWindow: 'Morning',
    operatingDays: 7,
    coversPerWeek: '500-1000',
    spaceEnvironment: 'Indoor bar back wall with ambient lighting',
    lightingEnvironment: 'Natural window light + 24V LED grow light kit',
    notes: '',
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await submitB2BApplication(formData);
      setSubmissionResult(result);
      setSubmitted(true);
    } catch (err) {
      console.error('Lead submission unexpected error:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
      background: 'rgba(5, 10, 8, 0.85)',
      backdropFilter: 'blur(16px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      overflowY: 'auto'
    }}>
      <div className="glass-panel" style={{
        maxWidth: '720px',
        width: '100%',
        padding: '2.5rem',
        borderRadius: '24px',
        border: '1px solid rgba(251, 191, 36, 0.4)',
        background: '#0c1610',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
      }}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            color: '#9CA3AF',
            background: 'rgba(255,255,255,0.05)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div className="badge-emerald" style={{ background: 'rgba(251, 191, 36, 0.15)', color: '#FBBF24', borderColor: 'rgba(251, 191, 36, 0.4)' }}>
                <Building2 size={14} />
                <span>COMMERCIAL ONBOARDING APPLICATION</span>
              </div>
              <span style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: 600 }}>Step {step} of 2</span>
            </div>

            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem', color: '#ffffff' }}>
              Apply For A 6-Week Venue Pilot
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '2rem' }}>
              $49.99/week concierge service fee. We'll review your venue environment and crop requirements before confirming your pilot delivery.
            </p>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.35rem' }}>
                        Business / Venue Name *
                      </label>
                      <input
                        required
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. The Botanical Cocktail Bar"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          color: '#ffffff',
                          fontSize: '0.95rem'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.35rem' }}>
                        ABN (Australian Business Number) *
                      </label>
                      <input
                        required
                        type="text"
                        name="abn"
                        value={formData.abn}
                        onChange={handleChange}
                        placeholder="11 digits ABN"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          color: '#ffffff',
                          fontSize: '0.95rem'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.35rem' }}>
                      Venue Address *
                    </label>
                    <input
                      required
                      type="text"
                      name="venueAddress"
                      value={formData.venueAddress}
                      onChange={handleChange}
                      placeholder="Street address, Suburb, State & Postcode"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: '#ffffff',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div className="grid-3" style={{ gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.35rem' }}>
                        Contact Name *
                      </label>
                      <input
                        required
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        placeholder="Venue Manager / Head Chef"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          color: '#ffffff',
                          fontSize: '0.95rem'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.35rem' }}>
                        Work Email *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="manager@venue.com.au"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          color: '#ffffff',
                          fontSize: '0.95rem'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.35rem' }}>
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0432 777 813"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          color: '#ffffff',
                          fontSize: '0.95rem'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="btn-primary"
                      style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)' }}
                    >
                      Next: Venue Operations & Crop Needs
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.35rem' }}>
                        Venue Type
                      </label>
                      <select
                        name="venueType"
                        value={formData.venueType}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          background: '#15241b',
                          border: '1px solid rgba(255,255,255,0.15)',
                          color: '#ffffff',
                          fontSize: '0.95rem'
                        }}
                      >
                        <option value="Cafe">Cafe</option>
                        <option value="Cocktail Bar">Cocktail Bar</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Catering">Catering</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.35rem' }}>
                        Preferred Crop Mix
                      </label>
                      <select
                        name="plantMix"
                        value={formData.plantMix}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          background: '#15241b',
                          border: '1px solid rgba(255,255,255,0.15)',
                          color: '#ffffff',
                          fontSize: '0.95rem'
                        }}
                      >
                        <option value="Cocktail Herbs">Cocktail Herbs (Mint, Thai Basil, Shiso)</option>
                        <option value="Brunch Microgreens">Brunch Microgreens (Radish, Mustard, Pea)</option>
                        <option value="Edible Flowers">Edible Flowers (Violas, Nasturtiums)</option>
                        <option value="Kitchen Herbs">Kitchen Herbs (Genovese Basil, Coriander)</option>
                        <option value="Mixed">Mixed Custom Collection</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.35rem' }}>
                        Current Weekly Produce Spend
                      </label>
                      <select
                        name="weeklySpend"
                        value={formData.weeklySpend}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          background: '#15241b',
                          border: '1px solid rgba(255,255,255,0.15)',
                          color: '#ffffff',
                          fontSize: '0.95rem'
                        }}
                      >
                        <option value="$25/week">$25 / week</option>
                        <option value="$50/week">$50 / week</option>
                        <option value="$75/week">$75 / week</option>
                        <option value="$100/week">$100 / week</option>
                        <option value="$150+/week">$150+ / week</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.35rem' }}>
                        Preferred Delivery Window
                      </label>
                      <select
                        name="deliveryWindow"
                        value={formData.deliveryWindow}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          background: '#15241b',
                          border: '1px solid rgba(255,255,255,0.15)',
                          color: '#ffffff',
                          fontSize: '0.95rem'
                        }}
                      >
                        <option value="Morning">Morning (8 AM - 11 AM)</option>
                        <option value="Midday">Midday (11 AM - 2 PM)</option>
                        <option value="Afternoon">Afternoon (2 PM - 5 PM)</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.35rem' }}>
                      Additional Venue Space / Lighting Notes
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Provide any details on indoor floor space (e.g. 60x60cm corner near bar) or power access..."
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: '#ffffff',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="btn-secondary"
                      style={{ padding: '0.75rem 1.25rem' }}
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary"
                      style={{
                        background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                        padding: '0.75rem 1.75rem',
                        opacity: isSubmitting ? 0.7 : 1,
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
                          Transmitting Application...
                        </>
                      ) : (
                        <>
                          Submit Venue Application
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(52, 211, 153, 0.2)',
              border: '2px solid #34D399',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              color: '#34D399'
            }}>
              <CheckCircle2 size={36} />
            </div>

            <div style={{ marginBottom: '0.5rem' }}>
              <span className="badge-emerald" style={{
                background: 'rgba(251, 191, 36, 0.15)',
                color: '#FBBF24',
                borderColor: 'rgba(251, 191, 36, 0.4)',
                fontSize: '0.85rem'
              }}>
                APPLICATION ID: {submissionResult?.referenceId || 'AH-PILOT-LOGGED'}
              </span>
            </div>

            <h3 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
              Venue Application Successfully Lodged
            </h3>

            <p style={{ fontSize: '1rem', color: '#D1D5DB', maxWidth: '540px', margin: '0 auto 1.75rem auto', lineHeight: 1.6 }}>
              {submissionResult?.message || "We'll review your growing environment, crop requirements and service area before confirming your 6-Week Hospitality Pilot."}
            </p>

            <div style={{
              padding: '1.25rem',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'left',
              maxWidth: '520px',
              margin: '0 auto 2rem auto',
              fontSize: '0.875rem'
            }}>
              <div style={{ color: '#FBBF24', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                <span>APPLICATION SUMMARY</span>
                <span style={{ color: '#9CA3AF', fontSize: '0.75rem' }}>{submissionResult?.timestamp ? new Date(submissionResult.timestamp).toLocaleDateString('en-AU') : 'Today'}</span>
              </div>
              <div style={{ color: '#ffffff', marginBottom: '0.25rem' }}><strong>Business:</strong> {formData.businessName} (ABN: {formData.abn})</div>
              <div style={{ color: '#ffffff', marginBottom: '0.25rem' }}><strong>Contact:</strong> {formData.contactName} ({formData.email} • {formData.phone})</div>
              <div style={{ color: '#ffffff', marginBottom: '0.25rem' }}><strong>Venue Category:</strong> {formData.venueType}</div>
              <div style={{ color: '#ffffff' }}><strong>Target Crop Mix:</strong> {formData.plantMix}</div>
            </div>

            {/* Direct Email Notification / Follow-up Action */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              {submissionResult?.mailtoUrl && (
                <a
                  href={submissionResult.mailtoUrl}
                  className="btn-secondary"
                  style={{
                    padding: '0.75rem 1.5rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none'
                  }}
                >
                  <Mail size={16} />
                  Email Copy to Commercial Team
                  <ExternalLink size={14} />
                </a>
              )}

              <button
                onClick={onClose}
                className="btn-primary"
                style={{ padding: '0.75rem 2.25rem' }}
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
