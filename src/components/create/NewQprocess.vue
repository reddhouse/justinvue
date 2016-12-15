<template>
  <div class="new-qprocess-component">
    <h2>New Process</h2>
    <qprocess-info></qprocess-info>
  </div>
</template>
<!-- 726726726726726726726726726726726726726726726726726726726726726726726 -->
<script>
// import { mapGetters, mapActions } from 'vuex'
import QprocessInfo from './QprocessInfo'

export default {
  name: 'new-qprocess-component',
  data () {
    return {
      propsObject: {

      }
    }
  },
  computed: {
    // ...mapGetters(['titleState'])
  },
  methods: {
    // ...mapActions(['setTitle'])
  },
  filters: {

  },
  components: {
    QprocessInfo
  }
}
</script>
<!-- 726726726726726726726726726726726726726726726726726726726726726726726 -->
<style scoped>

</style>
