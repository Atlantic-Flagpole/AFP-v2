export const BRAND_CONFIG = {
    name: 'Atlantic Flagpole',
    logo: {
        url: '/logo.png',
        alt: 'Atlantic Flagpole Logo',
        width: 200,
        height: 80,
    },
    favicon: '/favicon.png',
    colors: {
        navy: '#001B40',
        white: '#FFFFFF',
        accent: '#CB2027',
    },
    heroImages: [
        '/hero.jpg',
    ],

    social: {
        instagram: 'https://www.instagram.com/bankroll_bop93/',
        tiktok: 'https://www.tiktok.com/@bankrollbop?is_from_webapp=1&sender_device=pc',
    },
    contact: {
        phone: '518-917-3429',
        phoneClick: 'tel:5189173429',
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
