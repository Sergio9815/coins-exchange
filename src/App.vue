<template>
  <main class="overflow-hidden">
    <px-header :links="links" />
    <router-view class="container px-5 sm:px-20 py-5 flex justify-center" />
    <about></about>
  </main>
</template>

<script>
import PxHeader from '@/components/PxHeader'
import About from '@/views/About'

export default {
  name: 'App',
  components: { PxHeader, About },

  data() {
    return {
      links: [
        {
          title: 'HOME',
          to: { name: 'home' },
        },
        {
          title: 'BTC',
          to: { name: 'coin-detail', params: { id: 'bitcoin' } },
        },
        {
          title: 'ETH',
          to: { name: 'coin-detail', params: { id: 'ethereum' } },
        },
        {
          title: 'XRP',
          to: { name: 'coin-detail', params: { id: 'xrp' } },
        },
      ],
    }
  },
}
</script>

<style>
main {
  background-color: #e9e2d0;
}
</style>
