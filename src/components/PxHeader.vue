<template>
  <header class="shadow w-screen">
    <nav>
      <nav
        class="flex items-center justify-center flex-col flex-wrap text-black"
      >
        <div class="date-container flex items-center justify-end mt-5">
          <span>{{ 'Fecha' | date }}</span>
        </div>
        <div class="title-container flex items-center justify-center">
          <router-link :to="{ name: 'home' }" class="uppercase text-3xl"
            >Coins Exchange
          </router-link>
        </div>
        <div
          class="hidden sm:block block flex-grow lg:flex lg:items-center lg:wauto"
        >
          <div class="text-sm lg:flex-grow my-3">
            <router-link
              v-for="l in links"
              :key="l.title"
              :to="l.to"
              class="block mt-4 sm:inline-block text-gray-600 hover:text-black lg:mt-0 mr-4"
            >
              {{ l.title }} |
            </router-link>
          </div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'PxHeader',

  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
* {
  font-family: 'Sawarabi Mincho', sans-serif;
  letter-spacing: 3px;
}

nav {
  background-color: #e9e2d0;
}

.title-container {
  width: 90%;
  height: 70px;
  border-top: 3px solid rgba(0, 0, 0, 0.377);
  border-bottom: 5px solid rgba(0, 0, 0, 0.726);
}

.date-container {
  width: 90%;
}
</style>
