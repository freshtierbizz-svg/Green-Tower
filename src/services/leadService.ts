// FreshTier Commercial Lead Ingestion Service
// Governed by Master Project Governance Prompt v004 & Blueprint v002

import { B2BIntakeFormData } from '../types/storefront';
import { B2B_INTEGRATION_CONFIG } from '../config/storefrontConfig';

export interface LeadSubmissionResult {
  success: boolean;
  referenceId: string;
  mode: 'webhook' | 'email_fallback' | 'local_demo';
  message: string;
  mailtoUrl: string;
  timestamp: string;
}

export interface StoredB2BApplication {
  referenceId: string;
  timestamp: string;
  data: B2BIntakeFormData;
  mode: string;
  dispatchedToWebhook: boolean;
}

const STORAGE_KEY = 'freshtier_b2b_applications';

/**
 * Generates an authoritative commercial pilot application reference ID
 * Example format: AH-PILOT-8921
 */
const generateReferenceId = (): string => {
  const timeSuffix = Date.now().toString().slice(-4);
  const randomSuffix = Math.floor(10 + Math.random() * 90);
  return `AH-PILOT-${timeSuffix}${randomSuffix}`;
};

/**
 * Builds a formatted mailto URL for direct email notification fallback
 */
export const buildApplicationMailtoUrl = (
  formData: B2BIntakeFormData,
  referenceId: string
): string => {
  const recipient = B2B_INTEGRATION_CONFIG.leadNotificationEmail;
  const subject = encodeURIComponent(
    `[FreshTier Commercial Pilot] New Application: ${formData.businessName} (Ref: ${referenceId})`
  );

  const bodyText = `
FRESHTIER AUSTRALIA — COMMERCIAL HOSPITALITY PILOT APPLICATION
Reference ID: ${referenceId}
Date: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' })}

--- VENUE & CONTACT DETAILS ---
Business / Venue Name: ${formData.businessName}
ABN: ${formData.abn}
Venue Address: ${formData.venueAddress}
Primary Contact: ${formData.contactName}
Email: ${formData.email}
Phone: ${formData.phone}
Venue Category: ${formData.venueType}

--- OPERATIONAL PROFILE ---
Preferred Crop Mix: ${formData.plantMix}
Current Weekly Produce Spend: ${formData.weeklySpend}
Preferred Delivery Window: ${formData.deliveryWindow}
Weekly Covers / Volume: ${formData.coversPerWeek}
Operating Days per Week: ${formData.operatingDays}

--- VENUE ENVIRONMENT ---
Floor Space: ${formData.spaceEnvironment}
Lighting Environment: ${formData.lightingEnvironment}
Special Notes: ${formData.notes || 'None provided'}

--- PILOT INCLUSIONS ---
• 6-Week Concierge Pilot at $49.99/week AUD (GST inclusive)
• 11-Tier Commercial FreshTier Tower (44 Grow Sites)
• Full-Spectrum LED 360° Light Kit & Automated Submersible Pump
• Weekly Technician Maintenance & Plant Replenishment
• Week 5 Decision: $799 Buyout or $49.99 Packdown
  `.trim();

  return `mailto:${recipient}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
};

/**
 * Submits the venue application to the configured webhook endpoint,
 * persists the record in localStorage, and provides an email notification fallback.
 */
export const submitB2BApplication = async (
  formData: B2BIntakeFormData
): Promise<LeadSubmissionResult> => {
  const referenceId = generateReferenceId();
  const timestamp = new Date().toISOString();
  const mailtoUrl = buildApplicationMailtoUrl(formData, referenceId);

  // Structured payload suitable for Zapier, Make, HubSpot, Klaviyo, or Shopify Customer API
  const payload = {
    source: 'FreshTier.com.au Commercial Onboarding',
    reference_id: referenceId,
    timestamp,
    business: {
      name: formData.businessName,
      abn: formData.abn,
      address: formData.venueAddress,
      category: formData.venueType,
    },
    contact: {
      name: formData.contactName,
      email: formData.email,
      phone: formData.phone,
    },
    operations: {
      preferred_crop_mix: formData.plantMix,
      weekly_spend: formData.weeklySpend,
      delivery_window: formData.deliveryWindow,
      operating_days: formData.operatingDays,
      covers_per_week: formData.coversPerWeek,
      space_notes: formData.spaceEnvironment,
      lighting_notes: formData.lightingEnvironment,
      general_notes: formData.notes,
    },
    pilot_terms: {
      program: '6-Week Hospitality Concierge Pilot',
      weekly_rate_aud: 49.99,
      graduate_buyout_aud: 799.0,
      tower_hardware: '11-Tier Commercial FreshTier Tower (44 Sites)',
    },
  };

  let webhookSuccess = false;
  let mode: 'webhook' | 'email_fallback' | 'local_demo' = 'local_demo';
  let message = 'Application recorded locally (Development / Preview Mode).';

  // 1. Webhook Dispatch if configured
  if (B2B_INTEGRATION_CONFIG.webhookUrl) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const response = await fetch(B2B_INTEGRATION_CONFIG.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        webhookSuccess = true;
        mode = 'webhook';
        message = 'Venue application successfully transmitted to commercial operations team.';
      } else {
        mode = 'email_fallback';
        message = `Webhook responded with status ${response.status}. Direct email fallback generated.`;
      }
    } catch (err) {
      mode = 'email_fallback';
      message = 'Network error contacting webhook. Direct email fallback ready.';
      console.warn('B2B Webhook dispatch warning:', err);
    }
  } else {
    // Simulated processing latency for smooth UX
    if (B2B_INTEGRATION_CONFIG.simulateNetworkLatencyMs > 0) {
      await new Promise((resolve) =>
        setTimeout(resolve, B2B_INTEGRATION_CONFIG.simulateNetworkLatencyMs)
      );
    }
    mode = 'local_demo';
    message = 'Venue application recorded. Webhook URL unconfigured — email fallback ready.';
  }

  // 2. Local Lead Persistence (Guarantee zero lead loss)
  if (B2B_INTEGRATION_CONFIG.enableLocalLeadBackup && typeof window !== 'undefined') {
    try {
      const existing = getStoredApplications();
      const record: StoredB2BApplication = {
        referenceId,
        timestamp,
        data: formData,
        mode,
        dispatchedToWebhook: webhookSuccess,
      };
      existing.unshift(record);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(0, 100)));
    } catch (err) {
      console.error('Failed to backup B2B lead to localStorage:', err);
    }
  }

  return {
    success: true,
    referenceId,
    mode,
    message,
    mailtoUrl,
    timestamp,
  };
};

/**
 * Retrieves all stored venue applications from localStorage
 */
export const getStoredApplications = (): StoredB2BApplication[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};
