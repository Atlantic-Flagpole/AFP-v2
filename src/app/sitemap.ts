
import { MetadataRoute } from 'next';
import { getProducts, getCollections } from '@/lib/shopify';
import { LOCATIONS } from '@/data/locations';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://atlanticflagpole.com';

    // Products
    const products = await getProducts(100);
    const productUrls = products.map((product) => ({
        url: `${baseUrl}/products/${product.handle}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Collections
    const collections = await getCollections(100);
    const collectionUrls = collections.map((collection) => ({
        url: `${baseUrl}/collections/${collection.handle}`,
        lastModified: new Date(collection.updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
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

    return [...staticUrls, ...productUrls, ...collectionUrls, ...locationUrls];
}
