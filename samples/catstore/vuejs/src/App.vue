<template>
  <div>
    <Header :total="total_price" :count="products_count" />
    <main>
      <h1 class="text-center text-2xl font-bold">Our Products</h1>
      <p class="text-center">Shop For Best Cats In The World</p>
      <Product :data="products" @add-to-cart="updateCart($event)" />
    </main>
    <Alert :isVisible="showAlert" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Product from "./components/Product.vue";
import Alert from "./components/Alert.vue";

export default {
  name: "App",
  components: {
    Footer,
    Header,
    Product,
    Alert,
  },
  data() {
    return {
      total_price: 0,
      products_count: 0,
      showAlert: false,
      products: [
        {
          id: 1,
          title: "fluffy cat",
          img: "https://cataas.com/cat/fluffy",
          regular_price: 20,
          sale_price: 10,
          options: ["red", "blue"],
        },
        {
          id: 2,
          title: "nice cat",
          img: "https://cataas.com/cat/nice",
          regular_price: 20,
          sale_price: 10,
          options: ["red", "blue"],
        },
        {
          id: 3,
          title: "cute cat",
          img: "https://cataas.com/cat/cute",
          regular_price: 20,
          sale_price: 10,
          options: ["red", "blue"],
        },
        {
          id: 4,
          title: "good cat",
          img: "https://cataas.com/cat/eyes",
          regular_price: 20,
          sale_price: 10,
          options: ["red", "blue"],
        },
        {
          id: 5,
          title: "fat cat",
          img: "https://cataas.com/cat/fat",
          regular_price: 20,
          sale_price: 10,
          options: ["red", "blue"],
        },
        {
          id: 6,
          title: "white cat",
          img: "https://cataas.com/cat/white",
          regular_price: 20,
          sale_price: 10,
          options: ["red", "blue"],
        },
        {
          id: 7,
          title: "black cat",
          img: "https://cataas.com/cat/black",
          regular_price: 20,
          sale_price: 10,
          options: ["red", "blue"],
        },
        {
          id: 8,
          title: "blue cat",
          img: "https://cataas.com/cat/blue",
          regular_price: 20,
          sale_price: 10,
          options: ["red", "blue"],
        },
      ],
    };
  },
  methods: {
    updateCart(id) {
      this.products_count++;
      this.products[id - 1].isAdded = true;
      this.total_price += this.products[id - 1].sale_price;
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 2000);
    },
  },
  created() {
    this.products.forEach((product) => {
      product["isAdded"] = false;
    });
  },
};
</script>
