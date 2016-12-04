<template>
  <div class="artist-search-component">
    <input type='text' v-model='name' />
    <button @click='search(name)'>Search></button>
  </div>
</template>

<script>
export default {
  name: 'artist-search-component',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    search (name) {
      if (name.length <= 0) return
      this.$store.dispatch('searchByArtistName', {name})
    }
  }
}
</script>
