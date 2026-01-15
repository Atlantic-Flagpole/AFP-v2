
const SHOPIFY_GRAPHQL_API_ENDPOINT = `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`;

export async function shopifyFetch<T>({
  query,
  variables,
  headers,
  cache = 'force-cache',
}: {
  query: string;
  variables?: Record<string, unknown>;
  headers?: HeadersInit;
  cache?: RequestCache;
}): Promise<{ status: number; body: T }> {

  try {
    const result = await fetch(SHOPIFY_GRAPHQL_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || '',
        ...headers,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      cache,
      next: {
        revalidate: 900, // 15 minutes by default
      },
    });

    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body,
    };
  } catch (e: unknown) {

    console.error('Shopify Fetch Error:', e);
    throw {
      error: e,
      query,
    };
  }
}

export type Product = {
  id: string;
  handle: string;
  title: string;
  descriptionHtml: string;
  images: {
    edges: {
      node: {
        url: string;
        altText: string;
        width: number;
        height: number;
      };
    }[];
  };
  priceRange: {
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  variants: {
    edges: {
      node: {
        id: string;
        title: string;
        price: {
          amount: string;
          currencyCode: string;
        };
      };
    }[];
  };
};

const getProductQuery = `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      id
      handle
      title
      descriptionHtml
      images(first: 10) {
        edges {
          node {
            url
            altText
            width
            height
          }
        }
      }
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      variants(first: 250) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;

const getProductsQuery = `
  query getProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          handle
          title
          descriptionHtml
          images(first: 1) {
            edges {
              node {
                url
                altText
                width
                height
              }
            }
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;

export async function getProducts(first: number = 10): Promise<Product[]> {
  const res = await shopifyFetch<{ data: { products: { edges: { node: Product }[] } } }>({
    query: getProductsQuery,
    variables: { first },
  });

  return res.body.data.products.edges.map((edge) => edge.node);
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  const res = await shopifyFetch<{ data: { product: Product } }>({
    query: getProductQuery,
    variables: {
      handle,
    },
  });

  return res.body.data.product;
}

const checkoutCreateMutation = `
  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        webUrl
      }
      checkoutUserErrors {
        code
        field
        message
      }
    }
  }
`;

export async function createCheckout(items: { variantId: string; quantity: number }[]): Promise<string> {
  const res = await shopifyFetch<{
    data: {
      checkoutCreate: {
        checkout: { webUrl: string };
        checkoutUserErrors: any[];
      };
    };
  }>({
    query: checkoutCreateMutation,
    variables: {
      input: {
        lineItems: items.map((item) => ({
          variantId: item.variantId,
          quantity: item.quantity,
        })),
      },
    },
    cache: 'no-store',
  });

  if (res.body.data.checkoutCreate.checkoutUserErrors.length > 0) {
    throw new Error(res.body.data.checkoutCreate.checkoutUserErrors[0].message);
  }

  return res.body.data.checkoutCreate.checkout.webUrl;
}


