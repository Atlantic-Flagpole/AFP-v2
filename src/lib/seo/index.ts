
import { Metadata } from 'next';
import { BRAND_CONFIG } from '@/lib/shopify/brand';

export function getBaseMetadata(custom?: Partial<Metadata>): Metadata {
    return {
        title: {
            default: BRAND_CONFIG.name,
            template: `%s | ${BRAND_CONFIG.name}`,
        },
        description: 'Discover premium telescoping flagpoles and accessories at Atlantic Flagpole. Veteran owned, American made excellence.',
        icons: {
            icon: BRAND_CONFIG.favicon,
        },
        openGraph: {
            title: BRAND_CONFIG.name,
            description: 'The Last Flagpole You\'ll Ever Need. Veteran Owned, American Made.',
            url: 'https://atlanticflagpole.com', // Should be dynamic
            siteName: BRAND_CONFIG.name,
            images: [
                {
                    url: BRAND_CONFIG.logo.url,
                    width: 800,
                    height: 600,
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: BRAND_CONFIG.name,
            description: 'High-performance telescoping flagpoles.',
            images: [BRAND_CONFIG.logo.url],
        },
        ...custom,
    };
}

export function getProductSchema(product: any) {
    return {
        '@context': 'https://schema.org/',
        '@type': 'Product',
        name: product.title,
        image: product.images?.edges?.map((e: any) => e.node.url) || [],
        description: product.descriptionHtml.replace(/<[^>]*>?/gm, ''),
        brand: {
            '@type': 'Brand',
            name: BRAND_CONFIG.name,
        },
        offers: {
            '@type': 'Offer',
            price: product.priceRange?.minVariantPrice?.amount,
            priceCurrency: product.priceRange?.minVariantPrice?.currencyCode,
            availability: 'https://schema.org/InStock',
        },
    };
}
