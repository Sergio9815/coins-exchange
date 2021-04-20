<template>
  <!-- v-on:click es lo mismo que @click -->
  <button
    @click="buttonClick"
    class="bg-transparent hover:bg-black text-black hover:text-white py-2 px-10 border border-black hover:border-transparent rounded"
  >
    <beat-loader :loading="isLoading" color="#FFFFFF" :size="8" />
    <p v-show="!isLoading">
      <slot></slot>
    </p>
  </button>
</template>

<script>
export default {
  name: 'PxButton',

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    buttonClick() {
      this.$emit('custom-click')
    },
  },
}
</script>
