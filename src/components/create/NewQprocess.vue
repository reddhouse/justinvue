<template>
  <div class="new-qprocess-component">
    <h2>New Process</h2>
    <qprocess-info></qprocess-info>
    <br>
    <card-path></card-path>
  </div>
</template>
<!-- 726726726726726726726726726726726726726726726726726726726726726726726 -->
<script>
import { mapGetters } from 'vuex'
import QprocessInfo from './QprocessInfo'
import CardPath from './CardPath'

export default {
  name: 'new-qprocess-component',
  data () {
    return {
      propsOut: {

      }
    }
  },
  computed: {
    ...mapGetters(['stateStepList'])
  },
  methods: {
    // ...mapActions(['setTitle'])
  },
  filters: {

  },
  components: {
    QprocessInfo,
    CardPath
  }
}
</script>
<!-- 726726726726726726726726726726726726726726726726726726726726726726726 -->
<style scoped>

</style>
