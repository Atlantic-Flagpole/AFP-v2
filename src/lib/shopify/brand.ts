
export const BRAND_CONFIG = {
    name: 'Atlantic Flagpole',
    logo: {
        url: '/logo.png', // Default placeholder
        alt: 'Atlantic Flagpole Logo',
        width: 200,
        height: 80,
    },
    favicon: '/favicon.ico',
    colors: {
        navy: '#001B40',
        white: '#FFFFFF',
        accent: '#003366',
    },
    social: {
        instagram: 'https://www.instagram.com/atlanticflagpole/',
        facebook: 'https://www.facebook.com/atlanticflagpole/',
    },
};

export type BrandAssets = {
    logoUrl?: string;
    faviconUrl?: string;
    heroImages?: string[];
};

// This function will be expanded to fetch assets dynamically from Shopify Metafields or Files API
export async function getBrandAssets(): Promise<BrandAssets> {
    // Placeholder for dynamic fetching
    // In a real implementation, we would query Shopify for specific file handles
    return {
        logoUrl: BRAND_CONFIG.logo.url,
        faviconUrl: BRAND_CONFIG.favicon,
    };
}
