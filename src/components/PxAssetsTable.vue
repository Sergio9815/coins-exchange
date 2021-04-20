<template>
  <div>
    <table>
      <thead>
        <tr class="border-b-2">
          <th></th>
          <th
            class="flex"
            :class="{ up: this.sortOrder === 1, down: this.sortOrder - 1 }"
          >
            <span class="underline cursor-pointer" @click="changeSortOrder"
              >Ranking</span
            >
          </th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cap. de Mercado</th>
          <th>Variación 24hs</th>
          <td class="hidden sm:block">
            <input
              class="bg-transparent placeholder-black focus:outline-none border-b border-black py-2 px-4 block w-full appearance-none leading-normal"
              id="filter"
              placeholder="Buscar..."
              type="text"
              v-model="filter"
            />
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in filteredAssets" :key="a.id" class="border-b">
          <td>
            <img
              class="w-15 h-15 icon"
              :src="`https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`"
              :alt="a.name"
            />
          </td>
          <td>
            <b>#{{ a.rank }}</b>
          </td>
          <td>
            <router-link
              class="hover:underline"
              :to="{ name: 'coin-detail', params: { id: a.id } }"
            >
              {{ a.name }}
            </router-link>
            <small class="ml-1 text-gray-500"> {{ a.symbol }} </small>
          </td>
          <td>{{ a.priceUsd | dollar }}</td>
          <td>{{ a.marketCapUsd | dollar }}</td>
          <td
            :class="
              parseInt(a.changePercent24Hr) > 0
                ? 'text-green-400'
                : 'text-red-400'
            "
          >
            {{ a.changePercent24Hr | percent }}
          </td>
          <td class="hidden sm:block">
            <px-button @custom-click="goToCoin(a.id)">
              <span>Detalle</span>
            </px-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import PxButton from '@/components/PxButton'

export default {
  name: 'PxAssetsTable',

  data() {
    return {
      filter: '',
      sortOrder: 1,
    }
  },

  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },

  components: { PxButton },

  computed: {
    filteredAssets() {
      // if (!this.filter) {return this.assets}
      return this.assets
        .filter(
          (a) =>
            a.symbol.toLowerCase().includes(this.filter.toLowerCase()) ||
            a.name.toLowerCase().includes(this.filter.toLowerCase())
        )
        .sort((a, b) => {
          if (parseInt(a.rank) > parseInt(b.rank)) {
            return this.sortOrder
          }

          return this.sortOrder * -1
        })
    },
  },

  methods: {
    goToCoin(id) {
      this.$router.push({ name: 'coin-detail', params: { id } })
    },

    changeSortOrder() {
      this.sortOrder = this.sortOrder === 1 ? -1 : 1
    },
  },
}
</script>

<style scoped>
.up::before {
  content: '▲';
}

.down::before {
  content: '▼';
}

tr {
  border-bottom: solid 1px rgba(0, 0, 0, 0.205);
}

tr:hover {
  background-color: rgba(0, 0, 0, 0.082);
}

td {
  font-family: 'Sawarabi Mincho', sans-serif;
  letter-spacing: 3px;
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}

@media (max-width: 640px) {
  .icon {
    display: none;
  }
}
</style>
