<template>
  <div class="container-fluid">
    <div class="row">
      <header class="offset-md-2 col-md-8">
        <h1 class="header-title">Ты сегодня покормил кота?</h1>
        <button class="btn btn-secondary mb-2" @click.prevent="isDisabled = !isDisabled">Click me</button>
      </header>
    </div>
    <!-- разобраться с костылем -->
      <section class="row g-3" style="margin-left:0;">
        
        <Card
        v-for="product in PRODUCTS"
        :key="product.id"
        :product = 'product'
        :isDisabled = 'isDisabled'/>
       
      </section>
    </div>

</template>

<script>
import Card from '../components/Card.vue';
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "Home",
  components: { Card },
  data() {
    return {
      isDisabled: false,
    }
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  }
};
</script>

