<script setup lang="ts">
import NavBar from "~/components/NavBar.vue";
import SubNav from "~/components/SubNav.vue";
</script>

<template>
  <div>
    <Title>ShopifyStore</Title>
    <SubNav />
    <NavBar />
    <slot />
  </div>
</template>
