
import { MetadataRoute } from 'next';
import { getProducts } from '@/lib/shopify';
import { LOCATIONS } from '@/data/locations';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://atlanticflagpole.com'; // Adjust to dynamic domain if needed

    // Products from Shopify
    const products = await getProducts(100);
    const productUrls = products.map((product) => ({
        url: `${baseUrl}/products/${product.handle}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Programmatic SEO Location Pages
    const locationUrls = LOCATIONS.map((loc) => ({
        url: `${baseUrl}/flagpoles/${loc.stateSlug}/${loc.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // Static Pages
    const staticUrls = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
        },
    ];

    return [...staticUrls, ...productUrls, ...locationUrls];
}
