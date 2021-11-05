<template>
  <div
    id="products"
    class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10 mx-5"
  >
    <div
      v-for="product in data"
      :key="product.id"
      :id="`product-${product.id}`"
      class="
        product
        border border-gray-400
        shadow-md
        rounded-lg
        overflow-hidden
      "
    >
      <img class="h-60 w-full" :src="product.img" />
      <div class="p-2 bg-gray-100">
        <div class="flex justify-between">
          <h2 class="text-xl font-semibold text-gray-800">
            {{ product.title }}
          </h2>
          <span
            ><b class="text-lg"
              >{{ product.sale_price }}$<span class="currency"></span></b
            ><del class="text-sm text-gray-600 ml-2"
              >{{ product.regular_price }}$</del
            ></span
          >
        </div>
        <button
          @click="$emit('add-to-cart', product.id)"
          class="
            w-full
            mt-2
            text-center
            rounded-full
            font-bold
            text-white
            px-4
            py-3
            transition
            duration-300
            ease-in-out
            mr-6
          "
          :class="
            product.isAdded ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'
          "
        >
          {{ product.isAdded ? "Added" : "Add To Cart" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

