<script setup></script>

<template>
  <div class="h-[80vh] relative mb-20">
    <div class="relative h-full">
      <NuxtImg
        src="/hero2.jpg"
        alt="Description"
        class="object-cover w-full h-full"
      />
    </div>

    <div
      class="section absolute inset-0 flex flex-col justify-center items-start"
    >
      <div class="max-w-[500px] z-20 rounded space-y-4">
        <h1 class="text-5xl font-bold">
          <span class="italic">FALAFEL</span> SHIRTS
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil id
          tempora accusamus necessitatibus. Itaque, sunt. Molestias
          reprehenderit sit vitae possimus consequuntur.
        </p>
        <button class="text-white bg-black px-8 py-2 rounded-full">
          Shop Now
        </button>
      </div>
    </div>
  </div>

  <Categories />

  <ProductsGrid />
</template>

<style scoped></style>
