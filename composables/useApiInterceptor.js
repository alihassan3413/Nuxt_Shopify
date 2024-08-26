export function useApiInterceptor() {
  const config = useRuntimeConfig();

  const fetchWithInterceptor = async (query, options = {}) => {
    try {
      const response = await $fetch(config.public.SHOPIFY_API_URL, {
        method: "POST",
        ...options,
        headers: {
          ...options.headers,
          Accept: "application/json",
          Authorization: `Bearer ${config.public.SHOPIFY_ACCESS_TOKEN}`,
        },
        body: { query, options },
      });

      console.log("Response:", response);
      return response;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  };

  return {
    fetchWithInterceptor,
  };
}
