export function useShopify() {
  const config = useRuntimeConfig();
  const shopifyEndPoint = config.public.SHOPIFY_API_URL;
  const shopifyAccessToken = config.public.SHOPIFY_ACCESS_TOKEN;

  const fetchShopifyData = async (query, variables = {}) => {
    try {
      const response = await $fetch(shopifyEndPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": shopifyAccessToken,
        },
        body: {
          query,
          variables,
        },
      });

      return response;
    } catch (error) {
      console.error("Error fetching Shopify data:", error);
      throw error;
    }
  };

  return {
    fetchShopifyData,
  };
}
