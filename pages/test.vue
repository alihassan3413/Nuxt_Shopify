<script setup>
definePageMeta({
  layout: "custom",
});

import { onMounted, ref } from "vue";
import { useShopify } from "~/composables/useShopify";
import { useApiInterceptor } from "~/composables/useApiInterceptor";

// Create a reference to store the fetched products
const products = ref([]);
const { fetchWithInterceptor } = useApiInterceptor();

// Get the fetchShopifyData function from the useShopify composable
const { fetchShopifyData } = useShopify();

const queryForStore = `
{
  shop {
    name
  }
}`;

const StoreInfo = async () => {
  try {
    await fetchWithInterceptor(queryForStore, { first: 10 });
  } catch (error) {
    console.error(error);
  }
};

// Define the GraphQL query for fetching products
const query = `
    query getProducts($first: Int!) {
      products(first: $first) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `;

// Fetch the products when the component is mounted
onMounted(async () => {
  try {
    const data = await fetchShopifyData(queryForStore, { first: 10 });
    products.value = data?.data?.products?.edges || [];
    console.log(data);

    // const StoreData = StoreInfo();
    // console.log(StoreData.data);
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
});
</script>

<template>
  <div class="section">
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <ul>
      <!-- <li v-for="product in products" :key="product.node.id">
        {{ product.node.title }}
      </li> -->
    </ul>
  </div>
</template>

<style scoped></style>
