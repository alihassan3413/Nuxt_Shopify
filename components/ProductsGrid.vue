<script setup>
import { useShopify } from "~/composables/useShopify";

const images = ref([]);

const { fetchShopifyData } = useShopify();
const query = `
 query getProducts($first: Int!) {
      products(first: $first) {
        edges {
          node {
            id
            images(first:$first){
             edges {
               node {
               url
                }
              }
            }
          }
        }
      }
    }
`;

onMounted(async () => {
  try {
    const data = await fetchShopifyData(query, { first: 5 });
    console.log();
    data.data.products.edges.forEach((product) => {
      product.node.images.edges.forEach((imageEdge) => {
        console.log(imageEdge.node.url);
        images.value.push(imageEdge.node.url);
        console.log("images array", images.value);
      });
    });
  } catch (error) {}
});
</script>

<template>
  <div class="section mb-20">
    <div class="grid grid-cols-5 gap-4 px-10">
      <div class="col-span-3 relative overflow-hidden">
        <NuxtImg
          :src="images[0]"
          class="absolute top-0 left-0 w-full h-full object-cover"
        />
        <h1
          class="text-2xl bg-black/50 text-black absolute inset-0 flex items-center justify-center cursor-pointer hover:bg-black/60 transition-all"
        >
          <span class="bg-white px-4 py-0.5 font-mono">Fitness & Active</span>
        </h1>
      </div>
      <div class="col-span-2 relative">
        <NuxtImg :src="images[1]" class="w-full h-[full] object-cover" />
        <h1
          class="text-2xl bg-black/30 text-black absolute inset-0 flex items-center justify-center cursor-pointer"
        >
          <span class="bg-white px-4 py-0.5 font-mono">Smart Watches</span>
        </h1>
      </div>
      <div class="col-span-2 relative h-[40%]">
        <NuxtImg :src="images[2]" class="w-full h-full object-cover" />
        <h1
          class="text-2xl bg-black/30 text-black absolute inset-0 flex items-center justify-center cursor-pointer"
        >
          <span class="bg-white px-4 py-0.5 font-mono">Hoodies</span>
        </h1>
      </div>
      <div class="col-span-2 relative h-[40%]">
        <NuxtImg :src="images[3]" class="w-full h-full object-cover" />
        <h1
          class="text-2xl bg-black/30 text-black absolute inset-0 flex items-center justify-center cursor-pointer"
        >
          <span class="bg-white px-4 py-0.5 font-mono">Tank & Tops</span>
        </h1>
      </div>
      <div class="col-span-1 relative h-[40%]">
        <NuxtImg :src="images[4]" class="w-full h-full object-cover" />
        <h1
          class="text-2xl bg-black/30 text-black absolute inset-0 flex items-center justify-center cursor-pointer"
        >
          <span class="bg-white px-4 py-0.5 font-mono">Women</span>
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
