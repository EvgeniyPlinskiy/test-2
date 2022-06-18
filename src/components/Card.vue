<template>
  <div class="col-sm-4">
    <div class="row">
      <div
        class="block-outside"
        :class="{
          'block-outside-hover': mouseHover,
          'block-outside-click': pushClick,
          'block-outside-click-hover': pushClick && mouseHover,
          'block-outside-disabled': isDisabled,
        }"
      >
        <div
          class="block-inside"
          @mouseover="mouseHover = true"
          @mouseleave="mouseHover = false"
          @click.prevent="pushClick = !pushClick"
        >
          <div class="block-content">
            <div class="block-description">
              <p
                v-show="mouseHover || !pushClick || (!mouseHover && pushClick)"
              >
                {{ product.description }}
              </p>
              <p v-show="mouseHover && pushClick">Котэ не одобряет?</p>
            </div>
            <h3 class="block-title">{{ product.title }}</h3>
            <h4 class="block-subtitle text-lowercase">{{ product.subtitle }}</h4>
            <p class="block-text">
              {{ product.text }}
            </p>
          </div>
          <img src="@/assets/images/Photo.png" alt="" class="block-img" />
          <div
            class="block-circle"
            :class="{
              'block-circle-hover': mouseHover,
              'block-circle-click': pushClick,
              'block-circle-click-hover': pushClick && mouseHover,
              'block-circle-disabled': isDisabled,
            }"
          >
            <div class="block-circle-weight">
              <p>{{ product.weight }}</p>
            </div>
            <small class="block-circle-small">кг</small>
          </div>
          <div :class="{ 'block-disabled': isDisabled }"></div>
        </div>
      </div>
      <div class="block-footer d-flex justify-content-center text-center">
        <p class="block-footer-text" v-show="!pushClick && !isDisabled">
          Чего сидишь? Порадуй котэ,
          <a class="block-footer-link" href="#">купи.</a>
        </p>
        <p v-show="pushClick && !isDisabled">{{ product.features }}</p>
        <p v-show="isDisabled" class="block-footer-disabled-on">
          {{ product.disabled }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    isDisabled: {
      type: Boolean,
    },
    product: {
      type: Object,
    },
  },
  data() {
    return {
      mouseHover: "",
      pushClick: "",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>