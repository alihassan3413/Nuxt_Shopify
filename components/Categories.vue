<script setup>
const categories = ref([]);
categories.value = [
  { img: "/fitness-wear.png", title: "Fitness wear" },
  { img: "/shorts.png", title: "Shorts" },
  { img: "/resistance-band.png", title: "Band" },
  { img: "/smartwatch.png", title: "Smart Watch" },
];
</script>

<template>
  <div class="section mb-20 px-12">
    <div class="px-28 flex items-center justify-center w-full space-x-28">
      <div
        class="min-h-28 max-w-28 flex flex-col justify-center items-center space-y-2 cursor-pointer"
        v-for="category in categories"
      >
        <NuxtImg :src="category.img" class="w-full h-full object-cover" />
        <h2 class="text-lg">{{ category.title }}</h2>
      </div>
    </div>
  </div>
</template>
