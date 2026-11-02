/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SHOPIFY_STORE_DOMAIN?: string;
  readonly VITE_SHOPIFY_STOREFRONT_TOKEN?: string;
  readonly VITE_SHOPIFY_PRODUCT_ID?: string;
  readonly VITE_SHOPIFY_KIT_PRODUCT_ID?: string;
  readonly VITE_SHOPIFY_BUY_BUTTON_ENABLED?: string;
  readonly VITE_B2B_WEBHOOK_URL?: string;
  readonly VITE_B2B_LEAD_EMAIL?: string;
  readonly VITE_SHOPIFY_VARIANT_5_BASE?: string;
  readonly VITE_SHOPIFY_VARIANT_5_KIT?: string;
  readonly VITE_SHOPIFY_VARIANT_7_BASE?: string;
  readonly VITE_SHOPIFY_VARIANT_7_KIT?: string;
  readonly VITE_SHOPIFY_VARIANT_11_BASE?: string;
  readonly VITE_SHOPIFY_VARIANT_11_KIT?: string;
  readonly VITE_SHOPIFY_VARIANT_ADDON_LED?: string;
  readonly VITE_SHOPIFY_VARIANT_ADDON_TRELLIS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
